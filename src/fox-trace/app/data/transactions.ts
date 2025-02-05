import { ethers } from "https://esm.sh/ethers@6.13.5";
import { ChainInfo, TransactionContext } from "../types.ts";
import {
  fetchTransactionForAddress as fetchTransactionsForAddress,
  TransactionDetails,
} from "../api/etherscan.ts";
import {
  DecodedLogResult,
  fetchTransaction,
  getAddressInformation,
  getBlockDaysAhead,
} from "../api/rpc.ts";
import { fetchTokenCoinGeckoData, getTokenId } from "../api/coinGecko.ts";
import { TokenPriceUSD } from "../dbCalls/coinGeckoData.ts";
import { isTokenTransferWithinRange } from "../utils.ts";

/**
 * Represents a transaction involving the native cryptocurrency (e.g., ETH, BNB).
 */
interface NativeTransaction {
  /** The hash of the transaction. */
  transactionHash: string;
  /** The address from which the transaction was sent. */
  from: string;
  /** The address to which the transaction was sent. */
  to: string;
  /** The raw value of the transaction as a string (in wei). */
  value: string;
  /** The formatted amount of the transaction using ethers.formatEther (in ether). */
  formattedAmount: string;
  /** The price of the token in USD at the time of the transaction. */
  tokenPriceUSD: TokenPriceUSD;
  transactionDetails: TransactionDetails;
}

/**
 * Represents a transaction involving an ERC-20 token.
 */
interface TokenTransaction {
  /** The hash of the transaction. */
  transactionHash: string;
  /** The price of the token in USD at the time of the transaction. */
  tokenPriceUSD: TokenPriceUSD;
  /** The name of the token (optional if undefined). */
  tokenName?: string;
  /** The symbol of the token (optional if undefined). */
  tokenSymbol?: string;
  /** The contract address of the token. */
  tokenAddress: string;
  /** The address from which the transaction was sent. */
  from: string;
  /** The address to which the transaction was sent. */
  to: string;
  /** The raw value of the transaction as a string (in token units). */
  value: string;
  /** The formatted amount of the transaction. */
  formattedAmount: string;
  /** The decoded log result associated with the transaction (optional). */
  log?: DecodedLogResult;
  transactionDetails: TransactionDetails;
}

/**
 * Represents the entry for a specific token's flow, detailing its transactions and balances.
 */
interface TokenFlowEntry {
  /** The total amount in USD that was received for this token. */
  inUSD: number;
  /** The total amount of tokens received. */
  in: number;
  /** The total amount in USD that was sent out for this token. */
  outUSD: number;
  /** The total amount of tokens sent out. */
  out: number;
  /** The name of the token. */
  tokenName: string;
  /** Array of transactions involving this token. */
  transactions: (TokenTransaction | NativeTransaction)[];
}

/**
 * Represents the flow of tokens for multiple token addresses.
 */
interface TokenFlow {
  /** Mapping of token addresses to their corresponding flow entries. */
  [tokenAddress: string]: TokenFlowEntry;
}

/**
 * Represents the context for all transactions associated with an address within a specified block range.
 */
interface AddressTransactionContext {
  /** Context for token transfers, organized by token address and transaction hash. */
  tokenTransferContext: {
    [tokenAddress: string]: { [hash: string]: TokenTransaction[] };
  };
  /** Array of native cryptocurrency transactions (e.g., ETH transfers). */
  nativeTransferContext: NativeTransaction[];
  /** Context for contract-based token transfers, organized by token address and transaction hash. */
  contractTransferContext: {
    [tokenAddress: string]: {
      [hash: string]: { contractLogs: TokenTransaction[]; methodName: string };
    };
  };
  /** Array of nested contexts for child addresses (if applicable). */
  children: AddressTransactionContext[];
  /** Summary of the token flow for the address, including total in/out USD values and individual token flows. */
  tokenFlow: { inUSD: number; outUSD: number; tokenFlow: TokenFlow };
  /** The start block of the block range considered in this context. */
  startBlock: number;
  /** The end block of the block range considered in this context. */
  endBlock: number;
  /** The address this context pertains to. */
  address: string;
}

/**
 * Calculates the total in and out USD values for the token flow.
 */
const calculateTotals = (tokenFlow: TokenFlow) => {
  let inUSD = 0;
  let outUSD = 0;
  for (const key in tokenFlow) {
    if (tokenFlow.hasOwnProperty(key)) {
      inUSD += tokenFlow[key].inUSD;
      outUSD += tokenFlow[key].outUSD;
    }
  }
  return { inUSD, outUSD };
};

/**
 * Checks if the decoded log result represents a standard transfer event (ERC-20).
 *
 * @param log - The decoded log result to check.
 * @returns An object containing `from`, `to`, and `value` if the log matches a transfer event; otherwise, `null`.
 */
const isTransfer = (log: DecodedLogResult) => {
  const [from, to] = log.topics;
  const value = log.data[0];
  const isValidTransfer = from?.name === "from" && to?.name === "to" &&
    value.name === "value";
  return isValidTransfer ? { from, to, value } : null;
};
export const fetchAddressContext = async (
  startBlock: number,
  endBlock: number,
  address: string,
  depth: number,
  provider: ethers.JsonRpcProvider,
  chain: ChainInfo,
): Promise<AddressTransactionContext | null> => {
  const transactions = await fetchTransactionsForAddress(
    address,
    startBlock,
    endBlock,
    chain,
  );
  const tokenTransferContext: {
    [key: string]: { [key: string]: TokenTransaction[] };
  } = {};
  if (depth === 0) {
    return null;
  }
  const nativeTransferContext: NativeTransaction[] = [];
  const contractTransferContext: {
    [key: string]: {
      [key: string]: { contractLogs: TokenTransaction[]; methodName: string };
    };
  } = {};
  for (const t of transactions) {
    const info = await fetchTransaction(t.hash, provider, chain);
    if (info.to.type === "EOA") {
      const tokenApiId = await getTokenId(
        chain.nativeCurrency.symbol.toLowerCase(),
      );
      if (!tokenApiId) {
        continue;
      }
      const tokenPrice = await fetchTokenCoinGeckoData(tokenApiId.id, chain);

      nativeTransferContext.push({
        tokenPriceUSD: {
          ...tokenPrice,
          AmountInUSD: Number(tokenPrice.usd) *
            Number(ethers.formatEther(t.value)),
        },
        transactionHash: t.hash,
        from: t.from,
        to: t.to,
        value: t.value,
        formattedAmount: ethers.formatEther(t.value),
        transactionDetails: t,
      });
    }

    if (
      info.to.type === "contract" &&
      info.decodedMethod?.methodName === "transfer"
    ) {
      for (const d of info.decodedLogs?.decodedLogs ?? []) {
        const from = d.topics[0];
        const to = d.topics[1];
        const value = d.data[0];
        if (
          from?.name !== "from" || to?.name !== "to" || value.name !== "value"
        ) {
          continue; // not a standard erc-20
        }

        if (!tokenTransferContext[info.to.address]) {
          tokenTransferContext[info.to.address] = {};
        }

        if (!tokenTransferContext[info.to.address][d.transactionHash]) {
          tokenTransferContext[info.to.address][d.transactionHash] = [];
        }

        const tokenApiId = await getTokenId(
          info.to.tokenInfo?.symbol as string,
        );
        if (!tokenApiId) {
          continue;
        }
        const tokenPrice = await fetchTokenCoinGeckoData(tokenApiId.id, chain);
        const formattedAmount = ethers.formatUnits(
          value.value,
          Number(info.to.tokenInfo?.decimals),
        );
        tokenTransferContext[info.to.address][d.transactionHash].push({
          tokenPriceUSD: {
            ...tokenPrice,
            AmountInUSD: Number(tokenPrice.usd) * Number(formattedAmount),
          },
          transactionHash: d.transactionHash,
          tokenName: info.to.tokenInfo?.name,
          tokenSymbol: info.to.tokenInfo?.symbol,
          tokenAddress: info.to.address,
          from: from.value,
          to: to.value,
          value: value.value,
          formattedAmount,
          log: d,
          transactionDetails: t,
        });
      }
    } else if (info.to.type === "contract") {
      if (!info.decodedLogs?.decodedLogs) {
        continue;
      }

      const contractLogs: TokenTransaction[] = [];
      for (const l of info.decodedLogs.decodedLogs) {
        const transfer = isTransfer(l);
        if (!transfer) {
          continue;
        }
        if (
          transfer.to.value !== info.from.address &&
          transfer.from.value !== info.from.address
        ) {
          continue;
        }

        const addressInfo = await getAddressInformation(l.address, provider);

        if (!addressInfo.tokenInfo?.symbol) {
          continue;
        }
        const tokenApiId = await getTokenId(addressInfo.tokenInfo?.symbol);
        if (!tokenApiId) {
          continue;
        }
        const tokenPrice = await fetchTokenCoinGeckoData(tokenApiId.id, chain);
        const formattedAmount = ethers.formatUnits(
          transfer.value.value,
          Number(addressInfo.tokenInfo?.decimals),
        );
        contractLogs.push({
          log: l,
          tokenPriceUSD: {
            ...tokenPrice,
            AmountInUSD: Number(tokenPrice.usd) * Number(formattedAmount),
          },
          transactionHash: l.transactionHash,
          tokenName: addressInfo.tokenInfo?.name,
          tokenSymbol: addressInfo.tokenInfo?.symbol,
          tokenAddress: addressInfo.address,
          from: transfer.from.value,
          to: transfer.to.value,
          value: transfer.value.value,
          formattedAmount,
          transactionDetails: t,
        });
      }
      if (!contractTransferContext[info.to.address]) {
        contractTransferContext[info.to.address] = {};
      }

      contractTransferContext[info.to.address][info.transactionHash] = {
        contractLogs,
        methodName: info.decodedMethod?.methodName as string,
      };
    }
  }

  const tokenFlow: TokenFlow = {};
  for (const transfer of nativeTransferContext) {
    if (!tokenFlow["native"]) {
      tokenFlow["native"] = {
        inUSD: 0,
        in: 0,
        outUSD: 0,
        out: 0,
        tokenName: "native",
        transactions: [],
      };
    }

    if (transfer.to.toLowerCase() === address.toLowerCase()) {
      // incoming
      tokenFlow["native"].inUSD = tokenFlow["native"].inUSD +
        (transfer.tokenPriceUSD.AmountInUSD ?? 0);
      tokenFlow["native"].in = tokenFlow["native"].in +
        Number(transfer.formattedAmount ?? 0);
    }
    if (transfer.from.toLowerCase() === address.toLowerCase()) {
      // outgoing
      tokenFlow["native"].outUSD = tokenFlow["native"].outUSD +
        (transfer.tokenPriceUSD.AmountInUSD ?? 0);
      tokenFlow["native"].out = tokenFlow["native"].out +
        Number(transfer.formattedAmount ?? 0);
    }
    tokenFlow["native"].transactions.push(transfer);
    // console.log(native);
  }
  for (const contractAddress of Object.keys(contractTransferContext)) {
    for (const hash of Object.keys(contractTransferContext[contractAddress])) {
      for (
        const transfer of contractTransferContext[contractAddress][hash]
          .contractLogs
      ) {
        if (!tokenFlow[transfer.tokenAddress]) {
          tokenFlow[transfer.tokenAddress] = {
            inUSD: 0,
            in: 0,
            outUSD: 0,
            out: 0,
            tokenName: transfer.tokenName as string,
            transactions: [],
          };
        }
        if (transfer.to === address) {
          // sent in
          tokenFlow[transfer.tokenAddress].inUSD =
            tokenFlow[transfer.tokenAddress].inUSD +
            Number(transfer.tokenPriceUSD.AmountInUSD ?? 0);
          tokenFlow[transfer.tokenAddress].in =
            tokenFlow[transfer.tokenAddress].in +
            Number(transfer.formattedAmount ?? 0);
          tokenFlow[transfer.tokenAddress].transactions.push(transfer);
        }
        if (transfer.from === address) {
          // sent out
          tokenFlow[transfer.tokenAddress].outUSD =
            tokenFlow[transfer.tokenAddress].outUSD +
            (transfer.tokenPriceUSD.AmountInUSD ?? 0);
          tokenFlow[transfer.tokenAddress].out =
            tokenFlow[transfer.tokenAddress].out +
            Number(transfer.formattedAmount ?? 0);
          tokenFlow[transfer.tokenAddress].transactions.push(transfer);
        }
      }
    }
  }

  for (const tokenAddress of Object.keys(tokenTransferContext)) {
    if (!tokenFlow[tokenAddress]) {
      tokenFlow[tokenAddress] = {
        inUSD: 0,
        in: 0,
        outUSD: 0,
        out: 0,
        tokenName: "",
        transactions: [],
      };
    }
    for (const hash of Object.keys(tokenTransferContext[tokenAddress])) {
      for (const transfer of tokenTransferContext[tokenAddress][hash]) {
        if (transfer.to === address) {
          // sent in
          tokenFlow[tokenAddress].inUSD = tokenFlow[tokenAddress].inUSD +
            (transfer.tokenPriceUSD.AmountInUSD ?? 0);
          tokenFlow[tokenAddress].in = tokenFlow[tokenAddress].in +
            Number(transfer.formattedAmount ?? 0);
          tokenFlow[tokenAddress].transactions.push(transfer);
        }
        if (transfer.from === address) {
          // sent out
          tokenFlow[tokenAddress].outUSD = tokenFlow[tokenAddress].outUSD +
            (transfer.tokenPriceUSD.AmountInUSD ?? 0);
          tokenFlow[tokenAddress].out = tokenFlow[tokenAddress].out +
            Number(transfer.formattedAmount ?? 0);
          tokenFlow[tokenAddress].tokenName = transfer.tokenName as string;
          tokenFlow[tokenAddress].transactions.push(transfer);
        }
      }
    }
  }

  let totalTokens = 0;
  let inUSD = 0;
  let outUSD = 0;
  for (const key in tokenFlow) {
    if (tokenFlow.hasOwnProperty(key)) {
      totalTokens++;
      inUSD += tokenFlow[key].inUSD;
      outUSD += tokenFlow[key].outUSD;
    }
  }
  let addressContext: AddressTransactionContext = {
    tokenTransferContext,
    nativeTransferContext,
    contractTransferContext,
    tokenFlow: { inUSD, outUSD, tokenFlow },
    children: [],
    startBlock,
    endBlock,
    address,
  };

  return addressContext;
};
export const fetchReportContext = async (
  addressContext: AddressTransactionContext,
  provider: ethers.JsonRpcProvider,
  chain: ChainInfo,
) => {
  // well we now have all oft data for what happened to a wallet from block a to b.
  // in this root address object we know all out going token or native transactions
  const endBlock = await getBlockDaysAhead(
    addressContext.startBlock,
    15,
    provider,
  );
  const addressesToInvestigate: {
    [address: string]: (TokenTransaction | NativeTransaction)[];
  } = {};
  for (const tokenAddress of Object.keys(addressContext.tokenFlow.tokenFlow)) {
    const tokenAddressTransactions =
      addressContext.tokenFlow.tokenFlow[tokenAddress];
    for (const transaction of tokenAddressTransactions.transactions) {
      if (transaction.from === addressContext.address) {
        if (!addressesToInvestigate[transaction.to]) {
          addressesToInvestigate[transaction.to] = [];
        }
        // console.log(transaction.from)
        addressesToInvestigate[transaction.to].push(transaction);
      }
    }
  }
  // for each of the addresses determine what kind of transfer were dealing with in this state
  let data: any = {};
  let childAddressContext: AddressTransactionContext | null;
  for (const address of Object.keys(addressesToInvestigate)) {
    let startBlock = Infinity;
    data[address] = {};
    for (const transaction of addressesToInvestigate[address]) {
      startBlock = Math.min(
        startBlock,
        Number(transaction.transactionDetails.blockNumber),
      );
      if ("tokenAddress" in transaction) {
        if (!data[address][transaction.tokenAddress]) {
          if (!data[address]) {
            data[address] = { addressContext: null };
          }
          data[address][transaction.tokenAddress] = {
            transactionByTokenAddress: [],
          };
        }
        data[address][transaction.tokenAddress].transactionByTokenAddress.push(
          transaction,
        );
      } else {
        if (data[address]["native"]) {
          data[address]["native"] = { nativeTransaction: [] };
        }
        data[address]["native"].push(transaction);
      }
    }
    const endBlock = await getBlockDaysAhead(startBlock, 15, provider);
    childAddressContext = await fetchAddressContext(
      startBlock,
      endBlock,
      address,
      2,
      provider,
      chain,
    );
    data[address].addressContext = childAddressContext;
  }
  // console.log(
  //   //   JSON.stringify(
  //   data,
  //   //     null,
  //   //     2,
  //   //   ),
  // );
  return data;
};

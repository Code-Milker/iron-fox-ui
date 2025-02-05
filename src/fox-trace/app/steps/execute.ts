import { ethers } from "https://esm.sh/ethers@6.13.5";
import { generateRootAttackInformation } from "../data/attackInformation.ts";
import {
  fetchAddressContext,
  fetchReportContext,
} from "../data/transactions.ts";
import { fetchTransaction, getBlockDaysAhead } from "../api/rpc.ts";

const run = async () => {
  const attackInformation = await generateRootAttackInformation();
  // console.log(attackInformation)
  for (const attack of attackInformation) {
    for (const chain of attack.chains) {
      const provider = new ethers.JsonRpcProvider(chain.chainInfo.rpcUrl);
      for (const transactionHash of chain.attackRootTransactionHashes) {
        if (chain.chainId === 250) {
          try {
            if (
              transactionHash ===
                "0xcee4da0e7bdbb3112b2cd249b459d92c1afc23047db545c33ee60532773736d9"
            ) {
              const transactionInformation = await fetchTransaction(
                transactionHash,
                provider,
                chain.chainInfo,
              );

              // determine correct Path to choose here
              const startBlock = transactionInformation.blockNumber;
              const endBlock = await getBlockDaysAhead(
                startBlock,
                15,
                provider,
              );
              const address = transactionInformation.from.address;
              const addressContext = await fetchAddressContext(
                startBlock,
                endBlock,
                address,
                2,
                provider,
                chain.chainInfo,
              );
              if (!addressContext) {
                continue;
              }

              const reportContext = await fetchReportContext(
                addressContext,
                provider,
                chain.chainInfo,
              );
              console.log(JSON.stringify(reportContext, null, 2));
            }
          } catch (e) {
            console.log(e);
            console.log("fail: ", transactionHash);
          }
        }
      }
    }
  }
  // console.log(transactionInfromation)
};
run();

// await cacheAbi('0x41d59d665c9F8E2bcd501317F41fEfEb7bb18f28', chain.chainId, `[{"inputs":[{"internalType":"address","name":"_paraswap","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"fromToken","type":"address"},{"internalType":"uint256","name":"fromAmount","type":"uint256"},{"internalType":"uint256","name":"toAmount","type":"uint256"},{"internalType":"uint256","name":"expectedAmount","type":"uint256"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"components":[{"internalType":"uint256","name":"fromAmountPercent","type":"uint256"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"totalNetworkFee","type":"uint256"},{"components":[{"internalType":"address payable","name":"adapter","type":"address"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"networkFee","type":"uint256"},{"components":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"targetExchange","type":"address"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"bytes","name":"payload","type":"bytes"},{"internalType":"uint256","name":"networkFee","type":"uint256"}],"internalType":"struct Utils.Route[]","name":"route","type":"tuple[]"}],"internalType":"struct Utils.Adapter[]","name":"adapters","type":"tuple[]"}],"internalType":"struct Utils.Path[]","name":"path","type":"tuple[]"}],"internalType":"struct Utils.MegaSwapPath[]","name":"path","type":"tuple[]"},{"internalType":"address payable","name":"partner","type":"address"},{"internalType":"uint256","name":"feePercent","type":"uint256"},{"internalType":"bytes","name":"permit","type":"bytes"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes16","name":"uuid","type":"bytes16"}],"internalType":"struct Utils.MegaSwapSellData","name":"data","type":"tuple"}],"name":"megaSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"fromToken","type":"address"},{"internalType":"uint256","name":"fromAmount","type":"uint256"},{"internalType":"uint256","name":"toAmount","type":"uint256"},{"internalType":"uint256","name":"expectedAmount","type":"uint256"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"totalNetworkFee","type":"uint256"},{"components":[{"internalType":"address payable","name":"adapter","type":"address"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"networkFee","type":"uint256"},{"components":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"targetExchange","type":"address"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"bytes","name":"payload","type":"bytes"},{"internalType":"uint256","name":"networkFee","type":"uint256"}],"internalType":"struct Utils.Route[]","name":"route","type":"tuple[]"}],"internalType":"struct Utils.Adapter[]","name":"adapters","type":"tuple[]"}],"internalType":"struct Utils.Path[]","name":"path","type":"tuple[]"},{"internalType":"address payable","name":"partner","type":"address"},{"internalType":"uint256","name":"feePercent","type":"uint256"},{"internalType":"bytes","name":"permit","type":"bytes"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes16","name":"uuid","type":"bytes16"}],"internalType":"struct Utils.SellData","name":"data","type":"tuple"}],"name":"multiSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paraswap","outputs":[{"internalType":"contract IParaswap","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"fromToken","type":"address"},{"internalType":"address","name":"toToken","type":"address"},{"internalType":"uint256","name":"fromAmount","type":"uint256"},{"internalType":"uint256","name":"toAmount","type":"uint256"},{"internalType":"uint256","name":"expectedAmount","type":"uint256"},{"internalType":"address[]","name":"callees","type":"address[]"},{"internalType":"bytes","name":"exchangeData","type":"bytes"},{"internalType":"uint256[]","name":"startIndexes","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"address payable","name":"beneficiary","type":"address"},{"internalType":"address payable","name":"partner","type":"address"},{"internalType":"uint256","name":"feePercent","type":"uint256"},{"internalType":"bytes","name":"permit","type":"bytes"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes16","name":"uuid","type":"bytes16"}],"internalType":"struct Utils.SimpleData","name":"data","type":"tuple"}],"name":"simpleSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFtm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]`);

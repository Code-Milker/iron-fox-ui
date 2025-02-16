export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Shortens a hash or address.
 * Example: "0x1234567890abcdef" -> "0x1234...cdef"
 *
 * @param value - The hash or address string to shorten.
 * @param frontChars - Number of characters to keep at the start (default: 6).
 * @param backChars - Number of characters to keep at the end (default: 4).
 * @returns The shortened string.
 */
export function shortenHash(
  value: string,
  frontChars = 6,
  backChars = 4,
): string {
  if (!value) return "";
  if (value.length <= frontChars + backChars) return value;
  return `${value.substring(0, frontChars)}...${
    value.substring(value.length - backChars)
  }`;
}
/**
 * Formats a Unix timestamp to a readable date string including hours and minutes.
 * Example output: "10/11/2021 13:05"
 *
 * @param timestamp - The Unix timestamp (in seconds) as a string.
 * @returns A formatted date and time string.
 */
export function formatDateTime(timestamp: string): string {
  const date = new Date(parseInt(timestamp) * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${formattedDate} ${formattedTime}`;
}

export function formatAmount(amount: string, decimals = 6) {
  return parseFloat(amount).toFixed(decimals);
}

export async function fetchTransferOuts(address: string, apiKey: string) {
  // Define URLs for ETH and ERC20 transactions
  const ethUrl =
    `https://api.etherscan.io/api?module=account&action=txlist&address=${address}` +
    `&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;
  const erc20Url =
    `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}` +
    `&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;

  // Fetch both ETH and ERC20 transactions in parallel
  const [ethRes, erc20Res] = await Promise.all([
    fetch(ethUrl),
    fetch(erc20Url),
  ]);
  const [ethData, erc20Data] = await Promise.all([
    ethRes.json(),
    erc20Res.json(),
  ]);

  // Filter ETH transactions for those where the sender is the address
  let ethTxs = [];
  if (ethData.status === "1" && Array.isArray(ethData.result)) {
    ethTxs = ethData.result.filter((tx: any) =>
      tx.from.toLowerCase() === address.toLowerCase()
    );
  }

  // Filter ERC20 transactions for those where the sender is the address
  let erc20Txs = [];
  if (erc20Data.status === "1" && Array.isArray(erc20Data.result)) {
    erc20Txs = erc20Data.result.filter((tx: any) =>
      tx.from.toLowerCase() === address.toLowerCase()
    );
  }

  // Merge both arrays and sort by timestamp descending
  const combined = [...ethTxs, ...erc20Txs].sort((a, b) =>
    parseInt(b.timeStamp) - parseInt(a.timeStamp)
  );

  return combined;
}

// Helper: convert Wei to Ether (for ETH txs)
export function weiToEther(wei: string) {
  return (parseFloat(wei) / 1e18).toFixed(4);
}

// Helper: convert token value based on decimals (for ERC20 txs)
export function tokenAmount(tx: any): string {
  if (tx.tokenDecimal) {
    const decimals = parseInt(tx.tokenDecimal);
    return (parseFloat(tx.value) / Math.pow(10, decimals)).toFixed(decimals);
  }
  return tx.value;
}

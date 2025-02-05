import { PrismaClient } from "../../../../prisma/generated/client/index.js";

const prisma = new PrismaClient();

// -----------------------------------------------------------------------------
// Token Price USD Cache
// -----------------------------------------------------------------------------

export interface TokenPriceUSD {
  on: Date;
  usd: number;
  AmountInUSD?: number;
}

/**
 * Cache token price data (USD) for a given token and chain.
 * @param tokenName - The name of the token.
 * @param chainId - The chain ID.
 * @param tokenData - The token price data (without the timestamp).
 */
export async function cacheTokenPriceUSD(
  tokenName: string,
  chainId: number,
  tokenData: Omit<TokenPriceUSD, "on">,
) {
  const normalizedTokenName = tokenName.toLowerCase();
  await prisma.tokenPriceUSD.upsert({
    where: {
      // Composite unique identifier as defined in the Prisma model.
      tokenName_chainId: { tokenName: normalizedTokenName, chainId },
    },
    update: {
      data: tokenData,
    },
    create: {
      tokenName: normalizedTokenName,
      chainId,
      data: tokenData,
    },
  });
}

/**
 * Retrieve the cached token price data (USD) for a given token and chain.
 * Returns the token data with an 'on' timestamp derived from the record's updatedAt.
 * @param tokenAddress - The token's address (or name) used for caching.
 * @param chainId - The chain ID.
 * @returns The token price data (with a timestamp) or null if not found.
 */
export async function getcachedTokenPriceUSD(
  tokenAddress: string,
  chainId: number,
): Promise<TokenPriceUSD | null> {
  const normalizedTokenName = tokenAddress.toLowerCase();
  const record = await prisma.tokenPriceUSD.findUnique({
    where: {
      tokenName_chainId: { tokenName: normalizedTokenName, chainId },
    },
  });

  if (record) {
    // Return the stored token data with the updatedAt timestamp as 'on'
    return { on: record.updatedAt, ...record.data } as TokenPriceUSD;
  }

  return null;
}

// -----------------------------------------------------------------------------
// CoinGecko API Names Cache
// -----------------------------------------------------------------------------

/**
 * Retrieve the cached CoinGecko API names.
 * The cached data is stored in a single record identified by a constant ID.
 * @returns An array of coin definitions (id, symbol, name) or null if not found.
 */
export async function getCachedCoinGeckoApiNames(): Promise<
  { id: string; symbol: string; name: string }[] | null
> {
  // We use a constant id for the API names cache record.
  const record = await prisma.coinGeckoApiName.findUnique({
    where: { id: "coinGeckoApiNames" },
  });

  return record
    ? (record.data as { id: string; symbol: string; name: string }[])
    : null;
}

/**
 * Cache CoinGecko API names.
 * @param data - The array of coin definitions (id, symbol, name) to cache.
 */
export async function cacheCoinGeckoApiNames(data: any) {
  await prisma.coinGeckoApiName.upsert({
    where: { id: "coinGeckoApiNames" },
    update: { data },
    create: { id: "coinGeckoApiNames", data },
  });
}

// -----------------------------------------------------------------------------
// CoinGecko Token Details Cache
// -----------------------------------------------------------------------------

/**
 * Retrieve cached token details from CoinGecko.
 * @param id - The unique identifier for the token.
 * @returns The cached token details (as JSON) or null if not found.
 */
export async function getCachedCoinGeckoTokenDetails(
  id: string,
): Promise<any | null> {
  const record = await prisma.coinGeckoTokenDetail.findUnique({
    where: { id },
  });
  return record ? record.data : null;
}

/**
 * Cache token details from CoinGecko.
 * @param id - The unique identifier for the token.
 * @param data - The token details data to cache.
 */
export async function cacheCoinGeckoTokenDetails(id: string, data: any) {
  await prisma.coinGeckoTokenDetail.upsert({
    where: { id },
    update: { data },
    create: { id, data },
  });
}

// -----------------------------------------------------------------------------
// CoinGecko Token Details Identifier Cache
// -----------------------------------------------------------------------------

/**
 * Retrieve the cached CoinGecko token details identifier.
 * @param id - The identifier key.
 * @returns The cached identifier (as a string) or null if not found.
 */
export async function getCachedCoinGeckoTokenDetailsId(
  id: string,
): Promise<string | null> {
  const record = await prisma.coinGeckoTokenDetailsId.findUnique({
    where: { id },
  });
  return record ? (record.data as string) : null;
}

/**
 * Cache the CoinGecko token details identifier.
 * @param id - The identifier key.
 * @param data - The token details identifier (as a string) to cache.
 */
export async function cacheCoinGeckoTokenDetailsId(id: string, data: string) {
  await prisma.coinGeckoTokenDetailsId.upsert({
    where: { id },
    update: { data },
    create: { id, data },
  });
}

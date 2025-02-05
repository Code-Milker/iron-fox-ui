import { stringifyBigInt } from "../utils.ts";
import { TransactionContext } from "../types.ts";
import { PrismaClient } from "../../../../prisma/generated/client/index.js";

const prisma = new PrismaClient();

/**
 * Cache ABI, decoded method, or decoded event based on transaction hash.
 * @param transactionHash - The hash of the transaction.
 * @param chainId - The chain ID.
 * @param value - The value to cache (ABI, decoded method, or decoded event).
 */
export async function cacheTransactionInformation(
  transactionHash: string,
  chainId: number,
  value: TransactionContext,
) {
  // Convert the value to a JSON object after handling BigInts
  const data = JSON.parse(stringifyBigInt(value));

  // Upsert the record using the composite unique key (transactionHash, chainId)
  await prisma.transactionInformation.upsert({
    where: { transactionHash_chainId: { transactionHash, chainId } },
    update: { data },
    create: { transactionHash, chainId, data },
  });
  console.log(
    `Cached transaction info for ${transactionHash} on chain ${chainId}`,
  );
}

/**
 * Retrieve cached ABI, decoded method, or decoded event based on transaction hash.
 * @param transactionHash - The hash of the transaction.
 * @param chainId - The chain ID.
 * @returns {Promise<TransactionContext | null>}
 */
export async function getCachedTransactionInformation(
  transactionHash: string,
  chainId: number,
): Promise<TransactionContext | null> {
  const record = await prisma.transactionInformation.findUnique({
    where: { transactionHash_chainId: { transactionHash, chainId } },
  });

  if (!record) {
    throw new Error(
      `No cached data found for ${transactionHash} on chain ${chainId}`,
    );
  }

  return record.data as TransactionContext;
}

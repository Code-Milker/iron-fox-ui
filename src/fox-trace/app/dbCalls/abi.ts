// Import the PrismaClient from your generated client.
import { PrismaClient } from "../../../../prisma/generated/client/index.js";

const prisma = new PrismaClient();

/**
 * Cache the ABI for a contract on a specific chain using PostgreSQL.
 * @param contractAddress - The address of the contract.
 * @param chainId - The chain ID.
 * @param abi - The ABI to cache (as a JSON string).
 */
export async function cacheAbi(
  contractAddress: string,
  chainId: number,
  abi: string,
) {
  // Parse the ABI JSON string.
  const abiData = JSON.parse(abi);

  // Upsert the ABI cache record.
  await prisma.abiCache.upsert({
    where: {
      // Composite unique identifier using the primary key fields.
      contractAddress_chainId: { contractAddress, chainId },
    },
    update: {
      data: abiData,
    },
    create: {
      contractAddress,
      chainId,
      data: abiData,
    },
  });

  console.log(
    `ABI cached successfully for contract ${contractAddress} on chain ${chainId}`,
  );
}

/**
 * Retrieve the cached ABI for a contract on a specific chain from PostgreSQL.
 * @param contractAddress - The address of the contract.
 * @param chainId - The chain ID.
 * @returns {Promise<string | null>} The ABI as a JSON string, or null if not found.
 */
export async function getCachedAbi(
  contractAddress: string,
  chainId: number,
): Promise<string | null> {
  const record = await prisma.abiCache.findUnique({
    where: {
      contractAddress_chainId: { contractAddress, chainId },
    },
  });

  if (record) {
    // Return the cached ABI as a JSON string.
    return JSON.stringify(record.data);
  }

  return null;
}

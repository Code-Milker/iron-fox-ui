import { PrismaClient } from "../../../../prisma/generated/client/index.js";

const prisma = new PrismaClient();

/**
 * Initialize or retrieve the StepData record for a given step.
 * If a record does not exist, it is created with empty data and status.
 * @param step - The step number.
 * @returns The StepData record.
 */
export const dbInit = async (step: number) => {
  // Upsert the record so that step 0 (or any step) always has a record.
  const record = await prisma.stepData.upsert({
    where: { step },
    update: {},
    create: { step, data: {}, status: {} },
  });
  return record;
};

/**
 * Fetch data for a specific step from the database.
 * @param step - Step number.
 * @returns The step's data.
 * @throws if the record or its data is missing.
 */
export const fetchStepData = async (step: number) => {
  const record = await prisma.stepData.findUnique({ where: { step } });
  if (!record) {
    throw new Error(`Step ${step} does not exist`);
  }
  if (!record.data) {
    throw new Error(`No data for step ${step}`);
  }
  return record.data;
};

/**
 * Reset the StepData record for the given step.
 * (This replaces the file‑based deletion with a reset of data and status.)
 * @param step - Step number.
 */
export const deleteDb = async (step: number) => {
  await prisma.stepData.upsert({
    where: { step },
    update: { data: {}, status: {} },
    create: { step, data: {}, status: {} },
  });
  console.log(`Step ${step} data reset successfully.`);
};

/**
 * Write data for a specific step.
 * Throws an error if a record for a non‑zero step does not exist.
 * @param step - Step number.
 * @param data - Data to write.
 */
export const writeStepData = async (step: number, data: any) => {
  if (step !== 0) {
    // For steps other than 0, ensure that a record already exists.
    const existing = await prisma.stepData.findUnique({ where: { step } });
    if (!existing) {
      throw new Error("DB is empty, generate from step 0");
    }
  }
  const updatedRecord = await prisma.stepData.upsert({
    where: { step },
    update: {
      data,
      status: {
        ...(typeof data === "object" ? data : {}),
        message: `successfully wrote for step: ${step}`,
      },
    },
    create: {
      step,
      data,
      status: { message: `successfully wrote for step: ${step}` },
    },
  });
  console.log(`Successfully wrote data for step ${step}`);
  return updatedRecord;
};

/**
 * Get the status of a specific step.
 * Expects that the status field is a JSON object containing status info.
 * @param step - Step number.
 * @returns The status of the step.
 * @throws if no status is found.
 */
export const getStepStatus = async (step: number) => {
  const record = await prisma.stepData.findUnique({ where: { step } });
  if (!record || !record.status) {
    throw new Error("No status object for this step");
  }
  // Depending on how you structure status, adjust accordingly.
  // For example, if status is an object with keys per step:
  if (!(record.status as any)[step]) {
    throw new Error("No step object in status");
  }
  return (record.status as any)[step];
};

/**
 * Write step data with a transaction hash index.
 * Merges the existing data with a new key (idName) set to the provided data,
 * and updates the status with a lastWrittenTransaction.
 * @param step - Step number.
 * @param data - Data to write.
 * @param idName - Transaction ID name.
 */
export const writeStepDataWithTransactionHashIndex = async (
  step: number,
  data: any,
  idName: string,
) => {
  // Retrieve the current record (or initialize it if missing).
  const record = await dbInit(step);

  // Merge new data into the existing data.
  const mergedData = { ...(record.data as any), [idName]: data };
  // Update the status to record the last written transaction.
  const mergedStatus = {
    ...(record.status as any),
    lastWrittenTransaction: idName,
  };

  await prisma.stepData.upsert({
    where: { step },
    update: {
      data: mergedData,
      status: mergedStatus,
    },
    create: { step, data: mergedData, status: mergedStatus },
  });
  console.log(
    `Successfully wrote data for step ${step} with transaction index ${idName}`,
  );
};

/**
 * Cache token transfer events.
 * Caches an array of events for a given token and block range if not already present.
 * @param tokenContractAddress - Contract address of the token.
 * @param startBlock - Start block number.
 * @param endBlock - End block number.
 * @param events - Array of events to cache.
 */
export async function cacheEvents(
  tokenContractAddress: string,
  startBlock: number,
  endBlock: number,
  events: any[],
) {
  // Check if an entry already exists.
  const existing = await prisma.tokenEventsCache.findUnique({
    where: {
      tokenContractAddress_startBlock_endBlock: {
        tokenContractAddress,
        startBlock,
        endBlock,
      },
    },
  });
  if (existing) {
    console.log("Entry already exists in the cache.");
    return;
  }

  await prisma.tokenEventsCache.create({
    data: {
      tokenContractAddress,
      startBlock,
      endBlock,
      data: events,
    },
  });
  console.log("Events cached successfully.");
}

/**
 * Retrieve cached token transfer events.
 * @param tokenContractAddress - Contract address of the token.
 * @param startBlock - Start block number.
 * @param endBlock - End block number.
 * @returns An array of events or null if not found.
 */
export async function getCachedEvents(
  tokenContractAddress: string,
  startBlock: number,
  endBlock: number,
): Promise<any[] | null> {
  const record = await prisma.tokenEventsCache.findUnique({
    where: {
      tokenContractAddress_startBlock_endBlock: {
        tokenContractAddress,
        startBlock,
        endBlock,
      },
    },
  });

  return record ? (record.data as any[]) : null;
}

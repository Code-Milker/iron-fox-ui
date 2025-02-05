-- CreateTable
CREATE TABLE "AbiCache" (
    "contractAddress" TEXT NOT NULL,
    "chainId" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AbiCache_pkey" PRIMARY KEY ("contractAddress","chainId")
);

-- CreateTable
CREATE TABLE "TokenPriceUSD" (
    "tokenName" TEXT NOT NULL,
    "chainId" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TokenPriceUSD_pkey" PRIMARY KEY ("tokenName","chainId")
);

-- CreateTable
CREATE TABLE "CoinGeckoApiName" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoinGeckoApiName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoinGeckoTokenDetail" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoinGeckoTokenDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoinGeckoTokenDetailsId" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoinGeckoTokenDetailsId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StepData" (
    "step" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "status" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StepData_pkey" PRIMARY KEY ("step")
);

-- CreateTable
CREATE TABLE "TokenEventsCache" (
    "tokenContractAddress" TEXT NOT NULL,
    "startBlock" INTEGER NOT NULL,
    "endBlock" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TokenEventsCache_pkey" PRIMARY KEY ("tokenContractAddress","startBlock","endBlock")
);

-- CreateTable
CREATE TABLE "TransactionInformation" (
    "transactionHash" TEXT NOT NULL,
    "chainId" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransactionInformation_pkey" PRIMARY KEY ("transactionHash","chainId")
);

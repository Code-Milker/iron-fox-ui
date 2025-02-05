Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require("./runtime/library.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require("path");

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.AbiCacheScalarFieldEnum = {
  contractAddress: "contractAddress",
  chainId: "chainId",
  data: "data",
  updatedAt: "updatedAt",
};

exports.Prisma.TokenPriceUSDScalarFieldEnum = {
  tokenName: "tokenName",
  chainId: "chainId",
  data: "data",
  updatedAt: "updatedAt",
};

exports.Prisma.CoinGeckoApiNameScalarFieldEnum = {
  id: "id",
  data: "data",
  updatedAt: "updatedAt",
};

exports.Prisma.CoinGeckoTokenDetailScalarFieldEnum = {
  id: "id",
  data: "data",
  updatedAt: "updatedAt",
};

exports.Prisma.CoinGeckoTokenDetailsIdScalarFieldEnum = {
  id: "id",
  data: "data",
  updatedAt: "updatedAt",
};

exports.Prisma.StepDataScalarFieldEnum = {
  step: "step",
  data: "data",
  status: "status",
  updatedAt: "updatedAt",
};

exports.Prisma.TokenEventsCacheScalarFieldEnum = {
  tokenContractAddress: "tokenContractAddress",
  startBlock: "startBlock",
  endBlock: "endBlock",
  data: "data",
  updatedAt: "updatedAt",
};

exports.Prisma.TransactionInformationScalarFieldEnum = {
  transactionHash: "transactionHash",
  chainId: "chainId",
  data: "data",
  updatedAt: "updatedAt",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull,
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull,
};

exports.Prisma.ModelName = {
  AbiCache: "AbiCache",
  TokenPriceUSD: "TokenPriceUSD",
  CoinGeckoApiName: "CoinGeckoApiName",
  CoinGeckoTokenDetail: "CoinGeckoTokenDetail",
  CoinGeckoTokenDetailsId: "CoinGeckoTokenDetailsId",
  StepData: "StepData",
  TokenEventsCache: "TokenEventsCache",
  TransactionInformation: "TransactionInformation",
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js",
    },
    "output": {
      "value":
        "/Users/tylerfischer/Projects/iron-fox-ui/prisma/generated/client",
      "fromEnvVar": null,
    },
    "config": {
      "engineType": "library",
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true,
      },
    ],
    "previewFeatures": [],
    "sourceFilePath":
      "/Users/tylerfischer/Projects/iron-fox-ui/prisma/schema.prisma",
    "isCustomOutput": true,
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env",
  },
  "relativePath": "../..",
  "clientVersion": "6.3.1",
  "engineVersion": "acc0b9dd43eb689cbd20c9470515d719db10d0b0",
  "datasourceNames": [
    "db",
  ],
  "activeProvider": "postgresql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null,
      },
    },
  },
  "inlineSchema":
    'datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n  output   = "./generated/client"\n}\n\n///\n/// ABI Cache\n///\n/// Caches a contract’s ABI (stored as a JSON blob) for a given chain.\n///\nmodel AbiCache {\n  contractAddress String\n  chainId         Int\n  /// The cached ABI, stored as a JSON blob.\n  data            Json\n  updatedAt       DateTime @default(now()) @updatedAt\n\n  @@id([contractAddress, chainId])\n}\n\n///\n/// Token Price USD Cache\n///\n/// Caches token price information as a JSON blob. In your original file,\n/// this includes the token price in USD (and optionally, an additional amount),\n/// along with a timestamp.\n///\nmodel TokenPriceUSD {\n  tokenName String\n  chainId   Int\n  /// The cached token price data stored as a JSON blob.\n  data      Json\n  updatedAt DateTime @default(now()) @updatedAt\n\n  @@id([tokenName, chainId])\n}\n\n///\n/// CoinGecko API Names Cache\n///\n/// Caches an array of coin definitions (id, symbol, name) as a JSON blob.\n///\nmodel CoinGeckoApiName {\n  id        String   @id\n  /// The entire CoinGecko API names blob.\n  data      Json\n  updatedAt DateTime @default(now()) @updatedAt\n}\n\n///\n/// CoinGecko Token Detail Cache\n///\n/// Caches detailed data for a token from CoinGecko, stored as a JSON blob.\n///\nmodel CoinGeckoTokenDetail {\n  id        String   @id\n  data      Json\n  updatedAt DateTime @default(now()) @updatedAt\n}\n\n///\n/// CoinGecko Token Details Identifier Cache\n///\n/// Caches the mapping from a token ID to a string identifier as a JSON blob.\n///\nmodel CoinGeckoTokenDetailsId {\n  id        String   @id\n  data      Json\n  updatedAt DateTime @default(now()) @updatedAt\n}\n\n///\n/// Step Data Cache\n///\n/// Caches data for a specific step. In your file, you stored two parts: the step’s\n/// data and a status object. Here, both are stored as JSON blobs.\n///\nmodel StepData {\n  /// Unique step number.\n  step      Int      @id\n  /// The main data for the step, stored as a JSON blob.\n  data      Json\n  /// The status information for the step, stored as a JSON blob.\n  status    Json\n  updatedAt DateTime @default(now()) @updatedAt\n}\n\n///\n/// Token Events Cache\n///\n/// Caches token transfer events as a JSON blob for a given token contract and block range.\n///\nmodel TokenEventsCache {\n  tokenContractAddress String\n  startBlock           Int\n  endBlock             Int\n  /// The cached events stored as a JSON blob.\n  data                 Json\n  updatedAt            DateTime @default(now()) @updatedAt\n\n  @@id([tokenContractAddress, startBlock, endBlock])\n}\n\n///\n/// Transaction Information Cache\n///\n/// Caches transaction-related data (such as ABI, decoded method, or event information)\n/// as a JSON blob.\n///\nmodel TransactionInformation {\n  transactionHash String\n  chainId         Int\n  /// The cached transaction data stored as a JSON blob.\n  data            Json\n  updatedAt       DateTime @default(now()) @updatedAt\n\n  @@id([transactionHash, chainId])\n}\n',
  "inlineSchemaHash":
    "2076a75ee05d88d22c84c3faee6c19afd7ce44076d875496ec9d829ffd552664",
  "copyEngine": true,
};

const fs = require("fs");

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ];

  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
  }) ?? alternativePaths[0];

  config.dirname = path.join(process.cwd(), alternativePath);
  config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"AbiCache":{"dbName":null,"schema":null,"fields":[{"name":"contractAddress","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"chainId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false,"documentation":"The cached ABI, stored as a JSON blob."},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":{"name":null,"fields":["contractAddress","chainId"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"\\\\nABI Cache\\\\n\\\\nCaches a contract’s ABI (stored as a JSON blob) for a given chain.\\\\n"},"TokenPriceUSD":{"dbName":null,"schema":null,"fields":[{"name":"tokenName","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"chainId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false,"documentation":"The cached token price data stored as a JSON blob."},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":{"name":null,"fields":["tokenName","chainId"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"\\\\nToken Price USD Cache\\\\n\\\\nCaches token price information as a JSON blob. In your original file,\\\\nthis includes the token price in USD (and optionally, an additional amount),\\\\nalong with a timestamp.\\\\n"},"CoinGeckoApiName":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false,"documentation":"The entire CoinGecko API names blob."},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"\\\\nCoinGecko API Names Cache\\\\n\\\\nCaches an array of coin definitions (id, symbol, name) as a JSON blob.\\\\n"},"CoinGeckoTokenDetail":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"\\\\nCoinGecko Token Detail Cache\\\\n\\\\nCaches detailed data for a token from CoinGecko, stored as a JSON blob.\\\\n"},"CoinGeckoTokenDetailsId":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"\\\\nCoinGecko Token Details Identifier Cache\\\\n\\\\nCaches the mapping from a token ID to a string identifier as a JSON blob.\\\\n"},"StepData":{"dbName":null,"schema":null,"fields":[{"name":"step","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false,"documentation":"Unique step number."},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false,"documentation":"The main data for the step, stored as a JSON blob."},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false,"documentation":"The status information for the step, stored as a JSON blob."},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"\\\\nStep Data Cache\\\\n\\\\nCaches data for a specific step. In your file, you stored two parts: the step’s\\\\ndata and a status object. Here, both are stored as JSON blobs.\\\\n"},"TokenEventsCache":{"dbName":null,"schema":null,"fields":[{"name":"tokenContractAddress","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"startBlock","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"endBlock","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false,"documentation":"The cached events stored as a JSON blob."},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":{"name":null,"fields":["tokenContractAddress","startBlock","endBlock"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"\\\\nToken Events Cache\\\\n\\\\nCaches token transfer events as a JSON blob for a given token contract and block range.\\\\n"},"TransactionInformation":{"dbName":null,"schema":null,"fields":[{"name":"transactionHash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"chainId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false,"documentation":"The cached transaction data stored as a JSON blob."},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":true}],"primaryKey":{"name":null,"fields":["transactionHash","chainId"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"\\\\nTransaction Information Cache\\\\n\\\\nCaches transaction-related data (such as ABI, decoded method, or event information)\\\\nas a JSON blob.\\\\n"}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;
config.compilerWasm = undefined;

const { warnEnvConflicts } = require("./runtime/library.js");

warnEnvConflicts({
  rootEnvPath: config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(
  process.cwd(),
  "prisma/generated/client/libquery_engine-darwin-arm64.dylib.node",
);
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma");

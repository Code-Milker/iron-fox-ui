/**
 * Client
 */

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model AbiCache
 *
 * ABI Cache
 *
 * Caches a contract’s ABI (stored as a JSON blob) for a given chain.
 */
export type AbiCache = $Result.DefaultSelection<Prisma.$AbiCachePayload>;
/**
 * Model TokenPriceUSD
 *
 * Token Price USD Cache
 *
 * Caches token price information as a JSON blob. In your original file,
 * this includes the token price in USD (and optionally, an additional amount),
 * along with a timestamp.
 */
export type TokenPriceUSD = $Result.DefaultSelection<
  Prisma.$TokenPriceUSDPayload
>;
/**
 * Model CoinGeckoApiName
 *
 * CoinGecko API Names Cache
 *
 * Caches an array of coin definitions (id, symbol, name) as a JSON blob.
 */
export type CoinGeckoApiName = $Result.DefaultSelection<
  Prisma.$CoinGeckoApiNamePayload
>;
/**
 * Model CoinGeckoTokenDetail
 *
 * CoinGecko Token Detail Cache
 *
 * Caches detailed data for a token from CoinGecko, stored as a JSON blob.
 */
export type CoinGeckoTokenDetail = $Result.DefaultSelection<
  Prisma.$CoinGeckoTokenDetailPayload
>;
/**
 * Model CoinGeckoTokenDetailsId
 *
 * CoinGecko Token Details Identifier Cache
 *
 * Caches the mapping from a token ID to a string identifier as a JSON blob.
 */
export type CoinGeckoTokenDetailsId = $Result.DefaultSelection<
  Prisma.$CoinGeckoTokenDetailsIdPayload
>;
/**
 * Model StepData
 *
 * Step Data Cache
 *
 * Caches data for a specific step. In your file, you stored two parts: the step’s
 * data and a status object. Here, both are stored as JSON blobs.
 */
export type StepData = $Result.DefaultSelection<Prisma.$StepDataPayload>;
/**
 * Model TokenEventsCache
 *
 * Token Events Cache
 *
 * Caches token transfer events as a JSON blob for a given token contract and block range.
 */
export type TokenEventsCache = $Result.DefaultSelection<
  Prisma.$TokenEventsCachePayload
>;
/**
 * Model TransactionInformation
 *
 * Transaction Information Cache
 *
 * Caches transaction-related data (such as ABI, decoded method, or event information)
 * as a JSON blob.
 */
export type TransactionInformation = $Result.DefaultSelection<
  Prisma.$TransactionInformationPayload
>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AbiCaches
 * const abiCaches = await prisma.abiCache.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
    : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AbiCaches
   * const abiCaches = await prisma.abiCache.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb,
    ExtArgs,
    $Utils.Call<Prisma.TypeMapCb, {
      extArgs: ExtArgs;
    }>,
    ClientOptions
  >;

  /**
   * `prisma.abiCache`: Exposes CRUD operations for the **AbiCache** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AbiCaches
   * const abiCaches = await prisma.abiCache.findMany()
   * ```
   */
  get abiCache(): Prisma.AbiCacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenPriceUSD`: Exposes CRUD operations for the **TokenPriceUSD** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TokenPriceUSDS
   * const tokenPriceUSDS = await prisma.tokenPriceUSD.findMany()
   * ```
   */
  get tokenPriceUSD(): Prisma.TokenPriceUSDDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coinGeckoApiName`: Exposes CRUD operations for the **CoinGeckoApiName** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CoinGeckoApiNames
   * const coinGeckoApiNames = await prisma.coinGeckoApiName.findMany()
   * ```
   */
  get coinGeckoApiName(): Prisma.CoinGeckoApiNameDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.coinGeckoTokenDetail`: Exposes CRUD operations for the **CoinGeckoTokenDetail** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CoinGeckoTokenDetails
   * const coinGeckoTokenDetails = await prisma.coinGeckoTokenDetail.findMany()
   * ```
   */
  get coinGeckoTokenDetail(): Prisma.CoinGeckoTokenDetailDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.coinGeckoTokenDetailsId`: Exposes CRUD operations for the **CoinGeckoTokenDetailsId** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CoinGeckoTokenDetailsIds
   * const coinGeckoTokenDetailsIds = await prisma.coinGeckoTokenDetailsId.findMany()
   * ```
   */
  get coinGeckoTokenDetailsId(): Prisma.CoinGeckoTokenDetailsIdDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.stepData`: Exposes CRUD operations for the **StepData** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more StepData
   * const stepData = await prisma.stepData.findMany()
   * ```
   */
  get stepData(): Prisma.StepDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenEventsCache`: Exposes CRUD operations for the **TokenEventsCache** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TokenEventsCaches
   * const tokenEventsCaches = await prisma.tokenEventsCache.findMany()
   * ```
   */
  get tokenEventsCache(): Prisma.TokenEventsCacheDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.transactionInformation`: Exposes CRUD operations for the **TransactionInformation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TransactionInformations
   * const transactionInformations = await prisma.transactionInformation.findMany()
   * ```
   */
  get transactionInformation(): Prisma.TransactionInformationDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends
    PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> =
    & {
      [key in keyof T]: key extends keyof U ? T[key] : never;
    }
    & (T extends SelectAndInclude
      ? "Please either choose `select` or `include`."
      : T extends SelectAndOmit ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> =
    & {
      [key in keyof T]: key extends keyof U ? T[key] : never;
    }
    & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T)
    : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any> ? False
    : T extends Date ? False
    : T extends Uint8Array ? False
    : T extends BigInt ? False
    : T extends object ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> =
    & Omit<O, K>
    & {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean,
  > = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> =
    & {
      [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
    }
    & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> =
    & {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    }
    & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> =
    {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
    }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A
    :
      & {
        [K in keyof A]: A[K];
      }
      & {};

  export type OptionalFlat<O> =
    & {
      [K in keyof O]?: O[K];
    }
    & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown ?
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | { [P in keyof O as P extends K ? K : never]-?: O[P] } & O
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 // anything `never` is false
    : A1 extends A2 ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
      [P in keyof T]: P extends keyof O ? O[P]
        : never;
    }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      // infer is only needed to not hit TS limit
      // based on the brilliant idea of Pierre-Antoine Mills
      // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
      ? T[K] extends infer TK ? GetHavingFields<
          UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
        >
      : never
      : {} extends FieldPaths<T[K]> ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> =
    Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    AbiCache: "AbiCache";
    TokenPriceUSD: "TokenPriceUSD";
    CoinGeckoApiName: "CoinGeckoApiName";
    CoinGeckoTokenDetail: "CoinGeckoTokenDetail";
    CoinGeckoTokenDetailsId: "CoinGeckoTokenDetailsId";
    StepData: "StepData";
    TokenEventsCache: "TokenEventsCache";
    TransactionInformation: "TransactionInformation";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends
    $Utils.Fn<
      {
        extArgs: $Extensions.InternalArgs;
        clientOptions: PrismaClientOptions;
      },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      this["params"]["clientOptions"]
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps:
        | "abiCache"
        | "tokenPriceUSD"
        | "coinGeckoApiName"
        | "coinGeckoTokenDetail"
        | "coinGeckoTokenDetailsId"
        | "stepData"
        | "tokenEventsCache"
        | "transactionInformation";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      AbiCache: {
        payload: Prisma.$AbiCachePayload<ExtArgs>;
        fields: Prisma.AbiCacheFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AbiCacheFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AbiCacheFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>;
          };
          findFirst: {
            args: Prisma.AbiCacheFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AbiCacheFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>;
          };
          findMany: {
            args: Prisma.AbiCacheFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>[];
          };
          create: {
            args: Prisma.AbiCacheCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>;
          };
          createMany: {
            args: Prisma.AbiCacheCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AbiCacheCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>[];
          };
          delete: {
            args: Prisma.AbiCacheDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>;
          };
          update: {
            args: Prisma.AbiCacheUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>;
          };
          deleteMany: {
            args: Prisma.AbiCacheDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AbiCacheUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AbiCacheUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>[];
          };
          upsert: {
            args: Prisma.AbiCacheUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AbiCachePayload>;
          };
          aggregate: {
            args: Prisma.AbiCacheAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAbiCache>;
          };
          groupBy: {
            args: Prisma.AbiCacheGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AbiCacheGroupByOutputType>[];
          };
          count: {
            args: Prisma.AbiCacheCountArgs<ExtArgs>;
            result: $Utils.Optional<AbiCacheCountAggregateOutputType> | number;
          };
        };
      };
      TokenPriceUSD: {
        payload: Prisma.$TokenPriceUSDPayload<ExtArgs>;
        fields: Prisma.TokenPriceUSDFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TokenPriceUSDFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TokenPriceUSDFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>;
          };
          findFirst: {
            args: Prisma.TokenPriceUSDFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TokenPriceUSDFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>;
          };
          findMany: {
            args: Prisma.TokenPriceUSDFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>[];
          };
          create: {
            args: Prisma.TokenPriceUSDCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>;
          };
          createMany: {
            args: Prisma.TokenPriceUSDCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TokenPriceUSDCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>[];
          };
          delete: {
            args: Prisma.TokenPriceUSDDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>;
          };
          update: {
            args: Prisma.TokenPriceUSDUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>;
          };
          deleteMany: {
            args: Prisma.TokenPriceUSDDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TokenPriceUSDUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TokenPriceUSDUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>[];
          };
          upsert: {
            args: Prisma.TokenPriceUSDUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPriceUSDPayload>;
          };
          aggregate: {
            args: Prisma.TokenPriceUSDAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTokenPriceUSD>;
          };
          groupBy: {
            args: Prisma.TokenPriceUSDGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TokenPriceUSDGroupByOutputType>[];
          };
          count: {
            args: Prisma.TokenPriceUSDCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TokenPriceUSDCountAggregateOutputType>
              | number;
          };
        };
      };
      CoinGeckoApiName: {
        payload: Prisma.$CoinGeckoApiNamePayload<ExtArgs>;
        fields: Prisma.CoinGeckoApiNameFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CoinGeckoApiNameFindUniqueArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>
              | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CoinGeckoApiNameFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>;
          };
          findFirst: {
            args: Prisma.CoinGeckoApiNameFindFirstArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>
              | null;
          };
          findFirstOrThrow: {
            args: Prisma.CoinGeckoApiNameFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>;
          };
          findMany: {
            args: Prisma.CoinGeckoApiNameFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>[];
          };
          create: {
            args: Prisma.CoinGeckoApiNameCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>;
          };
          createMany: {
            args: Prisma.CoinGeckoApiNameCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CoinGeckoApiNameCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>[];
          };
          delete: {
            args: Prisma.CoinGeckoApiNameDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>;
          };
          update: {
            args: Prisma.CoinGeckoApiNameUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>;
          };
          deleteMany: {
            args: Prisma.CoinGeckoApiNameDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CoinGeckoApiNameUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CoinGeckoApiNameUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>[];
          };
          upsert: {
            args: Prisma.CoinGeckoApiNameUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoApiNamePayload>;
          };
          aggregate: {
            args: Prisma.CoinGeckoApiNameAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCoinGeckoApiName>;
          };
          groupBy: {
            args: Prisma.CoinGeckoApiNameGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CoinGeckoApiNameGroupByOutputType>[];
          };
          count: {
            args: Prisma.CoinGeckoApiNameCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CoinGeckoApiNameCountAggregateOutputType>
              | number;
          };
        };
      };
      CoinGeckoTokenDetail: {
        payload: Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>;
        fields: Prisma.CoinGeckoTokenDetailFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CoinGeckoTokenDetailFindUniqueArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailPayload>
              | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CoinGeckoTokenDetailFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailPayload>;
          };
          findFirst: {
            args: Prisma.CoinGeckoTokenDetailFindFirstArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailPayload>
              | null;
          };
          findFirstOrThrow: {
            args: Prisma.CoinGeckoTokenDetailFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailPayload>;
          };
          findMany: {
            args: Prisma.CoinGeckoTokenDetailFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailPayload
            >[];
          };
          create: {
            args: Prisma.CoinGeckoTokenDetailCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailPayload>;
          };
          createMany: {
            args: Prisma.CoinGeckoTokenDetailCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CoinGeckoTokenDetailCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailPayload
            >[];
          };
          delete: {
            args: Prisma.CoinGeckoTokenDetailDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailPayload>;
          };
          update: {
            args: Prisma.CoinGeckoTokenDetailUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailPayload>;
          };
          deleteMany: {
            args: Prisma.CoinGeckoTokenDetailDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CoinGeckoTokenDetailUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CoinGeckoTokenDetailUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailPayload
            >[];
          };
          upsert: {
            args: Prisma.CoinGeckoTokenDetailUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailPayload>;
          };
          aggregate: {
            args: Prisma.CoinGeckoTokenDetailAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCoinGeckoTokenDetail>;
          };
          groupBy: {
            args: Prisma.CoinGeckoTokenDetailGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CoinGeckoTokenDetailGroupByOutputType>[];
          };
          count: {
            args: Prisma.CoinGeckoTokenDetailCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CoinGeckoTokenDetailCountAggregateOutputType>
              | number;
          };
        };
      };
      CoinGeckoTokenDetailsId: {
        payload: Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>;
        fields: Prisma.CoinGeckoTokenDetailsIdFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CoinGeckoTokenDetailsIdFindUniqueArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailsIdPayload>
              | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CoinGeckoTokenDetailsIdFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >;
          };
          findFirst: {
            args: Prisma.CoinGeckoTokenDetailsIdFindFirstArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$CoinGeckoTokenDetailsIdPayload>
              | null;
          };
          findFirstOrThrow: {
            args: Prisma.CoinGeckoTokenDetailsIdFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >;
          };
          findMany: {
            args: Prisma.CoinGeckoTokenDetailsIdFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >[];
          };
          create: {
            args: Prisma.CoinGeckoTokenDetailsIdCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >;
          };
          createMany: {
            args: Prisma.CoinGeckoTokenDetailsIdCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CoinGeckoTokenDetailsIdCreateManyAndReturnArgs<
              ExtArgs
            >;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >[];
          };
          delete: {
            args: Prisma.CoinGeckoTokenDetailsIdDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >;
          };
          update: {
            args: Prisma.CoinGeckoTokenDetailsIdUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >;
          };
          deleteMany: {
            args: Prisma.CoinGeckoTokenDetailsIdDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CoinGeckoTokenDetailsIdUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CoinGeckoTokenDetailsIdUpdateManyAndReturnArgs<
              ExtArgs
            >;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >[];
          };
          upsert: {
            args: Prisma.CoinGeckoTokenDetailsIdUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$CoinGeckoTokenDetailsIdPayload
            >;
          };
          aggregate: {
            args: Prisma.CoinGeckoTokenDetailsIdAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCoinGeckoTokenDetailsId>;
          };
          groupBy: {
            args: Prisma.CoinGeckoTokenDetailsIdGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CoinGeckoTokenDetailsIdGroupByOutputType>[];
          };
          count: {
            args: Prisma.CoinGeckoTokenDetailsIdCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CoinGeckoTokenDetailsIdCountAggregateOutputType>
              | number;
          };
        };
      };
      StepData: {
        payload: Prisma.$StepDataPayload<ExtArgs>;
        fields: Prisma.StepDataFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.StepDataFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.StepDataFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>;
          };
          findFirst: {
            args: Prisma.StepDataFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.StepDataFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>;
          };
          findMany: {
            args: Prisma.StepDataFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>[];
          };
          create: {
            args: Prisma.StepDataCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>;
          };
          createMany: {
            args: Prisma.StepDataCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.StepDataCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>[];
          };
          delete: {
            args: Prisma.StepDataDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>;
          };
          update: {
            args: Prisma.StepDataUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>;
          };
          deleteMany: {
            args: Prisma.StepDataDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.StepDataUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.StepDataUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>[];
          };
          upsert: {
            args: Prisma.StepDataUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StepDataPayload>;
          };
          aggregate: {
            args: Prisma.StepDataAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStepData>;
          };
          groupBy: {
            args: Prisma.StepDataGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StepDataGroupByOutputType>[];
          };
          count: {
            args: Prisma.StepDataCountArgs<ExtArgs>;
            result: $Utils.Optional<StepDataCountAggregateOutputType> | number;
          };
        };
      };
      TokenEventsCache: {
        payload: Prisma.$TokenEventsCachePayload<ExtArgs>;
        fields: Prisma.TokenEventsCacheFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TokenEventsCacheFindUniqueArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>
              | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TokenEventsCacheFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>;
          };
          findFirst: {
            args: Prisma.TokenEventsCacheFindFirstArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>
              | null;
          };
          findFirstOrThrow: {
            args: Prisma.TokenEventsCacheFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>;
          };
          findMany: {
            args: Prisma.TokenEventsCacheFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>[];
          };
          create: {
            args: Prisma.TokenEventsCacheCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>;
          };
          createMany: {
            args: Prisma.TokenEventsCacheCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TokenEventsCacheCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>[];
          };
          delete: {
            args: Prisma.TokenEventsCacheDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>;
          };
          update: {
            args: Prisma.TokenEventsCacheUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>;
          };
          deleteMany: {
            args: Prisma.TokenEventsCacheDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TokenEventsCacheUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TokenEventsCacheUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>[];
          };
          upsert: {
            args: Prisma.TokenEventsCacheUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenEventsCachePayload>;
          };
          aggregate: {
            args: Prisma.TokenEventsCacheAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTokenEventsCache>;
          };
          groupBy: {
            args: Prisma.TokenEventsCacheGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TokenEventsCacheGroupByOutputType>[];
          };
          count: {
            args: Prisma.TokenEventsCacheCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TokenEventsCacheCountAggregateOutputType>
              | number;
          };
        };
      };
      TransactionInformation: {
        payload: Prisma.$TransactionInformationPayload<ExtArgs>;
        fields: Prisma.TransactionInformationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionInformationFindUniqueArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$TransactionInformationPayload>
              | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionInformationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >;
          };
          findFirst: {
            args: Prisma.TransactionInformationFindFirstArgs<ExtArgs>;
            result:
              | $Utils.PayloadToResult<Prisma.$TransactionInformationPayload>
              | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionInformationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >;
          };
          findMany: {
            args: Prisma.TransactionInformationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >[];
          };
          create: {
            args: Prisma.TransactionInformationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >;
          };
          createMany: {
            args: Prisma.TransactionInformationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TransactionInformationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >[];
          };
          delete: {
            args: Prisma.TransactionInformationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >;
          };
          update: {
            args: Prisma.TransactionInformationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >;
          };
          deleteMany: {
            args: Prisma.TransactionInformationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionInformationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TransactionInformationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >[];
          };
          upsert: {
            args: Prisma.TransactionInformationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<
              Prisma.$TransactionInformationPayload
            >;
          };
          aggregate: {
            args: Prisma.TransactionInformationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransactionInformation>;
          };
          groupBy: {
            args: Prisma.TransactionInformationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionInformationGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionInformationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionInformationCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    abiCache?: AbiCacheOmit;
    tokenPriceUSD?: TokenPriceUSDOmit;
    coinGeckoApiName?: CoinGeckoApiNameOmit;
    coinGeckoTokenDetail?: CoinGeckoTokenDetailOmit;
    coinGeckoTokenDetailsId?: CoinGeckoTokenDetailsIdOmit;
    stepData?: StepDataOmit;
    tokenEventsCache?: TokenEventsCacheOmit;
    transactionInformation?: TransactionInformationOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends
    LogDefinition ? T["emit"] extends "event" ? T["level"] : never : never;
  export type GetEvents<T extends any> = T extends
    Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model AbiCache
   */

  export type AggregateAbiCache = {
    _count: AbiCacheCountAggregateOutputType | null;
    _avg: AbiCacheAvgAggregateOutputType | null;
    _sum: AbiCacheSumAggregateOutputType | null;
    _min: AbiCacheMinAggregateOutputType | null;
    _max: AbiCacheMaxAggregateOutputType | null;
  };

  export type AbiCacheAvgAggregateOutputType = {
    chainId: number | null;
  };

  export type AbiCacheSumAggregateOutputType = {
    chainId: number | null;
  };

  export type AbiCacheMinAggregateOutputType = {
    contractAddress: string | null;
    chainId: number | null;
    updatedAt: Date | null;
  };

  export type AbiCacheMaxAggregateOutputType = {
    contractAddress: string | null;
    chainId: number | null;
    updatedAt: Date | null;
  };

  export type AbiCacheCountAggregateOutputType = {
    contractAddress: number;
    chainId: number;
    data: number;
    updatedAt: number;
    _all: number;
  };

  export type AbiCacheAvgAggregateInputType = {
    chainId?: true;
  };

  export type AbiCacheSumAggregateInputType = {
    chainId?: true;
  };

  export type AbiCacheMinAggregateInputType = {
    contractAddress?: true;
    chainId?: true;
    updatedAt?: true;
  };

  export type AbiCacheMaxAggregateInputType = {
    contractAddress?: true;
    chainId?: true;
    updatedAt?: true;
  };

  export type AbiCacheCountAggregateInputType = {
    contractAddress?: true;
    chainId?: true;
    data?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type AbiCacheAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AbiCache to aggregate.
     */
    where?: AbiCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AbiCaches to fetch.
     */
    orderBy?:
      | AbiCacheOrderByWithRelationInput
      | AbiCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AbiCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AbiCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AbiCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AbiCaches
     */
    _count?: true | AbiCacheCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: AbiCacheAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: AbiCacheSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: AbiCacheMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: AbiCacheMaxAggregateInputType;
  };

  export type GetAbiCacheAggregateType<T extends AbiCacheAggregateArgs> = {
    [P in keyof T & keyof AggregateAbiCache]: P extends "_count" | "count"
      ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateAbiCache[P]>
      : GetScalarType<T[P], AggregateAbiCache[P]>;
  };

  export type AbiCacheGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AbiCacheWhereInput;
    orderBy?:
      | AbiCacheOrderByWithAggregationInput
      | AbiCacheOrderByWithAggregationInput[];
    by: AbiCacheScalarFieldEnum[] | AbiCacheScalarFieldEnum;
    having?: AbiCacheScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AbiCacheCountAggregateInputType | true;
    _avg?: AbiCacheAvgAggregateInputType;
    _sum?: AbiCacheSumAggregateInputType;
    _min?: AbiCacheMinAggregateInputType;
    _max?: AbiCacheMaxAggregateInputType;
  };

  export type AbiCacheGroupByOutputType = {
    contractAddress: string;
    chainId: number;
    data: JsonValue;
    updatedAt: Date;
    _count: AbiCacheCountAggregateOutputType | null;
    _avg: AbiCacheAvgAggregateOutputType | null;
    _sum: AbiCacheSumAggregateOutputType | null;
    _min: AbiCacheMinAggregateOutputType | null;
    _max: AbiCacheMaxAggregateOutputType | null;
  };

  type GetAbiCacheGroupByPayload<T extends AbiCacheGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        & PickEnumerable<AbiCacheGroupByOutputType, T["by"]>
        & {
          [P in ((keyof T) & (keyof AbiCacheGroupByOutputType))]: P extends
            "_count" ? T[P] extends boolean ? number
            : GetScalarType<T[P], AbiCacheGroupByOutputType[P]>
            : GetScalarType<T[P], AbiCacheGroupByOutputType[P]>;
        }
      >
    >;

  export type AbiCacheSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    contractAddress?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["abiCache"]>;

  export type AbiCacheSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    contractAddress?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["abiCache"]>;

  export type AbiCacheSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    contractAddress?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["abiCache"]>;

  export type AbiCacheSelectScalar = {
    contractAddress?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  };

  export type AbiCacheOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "contractAddress" | "chainId" | "data" | "updatedAt",
    ExtArgs["result"]["abiCache"]
  >;

  export type $AbiCachePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "AbiCache";
    objects: {};
    scalars: $Extensions.GetPayloadResult<{
      contractAddress: string;
      chainId: number;
      /**
       * The cached ABI, stored as a JSON blob.
       */
      data: Prisma.JsonValue;
      updatedAt: Date;
    }, ExtArgs["result"]["abiCache"]>;
    composites: {};
  };

  type AbiCacheGetPayload<
    S extends boolean | null | undefined | AbiCacheDefaultArgs,
  > = $Result.GetResult<Prisma.$AbiCachePayload, S>;

  type AbiCacheCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AbiCacheFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AbiCacheCountAggregateInputType | true;
  };

  export interface AbiCacheDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["AbiCache"];
      meta: { name: "AbiCache" };
    };
    /**
     * Find zero or one AbiCache that matches the filter.
     * @param {AbiCacheFindUniqueArgs} args - Arguments to find a AbiCache
     * @example
     * // Get one AbiCache
     * const abiCache = await prisma.abiCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbiCacheFindUniqueArgs>(
      args: SelectSubset<T, AbiCacheFindUniqueArgs<ExtArgs>>,
    ): Prisma__AbiCacheClient<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one AbiCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbiCacheFindUniqueOrThrowArgs} args - Arguments to find a AbiCache
     * @example
     * // Get one AbiCache
     * const abiCache = await prisma.abiCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbiCacheFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AbiCacheFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AbiCacheClient<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first AbiCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbiCacheFindFirstArgs} args - Arguments to find a AbiCache
     * @example
     * // Get one AbiCache
     * const abiCache = await prisma.abiCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbiCacheFindFirstArgs>(
      args?: SelectSubset<T, AbiCacheFindFirstArgs<ExtArgs>>,
    ): Prisma__AbiCacheClient<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first AbiCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbiCacheFindFirstOrThrowArgs} args - Arguments to find a AbiCache
     * @example
     * // Get one AbiCache
     * const abiCache = await prisma.abiCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbiCacheFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AbiCacheFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AbiCacheClient<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more AbiCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbiCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbiCaches
     * const abiCaches = await prisma.abiCache.findMany()
     *
     * // Get first 10 AbiCaches
     * const abiCaches = await prisma.abiCache.findMany({ take: 10 })
     *
     * // Only select the `contractAddress`
     * const abiCacheWithContractAddressOnly = await prisma.abiCache.findMany({ select: { contractAddress: true } })
     */
    findMany<T extends AbiCacheFindManyArgs>(
      args?: SelectSubset<T, AbiCacheFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a AbiCache.
     * @param {AbiCacheCreateArgs} args - Arguments to create a AbiCache.
     * @example
     * // Create one AbiCache
     * const AbiCache = await prisma.abiCache.create({
     *   data: {
     *     // ... data to create a AbiCache
     *   }
     * })
     */
    create<T extends AbiCacheCreateArgs>(
      args: SelectSubset<T, AbiCacheCreateArgs<ExtArgs>>,
    ): Prisma__AbiCacheClient<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many AbiCaches.
     * @param {AbiCacheCreateManyArgs} args - Arguments to create many AbiCaches.
     * @example
     * // Create many AbiCaches
     * const abiCache = await prisma.abiCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     */
    createMany<T extends AbiCacheCreateManyArgs>(
      args?: SelectSubset<T, AbiCacheCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AbiCaches and returns the data saved in the database.
     * @param {AbiCacheCreateManyAndReturnArgs} args - Arguments to create many AbiCaches.
     * @example
     * // Create many AbiCaches
     * const abiCache = await prisma.abiCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AbiCaches and only return the `contractAddress`
     * const abiCacheWithContractAddressOnly = await prisma.abiCache.createManyAndReturn({
     *   select: { contractAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    createManyAndReturn<T extends AbiCacheCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AbiCacheCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Delete a AbiCache.
     * @param {AbiCacheDeleteArgs} args - Arguments to delete one AbiCache.
     * @example
     * // Delete one AbiCache
     * const AbiCache = await prisma.abiCache.delete({
     *   where: {
     *     // ... filter to delete one AbiCache
     *   }
     * })
     */
    delete<T extends AbiCacheDeleteArgs>(
      args: SelectSubset<T, AbiCacheDeleteArgs<ExtArgs>>,
    ): Prisma__AbiCacheClient<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one AbiCache.
     * @param {AbiCacheUpdateArgs} args - Arguments to update one AbiCache.
     * @example
     * // Update one AbiCache
     * const abiCache = await prisma.abiCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends AbiCacheUpdateArgs>(
      args: SelectSubset<T, AbiCacheUpdateArgs<ExtArgs>>,
    ): Prisma__AbiCacheClient<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more AbiCaches.
     * @param {AbiCacheDeleteManyArgs} args - Arguments to filter AbiCaches to delete.
     * @example
     * // Delete a few AbiCaches
     * const { count } = await prisma.abiCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends AbiCacheDeleteManyArgs>(
      args?: SelectSubset<T, AbiCacheDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AbiCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbiCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbiCaches
     * const abiCache = await prisma.abiCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends AbiCacheUpdateManyArgs>(
      args: SelectSubset<T, AbiCacheUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AbiCaches and returns the data updated in the database.
     * @param {AbiCacheUpdateManyAndReturnArgs} args - Arguments to update many AbiCaches.
     * @example
     * // Update many AbiCaches
     * const abiCache = await prisma.abiCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AbiCaches and only return the `contractAddress`
     * const abiCacheWithContractAddressOnly = await prisma.abiCache.updateManyAndReturn({
     *   select: { contractAddress: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    updateManyAndReturn<T extends AbiCacheUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AbiCacheUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Create or update one AbiCache.
     * @param {AbiCacheUpsertArgs} args - Arguments to update or create a AbiCache.
     * @example
     * // Update or create a AbiCache
     * const abiCache = await prisma.abiCache.upsert({
     *   create: {
     *     // ... data to create a AbiCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbiCache we want to update
     *   }
     * })
     */
    upsert<T extends AbiCacheUpsertArgs>(
      args: SelectSubset<T, AbiCacheUpsertArgs<ExtArgs>>,
    ): Prisma__AbiCacheClient<
      $Result.GetResult<
        Prisma.$AbiCachePayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of AbiCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbiCacheCountArgs} args - Arguments to filter AbiCaches to count.
     * @example
     * // Count the number of AbiCaches
     * const count = await prisma.abiCache.count({
     *   where: {
     *     // ... the filter for the AbiCaches we want to count
     *   }
     * })
     */
    count<T extends AbiCacheCountArgs>(
      args?: Subset<T, AbiCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<T["select"], AbiCacheCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AbiCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbiCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends AbiCacheAggregateArgs>(
      args: Subset<T, AbiCacheAggregateArgs>,
    ): Prisma.PrismaPromise<GetAbiCacheAggregateType<T>>;

    /**
     * Group by AbiCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbiCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     */
    groupBy<
      T extends AbiCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbiCacheGroupByArgs["orderBy"] }
        : { orderBy?: AbiCacheGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args:
        & SubsetIntersection<T, AbiCacheGroupByArgs, OrderByArg>
        & InputErrors,
    ): {} extends InputErrors ? GetAbiCacheGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AbiCache model
     */
    readonly fields: AbiCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbiCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbiCacheClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AbiCache model
   */
  interface AbiCacheFieldRefs {
    readonly contractAddress: FieldRef<"AbiCache", "String">;
    readonly chainId: FieldRef<"AbiCache", "Int">;
    readonly data: FieldRef<"AbiCache", "Json">;
    readonly updatedAt: FieldRef<"AbiCache", "DateTime">;
  }

  // Custom InputTypes
  /**
   * AbiCache findUnique
   */
  export type AbiCacheFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * Filter, which AbiCache to fetch.
     */
    where: AbiCacheWhereUniqueInput;
  };

  /**
   * AbiCache findUniqueOrThrow
   */
  export type AbiCacheFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * Filter, which AbiCache to fetch.
     */
    where: AbiCacheWhereUniqueInput;
  };

  /**
   * AbiCache findFirst
   */
  export type AbiCacheFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * Filter, which AbiCache to fetch.
     */
    where?: AbiCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AbiCaches to fetch.
     */
    orderBy?:
      | AbiCacheOrderByWithRelationInput
      | AbiCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AbiCaches.
     */
    cursor?: AbiCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AbiCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AbiCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AbiCaches.
     */
    distinct?: AbiCacheScalarFieldEnum | AbiCacheScalarFieldEnum[];
  };

  /**
   * AbiCache findFirstOrThrow
   */
  export type AbiCacheFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * Filter, which AbiCache to fetch.
     */
    where?: AbiCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AbiCaches to fetch.
     */
    orderBy?:
      | AbiCacheOrderByWithRelationInput
      | AbiCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AbiCaches.
     */
    cursor?: AbiCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AbiCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AbiCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AbiCaches.
     */
    distinct?: AbiCacheScalarFieldEnum | AbiCacheScalarFieldEnum[];
  };

  /**
   * AbiCache findMany
   */
  export type AbiCacheFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * Filter, which AbiCaches to fetch.
     */
    where?: AbiCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AbiCaches to fetch.
     */
    orderBy?:
      | AbiCacheOrderByWithRelationInput
      | AbiCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AbiCaches.
     */
    cursor?: AbiCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AbiCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AbiCaches.
     */
    skip?: number;
    distinct?: AbiCacheScalarFieldEnum | AbiCacheScalarFieldEnum[];
  };

  /**
   * AbiCache create
   */
  export type AbiCacheCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * The data needed to create a AbiCache.
     */
    data: XOR<AbiCacheCreateInput, AbiCacheUncheckedCreateInput>;
  };

  /**
   * AbiCache createMany
   */
  export type AbiCacheCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AbiCaches.
     */
    data: AbiCacheCreateManyInput | AbiCacheCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AbiCache createManyAndReturn
   */
  export type AbiCacheCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * The data used to create many AbiCaches.
     */
    data: AbiCacheCreateManyInput | AbiCacheCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AbiCache update
   */
  export type AbiCacheUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * The data needed to update a AbiCache.
     */
    data: XOR<AbiCacheUpdateInput, AbiCacheUncheckedUpdateInput>;
    /**
     * Choose, which AbiCache to update.
     */
    where: AbiCacheWhereUniqueInput;
  };

  /**
   * AbiCache updateMany
   */
  export type AbiCacheUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AbiCaches.
     */
    data: XOR<
      AbiCacheUpdateManyMutationInput,
      AbiCacheUncheckedUpdateManyInput
    >;
    /**
     * Filter which AbiCaches to update
     */
    where?: AbiCacheWhereInput;
    /**
     * Limit how many AbiCaches to update.
     */
    limit?: number;
  };

  /**
   * AbiCache updateManyAndReturn
   */
  export type AbiCacheUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * The data used to update AbiCaches.
     */
    data: XOR<
      AbiCacheUpdateManyMutationInput,
      AbiCacheUncheckedUpdateManyInput
    >;
    /**
     * Filter which AbiCaches to update
     */
    where?: AbiCacheWhereInput;
    /**
     * Limit how many AbiCaches to update.
     */
    limit?: number;
  };

  /**
   * AbiCache upsert
   */
  export type AbiCacheUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * The filter to search for the AbiCache to update in case it exists.
     */
    where: AbiCacheWhereUniqueInput;
    /**
     * In case the AbiCache found by the `where` argument doesn't exist, create a new AbiCache with this data.
     */
    create: XOR<AbiCacheCreateInput, AbiCacheUncheckedCreateInput>;
    /**
     * In case the AbiCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbiCacheUpdateInput, AbiCacheUncheckedUpdateInput>;
  };

  /**
   * AbiCache delete
   */
  export type AbiCacheDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
    /**
     * Filter which AbiCache to delete.
     */
    where: AbiCacheWhereUniqueInput;
  };

  /**
   * AbiCache deleteMany
   */
  export type AbiCacheDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AbiCaches to delete
     */
    where?: AbiCacheWhereInput;
    /**
     * Limit how many AbiCaches to delete.
     */
    limit?: number;
  };

  /**
   * AbiCache without action
   */
  export type AbiCacheDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AbiCache
     */
    select?: AbiCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AbiCache
     */
    omit?: AbiCacheOmit<ExtArgs> | null;
  };

  /**
   * Model TokenPriceUSD
   */

  export type AggregateTokenPriceUSD = {
    _count: TokenPriceUSDCountAggregateOutputType | null;
    _avg: TokenPriceUSDAvgAggregateOutputType | null;
    _sum: TokenPriceUSDSumAggregateOutputType | null;
    _min: TokenPriceUSDMinAggregateOutputType | null;
    _max: TokenPriceUSDMaxAggregateOutputType | null;
  };

  export type TokenPriceUSDAvgAggregateOutputType = {
    chainId: number | null;
  };

  export type TokenPriceUSDSumAggregateOutputType = {
    chainId: number | null;
  };

  export type TokenPriceUSDMinAggregateOutputType = {
    tokenName: string | null;
    chainId: number | null;
    updatedAt: Date | null;
  };

  export type TokenPriceUSDMaxAggregateOutputType = {
    tokenName: string | null;
    chainId: number | null;
    updatedAt: Date | null;
  };

  export type TokenPriceUSDCountAggregateOutputType = {
    tokenName: number;
    chainId: number;
    data: number;
    updatedAt: number;
    _all: number;
  };

  export type TokenPriceUSDAvgAggregateInputType = {
    chainId?: true;
  };

  export type TokenPriceUSDSumAggregateInputType = {
    chainId?: true;
  };

  export type TokenPriceUSDMinAggregateInputType = {
    tokenName?: true;
    chainId?: true;
    updatedAt?: true;
  };

  export type TokenPriceUSDMaxAggregateInputType = {
    tokenName?: true;
    chainId?: true;
    updatedAt?: true;
  };

  export type TokenPriceUSDCountAggregateInputType = {
    tokenName?: true;
    chainId?: true;
    data?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TokenPriceUSDAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TokenPriceUSD to aggregate.
     */
    where?: TokenPriceUSDWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TokenPriceUSDS to fetch.
     */
    orderBy?:
      | TokenPriceUSDOrderByWithRelationInput
      | TokenPriceUSDOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TokenPriceUSDWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TokenPriceUSDS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TokenPriceUSDS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TokenPriceUSDS
     */
    _count?: true | TokenPriceUSDCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: TokenPriceUSDAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: TokenPriceUSDSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: TokenPriceUSDMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: TokenPriceUSDMaxAggregateInputType;
  };

  export type GetTokenPriceUSDAggregateType<
    T extends TokenPriceUSDAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateTokenPriceUSD]: P extends "_count" | "count"
      ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateTokenPriceUSD[P]>
      : GetScalarType<T[P], AggregateTokenPriceUSD[P]>;
  };

  export type TokenPriceUSDGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TokenPriceUSDWhereInput;
    orderBy?:
      | TokenPriceUSDOrderByWithAggregationInput
      | TokenPriceUSDOrderByWithAggregationInput[];
    by: TokenPriceUSDScalarFieldEnum[] | TokenPriceUSDScalarFieldEnum;
    having?: TokenPriceUSDScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TokenPriceUSDCountAggregateInputType | true;
    _avg?: TokenPriceUSDAvgAggregateInputType;
    _sum?: TokenPriceUSDSumAggregateInputType;
    _min?: TokenPriceUSDMinAggregateInputType;
    _max?: TokenPriceUSDMaxAggregateInputType;
  };

  export type TokenPriceUSDGroupByOutputType = {
    tokenName: string;
    chainId: number;
    data: JsonValue;
    updatedAt: Date;
    _count: TokenPriceUSDCountAggregateOutputType | null;
    _avg: TokenPriceUSDAvgAggregateOutputType | null;
    _sum: TokenPriceUSDSumAggregateOutputType | null;
    _min: TokenPriceUSDMinAggregateOutputType | null;
    _max: TokenPriceUSDMaxAggregateOutputType | null;
  };

  type GetTokenPriceUSDGroupByPayload<T extends TokenPriceUSDGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        & PickEnumerable<TokenPriceUSDGroupByOutputType, T["by"]>
        & {
          [P in ((keyof T) & (keyof TokenPriceUSDGroupByOutputType))]: P extends
            "_count" ? T[P] extends boolean ? number
            : GetScalarType<T[P], TokenPriceUSDGroupByOutputType[P]>
            : GetScalarType<T[P], TokenPriceUSDGroupByOutputType[P]>;
        }
      >
    >;

  export type TokenPriceUSDSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    tokenName?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["tokenPriceUSD"]>;

  export type TokenPriceUSDSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    tokenName?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["tokenPriceUSD"]>;

  export type TokenPriceUSDSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    tokenName?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["tokenPriceUSD"]>;

  export type TokenPriceUSDSelectScalar = {
    tokenName?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  };

  export type TokenPriceUSDOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "tokenName" | "chainId" | "data" | "updatedAt",
    ExtArgs["result"]["tokenPriceUSD"]
  >;

  export type $TokenPriceUSDPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "TokenPriceUSD";
    objects: {};
    scalars: $Extensions.GetPayloadResult<{
      tokenName: string;
      chainId: number;
      /**
       * The cached token price data stored as a JSON blob.
       */
      data: Prisma.JsonValue;
      updatedAt: Date;
    }, ExtArgs["result"]["tokenPriceUSD"]>;
    composites: {};
  };

  type TokenPriceUSDGetPayload<
    S extends boolean | null | undefined | TokenPriceUSDDefaultArgs,
  > = $Result.GetResult<Prisma.$TokenPriceUSDPayload, S>;

  type TokenPriceUSDCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > =
    & Omit<
      TokenPriceUSDFindManyArgs,
      "select" | "include" | "distinct" | "omit"
    >
    & {
      select?: TokenPriceUSDCountAggregateInputType | true;
    };

  export interface TokenPriceUSDDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["TokenPriceUSD"];
      meta: { name: "TokenPriceUSD" };
    };
    /**
     * Find zero or one TokenPriceUSD that matches the filter.
     * @param {TokenPriceUSDFindUniqueArgs} args - Arguments to find a TokenPriceUSD
     * @example
     * // Get one TokenPriceUSD
     * const tokenPriceUSD = await prisma.tokenPriceUSD.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenPriceUSDFindUniqueArgs>(
      args: SelectSubset<T, TokenPriceUSDFindUniqueArgs<ExtArgs>>,
    ): Prisma__TokenPriceUSDClient<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one TokenPriceUSD that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenPriceUSDFindUniqueOrThrowArgs} args - Arguments to find a TokenPriceUSD
     * @example
     * // Get one TokenPriceUSD
     * const tokenPriceUSD = await prisma.tokenPriceUSD.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenPriceUSDFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TokenPriceUSDFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TokenPriceUSDClient<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first TokenPriceUSD that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPriceUSDFindFirstArgs} args - Arguments to find a TokenPriceUSD
     * @example
     * // Get one TokenPriceUSD
     * const tokenPriceUSD = await prisma.tokenPriceUSD.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenPriceUSDFindFirstArgs>(
      args?: SelectSubset<T, TokenPriceUSDFindFirstArgs<ExtArgs>>,
    ): Prisma__TokenPriceUSDClient<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first TokenPriceUSD that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPriceUSDFindFirstOrThrowArgs} args - Arguments to find a TokenPriceUSD
     * @example
     * // Get one TokenPriceUSD
     * const tokenPriceUSD = await prisma.tokenPriceUSD.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenPriceUSDFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TokenPriceUSDFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TokenPriceUSDClient<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more TokenPriceUSDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPriceUSDFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenPriceUSDS
     * const tokenPriceUSDS = await prisma.tokenPriceUSD.findMany()
     *
     * // Get first 10 TokenPriceUSDS
     * const tokenPriceUSDS = await prisma.tokenPriceUSD.findMany({ take: 10 })
     *
     * // Only select the `tokenName`
     * const tokenPriceUSDWithTokenNameOnly = await prisma.tokenPriceUSD.findMany({ select: { tokenName: true } })
     */
    findMany<T extends TokenPriceUSDFindManyArgs>(
      args?: SelectSubset<T, TokenPriceUSDFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a TokenPriceUSD.
     * @param {TokenPriceUSDCreateArgs} args - Arguments to create a TokenPriceUSD.
     * @example
     * // Create one TokenPriceUSD
     * const TokenPriceUSD = await prisma.tokenPriceUSD.create({
     *   data: {
     *     // ... data to create a TokenPriceUSD
     *   }
     * })
     */
    create<T extends TokenPriceUSDCreateArgs>(
      args: SelectSubset<T, TokenPriceUSDCreateArgs<ExtArgs>>,
    ): Prisma__TokenPriceUSDClient<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many TokenPriceUSDS.
     * @param {TokenPriceUSDCreateManyArgs} args - Arguments to create many TokenPriceUSDS.
     * @example
     * // Create many TokenPriceUSDS
     * const tokenPriceUSD = await prisma.tokenPriceUSD.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     */
    createMany<T extends TokenPriceUSDCreateManyArgs>(
      args?: SelectSubset<T, TokenPriceUSDCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TokenPriceUSDS and returns the data saved in the database.
     * @param {TokenPriceUSDCreateManyAndReturnArgs} args - Arguments to create many TokenPriceUSDS.
     * @example
     * // Create many TokenPriceUSDS
     * const tokenPriceUSD = await prisma.tokenPriceUSD.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TokenPriceUSDS and only return the `tokenName`
     * const tokenPriceUSDWithTokenNameOnly = await prisma.tokenPriceUSD.createManyAndReturn({
     *   select: { tokenName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    createManyAndReturn<T extends TokenPriceUSDCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TokenPriceUSDCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Delete a TokenPriceUSD.
     * @param {TokenPriceUSDDeleteArgs} args - Arguments to delete one TokenPriceUSD.
     * @example
     * // Delete one TokenPriceUSD
     * const TokenPriceUSD = await prisma.tokenPriceUSD.delete({
     *   where: {
     *     // ... filter to delete one TokenPriceUSD
     *   }
     * })
     */
    delete<T extends TokenPriceUSDDeleteArgs>(
      args: SelectSubset<T, TokenPriceUSDDeleteArgs<ExtArgs>>,
    ): Prisma__TokenPriceUSDClient<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one TokenPriceUSD.
     * @param {TokenPriceUSDUpdateArgs} args - Arguments to update one TokenPriceUSD.
     * @example
     * // Update one TokenPriceUSD
     * const tokenPriceUSD = await prisma.tokenPriceUSD.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends TokenPriceUSDUpdateArgs>(
      args: SelectSubset<T, TokenPriceUSDUpdateArgs<ExtArgs>>,
    ): Prisma__TokenPriceUSDClient<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more TokenPriceUSDS.
     * @param {TokenPriceUSDDeleteManyArgs} args - Arguments to filter TokenPriceUSDS to delete.
     * @example
     * // Delete a few TokenPriceUSDS
     * const { count } = await prisma.tokenPriceUSD.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends TokenPriceUSDDeleteManyArgs>(
      args?: SelectSubset<T, TokenPriceUSDDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TokenPriceUSDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPriceUSDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenPriceUSDS
     * const tokenPriceUSD = await prisma.tokenPriceUSD.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends TokenPriceUSDUpdateManyArgs>(
      args: SelectSubset<T, TokenPriceUSDUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TokenPriceUSDS and returns the data updated in the database.
     * @param {TokenPriceUSDUpdateManyAndReturnArgs} args - Arguments to update many TokenPriceUSDS.
     * @example
     * // Update many TokenPriceUSDS
     * const tokenPriceUSD = await prisma.tokenPriceUSD.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TokenPriceUSDS and only return the `tokenName`
     * const tokenPriceUSDWithTokenNameOnly = await prisma.tokenPriceUSD.updateManyAndReturn({
     *   select: { tokenName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    updateManyAndReturn<T extends TokenPriceUSDUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TokenPriceUSDUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Create or update one TokenPriceUSD.
     * @param {TokenPriceUSDUpsertArgs} args - Arguments to update or create a TokenPriceUSD.
     * @example
     * // Update or create a TokenPriceUSD
     * const tokenPriceUSD = await prisma.tokenPriceUSD.upsert({
     *   create: {
     *     // ... data to create a TokenPriceUSD
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenPriceUSD we want to update
     *   }
     * })
     */
    upsert<T extends TokenPriceUSDUpsertArgs>(
      args: SelectSubset<T, TokenPriceUSDUpsertArgs<ExtArgs>>,
    ): Prisma__TokenPriceUSDClient<
      $Result.GetResult<
        Prisma.$TokenPriceUSDPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of TokenPriceUSDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPriceUSDCountArgs} args - Arguments to filter TokenPriceUSDS to count.
     * @example
     * // Count the number of TokenPriceUSDS
     * const count = await prisma.tokenPriceUSD.count({
     *   where: {
     *     // ... the filter for the TokenPriceUSDS we want to count
     *   }
     * })
     */
    count<T extends TokenPriceUSDCountArgs>(
      args?: Subset<T, TokenPriceUSDCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<T["select"], TokenPriceUSDCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TokenPriceUSD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPriceUSDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends TokenPriceUSDAggregateArgs>(
      args: Subset<T, TokenPriceUSDAggregateArgs>,
    ): Prisma.PrismaPromise<GetTokenPriceUSDAggregateType<T>>;

    /**
     * Group by TokenPriceUSD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPriceUSDGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     */
    groupBy<
      T extends TokenPriceUSDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenPriceUSDGroupByArgs["orderBy"] }
        : { orderBy?: TokenPriceUSDGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args:
        & SubsetIntersection<T, TokenPriceUSDGroupByArgs, OrderByArg>
        & InputErrors,
    ): {} extends InputErrors ? GetTokenPriceUSDGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TokenPriceUSD model
     */
    readonly fields: TokenPriceUSDFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenPriceUSD.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenPriceUSDClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TokenPriceUSD model
   */
  interface TokenPriceUSDFieldRefs {
    readonly tokenName: FieldRef<"TokenPriceUSD", "String">;
    readonly chainId: FieldRef<"TokenPriceUSD", "Int">;
    readonly data: FieldRef<"TokenPriceUSD", "Json">;
    readonly updatedAt: FieldRef<"TokenPriceUSD", "DateTime">;
  }

  // Custom InputTypes
  /**
   * TokenPriceUSD findUnique
   */
  export type TokenPriceUSDFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * Filter, which TokenPriceUSD to fetch.
     */
    where: TokenPriceUSDWhereUniqueInput;
  };

  /**
   * TokenPriceUSD findUniqueOrThrow
   */
  export type TokenPriceUSDFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * Filter, which TokenPriceUSD to fetch.
     */
    where: TokenPriceUSDWhereUniqueInput;
  };

  /**
   * TokenPriceUSD findFirst
   */
  export type TokenPriceUSDFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * Filter, which TokenPriceUSD to fetch.
     */
    where?: TokenPriceUSDWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TokenPriceUSDS to fetch.
     */
    orderBy?:
      | TokenPriceUSDOrderByWithRelationInput
      | TokenPriceUSDOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TokenPriceUSDS.
     */
    cursor?: TokenPriceUSDWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TokenPriceUSDS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TokenPriceUSDS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TokenPriceUSDS.
     */
    distinct?: TokenPriceUSDScalarFieldEnum | TokenPriceUSDScalarFieldEnum[];
  };

  /**
   * TokenPriceUSD findFirstOrThrow
   */
  export type TokenPriceUSDFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * Filter, which TokenPriceUSD to fetch.
     */
    where?: TokenPriceUSDWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TokenPriceUSDS to fetch.
     */
    orderBy?:
      | TokenPriceUSDOrderByWithRelationInput
      | TokenPriceUSDOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TokenPriceUSDS.
     */
    cursor?: TokenPriceUSDWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TokenPriceUSDS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TokenPriceUSDS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TokenPriceUSDS.
     */
    distinct?: TokenPriceUSDScalarFieldEnum | TokenPriceUSDScalarFieldEnum[];
  };

  /**
   * TokenPriceUSD findMany
   */
  export type TokenPriceUSDFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * Filter, which TokenPriceUSDS to fetch.
     */
    where?: TokenPriceUSDWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TokenPriceUSDS to fetch.
     */
    orderBy?:
      | TokenPriceUSDOrderByWithRelationInput
      | TokenPriceUSDOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TokenPriceUSDS.
     */
    cursor?: TokenPriceUSDWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TokenPriceUSDS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TokenPriceUSDS.
     */
    skip?: number;
    distinct?: TokenPriceUSDScalarFieldEnum | TokenPriceUSDScalarFieldEnum[];
  };

  /**
   * TokenPriceUSD create
   */
  export type TokenPriceUSDCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * The data needed to create a TokenPriceUSD.
     */
    data: XOR<TokenPriceUSDCreateInput, TokenPriceUSDUncheckedCreateInput>;
  };

  /**
   * TokenPriceUSD createMany
   */
  export type TokenPriceUSDCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TokenPriceUSDS.
     */
    data: TokenPriceUSDCreateManyInput | TokenPriceUSDCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TokenPriceUSD createManyAndReturn
   */
  export type TokenPriceUSDCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * The data used to create many TokenPriceUSDS.
     */
    data: TokenPriceUSDCreateManyInput | TokenPriceUSDCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TokenPriceUSD update
   */
  export type TokenPriceUSDUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * The data needed to update a TokenPriceUSD.
     */
    data: XOR<TokenPriceUSDUpdateInput, TokenPriceUSDUncheckedUpdateInput>;
    /**
     * Choose, which TokenPriceUSD to update.
     */
    where: TokenPriceUSDWhereUniqueInput;
  };

  /**
   * TokenPriceUSD updateMany
   */
  export type TokenPriceUSDUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TokenPriceUSDS.
     */
    data: XOR<
      TokenPriceUSDUpdateManyMutationInput,
      TokenPriceUSDUncheckedUpdateManyInput
    >;
    /**
     * Filter which TokenPriceUSDS to update
     */
    where?: TokenPriceUSDWhereInput;
    /**
     * Limit how many TokenPriceUSDS to update.
     */
    limit?: number;
  };

  /**
   * TokenPriceUSD updateManyAndReturn
   */
  export type TokenPriceUSDUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * The data used to update TokenPriceUSDS.
     */
    data: XOR<
      TokenPriceUSDUpdateManyMutationInput,
      TokenPriceUSDUncheckedUpdateManyInput
    >;
    /**
     * Filter which TokenPriceUSDS to update
     */
    where?: TokenPriceUSDWhereInput;
    /**
     * Limit how many TokenPriceUSDS to update.
     */
    limit?: number;
  };

  /**
   * TokenPriceUSD upsert
   */
  export type TokenPriceUSDUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * The filter to search for the TokenPriceUSD to update in case it exists.
     */
    where: TokenPriceUSDWhereUniqueInput;
    /**
     * In case the TokenPriceUSD found by the `where` argument doesn't exist, create a new TokenPriceUSD with this data.
     */
    create: XOR<TokenPriceUSDCreateInput, TokenPriceUSDUncheckedCreateInput>;
    /**
     * In case the TokenPriceUSD was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenPriceUSDUpdateInput, TokenPriceUSDUncheckedUpdateInput>;
  };

  /**
   * TokenPriceUSD delete
   */
  export type TokenPriceUSDDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
    /**
     * Filter which TokenPriceUSD to delete.
     */
    where: TokenPriceUSDWhereUniqueInput;
  };

  /**
   * TokenPriceUSD deleteMany
   */
  export type TokenPriceUSDDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TokenPriceUSDS to delete
     */
    where?: TokenPriceUSDWhereInput;
    /**
     * Limit how many TokenPriceUSDS to delete.
     */
    limit?: number;
  };

  /**
   * TokenPriceUSD without action
   */
  export type TokenPriceUSDDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenPriceUSD
     */
    select?: TokenPriceUSDSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenPriceUSD
     */
    omit?: TokenPriceUSDOmit<ExtArgs> | null;
  };

  /**
   * Model CoinGeckoApiName
   */

  export type AggregateCoinGeckoApiName = {
    _count: CoinGeckoApiNameCountAggregateOutputType | null;
    _min: CoinGeckoApiNameMinAggregateOutputType | null;
    _max: CoinGeckoApiNameMaxAggregateOutputType | null;
  };

  export type CoinGeckoApiNameMinAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
  };

  export type CoinGeckoApiNameMaxAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
  };

  export type CoinGeckoApiNameCountAggregateOutputType = {
    id: number;
    data: number;
    updatedAt: number;
    _all: number;
  };

  export type CoinGeckoApiNameMinAggregateInputType = {
    id?: true;
    updatedAt?: true;
  };

  export type CoinGeckoApiNameMaxAggregateInputType = {
    id?: true;
    updatedAt?: true;
  };

  export type CoinGeckoApiNameCountAggregateInputType = {
    id?: true;
    data?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CoinGeckoApiNameAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CoinGeckoApiName to aggregate.
     */
    where?: CoinGeckoApiNameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoApiNames to fetch.
     */
    orderBy?:
      | CoinGeckoApiNameOrderByWithRelationInput
      | CoinGeckoApiNameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CoinGeckoApiNameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoApiNames from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoApiNames.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CoinGeckoApiNames
     */
    _count?: true | CoinGeckoApiNameCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: CoinGeckoApiNameMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: CoinGeckoApiNameMaxAggregateInputType;
  };

  export type GetCoinGeckoApiNameAggregateType<
    T extends CoinGeckoApiNameAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCoinGeckoApiName]: P extends
      "_count" | "count" ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateCoinGeckoApiName[P]>
      : GetScalarType<T[P], AggregateCoinGeckoApiName[P]>;
  };

  export type CoinGeckoApiNameGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CoinGeckoApiNameWhereInput;
    orderBy?:
      | CoinGeckoApiNameOrderByWithAggregationInput
      | CoinGeckoApiNameOrderByWithAggregationInput[];
    by: CoinGeckoApiNameScalarFieldEnum[] | CoinGeckoApiNameScalarFieldEnum;
    having?: CoinGeckoApiNameScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CoinGeckoApiNameCountAggregateInputType | true;
    _min?: CoinGeckoApiNameMinAggregateInputType;
    _max?: CoinGeckoApiNameMaxAggregateInputType;
  };

  export type CoinGeckoApiNameGroupByOutputType = {
    id: string;
    data: JsonValue;
    updatedAt: Date;
    _count: CoinGeckoApiNameCountAggregateOutputType | null;
    _min: CoinGeckoApiNameMinAggregateOutputType | null;
    _max: CoinGeckoApiNameMaxAggregateOutputType | null;
  };

  type GetCoinGeckoApiNameGroupByPayload<
    T extends CoinGeckoApiNameGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      & PickEnumerable<CoinGeckoApiNameGroupByOutputType, T["by"]>
      & {
        [P in ((keyof T) & (keyof CoinGeckoApiNameGroupByOutputType))]:
          P extends "_count" ? T[P] extends boolean ? number
            : GetScalarType<T[P], CoinGeckoApiNameGroupByOutputType[P]>
            : GetScalarType<T[P], CoinGeckoApiNameGroupByOutputType[P]>;
      }
    >
  >;

  export type CoinGeckoApiNameSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoApiName"]>;

  export type CoinGeckoApiNameSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoApiName"]>;

  export type CoinGeckoApiNameSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoApiName"]>;

  export type CoinGeckoApiNameSelectScalar = {
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  };

  export type CoinGeckoApiNameOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "data" | "updatedAt",
    ExtArgs["result"]["coinGeckoApiName"]
  >;

  export type $CoinGeckoApiNamePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "CoinGeckoApiName";
    objects: {};
    scalars: $Extensions.GetPayloadResult<{
      id: string;
      /**
       * The entire CoinGecko API names blob.
       */
      data: Prisma.JsonValue;
      updatedAt: Date;
    }, ExtArgs["result"]["coinGeckoApiName"]>;
    composites: {};
  };

  type CoinGeckoApiNameGetPayload<
    S extends boolean | null | undefined | CoinGeckoApiNameDefaultArgs,
  > = $Result.GetResult<Prisma.$CoinGeckoApiNamePayload, S>;

  type CoinGeckoApiNameCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > =
    & Omit<
      CoinGeckoApiNameFindManyArgs,
      "select" | "include" | "distinct" | "omit"
    >
    & {
      select?: CoinGeckoApiNameCountAggregateInputType | true;
    };

  export interface CoinGeckoApiNameDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CoinGeckoApiName"];
      meta: { name: "CoinGeckoApiName" };
    };
    /**
     * Find zero or one CoinGeckoApiName that matches the filter.
     * @param {CoinGeckoApiNameFindUniqueArgs} args - Arguments to find a CoinGeckoApiName
     * @example
     * // Get one CoinGeckoApiName
     * const coinGeckoApiName = await prisma.coinGeckoApiName.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinGeckoApiNameFindUniqueArgs>(
      args: SelectSubset<T, CoinGeckoApiNameFindUniqueArgs<ExtArgs>>,
    ): Prisma__CoinGeckoApiNameClient<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one CoinGeckoApiName that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinGeckoApiNameFindUniqueOrThrowArgs} args - Arguments to find a CoinGeckoApiName
     * @example
     * // Get one CoinGeckoApiName
     * const coinGeckoApiName = await prisma.coinGeckoApiName.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinGeckoApiNameFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CoinGeckoApiNameFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CoinGeckoApiNameClient<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first CoinGeckoApiName that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoApiNameFindFirstArgs} args - Arguments to find a CoinGeckoApiName
     * @example
     * // Get one CoinGeckoApiName
     * const coinGeckoApiName = await prisma.coinGeckoApiName.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinGeckoApiNameFindFirstArgs>(
      args?: SelectSubset<T, CoinGeckoApiNameFindFirstArgs<ExtArgs>>,
    ): Prisma__CoinGeckoApiNameClient<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first CoinGeckoApiName that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoApiNameFindFirstOrThrowArgs} args - Arguments to find a CoinGeckoApiName
     * @example
     * // Get one CoinGeckoApiName
     * const coinGeckoApiName = await prisma.coinGeckoApiName.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinGeckoApiNameFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CoinGeckoApiNameFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CoinGeckoApiNameClient<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more CoinGeckoApiNames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoApiNameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinGeckoApiNames
     * const coinGeckoApiNames = await prisma.coinGeckoApiName.findMany()
     *
     * // Get first 10 CoinGeckoApiNames
     * const coinGeckoApiNames = await prisma.coinGeckoApiName.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const coinGeckoApiNameWithIdOnly = await prisma.coinGeckoApiName.findMany({ select: { id: true } })
     */
    findMany<T extends CoinGeckoApiNameFindManyArgs>(
      args?: SelectSubset<T, CoinGeckoApiNameFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a CoinGeckoApiName.
     * @param {CoinGeckoApiNameCreateArgs} args - Arguments to create a CoinGeckoApiName.
     * @example
     * // Create one CoinGeckoApiName
     * const CoinGeckoApiName = await prisma.coinGeckoApiName.create({
     *   data: {
     *     // ... data to create a CoinGeckoApiName
     *   }
     * })
     */
    create<T extends CoinGeckoApiNameCreateArgs>(
      args: SelectSubset<T, CoinGeckoApiNameCreateArgs<ExtArgs>>,
    ): Prisma__CoinGeckoApiNameClient<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many CoinGeckoApiNames.
     * @param {CoinGeckoApiNameCreateManyArgs} args - Arguments to create many CoinGeckoApiNames.
     * @example
     * // Create many CoinGeckoApiNames
     * const coinGeckoApiName = await prisma.coinGeckoApiName.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     */
    createMany<T extends CoinGeckoApiNameCreateManyArgs>(
      args?: SelectSubset<T, CoinGeckoApiNameCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CoinGeckoApiNames and returns the data saved in the database.
     * @param {CoinGeckoApiNameCreateManyAndReturnArgs} args - Arguments to create many CoinGeckoApiNames.
     * @example
     * // Create many CoinGeckoApiNames
     * const coinGeckoApiName = await prisma.coinGeckoApiName.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CoinGeckoApiNames and only return the `id`
     * const coinGeckoApiNameWithIdOnly = await prisma.coinGeckoApiName.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    createManyAndReturn<T extends CoinGeckoApiNameCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CoinGeckoApiNameCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Delete a CoinGeckoApiName.
     * @param {CoinGeckoApiNameDeleteArgs} args - Arguments to delete one CoinGeckoApiName.
     * @example
     * // Delete one CoinGeckoApiName
     * const CoinGeckoApiName = await prisma.coinGeckoApiName.delete({
     *   where: {
     *     // ... filter to delete one CoinGeckoApiName
     *   }
     * })
     */
    delete<T extends CoinGeckoApiNameDeleteArgs>(
      args: SelectSubset<T, CoinGeckoApiNameDeleteArgs<ExtArgs>>,
    ): Prisma__CoinGeckoApiNameClient<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one CoinGeckoApiName.
     * @param {CoinGeckoApiNameUpdateArgs} args - Arguments to update one CoinGeckoApiName.
     * @example
     * // Update one CoinGeckoApiName
     * const coinGeckoApiName = await prisma.coinGeckoApiName.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends CoinGeckoApiNameUpdateArgs>(
      args: SelectSubset<T, CoinGeckoApiNameUpdateArgs<ExtArgs>>,
    ): Prisma__CoinGeckoApiNameClient<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more CoinGeckoApiNames.
     * @param {CoinGeckoApiNameDeleteManyArgs} args - Arguments to filter CoinGeckoApiNames to delete.
     * @example
     * // Delete a few CoinGeckoApiNames
     * const { count } = await prisma.coinGeckoApiName.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends CoinGeckoApiNameDeleteManyArgs>(
      args?: SelectSubset<T, CoinGeckoApiNameDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CoinGeckoApiNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoApiNameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinGeckoApiNames
     * const coinGeckoApiName = await prisma.coinGeckoApiName.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends CoinGeckoApiNameUpdateManyArgs>(
      args: SelectSubset<T, CoinGeckoApiNameUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CoinGeckoApiNames and returns the data updated in the database.
     * @param {CoinGeckoApiNameUpdateManyAndReturnArgs} args - Arguments to update many CoinGeckoApiNames.
     * @example
     * // Update many CoinGeckoApiNames
     * const coinGeckoApiName = await prisma.coinGeckoApiName.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CoinGeckoApiNames and only return the `id`
     * const coinGeckoApiNameWithIdOnly = await prisma.coinGeckoApiName.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    updateManyAndReturn<T extends CoinGeckoApiNameUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CoinGeckoApiNameUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Create or update one CoinGeckoApiName.
     * @param {CoinGeckoApiNameUpsertArgs} args - Arguments to update or create a CoinGeckoApiName.
     * @example
     * // Update or create a CoinGeckoApiName
     * const coinGeckoApiName = await prisma.coinGeckoApiName.upsert({
     *   create: {
     *     // ... data to create a CoinGeckoApiName
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinGeckoApiName we want to update
     *   }
     * })
     */
    upsert<T extends CoinGeckoApiNameUpsertArgs>(
      args: SelectSubset<T, CoinGeckoApiNameUpsertArgs<ExtArgs>>,
    ): Prisma__CoinGeckoApiNameClient<
      $Result.GetResult<
        Prisma.$CoinGeckoApiNamePayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of CoinGeckoApiNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoApiNameCountArgs} args - Arguments to filter CoinGeckoApiNames to count.
     * @example
     * // Count the number of CoinGeckoApiNames
     * const count = await prisma.coinGeckoApiName.count({
     *   where: {
     *     // ... the filter for the CoinGeckoApiNames we want to count
     *   }
     * })
     */
    count<T extends CoinGeckoApiNameCountArgs>(
      args?: Subset<T, CoinGeckoApiNameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<T["select"], CoinGeckoApiNameCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CoinGeckoApiName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoApiNameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends CoinGeckoApiNameAggregateArgs>(
      args: Subset<T, CoinGeckoApiNameAggregateArgs>,
    ): Prisma.PrismaPromise<GetCoinGeckoApiNameAggregateType<T>>;

    /**
     * Group by CoinGeckoApiName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoApiNameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     */
    groupBy<
      T extends CoinGeckoApiNameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinGeckoApiNameGroupByArgs["orderBy"] }
        : { orderBy?: CoinGeckoApiNameGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args:
        & SubsetIntersection<T, CoinGeckoApiNameGroupByArgs, OrderByArg>
        & InputErrors,
    ): {} extends InputErrors ? GetCoinGeckoApiNameGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CoinGeckoApiName model
     */
    readonly fields: CoinGeckoApiNameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinGeckoApiName.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinGeckoApiNameClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CoinGeckoApiName model
   */
  interface CoinGeckoApiNameFieldRefs {
    readonly id: FieldRef<"CoinGeckoApiName", "String">;
    readonly data: FieldRef<"CoinGeckoApiName", "Json">;
    readonly updatedAt: FieldRef<"CoinGeckoApiName", "DateTime">;
  }

  // Custom InputTypes
  /**
   * CoinGeckoApiName findUnique
   */
  export type CoinGeckoApiNameFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoApiName to fetch.
     */
    where: CoinGeckoApiNameWhereUniqueInput;
  };

  /**
   * CoinGeckoApiName findUniqueOrThrow
   */
  export type CoinGeckoApiNameFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoApiName to fetch.
     */
    where: CoinGeckoApiNameWhereUniqueInput;
  };

  /**
   * CoinGeckoApiName findFirst
   */
  export type CoinGeckoApiNameFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoApiName to fetch.
     */
    where?: CoinGeckoApiNameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoApiNames to fetch.
     */
    orderBy?:
      | CoinGeckoApiNameOrderByWithRelationInput
      | CoinGeckoApiNameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoinGeckoApiNames.
     */
    cursor?: CoinGeckoApiNameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoApiNames from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoApiNames.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoinGeckoApiNames.
     */
    distinct?:
      | CoinGeckoApiNameScalarFieldEnum
      | CoinGeckoApiNameScalarFieldEnum[];
  };

  /**
   * CoinGeckoApiName findFirstOrThrow
   */
  export type CoinGeckoApiNameFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoApiName to fetch.
     */
    where?: CoinGeckoApiNameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoApiNames to fetch.
     */
    orderBy?:
      | CoinGeckoApiNameOrderByWithRelationInput
      | CoinGeckoApiNameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoinGeckoApiNames.
     */
    cursor?: CoinGeckoApiNameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoApiNames from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoApiNames.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoinGeckoApiNames.
     */
    distinct?:
      | CoinGeckoApiNameScalarFieldEnum
      | CoinGeckoApiNameScalarFieldEnum[];
  };

  /**
   * CoinGeckoApiName findMany
   */
  export type CoinGeckoApiNameFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoApiNames to fetch.
     */
    where?: CoinGeckoApiNameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoApiNames to fetch.
     */
    orderBy?:
      | CoinGeckoApiNameOrderByWithRelationInput
      | CoinGeckoApiNameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CoinGeckoApiNames.
     */
    cursor?: CoinGeckoApiNameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoApiNames from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoApiNames.
     */
    skip?: number;
    distinct?:
      | CoinGeckoApiNameScalarFieldEnum
      | CoinGeckoApiNameScalarFieldEnum[];
  };

  /**
   * CoinGeckoApiName create
   */
  export type CoinGeckoApiNameCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * The data needed to create a CoinGeckoApiName.
     */
    data: XOR<
      CoinGeckoApiNameCreateInput,
      CoinGeckoApiNameUncheckedCreateInput
    >;
  };

  /**
   * CoinGeckoApiName createMany
   */
  export type CoinGeckoApiNameCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CoinGeckoApiNames.
     */
    data: CoinGeckoApiNameCreateManyInput | CoinGeckoApiNameCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CoinGeckoApiName createManyAndReturn
   */
  export type CoinGeckoApiNameCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * The data used to create many CoinGeckoApiNames.
     */
    data: CoinGeckoApiNameCreateManyInput | CoinGeckoApiNameCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CoinGeckoApiName update
   */
  export type CoinGeckoApiNameUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * The data needed to update a CoinGeckoApiName.
     */
    data: XOR<
      CoinGeckoApiNameUpdateInput,
      CoinGeckoApiNameUncheckedUpdateInput
    >;
    /**
     * Choose, which CoinGeckoApiName to update.
     */
    where: CoinGeckoApiNameWhereUniqueInput;
  };

  /**
   * CoinGeckoApiName updateMany
   */
  export type CoinGeckoApiNameUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CoinGeckoApiNames.
     */
    data: XOR<
      CoinGeckoApiNameUpdateManyMutationInput,
      CoinGeckoApiNameUncheckedUpdateManyInput
    >;
    /**
     * Filter which CoinGeckoApiNames to update
     */
    where?: CoinGeckoApiNameWhereInput;
    /**
     * Limit how many CoinGeckoApiNames to update.
     */
    limit?: number;
  };

  /**
   * CoinGeckoApiName updateManyAndReturn
   */
  export type CoinGeckoApiNameUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * The data used to update CoinGeckoApiNames.
     */
    data: XOR<
      CoinGeckoApiNameUpdateManyMutationInput,
      CoinGeckoApiNameUncheckedUpdateManyInput
    >;
    /**
     * Filter which CoinGeckoApiNames to update
     */
    where?: CoinGeckoApiNameWhereInput;
    /**
     * Limit how many CoinGeckoApiNames to update.
     */
    limit?: number;
  };

  /**
   * CoinGeckoApiName upsert
   */
  export type CoinGeckoApiNameUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * The filter to search for the CoinGeckoApiName to update in case it exists.
     */
    where: CoinGeckoApiNameWhereUniqueInput;
    /**
     * In case the CoinGeckoApiName found by the `where` argument doesn't exist, create a new CoinGeckoApiName with this data.
     */
    create: XOR<
      CoinGeckoApiNameCreateInput,
      CoinGeckoApiNameUncheckedCreateInput
    >;
    /**
     * In case the CoinGeckoApiName was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      CoinGeckoApiNameUpdateInput,
      CoinGeckoApiNameUncheckedUpdateInput
    >;
  };

  /**
   * CoinGeckoApiName delete
   */
  export type CoinGeckoApiNameDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
    /**
     * Filter which CoinGeckoApiName to delete.
     */
    where: CoinGeckoApiNameWhereUniqueInput;
  };

  /**
   * CoinGeckoApiName deleteMany
   */
  export type CoinGeckoApiNameDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CoinGeckoApiNames to delete
     */
    where?: CoinGeckoApiNameWhereInput;
    /**
     * Limit how many CoinGeckoApiNames to delete.
     */
    limit?: number;
  };

  /**
   * CoinGeckoApiName without action
   */
  export type CoinGeckoApiNameDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoApiName
     */
    select?: CoinGeckoApiNameSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoApiName
     */
    omit?: CoinGeckoApiNameOmit<ExtArgs> | null;
  };

  /**
   * Model CoinGeckoTokenDetail
   */

  export type AggregateCoinGeckoTokenDetail = {
    _count: CoinGeckoTokenDetailCountAggregateOutputType | null;
    _min: CoinGeckoTokenDetailMinAggregateOutputType | null;
    _max: CoinGeckoTokenDetailMaxAggregateOutputType | null;
  };

  export type CoinGeckoTokenDetailMinAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
  };

  export type CoinGeckoTokenDetailMaxAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
  };

  export type CoinGeckoTokenDetailCountAggregateOutputType = {
    id: number;
    data: number;
    updatedAt: number;
    _all: number;
  };

  export type CoinGeckoTokenDetailMinAggregateInputType = {
    id?: true;
    updatedAt?: true;
  };

  export type CoinGeckoTokenDetailMaxAggregateInputType = {
    id?: true;
    updatedAt?: true;
  };

  export type CoinGeckoTokenDetailCountAggregateInputType = {
    id?: true;
    data?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CoinGeckoTokenDetailAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CoinGeckoTokenDetail to aggregate.
     */
    where?: CoinGeckoTokenDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoTokenDetails to fetch.
     */
    orderBy?:
      | CoinGeckoTokenDetailOrderByWithRelationInput
      | CoinGeckoTokenDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CoinGeckoTokenDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoTokenDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoTokenDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CoinGeckoTokenDetails
     */
    _count?: true | CoinGeckoTokenDetailCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: CoinGeckoTokenDetailMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: CoinGeckoTokenDetailMaxAggregateInputType;
  };

  export type GetCoinGeckoTokenDetailAggregateType<
    T extends CoinGeckoTokenDetailAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCoinGeckoTokenDetail]: P extends
      "_count" | "count" ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateCoinGeckoTokenDetail[P]>
      : GetScalarType<T[P], AggregateCoinGeckoTokenDetail[P]>;
  };

  export type CoinGeckoTokenDetailGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CoinGeckoTokenDetailWhereInput;
    orderBy?:
      | CoinGeckoTokenDetailOrderByWithAggregationInput
      | CoinGeckoTokenDetailOrderByWithAggregationInput[];
    by:
      | CoinGeckoTokenDetailScalarFieldEnum[]
      | CoinGeckoTokenDetailScalarFieldEnum;
    having?: CoinGeckoTokenDetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CoinGeckoTokenDetailCountAggregateInputType | true;
    _min?: CoinGeckoTokenDetailMinAggregateInputType;
    _max?: CoinGeckoTokenDetailMaxAggregateInputType;
  };

  export type CoinGeckoTokenDetailGroupByOutputType = {
    id: string;
    data: JsonValue;
    updatedAt: Date;
    _count: CoinGeckoTokenDetailCountAggregateOutputType | null;
    _min: CoinGeckoTokenDetailMinAggregateOutputType | null;
    _max: CoinGeckoTokenDetailMaxAggregateOutputType | null;
  };

  type GetCoinGeckoTokenDetailGroupByPayload<
    T extends CoinGeckoTokenDetailGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      & PickEnumerable<CoinGeckoTokenDetailGroupByOutputType, T["by"]>
      & {
        [P in ((keyof T) & (keyof CoinGeckoTokenDetailGroupByOutputType))]:
          P extends "_count" ? T[P] extends boolean ? number
            : GetScalarType<T[P], CoinGeckoTokenDetailGroupByOutputType[P]>
            : GetScalarType<T[P], CoinGeckoTokenDetailGroupByOutputType[P]>;
      }
    >
  >;

  export type CoinGeckoTokenDetailSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoTokenDetail"]>;

  export type CoinGeckoTokenDetailSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoTokenDetail"]>;

  export type CoinGeckoTokenDetailSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoTokenDetail"]>;

  export type CoinGeckoTokenDetailSelectScalar = {
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  };

  export type CoinGeckoTokenDetailOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "data" | "updatedAt",
    ExtArgs["result"]["coinGeckoTokenDetail"]
  >;

  export type $CoinGeckoTokenDetailPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "CoinGeckoTokenDetail";
    objects: {};
    scalars: $Extensions.GetPayloadResult<{
      id: string;
      data: Prisma.JsonValue;
      updatedAt: Date;
    }, ExtArgs["result"]["coinGeckoTokenDetail"]>;
    composites: {};
  };

  type CoinGeckoTokenDetailGetPayload<
    S extends boolean | null | undefined | CoinGeckoTokenDetailDefaultArgs,
  > = $Result.GetResult<Prisma.$CoinGeckoTokenDetailPayload, S>;

  type CoinGeckoTokenDetailCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > =
    & Omit<
      CoinGeckoTokenDetailFindManyArgs,
      "select" | "include" | "distinct" | "omit"
    >
    & {
      select?: CoinGeckoTokenDetailCountAggregateInputType | true;
    };

  export interface CoinGeckoTokenDetailDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CoinGeckoTokenDetail"];
      meta: { name: "CoinGeckoTokenDetail" };
    };
    /**
     * Find zero or one CoinGeckoTokenDetail that matches the filter.
     * @param {CoinGeckoTokenDetailFindUniqueArgs} args - Arguments to find a CoinGeckoTokenDetail
     * @example
     * // Get one CoinGeckoTokenDetail
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinGeckoTokenDetailFindUniqueArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailFindUniqueArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one CoinGeckoTokenDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinGeckoTokenDetailFindUniqueOrThrowArgs} args - Arguments to find a CoinGeckoTokenDetail
     * @example
     * // Get one CoinGeckoTokenDetail
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinGeckoTokenDetailFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first CoinGeckoTokenDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailFindFirstArgs} args - Arguments to find a CoinGeckoTokenDetail
     * @example
     * // Get one CoinGeckoTokenDetail
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinGeckoTokenDetailFindFirstArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailFindFirstArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first CoinGeckoTokenDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailFindFirstOrThrowArgs} args - Arguments to find a CoinGeckoTokenDetail
     * @example
     * // Get one CoinGeckoTokenDetail
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinGeckoTokenDetailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more CoinGeckoTokenDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinGeckoTokenDetails
     * const coinGeckoTokenDetails = await prisma.coinGeckoTokenDetail.findMany()
     *
     * // Get first 10 CoinGeckoTokenDetails
     * const coinGeckoTokenDetails = await prisma.coinGeckoTokenDetail.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const coinGeckoTokenDetailWithIdOnly = await prisma.coinGeckoTokenDetail.findMany({ select: { id: true } })
     */
    findMany<T extends CoinGeckoTokenDetailFindManyArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a CoinGeckoTokenDetail.
     * @param {CoinGeckoTokenDetailCreateArgs} args - Arguments to create a CoinGeckoTokenDetail.
     * @example
     * // Create one CoinGeckoTokenDetail
     * const CoinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.create({
     *   data: {
     *     // ... data to create a CoinGeckoTokenDetail
     *   }
     * })
     */
    create<T extends CoinGeckoTokenDetailCreateArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailCreateArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many CoinGeckoTokenDetails.
     * @param {CoinGeckoTokenDetailCreateManyArgs} args - Arguments to create many CoinGeckoTokenDetails.
     * @example
     * // Create many CoinGeckoTokenDetails
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     */
    createMany<T extends CoinGeckoTokenDetailCreateManyArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CoinGeckoTokenDetails and returns the data saved in the database.
     * @param {CoinGeckoTokenDetailCreateManyAndReturnArgs} args - Arguments to create many CoinGeckoTokenDetails.
     * @example
     * // Create many CoinGeckoTokenDetails
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CoinGeckoTokenDetails and only return the `id`
     * const coinGeckoTokenDetailWithIdOnly = await prisma.coinGeckoTokenDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    createManyAndReturn<T extends CoinGeckoTokenDetailCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        CoinGeckoTokenDetailCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Delete a CoinGeckoTokenDetail.
     * @param {CoinGeckoTokenDetailDeleteArgs} args - Arguments to delete one CoinGeckoTokenDetail.
     * @example
     * // Delete one CoinGeckoTokenDetail
     * const CoinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.delete({
     *   where: {
     *     // ... filter to delete one CoinGeckoTokenDetail
     *   }
     * })
     */
    delete<T extends CoinGeckoTokenDetailDeleteArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailDeleteArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one CoinGeckoTokenDetail.
     * @param {CoinGeckoTokenDetailUpdateArgs} args - Arguments to update one CoinGeckoTokenDetail.
     * @example
     * // Update one CoinGeckoTokenDetail
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends CoinGeckoTokenDetailUpdateArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailUpdateArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more CoinGeckoTokenDetails.
     * @param {CoinGeckoTokenDetailDeleteManyArgs} args - Arguments to filter CoinGeckoTokenDetails to delete.
     * @example
     * // Delete a few CoinGeckoTokenDetails
     * const { count } = await prisma.coinGeckoTokenDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends CoinGeckoTokenDetailDeleteManyArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CoinGeckoTokenDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinGeckoTokenDetails
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends CoinGeckoTokenDetailUpdateManyArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CoinGeckoTokenDetails and returns the data updated in the database.
     * @param {CoinGeckoTokenDetailUpdateManyAndReturnArgs} args - Arguments to update many CoinGeckoTokenDetails.
     * @example
     * // Update many CoinGeckoTokenDetails
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CoinGeckoTokenDetails and only return the `id`
     * const coinGeckoTokenDetailWithIdOnly = await prisma.coinGeckoTokenDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    updateManyAndReturn<T extends CoinGeckoTokenDetailUpdateManyAndReturnArgs>(
      args: SelectSubset<
        T,
        CoinGeckoTokenDetailUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Create or update one CoinGeckoTokenDetail.
     * @param {CoinGeckoTokenDetailUpsertArgs} args - Arguments to update or create a CoinGeckoTokenDetail.
     * @example
     * // Update or create a CoinGeckoTokenDetail
     * const coinGeckoTokenDetail = await prisma.coinGeckoTokenDetail.upsert({
     *   create: {
     *     // ... data to create a CoinGeckoTokenDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinGeckoTokenDetail we want to update
     *   }
     * })
     */
    upsert<T extends CoinGeckoTokenDetailUpsertArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailUpsertArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of CoinGeckoTokenDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailCountArgs} args - Arguments to filter CoinGeckoTokenDetails to count.
     * @example
     * // Count the number of CoinGeckoTokenDetails
     * const count = await prisma.coinGeckoTokenDetail.count({
     *   where: {
     *     // ... the filter for the CoinGeckoTokenDetails we want to count
     *   }
     * })
     */
    count<T extends CoinGeckoTokenDetailCountArgs>(
      args?: Subset<T, CoinGeckoTokenDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<
          T["select"],
          CoinGeckoTokenDetailCountAggregateOutputType
        >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CoinGeckoTokenDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends CoinGeckoTokenDetailAggregateArgs>(
      args: Subset<T, CoinGeckoTokenDetailAggregateArgs>,
    ): Prisma.PrismaPromise<GetCoinGeckoTokenDetailAggregateType<T>>;

    /**
     * Group by CoinGeckoTokenDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     */
    groupBy<
      T extends CoinGeckoTokenDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinGeckoTokenDetailGroupByArgs["orderBy"] }
        : { orderBy?: CoinGeckoTokenDetailGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args:
        & SubsetIntersection<T, CoinGeckoTokenDetailGroupByArgs, OrderByArg>
        & InputErrors,
    ): {} extends InputErrors ? GetCoinGeckoTokenDetailGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CoinGeckoTokenDetail model
     */
    readonly fields: CoinGeckoTokenDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinGeckoTokenDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinGeckoTokenDetailClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CoinGeckoTokenDetail model
   */
  interface CoinGeckoTokenDetailFieldRefs {
    readonly id: FieldRef<"CoinGeckoTokenDetail", "String">;
    readonly data: FieldRef<"CoinGeckoTokenDetail", "Json">;
    readonly updatedAt: FieldRef<"CoinGeckoTokenDetail", "DateTime">;
  }

  // Custom InputTypes
  /**
   * CoinGeckoTokenDetail findUnique
   */
  export type CoinGeckoTokenDetailFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetail to fetch.
     */
    where: CoinGeckoTokenDetailWhereUniqueInput;
  };

  /**
   * CoinGeckoTokenDetail findUniqueOrThrow
   */
  export type CoinGeckoTokenDetailFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetail to fetch.
     */
    where: CoinGeckoTokenDetailWhereUniqueInput;
  };

  /**
   * CoinGeckoTokenDetail findFirst
   */
  export type CoinGeckoTokenDetailFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetail to fetch.
     */
    where?: CoinGeckoTokenDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoTokenDetails to fetch.
     */
    orderBy?:
      | CoinGeckoTokenDetailOrderByWithRelationInput
      | CoinGeckoTokenDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoinGeckoTokenDetails.
     */
    cursor?: CoinGeckoTokenDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoTokenDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoTokenDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoinGeckoTokenDetails.
     */
    distinct?:
      | CoinGeckoTokenDetailScalarFieldEnum
      | CoinGeckoTokenDetailScalarFieldEnum[];
  };

  /**
   * CoinGeckoTokenDetail findFirstOrThrow
   */
  export type CoinGeckoTokenDetailFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetail to fetch.
     */
    where?: CoinGeckoTokenDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoTokenDetails to fetch.
     */
    orderBy?:
      | CoinGeckoTokenDetailOrderByWithRelationInput
      | CoinGeckoTokenDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoinGeckoTokenDetails.
     */
    cursor?: CoinGeckoTokenDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoTokenDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoTokenDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoinGeckoTokenDetails.
     */
    distinct?:
      | CoinGeckoTokenDetailScalarFieldEnum
      | CoinGeckoTokenDetailScalarFieldEnum[];
  };

  /**
   * CoinGeckoTokenDetail findMany
   */
  export type CoinGeckoTokenDetailFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetails to fetch.
     */
    where?: CoinGeckoTokenDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoTokenDetails to fetch.
     */
    orderBy?:
      | CoinGeckoTokenDetailOrderByWithRelationInput
      | CoinGeckoTokenDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CoinGeckoTokenDetails.
     */
    cursor?: CoinGeckoTokenDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoTokenDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoTokenDetails.
     */
    skip?: number;
    distinct?:
      | CoinGeckoTokenDetailScalarFieldEnum
      | CoinGeckoTokenDetailScalarFieldEnum[];
  };

  /**
   * CoinGeckoTokenDetail create
   */
  export type CoinGeckoTokenDetailCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * The data needed to create a CoinGeckoTokenDetail.
     */
    data: XOR<
      CoinGeckoTokenDetailCreateInput,
      CoinGeckoTokenDetailUncheckedCreateInput
    >;
  };

  /**
   * CoinGeckoTokenDetail createMany
   */
  export type CoinGeckoTokenDetailCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CoinGeckoTokenDetails.
     */
    data:
      | CoinGeckoTokenDetailCreateManyInput
      | CoinGeckoTokenDetailCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CoinGeckoTokenDetail createManyAndReturn
   */
  export type CoinGeckoTokenDetailCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * The data used to create many CoinGeckoTokenDetails.
     */
    data:
      | CoinGeckoTokenDetailCreateManyInput
      | CoinGeckoTokenDetailCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CoinGeckoTokenDetail update
   */
  export type CoinGeckoTokenDetailUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * The data needed to update a CoinGeckoTokenDetail.
     */
    data: XOR<
      CoinGeckoTokenDetailUpdateInput,
      CoinGeckoTokenDetailUncheckedUpdateInput
    >;
    /**
     * Choose, which CoinGeckoTokenDetail to update.
     */
    where: CoinGeckoTokenDetailWhereUniqueInput;
  };

  /**
   * CoinGeckoTokenDetail updateMany
   */
  export type CoinGeckoTokenDetailUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CoinGeckoTokenDetails.
     */
    data: XOR<
      CoinGeckoTokenDetailUpdateManyMutationInput,
      CoinGeckoTokenDetailUncheckedUpdateManyInput
    >;
    /**
     * Filter which CoinGeckoTokenDetails to update
     */
    where?: CoinGeckoTokenDetailWhereInput;
    /**
     * Limit how many CoinGeckoTokenDetails to update.
     */
    limit?: number;
  };

  /**
   * CoinGeckoTokenDetail updateManyAndReturn
   */
  export type CoinGeckoTokenDetailUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * The data used to update CoinGeckoTokenDetails.
     */
    data: XOR<
      CoinGeckoTokenDetailUpdateManyMutationInput,
      CoinGeckoTokenDetailUncheckedUpdateManyInput
    >;
    /**
     * Filter which CoinGeckoTokenDetails to update
     */
    where?: CoinGeckoTokenDetailWhereInput;
    /**
     * Limit how many CoinGeckoTokenDetails to update.
     */
    limit?: number;
  };

  /**
   * CoinGeckoTokenDetail upsert
   */
  export type CoinGeckoTokenDetailUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * The filter to search for the CoinGeckoTokenDetail to update in case it exists.
     */
    where: CoinGeckoTokenDetailWhereUniqueInput;
    /**
     * In case the CoinGeckoTokenDetail found by the `where` argument doesn't exist, create a new CoinGeckoTokenDetail with this data.
     */
    create: XOR<
      CoinGeckoTokenDetailCreateInput,
      CoinGeckoTokenDetailUncheckedCreateInput
    >;
    /**
     * In case the CoinGeckoTokenDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      CoinGeckoTokenDetailUpdateInput,
      CoinGeckoTokenDetailUncheckedUpdateInput
    >;
  };

  /**
   * CoinGeckoTokenDetail delete
   */
  export type CoinGeckoTokenDetailDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
    /**
     * Filter which CoinGeckoTokenDetail to delete.
     */
    where: CoinGeckoTokenDetailWhereUniqueInput;
  };

  /**
   * CoinGeckoTokenDetail deleteMany
   */
  export type CoinGeckoTokenDetailDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CoinGeckoTokenDetails to delete
     */
    where?: CoinGeckoTokenDetailWhereInput;
    /**
     * Limit how many CoinGeckoTokenDetails to delete.
     */
    limit?: number;
  };

  /**
   * CoinGeckoTokenDetail without action
   */
  export type CoinGeckoTokenDetailDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetail
     */
    select?: CoinGeckoTokenDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetail
     */
    omit?: CoinGeckoTokenDetailOmit<ExtArgs> | null;
  };

  /**
   * Model CoinGeckoTokenDetailsId
   */

  export type AggregateCoinGeckoTokenDetailsId = {
    _count: CoinGeckoTokenDetailsIdCountAggregateOutputType | null;
    _min: CoinGeckoTokenDetailsIdMinAggregateOutputType | null;
    _max: CoinGeckoTokenDetailsIdMaxAggregateOutputType | null;
  };

  export type CoinGeckoTokenDetailsIdMinAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
  };

  export type CoinGeckoTokenDetailsIdMaxAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
  };

  export type CoinGeckoTokenDetailsIdCountAggregateOutputType = {
    id: number;
    data: number;
    updatedAt: number;
    _all: number;
  };

  export type CoinGeckoTokenDetailsIdMinAggregateInputType = {
    id?: true;
    updatedAt?: true;
  };

  export type CoinGeckoTokenDetailsIdMaxAggregateInputType = {
    id?: true;
    updatedAt?: true;
  };

  export type CoinGeckoTokenDetailsIdCountAggregateInputType = {
    id?: true;
    data?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CoinGeckoTokenDetailsIdAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CoinGeckoTokenDetailsId to aggregate.
     */
    where?: CoinGeckoTokenDetailsIdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoTokenDetailsIds to fetch.
     */
    orderBy?:
      | CoinGeckoTokenDetailsIdOrderByWithRelationInput
      | CoinGeckoTokenDetailsIdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CoinGeckoTokenDetailsIdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoTokenDetailsIds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoTokenDetailsIds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CoinGeckoTokenDetailsIds
     */
    _count?: true | CoinGeckoTokenDetailsIdCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: CoinGeckoTokenDetailsIdMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: CoinGeckoTokenDetailsIdMaxAggregateInputType;
  };

  export type GetCoinGeckoTokenDetailsIdAggregateType<
    T extends CoinGeckoTokenDetailsIdAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCoinGeckoTokenDetailsId]: P extends
      "_count" | "count" ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateCoinGeckoTokenDetailsId[P]>
      : GetScalarType<T[P], AggregateCoinGeckoTokenDetailsId[P]>;
  };

  export type CoinGeckoTokenDetailsIdGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CoinGeckoTokenDetailsIdWhereInput;
    orderBy?:
      | CoinGeckoTokenDetailsIdOrderByWithAggregationInput
      | CoinGeckoTokenDetailsIdOrderByWithAggregationInput[];
    by:
      | CoinGeckoTokenDetailsIdScalarFieldEnum[]
      | CoinGeckoTokenDetailsIdScalarFieldEnum;
    having?: CoinGeckoTokenDetailsIdScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CoinGeckoTokenDetailsIdCountAggregateInputType | true;
    _min?: CoinGeckoTokenDetailsIdMinAggregateInputType;
    _max?: CoinGeckoTokenDetailsIdMaxAggregateInputType;
  };

  export type CoinGeckoTokenDetailsIdGroupByOutputType = {
    id: string;
    data: JsonValue;
    updatedAt: Date;
    _count: CoinGeckoTokenDetailsIdCountAggregateOutputType | null;
    _min: CoinGeckoTokenDetailsIdMinAggregateOutputType | null;
    _max: CoinGeckoTokenDetailsIdMaxAggregateOutputType | null;
  };

  type GetCoinGeckoTokenDetailsIdGroupByPayload<
    T extends CoinGeckoTokenDetailsIdGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      & PickEnumerable<CoinGeckoTokenDetailsIdGroupByOutputType, T["by"]>
      & {
        [P in ((keyof T) & (keyof CoinGeckoTokenDetailsIdGroupByOutputType))]:
          P extends "_count" ? T[P] extends boolean ? number
            : GetScalarType<T[P], CoinGeckoTokenDetailsIdGroupByOutputType[P]>
            : GetScalarType<T[P], CoinGeckoTokenDetailsIdGroupByOutputType[P]>;
      }
    >
  >;

  export type CoinGeckoTokenDetailsIdSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoTokenDetailsId"]>;

  export type CoinGeckoTokenDetailsIdSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoTokenDetailsId"]>;

  export type CoinGeckoTokenDetailsIdSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["coinGeckoTokenDetailsId"]>;

  export type CoinGeckoTokenDetailsIdSelectScalar = {
    id?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  };

  export type CoinGeckoTokenDetailsIdOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "data" | "updatedAt",
    ExtArgs["result"]["coinGeckoTokenDetailsId"]
  >;

  export type $CoinGeckoTokenDetailsIdPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "CoinGeckoTokenDetailsId";
    objects: {};
    scalars: $Extensions.GetPayloadResult<{
      id: string;
      data: Prisma.JsonValue;
      updatedAt: Date;
    }, ExtArgs["result"]["coinGeckoTokenDetailsId"]>;
    composites: {};
  };

  type CoinGeckoTokenDetailsIdGetPayload<
    S extends boolean | null | undefined | CoinGeckoTokenDetailsIdDefaultArgs,
  > = $Result.GetResult<Prisma.$CoinGeckoTokenDetailsIdPayload, S>;

  type CoinGeckoTokenDetailsIdCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > =
    & Omit<
      CoinGeckoTokenDetailsIdFindManyArgs,
      "select" | "include" | "distinct" | "omit"
    >
    & {
      select?: CoinGeckoTokenDetailsIdCountAggregateInputType | true;
    };

  export interface CoinGeckoTokenDetailsIdDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CoinGeckoTokenDetailsId"];
      meta: { name: "CoinGeckoTokenDetailsId" };
    };
    /**
     * Find zero or one CoinGeckoTokenDetailsId that matches the filter.
     * @param {CoinGeckoTokenDetailsIdFindUniqueArgs} args - Arguments to find a CoinGeckoTokenDetailsId
     * @example
     * // Get one CoinGeckoTokenDetailsId
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinGeckoTokenDetailsIdFindUniqueArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailsIdFindUniqueArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailsIdClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one CoinGeckoTokenDetailsId that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinGeckoTokenDetailsIdFindUniqueOrThrowArgs} args - Arguments to find a CoinGeckoTokenDetailsId
     * @example
     * // Get one CoinGeckoTokenDetailsId
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinGeckoTokenDetailsIdFindUniqueOrThrowArgs>(
      args: SelectSubset<
        T,
        CoinGeckoTokenDetailsIdFindUniqueOrThrowArgs<ExtArgs>
      >,
    ): Prisma__CoinGeckoTokenDetailsIdClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first CoinGeckoTokenDetailsId that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailsIdFindFirstArgs} args - Arguments to find a CoinGeckoTokenDetailsId
     * @example
     * // Get one CoinGeckoTokenDetailsId
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinGeckoTokenDetailsIdFindFirstArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailsIdFindFirstArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailsIdClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first CoinGeckoTokenDetailsId that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailsIdFindFirstOrThrowArgs} args - Arguments to find a CoinGeckoTokenDetailsId
     * @example
     * // Get one CoinGeckoTokenDetailsId
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinGeckoTokenDetailsIdFindFirstOrThrowArgs>(
      args?: SelectSubset<
        T,
        CoinGeckoTokenDetailsIdFindFirstOrThrowArgs<ExtArgs>
      >,
    ): Prisma__CoinGeckoTokenDetailsIdClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more CoinGeckoTokenDetailsIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailsIdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinGeckoTokenDetailsIds
     * const coinGeckoTokenDetailsIds = await prisma.coinGeckoTokenDetailsId.findMany()
     *
     * // Get first 10 CoinGeckoTokenDetailsIds
     * const coinGeckoTokenDetailsIds = await prisma.coinGeckoTokenDetailsId.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const coinGeckoTokenDetailsIdWithIdOnly = await prisma.coinGeckoTokenDetailsId.findMany({ select: { id: true } })
     */
    findMany<T extends CoinGeckoTokenDetailsIdFindManyArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailsIdFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a CoinGeckoTokenDetailsId.
     * @param {CoinGeckoTokenDetailsIdCreateArgs} args - Arguments to create a CoinGeckoTokenDetailsId.
     * @example
     * // Create one CoinGeckoTokenDetailsId
     * const CoinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.create({
     *   data: {
     *     // ... data to create a CoinGeckoTokenDetailsId
     *   }
     * })
     */
    create<T extends CoinGeckoTokenDetailsIdCreateArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailsIdCreateArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailsIdClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many CoinGeckoTokenDetailsIds.
     * @param {CoinGeckoTokenDetailsIdCreateManyArgs} args - Arguments to create many CoinGeckoTokenDetailsIds.
     * @example
     * // Create many CoinGeckoTokenDetailsIds
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     */
    createMany<T extends CoinGeckoTokenDetailsIdCreateManyArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailsIdCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CoinGeckoTokenDetailsIds and returns the data saved in the database.
     * @param {CoinGeckoTokenDetailsIdCreateManyAndReturnArgs} args - Arguments to create many CoinGeckoTokenDetailsIds.
     * @example
     * // Create many CoinGeckoTokenDetailsIds
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CoinGeckoTokenDetailsIds and only return the `id`
     * const coinGeckoTokenDetailsIdWithIdOnly = await prisma.coinGeckoTokenDetailsId.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    createManyAndReturn<
      T extends CoinGeckoTokenDetailsIdCreateManyAndReturnArgs,
    >(
      args?: SelectSubset<
        T,
        CoinGeckoTokenDetailsIdCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Delete a CoinGeckoTokenDetailsId.
     * @param {CoinGeckoTokenDetailsIdDeleteArgs} args - Arguments to delete one CoinGeckoTokenDetailsId.
     * @example
     * // Delete one CoinGeckoTokenDetailsId
     * const CoinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.delete({
     *   where: {
     *     // ... filter to delete one CoinGeckoTokenDetailsId
     *   }
     * })
     */
    delete<T extends CoinGeckoTokenDetailsIdDeleteArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailsIdDeleteArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailsIdClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one CoinGeckoTokenDetailsId.
     * @param {CoinGeckoTokenDetailsIdUpdateArgs} args - Arguments to update one CoinGeckoTokenDetailsId.
     * @example
     * // Update one CoinGeckoTokenDetailsId
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends CoinGeckoTokenDetailsIdUpdateArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailsIdUpdateArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailsIdClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more CoinGeckoTokenDetailsIds.
     * @param {CoinGeckoTokenDetailsIdDeleteManyArgs} args - Arguments to filter CoinGeckoTokenDetailsIds to delete.
     * @example
     * // Delete a few CoinGeckoTokenDetailsIds
     * const { count } = await prisma.coinGeckoTokenDetailsId.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends CoinGeckoTokenDetailsIdDeleteManyArgs>(
      args?: SelectSubset<T, CoinGeckoTokenDetailsIdDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CoinGeckoTokenDetailsIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailsIdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinGeckoTokenDetailsIds
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends CoinGeckoTokenDetailsIdUpdateManyArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailsIdUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CoinGeckoTokenDetailsIds and returns the data updated in the database.
     * @param {CoinGeckoTokenDetailsIdUpdateManyAndReturnArgs} args - Arguments to update many CoinGeckoTokenDetailsIds.
     * @example
     * // Update many CoinGeckoTokenDetailsIds
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CoinGeckoTokenDetailsIds and only return the `id`
     * const coinGeckoTokenDetailsIdWithIdOnly = await prisma.coinGeckoTokenDetailsId.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    updateManyAndReturn<
      T extends CoinGeckoTokenDetailsIdUpdateManyAndReturnArgs,
    >(
      args: SelectSubset<
        T,
        CoinGeckoTokenDetailsIdUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Create or update one CoinGeckoTokenDetailsId.
     * @param {CoinGeckoTokenDetailsIdUpsertArgs} args - Arguments to update or create a CoinGeckoTokenDetailsId.
     * @example
     * // Update or create a CoinGeckoTokenDetailsId
     * const coinGeckoTokenDetailsId = await prisma.coinGeckoTokenDetailsId.upsert({
     *   create: {
     *     // ... data to create a CoinGeckoTokenDetailsId
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinGeckoTokenDetailsId we want to update
     *   }
     * })
     */
    upsert<T extends CoinGeckoTokenDetailsIdUpsertArgs>(
      args: SelectSubset<T, CoinGeckoTokenDetailsIdUpsertArgs<ExtArgs>>,
    ): Prisma__CoinGeckoTokenDetailsIdClient<
      $Result.GetResult<
        Prisma.$CoinGeckoTokenDetailsIdPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of CoinGeckoTokenDetailsIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailsIdCountArgs} args - Arguments to filter CoinGeckoTokenDetailsIds to count.
     * @example
     * // Count the number of CoinGeckoTokenDetailsIds
     * const count = await prisma.coinGeckoTokenDetailsId.count({
     *   where: {
     *     // ... the filter for the CoinGeckoTokenDetailsIds we want to count
     *   }
     * })
     */
    count<T extends CoinGeckoTokenDetailsIdCountArgs>(
      args?: Subset<T, CoinGeckoTokenDetailsIdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<
          T["select"],
          CoinGeckoTokenDetailsIdCountAggregateOutputType
        >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CoinGeckoTokenDetailsId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailsIdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends CoinGeckoTokenDetailsIdAggregateArgs>(
      args: Subset<T, CoinGeckoTokenDetailsIdAggregateArgs>,
    ): Prisma.PrismaPromise<GetCoinGeckoTokenDetailsIdAggregateType<T>>;

    /**
     * Group by CoinGeckoTokenDetailsId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGeckoTokenDetailsIdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     */
    groupBy<
      T extends CoinGeckoTokenDetailsIdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinGeckoTokenDetailsIdGroupByArgs["orderBy"] }
        : { orderBy?: CoinGeckoTokenDetailsIdGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args:
        & SubsetIntersection<T, CoinGeckoTokenDetailsIdGroupByArgs, OrderByArg>
        & InputErrors,
    ): {} extends InputErrors ? GetCoinGeckoTokenDetailsIdGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CoinGeckoTokenDetailsId model
     */
    readonly fields: CoinGeckoTokenDetailsIdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinGeckoTokenDetailsId.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinGeckoTokenDetailsIdClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CoinGeckoTokenDetailsId model
   */
  interface CoinGeckoTokenDetailsIdFieldRefs {
    readonly id: FieldRef<"CoinGeckoTokenDetailsId", "String">;
    readonly data: FieldRef<"CoinGeckoTokenDetailsId", "Json">;
    readonly updatedAt: FieldRef<"CoinGeckoTokenDetailsId", "DateTime">;
  }

  // Custom InputTypes
  /**
   * CoinGeckoTokenDetailsId findUnique
   */
  export type CoinGeckoTokenDetailsIdFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetailsId to fetch.
     */
    where: CoinGeckoTokenDetailsIdWhereUniqueInput;
  };

  /**
   * CoinGeckoTokenDetailsId findUniqueOrThrow
   */
  export type CoinGeckoTokenDetailsIdFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetailsId to fetch.
     */
    where: CoinGeckoTokenDetailsIdWhereUniqueInput;
  };

  /**
   * CoinGeckoTokenDetailsId findFirst
   */
  export type CoinGeckoTokenDetailsIdFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetailsId to fetch.
     */
    where?: CoinGeckoTokenDetailsIdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoTokenDetailsIds to fetch.
     */
    orderBy?:
      | CoinGeckoTokenDetailsIdOrderByWithRelationInput
      | CoinGeckoTokenDetailsIdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoinGeckoTokenDetailsIds.
     */
    cursor?: CoinGeckoTokenDetailsIdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoTokenDetailsIds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoTokenDetailsIds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoinGeckoTokenDetailsIds.
     */
    distinct?:
      | CoinGeckoTokenDetailsIdScalarFieldEnum
      | CoinGeckoTokenDetailsIdScalarFieldEnum[];
  };

  /**
   * CoinGeckoTokenDetailsId findFirstOrThrow
   */
  export type CoinGeckoTokenDetailsIdFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetailsId to fetch.
     */
    where?: CoinGeckoTokenDetailsIdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoTokenDetailsIds to fetch.
     */
    orderBy?:
      | CoinGeckoTokenDetailsIdOrderByWithRelationInput
      | CoinGeckoTokenDetailsIdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoinGeckoTokenDetailsIds.
     */
    cursor?: CoinGeckoTokenDetailsIdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoTokenDetailsIds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoTokenDetailsIds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoinGeckoTokenDetailsIds.
     */
    distinct?:
      | CoinGeckoTokenDetailsIdScalarFieldEnum
      | CoinGeckoTokenDetailsIdScalarFieldEnum[];
  };

  /**
   * CoinGeckoTokenDetailsId findMany
   */
  export type CoinGeckoTokenDetailsIdFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * Filter, which CoinGeckoTokenDetailsIds to fetch.
     */
    where?: CoinGeckoTokenDetailsIdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoinGeckoTokenDetailsIds to fetch.
     */
    orderBy?:
      | CoinGeckoTokenDetailsIdOrderByWithRelationInput
      | CoinGeckoTokenDetailsIdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CoinGeckoTokenDetailsIds.
     */
    cursor?: CoinGeckoTokenDetailsIdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoinGeckoTokenDetailsIds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoinGeckoTokenDetailsIds.
     */
    skip?: number;
    distinct?:
      | CoinGeckoTokenDetailsIdScalarFieldEnum
      | CoinGeckoTokenDetailsIdScalarFieldEnum[];
  };

  /**
   * CoinGeckoTokenDetailsId create
   */
  export type CoinGeckoTokenDetailsIdCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * The data needed to create a CoinGeckoTokenDetailsId.
     */
    data: XOR<
      CoinGeckoTokenDetailsIdCreateInput,
      CoinGeckoTokenDetailsIdUncheckedCreateInput
    >;
  };

  /**
   * CoinGeckoTokenDetailsId createMany
   */
  export type CoinGeckoTokenDetailsIdCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CoinGeckoTokenDetailsIds.
     */
    data:
      | CoinGeckoTokenDetailsIdCreateManyInput
      | CoinGeckoTokenDetailsIdCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CoinGeckoTokenDetailsId createManyAndReturn
   */
  export type CoinGeckoTokenDetailsIdCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * The data used to create many CoinGeckoTokenDetailsIds.
     */
    data:
      | CoinGeckoTokenDetailsIdCreateManyInput
      | CoinGeckoTokenDetailsIdCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CoinGeckoTokenDetailsId update
   */
  export type CoinGeckoTokenDetailsIdUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * The data needed to update a CoinGeckoTokenDetailsId.
     */
    data: XOR<
      CoinGeckoTokenDetailsIdUpdateInput,
      CoinGeckoTokenDetailsIdUncheckedUpdateInput
    >;
    /**
     * Choose, which CoinGeckoTokenDetailsId to update.
     */
    where: CoinGeckoTokenDetailsIdWhereUniqueInput;
  };

  /**
   * CoinGeckoTokenDetailsId updateMany
   */
  export type CoinGeckoTokenDetailsIdUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CoinGeckoTokenDetailsIds.
     */
    data: XOR<
      CoinGeckoTokenDetailsIdUpdateManyMutationInput,
      CoinGeckoTokenDetailsIdUncheckedUpdateManyInput
    >;
    /**
     * Filter which CoinGeckoTokenDetailsIds to update
     */
    where?: CoinGeckoTokenDetailsIdWhereInput;
    /**
     * Limit how many CoinGeckoTokenDetailsIds to update.
     */
    limit?: number;
  };

  /**
   * CoinGeckoTokenDetailsId updateManyAndReturn
   */
  export type CoinGeckoTokenDetailsIdUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * The data used to update CoinGeckoTokenDetailsIds.
     */
    data: XOR<
      CoinGeckoTokenDetailsIdUpdateManyMutationInput,
      CoinGeckoTokenDetailsIdUncheckedUpdateManyInput
    >;
    /**
     * Filter which CoinGeckoTokenDetailsIds to update
     */
    where?: CoinGeckoTokenDetailsIdWhereInput;
    /**
     * Limit how many CoinGeckoTokenDetailsIds to update.
     */
    limit?: number;
  };

  /**
   * CoinGeckoTokenDetailsId upsert
   */
  export type CoinGeckoTokenDetailsIdUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * The filter to search for the CoinGeckoTokenDetailsId to update in case it exists.
     */
    where: CoinGeckoTokenDetailsIdWhereUniqueInput;
    /**
     * In case the CoinGeckoTokenDetailsId found by the `where` argument doesn't exist, create a new CoinGeckoTokenDetailsId with this data.
     */
    create: XOR<
      CoinGeckoTokenDetailsIdCreateInput,
      CoinGeckoTokenDetailsIdUncheckedCreateInput
    >;
    /**
     * In case the CoinGeckoTokenDetailsId was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      CoinGeckoTokenDetailsIdUpdateInput,
      CoinGeckoTokenDetailsIdUncheckedUpdateInput
    >;
  };

  /**
   * CoinGeckoTokenDetailsId delete
   */
  export type CoinGeckoTokenDetailsIdDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
    /**
     * Filter which CoinGeckoTokenDetailsId to delete.
     */
    where: CoinGeckoTokenDetailsIdWhereUniqueInput;
  };

  /**
   * CoinGeckoTokenDetailsId deleteMany
   */
  export type CoinGeckoTokenDetailsIdDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CoinGeckoTokenDetailsIds to delete
     */
    where?: CoinGeckoTokenDetailsIdWhereInput;
    /**
     * Limit how many CoinGeckoTokenDetailsIds to delete.
     */
    limit?: number;
  };

  /**
   * CoinGeckoTokenDetailsId without action
   */
  export type CoinGeckoTokenDetailsIdDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CoinGeckoTokenDetailsId
     */
    select?: CoinGeckoTokenDetailsIdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoinGeckoTokenDetailsId
     */
    omit?: CoinGeckoTokenDetailsIdOmit<ExtArgs> | null;
  };

  /**
   * Model StepData
   */

  export type AggregateStepData = {
    _count: StepDataCountAggregateOutputType | null;
    _avg: StepDataAvgAggregateOutputType | null;
    _sum: StepDataSumAggregateOutputType | null;
    _min: StepDataMinAggregateOutputType | null;
    _max: StepDataMaxAggregateOutputType | null;
  };

  export type StepDataAvgAggregateOutputType = {
    step: number | null;
  };

  export type StepDataSumAggregateOutputType = {
    step: number | null;
  };

  export type StepDataMinAggregateOutputType = {
    step: number | null;
    updatedAt: Date | null;
  };

  export type StepDataMaxAggregateOutputType = {
    step: number | null;
    updatedAt: Date | null;
  };

  export type StepDataCountAggregateOutputType = {
    step: number;
    data: number;
    status: number;
    updatedAt: number;
    _all: number;
  };

  export type StepDataAvgAggregateInputType = {
    step?: true;
  };

  export type StepDataSumAggregateInputType = {
    step?: true;
  };

  export type StepDataMinAggregateInputType = {
    step?: true;
    updatedAt?: true;
  };

  export type StepDataMaxAggregateInputType = {
    step?: true;
    updatedAt?: true;
  };

  export type StepDataCountAggregateInputType = {
    step?: true;
    data?: true;
    status?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type StepDataAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which StepData to aggregate.
     */
    where?: StepDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StepData to fetch.
     */
    orderBy?:
      | StepDataOrderByWithRelationInput
      | StepDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: StepDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StepData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StepData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StepData
     */
    _count?: true | StepDataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: StepDataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: StepDataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: StepDataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: StepDataMaxAggregateInputType;
  };

  export type GetStepDataAggregateType<T extends StepDataAggregateArgs> = {
    [P in keyof T & keyof AggregateStepData]: P extends "_count" | "count"
      ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateStepData[P]>
      : GetScalarType<T[P], AggregateStepData[P]>;
  };

  export type StepDataGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StepDataWhereInput;
    orderBy?:
      | StepDataOrderByWithAggregationInput
      | StepDataOrderByWithAggregationInput[];
    by: StepDataScalarFieldEnum[] | StepDataScalarFieldEnum;
    having?: StepDataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StepDataCountAggregateInputType | true;
    _avg?: StepDataAvgAggregateInputType;
    _sum?: StepDataSumAggregateInputType;
    _min?: StepDataMinAggregateInputType;
    _max?: StepDataMaxAggregateInputType;
  };

  export type StepDataGroupByOutputType = {
    step: number;
    data: JsonValue;
    status: JsonValue;
    updatedAt: Date;
    _count: StepDataCountAggregateOutputType | null;
    _avg: StepDataAvgAggregateOutputType | null;
    _sum: StepDataSumAggregateOutputType | null;
    _min: StepDataMinAggregateOutputType | null;
    _max: StepDataMaxAggregateOutputType | null;
  };

  type GetStepDataGroupByPayload<T extends StepDataGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        & PickEnumerable<StepDataGroupByOutputType, T["by"]>
        & {
          [P in ((keyof T) & (keyof StepDataGroupByOutputType))]: P extends
            "_count" ? T[P] extends boolean ? number
            : GetScalarType<T[P], StepDataGroupByOutputType[P]>
            : GetScalarType<T[P], StepDataGroupByOutputType[P]>;
        }
      >
    >;

  export type StepDataSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    step?: boolean;
    data?: boolean;
    status?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["stepData"]>;

  export type StepDataSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    step?: boolean;
    data?: boolean;
    status?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["stepData"]>;

  export type StepDataSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    step?: boolean;
    data?: boolean;
    status?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["stepData"]>;

  export type StepDataSelectScalar = {
    step?: boolean;
    data?: boolean;
    status?: boolean;
    updatedAt?: boolean;
  };

  export type StepDataOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "step" | "data" | "status" | "updatedAt",
    ExtArgs["result"]["stepData"]
  >;

  export type $StepDataPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "StepData";
    objects: {};
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Unique step number.
       */
      step: number;
      /**
       * The main data for the step, stored as a JSON blob.
       */
      data: Prisma.JsonValue;
      /**
       * The status information for the step, stored as a JSON blob.
       */
      status: Prisma.JsonValue;
      updatedAt: Date;
    }, ExtArgs["result"]["stepData"]>;
    composites: {};
  };

  type StepDataGetPayload<
    S extends boolean | null | undefined | StepDataDefaultArgs,
  > = $Result.GetResult<Prisma.$StepDataPayload, S>;

  type StepDataCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<StepDataFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: StepDataCountAggregateInputType | true;
  };

  export interface StepDataDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["StepData"];
      meta: { name: "StepData" };
    };
    /**
     * Find zero or one StepData that matches the filter.
     * @param {StepDataFindUniqueArgs} args - Arguments to find a StepData
     * @example
     * // Get one StepData
     * const stepData = await prisma.stepData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepDataFindUniqueArgs>(
      args: SelectSubset<T, StepDataFindUniqueArgs<ExtArgs>>,
    ): Prisma__StepDataClient<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one StepData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepDataFindUniqueOrThrowArgs} args - Arguments to find a StepData
     * @example
     * // Get one StepData
     * const stepData = await prisma.stepData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepDataFindUniqueOrThrowArgs>(
      args: SelectSubset<T, StepDataFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__StepDataClient<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first StepData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDataFindFirstArgs} args - Arguments to find a StepData
     * @example
     * // Get one StepData
     * const stepData = await prisma.stepData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepDataFindFirstArgs>(
      args?: SelectSubset<T, StepDataFindFirstArgs<ExtArgs>>,
    ): Prisma__StepDataClient<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first StepData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDataFindFirstOrThrowArgs} args - Arguments to find a StepData
     * @example
     * // Get one StepData
     * const stepData = await prisma.stepData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepDataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StepDataFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__StepDataClient<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more StepData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StepData
     * const stepData = await prisma.stepData.findMany()
     *
     * // Get first 10 StepData
     * const stepData = await prisma.stepData.findMany({ take: 10 })
     *
     * // Only select the `step`
     * const stepDataWithStepOnly = await prisma.stepData.findMany({ select: { step: true } })
     */
    findMany<T extends StepDataFindManyArgs>(
      args?: SelectSubset<T, StepDataFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a StepData.
     * @param {StepDataCreateArgs} args - Arguments to create a StepData.
     * @example
     * // Create one StepData
     * const StepData = await prisma.stepData.create({
     *   data: {
     *     // ... data to create a StepData
     *   }
     * })
     */
    create<T extends StepDataCreateArgs>(
      args: SelectSubset<T, StepDataCreateArgs<ExtArgs>>,
    ): Prisma__StepDataClient<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many StepData.
     * @param {StepDataCreateManyArgs} args - Arguments to create many StepData.
     * @example
     * // Create many StepData
     * const stepData = await prisma.stepData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     */
    createMany<T extends StepDataCreateManyArgs>(
      args?: SelectSubset<T, StepDataCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many StepData and returns the data saved in the database.
     * @param {StepDataCreateManyAndReturnArgs} args - Arguments to create many StepData.
     * @example
     * // Create many StepData
     * const stepData = await prisma.stepData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StepData and only return the `step`
     * const stepDataWithStepOnly = await prisma.stepData.createManyAndReturn({
     *   select: { step: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    createManyAndReturn<T extends StepDataCreateManyAndReturnArgs>(
      args?: SelectSubset<T, StepDataCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Delete a StepData.
     * @param {StepDataDeleteArgs} args - Arguments to delete one StepData.
     * @example
     * // Delete one StepData
     * const StepData = await prisma.stepData.delete({
     *   where: {
     *     // ... filter to delete one StepData
     *   }
     * })
     */
    delete<T extends StepDataDeleteArgs>(
      args: SelectSubset<T, StepDataDeleteArgs<ExtArgs>>,
    ): Prisma__StepDataClient<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one StepData.
     * @param {StepDataUpdateArgs} args - Arguments to update one StepData.
     * @example
     * // Update one StepData
     * const stepData = await prisma.stepData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends StepDataUpdateArgs>(
      args: SelectSubset<T, StepDataUpdateArgs<ExtArgs>>,
    ): Prisma__StepDataClient<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more StepData.
     * @param {StepDataDeleteManyArgs} args - Arguments to filter StepData to delete.
     * @example
     * // Delete a few StepData
     * const { count } = await prisma.stepData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends StepDataDeleteManyArgs>(
      args?: SelectSubset<T, StepDataDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more StepData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StepData
     * const stepData = await prisma.stepData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends StepDataUpdateManyArgs>(
      args: SelectSubset<T, StepDataUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more StepData and returns the data updated in the database.
     * @param {StepDataUpdateManyAndReturnArgs} args - Arguments to update many StepData.
     * @example
     * // Update many StepData
     * const stepData = await prisma.stepData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StepData and only return the `step`
     * const stepDataWithStepOnly = await prisma.stepData.updateManyAndReturn({
     *   select: { step: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    updateManyAndReturn<T extends StepDataUpdateManyAndReturnArgs>(
      args: SelectSubset<T, StepDataUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Create or update one StepData.
     * @param {StepDataUpsertArgs} args - Arguments to update or create a StepData.
     * @example
     * // Update or create a StepData
     * const stepData = await prisma.stepData.upsert({
     *   create: {
     *     // ... data to create a StepData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StepData we want to update
     *   }
     * })
     */
    upsert<T extends StepDataUpsertArgs>(
      args: SelectSubset<T, StepDataUpsertArgs<ExtArgs>>,
    ): Prisma__StepDataClient<
      $Result.GetResult<
        Prisma.$StepDataPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of StepData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDataCountArgs} args - Arguments to filter StepData to count.
     * @example
     * // Count the number of StepData
     * const count = await prisma.stepData.count({
     *   where: {
     *     // ... the filter for the StepData we want to count
     *   }
     * })
     */
    count<T extends StepDataCountArgs>(
      args?: Subset<T, StepDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<T["select"], StepDataCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a StepData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends StepDataAggregateArgs>(
      args: Subset<T, StepDataAggregateArgs>,
    ): Prisma.PrismaPromise<GetStepDataAggregateType<T>>;

    /**
     * Group by StepData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     */
    groupBy<
      T extends StepDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepDataGroupByArgs["orderBy"] }
        : { orderBy?: StepDataGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args:
        & SubsetIntersection<T, StepDataGroupByArgs, OrderByArg>
        & InputErrors,
    ): {} extends InputErrors ? GetStepDataGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StepData model
     */
    readonly fields: StepDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StepData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepDataClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the StepData model
   */
  interface StepDataFieldRefs {
    readonly step: FieldRef<"StepData", "Int">;
    readonly data: FieldRef<"StepData", "Json">;
    readonly status: FieldRef<"StepData", "Json">;
    readonly updatedAt: FieldRef<"StepData", "DateTime">;
  }

  // Custom InputTypes
  /**
   * StepData findUnique
   */
  export type StepDataFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * Filter, which StepData to fetch.
     */
    where: StepDataWhereUniqueInput;
  };

  /**
   * StepData findUniqueOrThrow
   */
  export type StepDataFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * Filter, which StepData to fetch.
     */
    where: StepDataWhereUniqueInput;
  };

  /**
   * StepData findFirst
   */
  export type StepDataFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * Filter, which StepData to fetch.
     */
    where?: StepDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StepData to fetch.
     */
    orderBy?:
      | StepDataOrderByWithRelationInput
      | StepDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StepData.
     */
    cursor?: StepDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StepData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StepData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StepData.
     */
    distinct?: StepDataScalarFieldEnum | StepDataScalarFieldEnum[];
  };

  /**
   * StepData findFirstOrThrow
   */
  export type StepDataFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * Filter, which StepData to fetch.
     */
    where?: StepDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StepData to fetch.
     */
    orderBy?:
      | StepDataOrderByWithRelationInput
      | StepDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StepData.
     */
    cursor?: StepDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StepData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StepData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StepData.
     */
    distinct?: StepDataScalarFieldEnum | StepDataScalarFieldEnum[];
  };

  /**
   * StepData findMany
   */
  export type StepDataFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * Filter, which StepData to fetch.
     */
    where?: StepDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StepData to fetch.
     */
    orderBy?:
      | StepDataOrderByWithRelationInput
      | StepDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StepData.
     */
    cursor?: StepDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StepData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StepData.
     */
    skip?: number;
    distinct?: StepDataScalarFieldEnum | StepDataScalarFieldEnum[];
  };

  /**
   * StepData create
   */
  export type StepDataCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * The data needed to create a StepData.
     */
    data: XOR<StepDataCreateInput, StepDataUncheckedCreateInput>;
  };

  /**
   * StepData createMany
   */
  export type StepDataCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many StepData.
     */
    data: StepDataCreateManyInput | StepDataCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * StepData createManyAndReturn
   */
  export type StepDataCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * The data used to create many StepData.
     */
    data: StepDataCreateManyInput | StepDataCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * StepData update
   */
  export type StepDataUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * The data needed to update a StepData.
     */
    data: XOR<StepDataUpdateInput, StepDataUncheckedUpdateInput>;
    /**
     * Choose, which StepData to update.
     */
    where: StepDataWhereUniqueInput;
  };

  /**
   * StepData updateMany
   */
  export type StepDataUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update StepData.
     */
    data: XOR<
      StepDataUpdateManyMutationInput,
      StepDataUncheckedUpdateManyInput
    >;
    /**
     * Filter which StepData to update
     */
    where?: StepDataWhereInput;
    /**
     * Limit how many StepData to update.
     */
    limit?: number;
  };

  /**
   * StepData updateManyAndReturn
   */
  export type StepDataUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * The data used to update StepData.
     */
    data: XOR<
      StepDataUpdateManyMutationInput,
      StepDataUncheckedUpdateManyInput
    >;
    /**
     * Filter which StepData to update
     */
    where?: StepDataWhereInput;
    /**
     * Limit how many StepData to update.
     */
    limit?: number;
  };

  /**
   * StepData upsert
   */
  export type StepDataUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * The filter to search for the StepData to update in case it exists.
     */
    where: StepDataWhereUniqueInput;
    /**
     * In case the StepData found by the `where` argument doesn't exist, create a new StepData with this data.
     */
    create: XOR<StepDataCreateInput, StepDataUncheckedCreateInput>;
    /**
     * In case the StepData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepDataUpdateInput, StepDataUncheckedUpdateInput>;
  };

  /**
   * StepData delete
   */
  export type StepDataDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
    /**
     * Filter which StepData to delete.
     */
    where: StepDataWhereUniqueInput;
  };

  /**
   * StepData deleteMany
   */
  export type StepDataDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which StepData to delete
     */
    where?: StepDataWhereInput;
    /**
     * Limit how many StepData to delete.
     */
    limit?: number;
  };

  /**
   * StepData without action
   */
  export type StepDataDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StepData
     */
    select?: StepDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StepData
     */
    omit?: StepDataOmit<ExtArgs> | null;
  };

  /**
   * Model TokenEventsCache
   */

  export type AggregateTokenEventsCache = {
    _count: TokenEventsCacheCountAggregateOutputType | null;
    _avg: TokenEventsCacheAvgAggregateOutputType | null;
    _sum: TokenEventsCacheSumAggregateOutputType | null;
    _min: TokenEventsCacheMinAggregateOutputType | null;
    _max: TokenEventsCacheMaxAggregateOutputType | null;
  };

  export type TokenEventsCacheAvgAggregateOutputType = {
    startBlock: number | null;
    endBlock: number | null;
  };

  export type TokenEventsCacheSumAggregateOutputType = {
    startBlock: number | null;
    endBlock: number | null;
  };

  export type TokenEventsCacheMinAggregateOutputType = {
    tokenContractAddress: string | null;
    startBlock: number | null;
    endBlock: number | null;
    updatedAt: Date | null;
  };

  export type TokenEventsCacheMaxAggregateOutputType = {
    tokenContractAddress: string | null;
    startBlock: number | null;
    endBlock: number | null;
    updatedAt: Date | null;
  };

  export type TokenEventsCacheCountAggregateOutputType = {
    tokenContractAddress: number;
    startBlock: number;
    endBlock: number;
    data: number;
    updatedAt: number;
    _all: number;
  };

  export type TokenEventsCacheAvgAggregateInputType = {
    startBlock?: true;
    endBlock?: true;
  };

  export type TokenEventsCacheSumAggregateInputType = {
    startBlock?: true;
    endBlock?: true;
  };

  export type TokenEventsCacheMinAggregateInputType = {
    tokenContractAddress?: true;
    startBlock?: true;
    endBlock?: true;
    updatedAt?: true;
  };

  export type TokenEventsCacheMaxAggregateInputType = {
    tokenContractAddress?: true;
    startBlock?: true;
    endBlock?: true;
    updatedAt?: true;
  };

  export type TokenEventsCacheCountAggregateInputType = {
    tokenContractAddress?: true;
    startBlock?: true;
    endBlock?: true;
    data?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TokenEventsCacheAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TokenEventsCache to aggregate.
     */
    where?: TokenEventsCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TokenEventsCaches to fetch.
     */
    orderBy?:
      | TokenEventsCacheOrderByWithRelationInput
      | TokenEventsCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TokenEventsCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TokenEventsCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TokenEventsCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TokenEventsCaches
     */
    _count?: true | TokenEventsCacheCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: TokenEventsCacheAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: TokenEventsCacheSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: TokenEventsCacheMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: TokenEventsCacheMaxAggregateInputType;
  };

  export type GetTokenEventsCacheAggregateType<
    T extends TokenEventsCacheAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateTokenEventsCache]: P extends
      "_count" | "count" ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateTokenEventsCache[P]>
      : GetScalarType<T[P], AggregateTokenEventsCache[P]>;
  };

  export type TokenEventsCacheGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TokenEventsCacheWhereInput;
    orderBy?:
      | TokenEventsCacheOrderByWithAggregationInput
      | TokenEventsCacheOrderByWithAggregationInput[];
    by: TokenEventsCacheScalarFieldEnum[] | TokenEventsCacheScalarFieldEnum;
    having?: TokenEventsCacheScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TokenEventsCacheCountAggregateInputType | true;
    _avg?: TokenEventsCacheAvgAggregateInputType;
    _sum?: TokenEventsCacheSumAggregateInputType;
    _min?: TokenEventsCacheMinAggregateInputType;
    _max?: TokenEventsCacheMaxAggregateInputType;
  };

  export type TokenEventsCacheGroupByOutputType = {
    tokenContractAddress: string;
    startBlock: number;
    endBlock: number;
    data: JsonValue;
    updatedAt: Date;
    _count: TokenEventsCacheCountAggregateOutputType | null;
    _avg: TokenEventsCacheAvgAggregateOutputType | null;
    _sum: TokenEventsCacheSumAggregateOutputType | null;
    _min: TokenEventsCacheMinAggregateOutputType | null;
    _max: TokenEventsCacheMaxAggregateOutputType | null;
  };

  type GetTokenEventsCacheGroupByPayload<
    T extends TokenEventsCacheGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      & PickEnumerable<TokenEventsCacheGroupByOutputType, T["by"]>
      & {
        [P in ((keyof T) & (keyof TokenEventsCacheGroupByOutputType))]:
          P extends "_count" ? T[P] extends boolean ? number
            : GetScalarType<T[P], TokenEventsCacheGroupByOutputType[P]>
            : GetScalarType<T[P], TokenEventsCacheGroupByOutputType[P]>;
      }
    >
  >;

  export type TokenEventsCacheSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    tokenContractAddress?: boolean;
    startBlock?: boolean;
    endBlock?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["tokenEventsCache"]>;

  export type TokenEventsCacheSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    tokenContractAddress?: boolean;
    startBlock?: boolean;
    endBlock?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["tokenEventsCache"]>;

  export type TokenEventsCacheSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    tokenContractAddress?: boolean;
    startBlock?: boolean;
    endBlock?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["tokenEventsCache"]>;

  export type TokenEventsCacheSelectScalar = {
    tokenContractAddress?: boolean;
    startBlock?: boolean;
    endBlock?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  };

  export type TokenEventsCacheOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "tokenContractAddress" | "startBlock" | "endBlock" | "data" | "updatedAt",
    ExtArgs["result"]["tokenEventsCache"]
  >;

  export type $TokenEventsCachePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "TokenEventsCache";
    objects: {};
    scalars: $Extensions.GetPayloadResult<{
      tokenContractAddress: string;
      startBlock: number;
      endBlock: number;
      /**
       * The cached events stored as a JSON blob.
       */
      data: Prisma.JsonValue;
      updatedAt: Date;
    }, ExtArgs["result"]["tokenEventsCache"]>;
    composites: {};
  };

  type TokenEventsCacheGetPayload<
    S extends boolean | null | undefined | TokenEventsCacheDefaultArgs,
  > = $Result.GetResult<Prisma.$TokenEventsCachePayload, S>;

  type TokenEventsCacheCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > =
    & Omit<
      TokenEventsCacheFindManyArgs,
      "select" | "include" | "distinct" | "omit"
    >
    & {
      select?: TokenEventsCacheCountAggregateInputType | true;
    };

  export interface TokenEventsCacheDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["TokenEventsCache"];
      meta: { name: "TokenEventsCache" };
    };
    /**
     * Find zero or one TokenEventsCache that matches the filter.
     * @param {TokenEventsCacheFindUniqueArgs} args - Arguments to find a TokenEventsCache
     * @example
     * // Get one TokenEventsCache
     * const tokenEventsCache = await prisma.tokenEventsCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenEventsCacheFindUniqueArgs>(
      args: SelectSubset<T, TokenEventsCacheFindUniqueArgs<ExtArgs>>,
    ): Prisma__TokenEventsCacheClient<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one TokenEventsCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenEventsCacheFindUniqueOrThrowArgs} args - Arguments to find a TokenEventsCache
     * @example
     * // Get one TokenEventsCache
     * const tokenEventsCache = await prisma.tokenEventsCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenEventsCacheFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TokenEventsCacheFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TokenEventsCacheClient<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first TokenEventsCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenEventsCacheFindFirstArgs} args - Arguments to find a TokenEventsCache
     * @example
     * // Get one TokenEventsCache
     * const tokenEventsCache = await prisma.tokenEventsCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenEventsCacheFindFirstArgs>(
      args?: SelectSubset<T, TokenEventsCacheFindFirstArgs<ExtArgs>>,
    ): Prisma__TokenEventsCacheClient<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first TokenEventsCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenEventsCacheFindFirstOrThrowArgs} args - Arguments to find a TokenEventsCache
     * @example
     * // Get one TokenEventsCache
     * const tokenEventsCache = await prisma.tokenEventsCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenEventsCacheFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TokenEventsCacheFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TokenEventsCacheClient<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more TokenEventsCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenEventsCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenEventsCaches
     * const tokenEventsCaches = await prisma.tokenEventsCache.findMany()
     *
     * // Get first 10 TokenEventsCaches
     * const tokenEventsCaches = await prisma.tokenEventsCache.findMany({ take: 10 })
     *
     * // Only select the `tokenContractAddress`
     * const tokenEventsCacheWithTokenContractAddressOnly = await prisma.tokenEventsCache.findMany({ select: { tokenContractAddress: true } })
     */
    findMany<T extends TokenEventsCacheFindManyArgs>(
      args?: SelectSubset<T, TokenEventsCacheFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a TokenEventsCache.
     * @param {TokenEventsCacheCreateArgs} args - Arguments to create a TokenEventsCache.
     * @example
     * // Create one TokenEventsCache
     * const TokenEventsCache = await prisma.tokenEventsCache.create({
     *   data: {
     *     // ... data to create a TokenEventsCache
     *   }
     * })
     */
    create<T extends TokenEventsCacheCreateArgs>(
      args: SelectSubset<T, TokenEventsCacheCreateArgs<ExtArgs>>,
    ): Prisma__TokenEventsCacheClient<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many TokenEventsCaches.
     * @param {TokenEventsCacheCreateManyArgs} args - Arguments to create many TokenEventsCaches.
     * @example
     * // Create many TokenEventsCaches
     * const tokenEventsCache = await prisma.tokenEventsCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     */
    createMany<T extends TokenEventsCacheCreateManyArgs>(
      args?: SelectSubset<T, TokenEventsCacheCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TokenEventsCaches and returns the data saved in the database.
     * @param {TokenEventsCacheCreateManyAndReturnArgs} args - Arguments to create many TokenEventsCaches.
     * @example
     * // Create many TokenEventsCaches
     * const tokenEventsCache = await prisma.tokenEventsCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TokenEventsCaches and only return the `tokenContractAddress`
     * const tokenEventsCacheWithTokenContractAddressOnly = await prisma.tokenEventsCache.createManyAndReturn({
     *   select: { tokenContractAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    createManyAndReturn<T extends TokenEventsCacheCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TokenEventsCacheCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Delete a TokenEventsCache.
     * @param {TokenEventsCacheDeleteArgs} args - Arguments to delete one TokenEventsCache.
     * @example
     * // Delete one TokenEventsCache
     * const TokenEventsCache = await prisma.tokenEventsCache.delete({
     *   where: {
     *     // ... filter to delete one TokenEventsCache
     *   }
     * })
     */
    delete<T extends TokenEventsCacheDeleteArgs>(
      args: SelectSubset<T, TokenEventsCacheDeleteArgs<ExtArgs>>,
    ): Prisma__TokenEventsCacheClient<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one TokenEventsCache.
     * @param {TokenEventsCacheUpdateArgs} args - Arguments to update one TokenEventsCache.
     * @example
     * // Update one TokenEventsCache
     * const tokenEventsCache = await prisma.tokenEventsCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends TokenEventsCacheUpdateArgs>(
      args: SelectSubset<T, TokenEventsCacheUpdateArgs<ExtArgs>>,
    ): Prisma__TokenEventsCacheClient<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more TokenEventsCaches.
     * @param {TokenEventsCacheDeleteManyArgs} args - Arguments to filter TokenEventsCaches to delete.
     * @example
     * // Delete a few TokenEventsCaches
     * const { count } = await prisma.tokenEventsCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends TokenEventsCacheDeleteManyArgs>(
      args?: SelectSubset<T, TokenEventsCacheDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TokenEventsCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenEventsCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenEventsCaches
     * const tokenEventsCache = await prisma.tokenEventsCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends TokenEventsCacheUpdateManyArgs>(
      args: SelectSubset<T, TokenEventsCacheUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TokenEventsCaches and returns the data updated in the database.
     * @param {TokenEventsCacheUpdateManyAndReturnArgs} args - Arguments to update many TokenEventsCaches.
     * @example
     * // Update many TokenEventsCaches
     * const tokenEventsCache = await prisma.tokenEventsCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TokenEventsCaches and only return the `tokenContractAddress`
     * const tokenEventsCacheWithTokenContractAddressOnly = await prisma.tokenEventsCache.updateManyAndReturn({
     *   select: { tokenContractAddress: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    updateManyAndReturn<T extends TokenEventsCacheUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TokenEventsCacheUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Create or update one TokenEventsCache.
     * @param {TokenEventsCacheUpsertArgs} args - Arguments to update or create a TokenEventsCache.
     * @example
     * // Update or create a TokenEventsCache
     * const tokenEventsCache = await prisma.tokenEventsCache.upsert({
     *   create: {
     *     // ... data to create a TokenEventsCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenEventsCache we want to update
     *   }
     * })
     */
    upsert<T extends TokenEventsCacheUpsertArgs>(
      args: SelectSubset<T, TokenEventsCacheUpsertArgs<ExtArgs>>,
    ): Prisma__TokenEventsCacheClient<
      $Result.GetResult<
        Prisma.$TokenEventsCachePayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of TokenEventsCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenEventsCacheCountArgs} args - Arguments to filter TokenEventsCaches to count.
     * @example
     * // Count the number of TokenEventsCaches
     * const count = await prisma.tokenEventsCache.count({
     *   where: {
     *     // ... the filter for the TokenEventsCaches we want to count
     *   }
     * })
     */
    count<T extends TokenEventsCacheCountArgs>(
      args?: Subset<T, TokenEventsCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<T["select"], TokenEventsCacheCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TokenEventsCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenEventsCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends TokenEventsCacheAggregateArgs>(
      args: Subset<T, TokenEventsCacheAggregateArgs>,
    ): Prisma.PrismaPromise<GetTokenEventsCacheAggregateType<T>>;

    /**
     * Group by TokenEventsCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenEventsCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     */
    groupBy<
      T extends TokenEventsCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenEventsCacheGroupByArgs["orderBy"] }
        : { orderBy?: TokenEventsCacheGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args:
        & SubsetIntersection<T, TokenEventsCacheGroupByArgs, OrderByArg>
        & InputErrors,
    ): {} extends InputErrors ? GetTokenEventsCacheGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TokenEventsCache model
     */
    readonly fields: TokenEventsCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenEventsCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenEventsCacheClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TokenEventsCache model
   */
  interface TokenEventsCacheFieldRefs {
    readonly tokenContractAddress: FieldRef<"TokenEventsCache", "String">;
    readonly startBlock: FieldRef<"TokenEventsCache", "Int">;
    readonly endBlock: FieldRef<"TokenEventsCache", "Int">;
    readonly data: FieldRef<"TokenEventsCache", "Json">;
    readonly updatedAt: FieldRef<"TokenEventsCache", "DateTime">;
  }

  // Custom InputTypes
  /**
   * TokenEventsCache findUnique
   */
  export type TokenEventsCacheFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * Filter, which TokenEventsCache to fetch.
     */
    where: TokenEventsCacheWhereUniqueInput;
  };

  /**
   * TokenEventsCache findUniqueOrThrow
   */
  export type TokenEventsCacheFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * Filter, which TokenEventsCache to fetch.
     */
    where: TokenEventsCacheWhereUniqueInput;
  };

  /**
   * TokenEventsCache findFirst
   */
  export type TokenEventsCacheFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * Filter, which TokenEventsCache to fetch.
     */
    where?: TokenEventsCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TokenEventsCaches to fetch.
     */
    orderBy?:
      | TokenEventsCacheOrderByWithRelationInput
      | TokenEventsCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TokenEventsCaches.
     */
    cursor?: TokenEventsCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TokenEventsCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TokenEventsCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TokenEventsCaches.
     */
    distinct?:
      | TokenEventsCacheScalarFieldEnum
      | TokenEventsCacheScalarFieldEnum[];
  };

  /**
   * TokenEventsCache findFirstOrThrow
   */
  export type TokenEventsCacheFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * Filter, which TokenEventsCache to fetch.
     */
    where?: TokenEventsCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TokenEventsCaches to fetch.
     */
    orderBy?:
      | TokenEventsCacheOrderByWithRelationInput
      | TokenEventsCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TokenEventsCaches.
     */
    cursor?: TokenEventsCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TokenEventsCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TokenEventsCaches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TokenEventsCaches.
     */
    distinct?:
      | TokenEventsCacheScalarFieldEnum
      | TokenEventsCacheScalarFieldEnum[];
  };

  /**
   * TokenEventsCache findMany
   */
  export type TokenEventsCacheFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * Filter, which TokenEventsCaches to fetch.
     */
    where?: TokenEventsCacheWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TokenEventsCaches to fetch.
     */
    orderBy?:
      | TokenEventsCacheOrderByWithRelationInput
      | TokenEventsCacheOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TokenEventsCaches.
     */
    cursor?: TokenEventsCacheWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TokenEventsCaches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TokenEventsCaches.
     */
    skip?: number;
    distinct?:
      | TokenEventsCacheScalarFieldEnum
      | TokenEventsCacheScalarFieldEnum[];
  };

  /**
   * TokenEventsCache create
   */
  export type TokenEventsCacheCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * The data needed to create a TokenEventsCache.
     */
    data: XOR<
      TokenEventsCacheCreateInput,
      TokenEventsCacheUncheckedCreateInput
    >;
  };

  /**
   * TokenEventsCache createMany
   */
  export type TokenEventsCacheCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TokenEventsCaches.
     */
    data: TokenEventsCacheCreateManyInput | TokenEventsCacheCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TokenEventsCache createManyAndReturn
   */
  export type TokenEventsCacheCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * The data used to create many TokenEventsCaches.
     */
    data: TokenEventsCacheCreateManyInput | TokenEventsCacheCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TokenEventsCache update
   */
  export type TokenEventsCacheUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * The data needed to update a TokenEventsCache.
     */
    data: XOR<
      TokenEventsCacheUpdateInput,
      TokenEventsCacheUncheckedUpdateInput
    >;
    /**
     * Choose, which TokenEventsCache to update.
     */
    where: TokenEventsCacheWhereUniqueInput;
  };

  /**
   * TokenEventsCache updateMany
   */
  export type TokenEventsCacheUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TokenEventsCaches.
     */
    data: XOR<
      TokenEventsCacheUpdateManyMutationInput,
      TokenEventsCacheUncheckedUpdateManyInput
    >;
    /**
     * Filter which TokenEventsCaches to update
     */
    where?: TokenEventsCacheWhereInput;
    /**
     * Limit how many TokenEventsCaches to update.
     */
    limit?: number;
  };

  /**
   * TokenEventsCache updateManyAndReturn
   */
  export type TokenEventsCacheUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * The data used to update TokenEventsCaches.
     */
    data: XOR<
      TokenEventsCacheUpdateManyMutationInput,
      TokenEventsCacheUncheckedUpdateManyInput
    >;
    /**
     * Filter which TokenEventsCaches to update
     */
    where?: TokenEventsCacheWhereInput;
    /**
     * Limit how many TokenEventsCaches to update.
     */
    limit?: number;
  };

  /**
   * TokenEventsCache upsert
   */
  export type TokenEventsCacheUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * The filter to search for the TokenEventsCache to update in case it exists.
     */
    where: TokenEventsCacheWhereUniqueInput;
    /**
     * In case the TokenEventsCache found by the `where` argument doesn't exist, create a new TokenEventsCache with this data.
     */
    create: XOR<
      TokenEventsCacheCreateInput,
      TokenEventsCacheUncheckedCreateInput
    >;
    /**
     * In case the TokenEventsCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      TokenEventsCacheUpdateInput,
      TokenEventsCacheUncheckedUpdateInput
    >;
  };

  /**
   * TokenEventsCache delete
   */
  export type TokenEventsCacheDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
    /**
     * Filter which TokenEventsCache to delete.
     */
    where: TokenEventsCacheWhereUniqueInput;
  };

  /**
   * TokenEventsCache deleteMany
   */
  export type TokenEventsCacheDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TokenEventsCaches to delete
     */
    where?: TokenEventsCacheWhereInput;
    /**
     * Limit how many TokenEventsCaches to delete.
     */
    limit?: number;
  };

  /**
   * TokenEventsCache without action
   */
  export type TokenEventsCacheDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TokenEventsCache
     */
    select?: TokenEventsCacheSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TokenEventsCache
     */
    omit?: TokenEventsCacheOmit<ExtArgs> | null;
  };

  /**
   * Model TransactionInformation
   */

  export type AggregateTransactionInformation = {
    _count: TransactionInformationCountAggregateOutputType | null;
    _avg: TransactionInformationAvgAggregateOutputType | null;
    _sum: TransactionInformationSumAggregateOutputType | null;
    _min: TransactionInformationMinAggregateOutputType | null;
    _max: TransactionInformationMaxAggregateOutputType | null;
  };

  export type TransactionInformationAvgAggregateOutputType = {
    chainId: number | null;
  };

  export type TransactionInformationSumAggregateOutputType = {
    chainId: number | null;
  };

  export type TransactionInformationMinAggregateOutputType = {
    transactionHash: string | null;
    chainId: number | null;
    updatedAt: Date | null;
  };

  export type TransactionInformationMaxAggregateOutputType = {
    transactionHash: string | null;
    chainId: number | null;
    updatedAt: Date | null;
  };

  export type TransactionInformationCountAggregateOutputType = {
    transactionHash: number;
    chainId: number;
    data: number;
    updatedAt: number;
    _all: number;
  };

  export type TransactionInformationAvgAggregateInputType = {
    chainId?: true;
  };

  export type TransactionInformationSumAggregateInputType = {
    chainId?: true;
  };

  export type TransactionInformationMinAggregateInputType = {
    transactionHash?: true;
    chainId?: true;
    updatedAt?: true;
  };

  export type TransactionInformationMaxAggregateInputType = {
    transactionHash?: true;
    chainId?: true;
    updatedAt?: true;
  };

  export type TransactionInformationCountAggregateInputType = {
    transactionHash?: true;
    chainId?: true;
    data?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TransactionInformationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionInformation to aggregate.
     */
    where?: TransactionInformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionInformations to fetch.
     */
    orderBy?:
      | TransactionInformationOrderByWithRelationInput
      | TransactionInformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionInformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionInformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionInformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TransactionInformations
     */
    _count?: true | TransactionInformationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: TransactionInformationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: TransactionInformationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: TransactionInformationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: TransactionInformationMaxAggregateInputType;
  };

  export type GetTransactionInformationAggregateType<
    T extends TransactionInformationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateTransactionInformation]: P extends
      "_count" | "count" ? T[P] extends true ? number
      : GetScalarType<T[P], AggregateTransactionInformation[P]>
      : GetScalarType<T[P], AggregateTransactionInformation[P]>;
  };

  export type TransactionInformationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionInformationWhereInput;
    orderBy?:
      | TransactionInformationOrderByWithAggregationInput
      | TransactionInformationOrderByWithAggregationInput[];
    by:
      | TransactionInformationScalarFieldEnum[]
      | TransactionInformationScalarFieldEnum;
    having?: TransactionInformationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionInformationCountAggregateInputType | true;
    _avg?: TransactionInformationAvgAggregateInputType;
    _sum?: TransactionInformationSumAggregateInputType;
    _min?: TransactionInformationMinAggregateInputType;
    _max?: TransactionInformationMaxAggregateInputType;
  };

  export type TransactionInformationGroupByOutputType = {
    transactionHash: string;
    chainId: number;
    data: JsonValue;
    updatedAt: Date;
    _count: TransactionInformationCountAggregateOutputType | null;
    _avg: TransactionInformationAvgAggregateOutputType | null;
    _sum: TransactionInformationSumAggregateOutputType | null;
    _min: TransactionInformationMinAggregateOutputType | null;
    _max: TransactionInformationMaxAggregateOutputType | null;
  };

  type GetTransactionInformationGroupByPayload<
    T extends TransactionInformationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      & PickEnumerable<TransactionInformationGroupByOutputType, T["by"]>
      & {
        [P in ((keyof T) & (keyof TransactionInformationGroupByOutputType))]:
          P extends "_count" ? T[P] extends boolean ? number
            : GetScalarType<T[P], TransactionInformationGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionInformationGroupByOutputType[P]>;
      }
    >
  >;

  export type TransactionInformationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    transactionHash?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["transactionInformation"]>;

  export type TransactionInformationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    transactionHash?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["transactionInformation"]>;

  export type TransactionInformationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<{
    transactionHash?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  }, ExtArgs["result"]["transactionInformation"]>;

  export type TransactionInformationSelectScalar = {
    transactionHash?: boolean;
    chainId?: boolean;
    data?: boolean;
    updatedAt?: boolean;
  };

  export type TransactionInformationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "transactionHash" | "chainId" | "data" | "updatedAt",
    ExtArgs["result"]["transactionInformation"]
  >;

  export type $TransactionInformationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "TransactionInformation";
    objects: {};
    scalars: $Extensions.GetPayloadResult<{
      transactionHash: string;
      chainId: number;
      /**
       * The cached transaction data stored as a JSON blob.
       */
      data: Prisma.JsonValue;
      updatedAt: Date;
    }, ExtArgs["result"]["transactionInformation"]>;
    composites: {};
  };

  type TransactionInformationGetPayload<
    S extends boolean | null | undefined | TransactionInformationDefaultArgs,
  > = $Result.GetResult<Prisma.$TransactionInformationPayload, S>;

  type TransactionInformationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > =
    & Omit<
      TransactionInformationFindManyArgs,
      "select" | "include" | "distinct" | "omit"
    >
    & {
      select?: TransactionInformationCountAggregateInputType | true;
    };

  export interface TransactionInformationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["TransactionInformation"];
      meta: { name: "TransactionInformation" };
    };
    /**
     * Find zero or one TransactionInformation that matches the filter.
     * @param {TransactionInformationFindUniqueArgs} args - Arguments to find a TransactionInformation
     * @example
     * // Get one TransactionInformation
     * const transactionInformation = await prisma.transactionInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionInformationFindUniqueArgs>(
      args: SelectSubset<T, TransactionInformationFindUniqueArgs<ExtArgs>>,
    ): Prisma__TransactionInformationClient<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one TransactionInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionInformationFindUniqueOrThrowArgs} args - Arguments to find a TransactionInformation
     * @example
     * // Get one TransactionInformation
     * const transactionInformation = await prisma.transactionInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionInformationFindUniqueOrThrowArgs>(
      args: SelectSubset<
        T,
        TransactionInformationFindUniqueOrThrowArgs<ExtArgs>
      >,
    ): Prisma__TransactionInformationClient<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first TransactionInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionInformationFindFirstArgs} args - Arguments to find a TransactionInformation
     * @example
     * // Get one TransactionInformation
     * const transactionInformation = await prisma.transactionInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionInformationFindFirstArgs>(
      args?: SelectSubset<T, TransactionInformationFindFirstArgs<ExtArgs>>,
    ): Prisma__TransactionInformationClient<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first TransactionInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionInformationFindFirstOrThrowArgs} args - Arguments to find a TransactionInformation
     * @example
     * // Get one TransactionInformation
     * const transactionInformation = await prisma.transactionInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionInformationFindFirstOrThrowArgs>(
      args?: SelectSubset<
        T,
        TransactionInformationFindFirstOrThrowArgs<ExtArgs>
      >,
    ): Prisma__TransactionInformationClient<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more TransactionInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionInformations
     * const transactionInformations = await prisma.transactionInformation.findMany()
     *
     * // Get first 10 TransactionInformations
     * const transactionInformations = await prisma.transactionInformation.findMany({ take: 10 })
     *
     * // Only select the `transactionHash`
     * const transactionInformationWithTransactionHashOnly = await prisma.transactionInformation.findMany({ select: { transactionHash: true } })
     */
    findMany<T extends TransactionInformationFindManyArgs>(
      args?: SelectSubset<T, TransactionInformationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a TransactionInformation.
     * @param {TransactionInformationCreateArgs} args - Arguments to create a TransactionInformation.
     * @example
     * // Create one TransactionInformation
     * const TransactionInformation = await prisma.transactionInformation.create({
     *   data: {
     *     // ... data to create a TransactionInformation
     *   }
     * })
     */
    create<T extends TransactionInformationCreateArgs>(
      args: SelectSubset<T, TransactionInformationCreateArgs<ExtArgs>>,
    ): Prisma__TransactionInformationClient<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many TransactionInformations.
     * @param {TransactionInformationCreateManyArgs} args - Arguments to create many TransactionInformations.
     * @example
     * // Create many TransactionInformations
     * const transactionInformation = await prisma.transactionInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     */
    createMany<T extends TransactionInformationCreateManyArgs>(
      args?: SelectSubset<T, TransactionInformationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TransactionInformations and returns the data saved in the database.
     * @param {TransactionInformationCreateManyAndReturnArgs} args - Arguments to create many TransactionInformations.
     * @example
     * // Create many TransactionInformations
     * const transactionInformation = await prisma.transactionInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TransactionInformations and only return the `transactionHash`
     * const transactionInformationWithTransactionHashOnly = await prisma.transactionInformation.createManyAndReturn({
     *   select: { transactionHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    createManyAndReturn<
      T extends TransactionInformationCreateManyAndReturnArgs,
    >(
      args?: SelectSubset<
        T,
        TransactionInformationCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Delete a TransactionInformation.
     * @param {TransactionInformationDeleteArgs} args - Arguments to delete one TransactionInformation.
     * @example
     * // Delete one TransactionInformation
     * const TransactionInformation = await prisma.transactionInformation.delete({
     *   where: {
     *     // ... filter to delete one TransactionInformation
     *   }
     * })
     */
    delete<T extends TransactionInformationDeleteArgs>(
      args: SelectSubset<T, TransactionInformationDeleteArgs<ExtArgs>>,
    ): Prisma__TransactionInformationClient<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one TransactionInformation.
     * @param {TransactionInformationUpdateArgs} args - Arguments to update one TransactionInformation.
     * @example
     * // Update one TransactionInformation
     * const transactionInformation = await prisma.transactionInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    update<T extends TransactionInformationUpdateArgs>(
      args: SelectSubset<T, TransactionInformationUpdateArgs<ExtArgs>>,
    ): Prisma__TransactionInformationClient<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more TransactionInformations.
     * @param {TransactionInformationDeleteManyArgs} args - Arguments to filter TransactionInformations to delete.
     * @example
     * // Delete a few TransactionInformations
     * const { count } = await prisma.transactionInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    deleteMany<T extends TransactionInformationDeleteManyArgs>(
      args?: SelectSubset<T, TransactionInformationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TransactionInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionInformations
     * const transactionInformation = await prisma.transactionInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     */
    updateMany<T extends TransactionInformationUpdateManyArgs>(
      args: SelectSubset<T, TransactionInformationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TransactionInformations and returns the data updated in the database.
     * @param {TransactionInformationUpdateManyAndReturnArgs} args - Arguments to update many TransactionInformations.
     * @example
     * // Update many TransactionInformations
     * const transactionInformation = await prisma.transactionInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TransactionInformations and only return the `transactionHash`
     * const transactionInformationWithTransactionHashOnly = await prisma.transactionInformation.updateManyAndReturn({
     *   select: { transactionHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     */
    updateManyAndReturn<
      T extends TransactionInformationUpdateManyAndReturnArgs,
    >(
      args: SelectSubset<
        T,
        TransactionInformationUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        ClientOptions
      >
    >;

    /**
     * Create or update one TransactionInformation.
     * @param {TransactionInformationUpsertArgs} args - Arguments to update or create a TransactionInformation.
     * @example
     * // Update or create a TransactionInformation
     * const transactionInformation = await prisma.transactionInformation.upsert({
     *   create: {
     *     // ... data to create a TransactionInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionInformation we want to update
     *   }
     * })
     */
    upsert<T extends TransactionInformationUpsertArgs>(
      args: SelectSubset<T, TransactionInformationUpsertArgs<ExtArgs>>,
    ): Prisma__TransactionInformationClient<
      $Result.GetResult<
        Prisma.$TransactionInformationPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of TransactionInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionInformationCountArgs} args - Arguments to filter TransactionInformations to count.
     * @example
     * // Count the number of TransactionInformations
     * const count = await prisma.transactionInformation.count({
     *   where: {
     *     // ... the filter for the TransactionInformations we want to count
     *   }
     * })
     */
    count<T extends TransactionInformationCountArgs>(
      args?: Subset<T, TransactionInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any> ? T["select"] extends true ? number
        : GetScalarType<
          T["select"],
          TransactionInformationCountAggregateOutputType
        >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TransactionInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends TransactionInformationAggregateArgs>(
      args: Subset<T, TransactionInformationAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionInformationAggregateType<T>>;

    /**
     * Group by TransactionInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     */
    groupBy<
      T extends TransactionInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionInformationGroupByArgs["orderBy"] }
        : { orderBy?: TransactionInformationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False ? {
            [P in HavingFields]: P extends ByFields ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                Error,
                "Field ",
                P,
                ` in "having" needs to be provided in "by"`,
              ];
          }[HavingFields]
        : "take" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
          ? "orderBy" extends Keys<T> ? ByValid extends True ? {}
            : {
              [P in OrderFields]: P extends ByFields ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
            }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True ? {}
        : {
          [P in OrderFields]: P extends ByFields ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
        }[OrderFields],
    >(
      args:
        & SubsetIntersection<T, TransactionInformationGroupByArgs, OrderByArg>
        & InputErrors,
    ): {} extends InputErrors ? GetTransactionInformationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TransactionInformation model
     */
    readonly fields: TransactionInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionInformationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TransactionInformation model
   */
  interface TransactionInformationFieldRefs {
    readonly transactionHash: FieldRef<"TransactionInformation", "String">;
    readonly chainId: FieldRef<"TransactionInformation", "Int">;
    readonly data: FieldRef<"TransactionInformation", "Json">;
    readonly updatedAt: FieldRef<"TransactionInformation", "DateTime">;
  }

  // Custom InputTypes
  /**
   * TransactionInformation findUnique
   */
  export type TransactionInformationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * Filter, which TransactionInformation to fetch.
     */
    where: TransactionInformationWhereUniqueInput;
  };

  /**
   * TransactionInformation findUniqueOrThrow
   */
  export type TransactionInformationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * Filter, which TransactionInformation to fetch.
     */
    where: TransactionInformationWhereUniqueInput;
  };

  /**
   * TransactionInformation findFirst
   */
  export type TransactionInformationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * Filter, which TransactionInformation to fetch.
     */
    where?: TransactionInformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionInformations to fetch.
     */
    orderBy?:
      | TransactionInformationOrderByWithRelationInput
      | TransactionInformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionInformations.
     */
    cursor?: TransactionInformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionInformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionInformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionInformations.
     */
    distinct?:
      | TransactionInformationScalarFieldEnum
      | TransactionInformationScalarFieldEnum[];
  };

  /**
   * TransactionInformation findFirstOrThrow
   */
  export type TransactionInformationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * Filter, which TransactionInformation to fetch.
     */
    where?: TransactionInformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionInformations to fetch.
     */
    orderBy?:
      | TransactionInformationOrderByWithRelationInput
      | TransactionInformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionInformations.
     */
    cursor?: TransactionInformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionInformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionInformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionInformations.
     */
    distinct?:
      | TransactionInformationScalarFieldEnum
      | TransactionInformationScalarFieldEnum[];
  };

  /**
   * TransactionInformation findMany
   */
  export type TransactionInformationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * Filter, which TransactionInformations to fetch.
     */
    where?: TransactionInformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionInformations to fetch.
     */
    orderBy?:
      | TransactionInformationOrderByWithRelationInput
      | TransactionInformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TransactionInformations.
     */
    cursor?: TransactionInformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionInformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionInformations.
     */
    skip?: number;
    distinct?:
      | TransactionInformationScalarFieldEnum
      | TransactionInformationScalarFieldEnum[];
  };

  /**
   * TransactionInformation create
   */
  export type TransactionInformationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * The data needed to create a TransactionInformation.
     */
    data: XOR<
      TransactionInformationCreateInput,
      TransactionInformationUncheckedCreateInput
    >;
  };

  /**
   * TransactionInformation createMany
   */
  export type TransactionInformationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TransactionInformations.
     */
    data:
      | TransactionInformationCreateManyInput
      | TransactionInformationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TransactionInformation createManyAndReturn
   */
  export type TransactionInformationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * The data used to create many TransactionInformations.
     */
    data:
      | TransactionInformationCreateManyInput
      | TransactionInformationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TransactionInformation update
   */
  export type TransactionInformationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * The data needed to update a TransactionInformation.
     */
    data: XOR<
      TransactionInformationUpdateInput,
      TransactionInformationUncheckedUpdateInput
    >;
    /**
     * Choose, which TransactionInformation to update.
     */
    where: TransactionInformationWhereUniqueInput;
  };

  /**
   * TransactionInformation updateMany
   */
  export type TransactionInformationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TransactionInformations.
     */
    data: XOR<
      TransactionInformationUpdateManyMutationInput,
      TransactionInformationUncheckedUpdateManyInput
    >;
    /**
     * Filter which TransactionInformations to update
     */
    where?: TransactionInformationWhereInput;
    /**
     * Limit how many TransactionInformations to update.
     */
    limit?: number;
  };

  /**
   * TransactionInformation updateManyAndReturn
   */
  export type TransactionInformationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * The data used to update TransactionInformations.
     */
    data: XOR<
      TransactionInformationUpdateManyMutationInput,
      TransactionInformationUncheckedUpdateManyInput
    >;
    /**
     * Filter which TransactionInformations to update
     */
    where?: TransactionInformationWhereInput;
    /**
     * Limit how many TransactionInformations to update.
     */
    limit?: number;
  };

  /**
   * TransactionInformation upsert
   */
  export type TransactionInformationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * The filter to search for the TransactionInformation to update in case it exists.
     */
    where: TransactionInformationWhereUniqueInput;
    /**
     * In case the TransactionInformation found by the `where` argument doesn't exist, create a new TransactionInformation with this data.
     */
    create: XOR<
      TransactionInformationCreateInput,
      TransactionInformationUncheckedCreateInput
    >;
    /**
     * In case the TransactionInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      TransactionInformationUpdateInput,
      TransactionInformationUncheckedUpdateInput
    >;
  };

  /**
   * TransactionInformation delete
   */
  export type TransactionInformationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
    /**
     * Filter which TransactionInformation to delete.
     */
    where: TransactionInformationWhereUniqueInput;
  };

  /**
   * TransactionInformation deleteMany
   */
  export type TransactionInformationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionInformations to delete
     */
    where?: TransactionInformationWhereInput;
    /**
     * Limit how many TransactionInformations to delete.
     */
    limit?: number;
  };

  /**
   * TransactionInformation without action
   */
  export type TransactionInformationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionInformation
     */
    select?: TransactionInformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionInformation
     */
    omit?: TransactionInformationOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AbiCacheScalarFieldEnum: {
    contractAddress: "contractAddress";
    chainId: "chainId";
    data: "data";
    updatedAt: "updatedAt";
  };

  export type AbiCacheScalarFieldEnum =
    (typeof AbiCacheScalarFieldEnum)[keyof typeof AbiCacheScalarFieldEnum];

  export const TokenPriceUSDScalarFieldEnum: {
    tokenName: "tokenName";
    chainId: "chainId";
    data: "data";
    updatedAt: "updatedAt";
  };

  export type TokenPriceUSDScalarFieldEnum =
    (typeof TokenPriceUSDScalarFieldEnum)[
      keyof typeof TokenPriceUSDScalarFieldEnum
    ];

  export const CoinGeckoApiNameScalarFieldEnum: {
    id: "id";
    data: "data";
    updatedAt: "updatedAt";
  };

  export type CoinGeckoApiNameScalarFieldEnum =
    (typeof CoinGeckoApiNameScalarFieldEnum)[
      keyof typeof CoinGeckoApiNameScalarFieldEnum
    ];

  export const CoinGeckoTokenDetailScalarFieldEnum: {
    id: "id";
    data: "data";
    updatedAt: "updatedAt";
  };

  export type CoinGeckoTokenDetailScalarFieldEnum =
    (typeof CoinGeckoTokenDetailScalarFieldEnum)[
      keyof typeof CoinGeckoTokenDetailScalarFieldEnum
    ];

  export const CoinGeckoTokenDetailsIdScalarFieldEnum: {
    id: "id";
    data: "data";
    updatedAt: "updatedAt";
  };

  export type CoinGeckoTokenDetailsIdScalarFieldEnum =
    (typeof CoinGeckoTokenDetailsIdScalarFieldEnum)[
      keyof typeof CoinGeckoTokenDetailsIdScalarFieldEnum
    ];

  export const StepDataScalarFieldEnum: {
    step: "step";
    data: "data";
    status: "status";
    updatedAt: "updatedAt";
  };

  export type StepDataScalarFieldEnum =
    (typeof StepDataScalarFieldEnum)[keyof typeof StepDataScalarFieldEnum];

  export const TokenEventsCacheScalarFieldEnum: {
    tokenContractAddress: "tokenContractAddress";
    startBlock: "startBlock";
    endBlock: "endBlock";
    data: "data";
    updatedAt: "updatedAt";
  };

  export type TokenEventsCacheScalarFieldEnum =
    (typeof TokenEventsCacheScalarFieldEnum)[
      keyof typeof TokenEventsCacheScalarFieldEnum
    ];

  export const TransactionInformationScalarFieldEnum: {
    transactionHash: "transactionHash";
    chainId: "chainId";
    data: "data";
    updatedAt: "updatedAt";
  };

  export type TransactionInformationScalarFieldEnum =
    (typeof TransactionInformationScalarFieldEnum)[
      keyof typeof TransactionInformationScalarFieldEnum
    ];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type AbiCacheWhereInput = {
    AND?: AbiCacheWhereInput | AbiCacheWhereInput[];
    OR?: AbiCacheWhereInput[];
    NOT?: AbiCacheWhereInput | AbiCacheWhereInput[];
    contractAddress?: StringFilter<"AbiCache"> | string;
    chainId?: IntFilter<"AbiCache"> | number;
    data?: JsonFilter<"AbiCache">;
    updatedAt?: DateTimeFilter<"AbiCache"> | Date | string;
  };

  export type AbiCacheOrderByWithRelationInput = {
    contractAddress?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AbiCacheWhereUniqueInput = Prisma.AtLeast<{
    contractAddress_chainId?: AbiCacheContractAddressChainIdCompoundUniqueInput;
    AND?: AbiCacheWhereInput | AbiCacheWhereInput[];
    OR?: AbiCacheWhereInput[];
    NOT?: AbiCacheWhereInput | AbiCacheWhereInput[];
    contractAddress?: StringFilter<"AbiCache"> | string;
    chainId?: IntFilter<"AbiCache"> | number;
    data?: JsonFilter<"AbiCache">;
    updatedAt?: DateTimeFilter<"AbiCache"> | Date | string;
  }, "contractAddress_chainId">;

  export type AbiCacheOrderByWithAggregationInput = {
    contractAddress?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
    _count?: AbiCacheCountOrderByAggregateInput;
    _avg?: AbiCacheAvgOrderByAggregateInput;
    _max?: AbiCacheMaxOrderByAggregateInput;
    _min?: AbiCacheMinOrderByAggregateInput;
    _sum?: AbiCacheSumOrderByAggregateInput;
  };

  export type AbiCacheScalarWhereWithAggregatesInput = {
    AND?:
      | AbiCacheScalarWhereWithAggregatesInput
      | AbiCacheScalarWhereWithAggregatesInput[];
    OR?: AbiCacheScalarWhereWithAggregatesInput[];
    NOT?:
      | AbiCacheScalarWhereWithAggregatesInput
      | AbiCacheScalarWhereWithAggregatesInput[];
    contractAddress?: StringWithAggregatesFilter<"AbiCache"> | string;
    chainId?: IntWithAggregatesFilter<"AbiCache"> | number;
    data?: JsonWithAggregatesFilter<"AbiCache">;
    updatedAt?: DateTimeWithAggregatesFilter<"AbiCache"> | Date | string;
  };

  export type TokenPriceUSDWhereInput = {
    AND?: TokenPriceUSDWhereInput | TokenPriceUSDWhereInput[];
    OR?: TokenPriceUSDWhereInput[];
    NOT?: TokenPriceUSDWhereInput | TokenPriceUSDWhereInput[];
    tokenName?: StringFilter<"TokenPriceUSD"> | string;
    chainId?: IntFilter<"TokenPriceUSD"> | number;
    data?: JsonFilter<"TokenPriceUSD">;
    updatedAt?: DateTimeFilter<"TokenPriceUSD"> | Date | string;
  };

  export type TokenPriceUSDOrderByWithRelationInput = {
    tokenName?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TokenPriceUSDWhereUniqueInput = Prisma.AtLeast<{
    tokenName_chainId?: TokenPriceUSDTokenNameChainIdCompoundUniqueInput;
    AND?: TokenPriceUSDWhereInput | TokenPriceUSDWhereInput[];
    OR?: TokenPriceUSDWhereInput[];
    NOT?: TokenPriceUSDWhereInput | TokenPriceUSDWhereInput[];
    tokenName?: StringFilter<"TokenPriceUSD"> | string;
    chainId?: IntFilter<"TokenPriceUSD"> | number;
    data?: JsonFilter<"TokenPriceUSD">;
    updatedAt?: DateTimeFilter<"TokenPriceUSD"> | Date | string;
  }, "tokenName_chainId">;

  export type TokenPriceUSDOrderByWithAggregationInput = {
    tokenName?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TokenPriceUSDCountOrderByAggregateInput;
    _avg?: TokenPriceUSDAvgOrderByAggregateInput;
    _max?: TokenPriceUSDMaxOrderByAggregateInput;
    _min?: TokenPriceUSDMinOrderByAggregateInput;
    _sum?: TokenPriceUSDSumOrderByAggregateInput;
  };

  export type TokenPriceUSDScalarWhereWithAggregatesInput = {
    AND?:
      | TokenPriceUSDScalarWhereWithAggregatesInput
      | TokenPriceUSDScalarWhereWithAggregatesInput[];
    OR?: TokenPriceUSDScalarWhereWithAggregatesInput[];
    NOT?:
      | TokenPriceUSDScalarWhereWithAggregatesInput
      | TokenPriceUSDScalarWhereWithAggregatesInput[];
    tokenName?: StringWithAggregatesFilter<"TokenPriceUSD"> | string;
    chainId?: IntWithAggregatesFilter<"TokenPriceUSD"> | number;
    data?: JsonWithAggregatesFilter<"TokenPriceUSD">;
    updatedAt?: DateTimeWithAggregatesFilter<"TokenPriceUSD"> | Date | string;
  };

  export type CoinGeckoApiNameWhereInput = {
    AND?: CoinGeckoApiNameWhereInput | CoinGeckoApiNameWhereInput[];
    OR?: CoinGeckoApiNameWhereInput[];
    NOT?: CoinGeckoApiNameWhereInput | CoinGeckoApiNameWhereInput[];
    id?: StringFilter<"CoinGeckoApiName"> | string;
    data?: JsonFilter<"CoinGeckoApiName">;
    updatedAt?: DateTimeFilter<"CoinGeckoApiName"> | Date | string;
  };

  export type CoinGeckoApiNameOrderByWithRelationInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoApiNameWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: CoinGeckoApiNameWhereInput | CoinGeckoApiNameWhereInput[];
    OR?: CoinGeckoApiNameWhereInput[];
    NOT?: CoinGeckoApiNameWhereInput | CoinGeckoApiNameWhereInput[];
    data?: JsonFilter<"CoinGeckoApiName">;
    updatedAt?: DateTimeFilter<"CoinGeckoApiName"> | Date | string;
  }, "id">;

  export type CoinGeckoApiNameOrderByWithAggregationInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CoinGeckoApiNameCountOrderByAggregateInput;
    _max?: CoinGeckoApiNameMaxOrderByAggregateInput;
    _min?: CoinGeckoApiNameMinOrderByAggregateInput;
  };

  export type CoinGeckoApiNameScalarWhereWithAggregatesInput = {
    AND?:
      | CoinGeckoApiNameScalarWhereWithAggregatesInput
      | CoinGeckoApiNameScalarWhereWithAggregatesInput[];
    OR?: CoinGeckoApiNameScalarWhereWithAggregatesInput[];
    NOT?:
      | CoinGeckoApiNameScalarWhereWithAggregatesInput
      | CoinGeckoApiNameScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"CoinGeckoApiName"> | string;
    data?: JsonWithAggregatesFilter<"CoinGeckoApiName">;
    updatedAt?:
      | DateTimeWithAggregatesFilter<"CoinGeckoApiName">
      | Date
      | string;
  };

  export type CoinGeckoTokenDetailWhereInput = {
    AND?: CoinGeckoTokenDetailWhereInput | CoinGeckoTokenDetailWhereInput[];
    OR?: CoinGeckoTokenDetailWhereInput[];
    NOT?: CoinGeckoTokenDetailWhereInput | CoinGeckoTokenDetailWhereInput[];
    id?: StringFilter<"CoinGeckoTokenDetail"> | string;
    data?: JsonFilter<"CoinGeckoTokenDetail">;
    updatedAt?: DateTimeFilter<"CoinGeckoTokenDetail"> | Date | string;
  };

  export type CoinGeckoTokenDetailOrderByWithRelationInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoTokenDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: CoinGeckoTokenDetailWhereInput | CoinGeckoTokenDetailWhereInput[];
    OR?: CoinGeckoTokenDetailWhereInput[];
    NOT?: CoinGeckoTokenDetailWhereInput | CoinGeckoTokenDetailWhereInput[];
    data?: JsonFilter<"CoinGeckoTokenDetail">;
    updatedAt?: DateTimeFilter<"CoinGeckoTokenDetail"> | Date | string;
  }, "id">;

  export type CoinGeckoTokenDetailOrderByWithAggregationInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CoinGeckoTokenDetailCountOrderByAggregateInput;
    _max?: CoinGeckoTokenDetailMaxOrderByAggregateInput;
    _min?: CoinGeckoTokenDetailMinOrderByAggregateInput;
  };

  export type CoinGeckoTokenDetailScalarWhereWithAggregatesInput = {
    AND?:
      | CoinGeckoTokenDetailScalarWhereWithAggregatesInput
      | CoinGeckoTokenDetailScalarWhereWithAggregatesInput[];
    OR?: CoinGeckoTokenDetailScalarWhereWithAggregatesInput[];
    NOT?:
      | CoinGeckoTokenDetailScalarWhereWithAggregatesInput
      | CoinGeckoTokenDetailScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"CoinGeckoTokenDetail"> | string;
    data?: JsonWithAggregatesFilter<"CoinGeckoTokenDetail">;
    updatedAt?:
      | DateTimeWithAggregatesFilter<"CoinGeckoTokenDetail">
      | Date
      | string;
  };

  export type CoinGeckoTokenDetailsIdWhereInput = {
    AND?:
      | CoinGeckoTokenDetailsIdWhereInput
      | CoinGeckoTokenDetailsIdWhereInput[];
    OR?: CoinGeckoTokenDetailsIdWhereInput[];
    NOT?:
      | CoinGeckoTokenDetailsIdWhereInput
      | CoinGeckoTokenDetailsIdWhereInput[];
    id?: StringFilter<"CoinGeckoTokenDetailsId"> | string;
    data?: JsonFilter<"CoinGeckoTokenDetailsId">;
    updatedAt?: DateTimeFilter<"CoinGeckoTokenDetailsId"> | Date | string;
  };

  export type CoinGeckoTokenDetailsIdOrderByWithRelationInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoTokenDetailsIdWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?:
      | CoinGeckoTokenDetailsIdWhereInput
      | CoinGeckoTokenDetailsIdWhereInput[];
    OR?: CoinGeckoTokenDetailsIdWhereInput[];
    NOT?:
      | CoinGeckoTokenDetailsIdWhereInput
      | CoinGeckoTokenDetailsIdWhereInput[];
    data?: JsonFilter<"CoinGeckoTokenDetailsId">;
    updatedAt?: DateTimeFilter<"CoinGeckoTokenDetailsId"> | Date | string;
  }, "id">;

  export type CoinGeckoTokenDetailsIdOrderByWithAggregationInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CoinGeckoTokenDetailsIdCountOrderByAggregateInput;
    _max?: CoinGeckoTokenDetailsIdMaxOrderByAggregateInput;
    _min?: CoinGeckoTokenDetailsIdMinOrderByAggregateInput;
  };

  export type CoinGeckoTokenDetailsIdScalarWhereWithAggregatesInput = {
    AND?:
      | CoinGeckoTokenDetailsIdScalarWhereWithAggregatesInput
      | CoinGeckoTokenDetailsIdScalarWhereWithAggregatesInput[];
    OR?: CoinGeckoTokenDetailsIdScalarWhereWithAggregatesInput[];
    NOT?:
      | CoinGeckoTokenDetailsIdScalarWhereWithAggregatesInput
      | CoinGeckoTokenDetailsIdScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"CoinGeckoTokenDetailsId"> | string;
    data?: JsonWithAggregatesFilter<"CoinGeckoTokenDetailsId">;
    updatedAt?:
      | DateTimeWithAggregatesFilter<"CoinGeckoTokenDetailsId">
      | Date
      | string;
  };

  export type StepDataWhereInput = {
    AND?: StepDataWhereInput | StepDataWhereInput[];
    OR?: StepDataWhereInput[];
    NOT?: StepDataWhereInput | StepDataWhereInput[];
    step?: IntFilter<"StepData"> | number;
    data?: JsonFilter<"StepData">;
    status?: JsonFilter<"StepData">;
    updatedAt?: DateTimeFilter<"StepData"> | Date | string;
  };

  export type StepDataOrderByWithRelationInput = {
    step?: SortOrder;
    data?: SortOrder;
    status?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StepDataWhereUniqueInput = Prisma.AtLeast<{
    step?: number;
    AND?: StepDataWhereInput | StepDataWhereInput[];
    OR?: StepDataWhereInput[];
    NOT?: StepDataWhereInput | StepDataWhereInput[];
    data?: JsonFilter<"StepData">;
    status?: JsonFilter<"StepData">;
    updatedAt?: DateTimeFilter<"StepData"> | Date | string;
  }, "step">;

  export type StepDataOrderByWithAggregationInput = {
    step?: SortOrder;
    data?: SortOrder;
    status?: SortOrder;
    updatedAt?: SortOrder;
    _count?: StepDataCountOrderByAggregateInput;
    _avg?: StepDataAvgOrderByAggregateInput;
    _max?: StepDataMaxOrderByAggregateInput;
    _min?: StepDataMinOrderByAggregateInput;
    _sum?: StepDataSumOrderByAggregateInput;
  };

  export type StepDataScalarWhereWithAggregatesInput = {
    AND?:
      | StepDataScalarWhereWithAggregatesInput
      | StepDataScalarWhereWithAggregatesInput[];
    OR?: StepDataScalarWhereWithAggregatesInput[];
    NOT?:
      | StepDataScalarWhereWithAggregatesInput
      | StepDataScalarWhereWithAggregatesInput[];
    step?: IntWithAggregatesFilter<"StepData"> | number;
    data?: JsonWithAggregatesFilter<"StepData">;
    status?: JsonWithAggregatesFilter<"StepData">;
    updatedAt?: DateTimeWithAggregatesFilter<"StepData"> | Date | string;
  };

  export type TokenEventsCacheWhereInput = {
    AND?: TokenEventsCacheWhereInput | TokenEventsCacheWhereInput[];
    OR?: TokenEventsCacheWhereInput[];
    NOT?: TokenEventsCacheWhereInput | TokenEventsCacheWhereInput[];
    tokenContractAddress?: StringFilter<"TokenEventsCache"> | string;
    startBlock?: IntFilter<"TokenEventsCache"> | number;
    endBlock?: IntFilter<"TokenEventsCache"> | number;
    data?: JsonFilter<"TokenEventsCache">;
    updatedAt?: DateTimeFilter<"TokenEventsCache"> | Date | string;
  };

  export type TokenEventsCacheOrderByWithRelationInput = {
    tokenContractAddress?: SortOrder;
    startBlock?: SortOrder;
    endBlock?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TokenEventsCacheWhereUniqueInput = Prisma.AtLeast<{
    tokenContractAddress_startBlock_endBlock?:
      TokenEventsCacheTokenContractAddressStartBlockEndBlockCompoundUniqueInput;
    AND?: TokenEventsCacheWhereInput | TokenEventsCacheWhereInput[];
    OR?: TokenEventsCacheWhereInput[];
    NOT?: TokenEventsCacheWhereInput | TokenEventsCacheWhereInput[];
    tokenContractAddress?: StringFilter<"TokenEventsCache"> | string;
    startBlock?: IntFilter<"TokenEventsCache"> | number;
    endBlock?: IntFilter<"TokenEventsCache"> | number;
    data?: JsonFilter<"TokenEventsCache">;
    updatedAt?: DateTimeFilter<"TokenEventsCache"> | Date | string;
  }, "tokenContractAddress_startBlock_endBlock">;

  export type TokenEventsCacheOrderByWithAggregationInput = {
    tokenContractAddress?: SortOrder;
    startBlock?: SortOrder;
    endBlock?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TokenEventsCacheCountOrderByAggregateInput;
    _avg?: TokenEventsCacheAvgOrderByAggregateInput;
    _max?: TokenEventsCacheMaxOrderByAggregateInput;
    _min?: TokenEventsCacheMinOrderByAggregateInput;
    _sum?: TokenEventsCacheSumOrderByAggregateInput;
  };

  export type TokenEventsCacheScalarWhereWithAggregatesInput = {
    AND?:
      | TokenEventsCacheScalarWhereWithAggregatesInput
      | TokenEventsCacheScalarWhereWithAggregatesInput[];
    OR?: TokenEventsCacheScalarWhereWithAggregatesInput[];
    NOT?:
      | TokenEventsCacheScalarWhereWithAggregatesInput
      | TokenEventsCacheScalarWhereWithAggregatesInput[];
    tokenContractAddress?:
      | StringWithAggregatesFilter<"TokenEventsCache">
      | string;
    startBlock?: IntWithAggregatesFilter<"TokenEventsCache"> | number;
    endBlock?: IntWithAggregatesFilter<"TokenEventsCache"> | number;
    data?: JsonWithAggregatesFilter<"TokenEventsCache">;
    updatedAt?:
      | DateTimeWithAggregatesFilter<"TokenEventsCache">
      | Date
      | string;
  };

  export type TransactionInformationWhereInput = {
    AND?: TransactionInformationWhereInput | TransactionInformationWhereInput[];
    OR?: TransactionInformationWhereInput[];
    NOT?: TransactionInformationWhereInput | TransactionInformationWhereInput[];
    transactionHash?: StringFilter<"TransactionInformation"> | string;
    chainId?: IntFilter<"TransactionInformation"> | number;
    data?: JsonFilter<"TransactionInformation">;
    updatedAt?: DateTimeFilter<"TransactionInformation"> | Date | string;
  };

  export type TransactionInformationOrderByWithRelationInput = {
    transactionHash?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TransactionInformationWhereUniqueInput = Prisma.AtLeast<{
    transactionHash_chainId?:
      TransactionInformationTransactionHashChainIdCompoundUniqueInput;
    AND?: TransactionInformationWhereInput | TransactionInformationWhereInput[];
    OR?: TransactionInformationWhereInput[];
    NOT?: TransactionInformationWhereInput | TransactionInformationWhereInput[];
    transactionHash?: StringFilter<"TransactionInformation"> | string;
    chainId?: IntFilter<"TransactionInformation"> | number;
    data?: JsonFilter<"TransactionInformation">;
    updatedAt?: DateTimeFilter<"TransactionInformation"> | Date | string;
  }, "transactionHash_chainId">;

  export type TransactionInformationOrderByWithAggregationInput = {
    transactionHash?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TransactionInformationCountOrderByAggregateInput;
    _avg?: TransactionInformationAvgOrderByAggregateInput;
    _max?: TransactionInformationMaxOrderByAggregateInput;
    _min?: TransactionInformationMinOrderByAggregateInput;
    _sum?: TransactionInformationSumOrderByAggregateInput;
  };

  export type TransactionInformationScalarWhereWithAggregatesInput = {
    AND?:
      | TransactionInformationScalarWhereWithAggregatesInput
      | TransactionInformationScalarWhereWithAggregatesInput[];
    OR?: TransactionInformationScalarWhereWithAggregatesInput[];
    NOT?:
      | TransactionInformationScalarWhereWithAggregatesInput
      | TransactionInformationScalarWhereWithAggregatesInput[];
    transactionHash?:
      | StringWithAggregatesFilter<"TransactionInformation">
      | string;
    chainId?: IntWithAggregatesFilter<"TransactionInformation"> | number;
    data?: JsonWithAggregatesFilter<"TransactionInformation">;
    updatedAt?:
      | DateTimeWithAggregatesFilter<"TransactionInformation">
      | Date
      | string;
  };

  export type AbiCacheCreateInput = {
    contractAddress: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type AbiCacheUncheckedCreateInput = {
    contractAddress: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type AbiCacheUpdateInput = {
    contractAddress?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AbiCacheUncheckedUpdateInput = {
    contractAddress?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AbiCacheCreateManyInput = {
    contractAddress: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type AbiCacheUpdateManyMutationInput = {
    contractAddress?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AbiCacheUncheckedUpdateManyInput = {
    contractAddress?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenPriceUSDCreateInput = {
    tokenName: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TokenPriceUSDUncheckedCreateInput = {
    tokenName: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TokenPriceUSDUpdateInput = {
    tokenName?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenPriceUSDUncheckedUpdateInput = {
    tokenName?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenPriceUSDCreateManyInput = {
    tokenName: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TokenPriceUSDUpdateManyMutationInput = {
    tokenName?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenPriceUSDUncheckedUpdateManyInput = {
    tokenName?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoApiNameCreateInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoApiNameUncheckedCreateInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoApiNameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoApiNameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoApiNameCreateManyInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoApiNameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoApiNameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoTokenDetailCreateInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoTokenDetailUncheckedCreateInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoTokenDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoTokenDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoTokenDetailCreateManyInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoTokenDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoTokenDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoTokenDetailsIdCreateInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoTokenDetailsIdUncheckedCreateInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoTokenDetailsIdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoTokenDetailsIdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoTokenDetailsIdCreateManyInput = {
    id: string;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type CoinGeckoTokenDetailsIdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CoinGeckoTokenDetailsIdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StepDataCreateInput = {
    step: number;
    data: JsonNullValueInput | InputJsonValue;
    status: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type StepDataUncheckedCreateInput = {
    step: number;
    data: JsonNullValueInput | InputJsonValue;
    status: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type StepDataUpdateInput = {
    step?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    status?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StepDataUncheckedUpdateInput = {
    step?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    status?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StepDataCreateManyInput = {
    step: number;
    data: JsonNullValueInput | InputJsonValue;
    status: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type StepDataUpdateManyMutationInput = {
    step?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    status?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StepDataUncheckedUpdateManyInput = {
    step?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    status?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenEventsCacheCreateInput = {
    tokenContractAddress: string;
    startBlock: number;
    endBlock: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TokenEventsCacheUncheckedCreateInput = {
    tokenContractAddress: string;
    startBlock: number;
    endBlock: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TokenEventsCacheUpdateInput = {
    tokenContractAddress?: StringFieldUpdateOperationsInput | string;
    startBlock?: IntFieldUpdateOperationsInput | number;
    endBlock?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenEventsCacheUncheckedUpdateInput = {
    tokenContractAddress?: StringFieldUpdateOperationsInput | string;
    startBlock?: IntFieldUpdateOperationsInput | number;
    endBlock?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenEventsCacheCreateManyInput = {
    tokenContractAddress: string;
    startBlock: number;
    endBlock: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TokenEventsCacheUpdateManyMutationInput = {
    tokenContractAddress?: StringFieldUpdateOperationsInput | string;
    startBlock?: IntFieldUpdateOperationsInput | number;
    endBlock?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenEventsCacheUncheckedUpdateManyInput = {
    tokenContractAddress?: StringFieldUpdateOperationsInput | string;
    startBlock?: IntFieldUpdateOperationsInput | number;
    endBlock?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionInformationCreateInput = {
    transactionHash: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TransactionInformationUncheckedCreateInput = {
    transactionHash: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TransactionInformationUpdateInput = {
    transactionHash?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionInformationUncheckedUpdateInput = {
    transactionHash?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionInformationCreateManyInput = {
    transactionHash: string;
    chainId: number;
    data: JsonNullValueInput | InputJsonValue;
    updatedAt?: Date | string;
  };

  export type TransactionInformationUpdateManyMutationInput = {
    transactionHash?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TransactionInformationUncheckedUpdateManyInput = {
    transactionHash?: StringFieldUpdateOperationsInput | string;
    chainId?: IntFieldUpdateOperationsInput | number;
    data?: JsonNullValueInput | InputJsonValue;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
      Either<
        Required<JsonFilterBase<$PrismaModel>>,
        Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">
      >,
      Required<JsonFilterBase<$PrismaModel>>
    >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type AbiCacheContractAddressChainIdCompoundUniqueInput = {
    contractAddress: string;
    chainId: number;
  };

  export type AbiCacheCountOrderByAggregateInput = {
    contractAddress?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AbiCacheAvgOrderByAggregateInput = {
    chainId?: SortOrder;
  };

  export type AbiCacheMaxOrderByAggregateInput = {
    contractAddress?: SortOrder;
    chainId?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AbiCacheMinOrderByAggregateInput = {
    contractAddress?: SortOrder;
    chainId?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AbiCacheSumOrderByAggregateInput = {
    chainId?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
      Either<
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
        Exclude<
          keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          "path"
        >
      >,
      Required<JsonWithAggregatesFilterBase<$PrismaModel>>
    >
    | OptionalFlat<
      Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">
    >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type TokenPriceUSDTokenNameChainIdCompoundUniqueInput = {
    tokenName: string;
    chainId: number;
  };

  export type TokenPriceUSDCountOrderByAggregateInput = {
    tokenName?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TokenPriceUSDAvgOrderByAggregateInput = {
    chainId?: SortOrder;
  };

  export type TokenPriceUSDMaxOrderByAggregateInput = {
    tokenName?: SortOrder;
    chainId?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TokenPriceUSDMinOrderByAggregateInput = {
    tokenName?: SortOrder;
    chainId?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TokenPriceUSDSumOrderByAggregateInput = {
    chainId?: SortOrder;
  };

  export type CoinGeckoApiNameCountOrderByAggregateInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoApiNameMaxOrderByAggregateInput = {
    id?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoApiNameMinOrderByAggregateInput = {
    id?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoTokenDetailCountOrderByAggregateInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoTokenDetailMaxOrderByAggregateInput = {
    id?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoTokenDetailMinOrderByAggregateInput = {
    id?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoTokenDetailsIdCountOrderByAggregateInput = {
    id?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoTokenDetailsIdMaxOrderByAggregateInput = {
    id?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CoinGeckoTokenDetailsIdMinOrderByAggregateInput = {
    id?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StepDataCountOrderByAggregateInput = {
    step?: SortOrder;
    data?: SortOrder;
    status?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StepDataAvgOrderByAggregateInput = {
    step?: SortOrder;
  };

  export type StepDataMaxOrderByAggregateInput = {
    step?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StepDataMinOrderByAggregateInput = {
    step?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StepDataSumOrderByAggregateInput = {
    step?: SortOrder;
  };

  export type TokenEventsCacheTokenContractAddressStartBlockEndBlockCompoundUniqueInput =
    {
      tokenContractAddress: string;
      startBlock: number;
      endBlock: number;
    };

  export type TokenEventsCacheCountOrderByAggregateInput = {
    tokenContractAddress?: SortOrder;
    startBlock?: SortOrder;
    endBlock?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TokenEventsCacheAvgOrderByAggregateInput = {
    startBlock?: SortOrder;
    endBlock?: SortOrder;
  };

  export type TokenEventsCacheMaxOrderByAggregateInput = {
    tokenContractAddress?: SortOrder;
    startBlock?: SortOrder;
    endBlock?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TokenEventsCacheMinOrderByAggregateInput = {
    tokenContractAddress?: SortOrder;
    startBlock?: SortOrder;
    endBlock?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TokenEventsCacheSumOrderByAggregateInput = {
    startBlock?: SortOrder;
    endBlock?: SortOrder;
  };

  export type TransactionInformationTransactionHashChainIdCompoundUniqueInput =
    {
      transactionHash: string;
      chainId: number;
    };

  export type TransactionInformationCountOrderByAggregateInput = {
    transactionHash?: SortOrder;
    chainId?: SortOrder;
    data?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TransactionInformationAvgOrderByAggregateInput = {
    chainId?: SortOrder;
  };

  export type TransactionInformationMaxOrderByAggregateInput = {
    transactionHash?: SortOrder;
    chainId?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TransactionInformationMinOrderByAggregateInput = {
    transactionHash?: SortOrder;
    chainId?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TransactionInformationSumOrderByAggregateInput = {
    chainId?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
      Either<
        Required<NestedJsonFilterBase<$PrismaModel>>,
        Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">
      >,
      Required<NestedJsonFilterBase<$PrismaModel>>
    >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

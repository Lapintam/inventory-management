
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>
/**
 * Model Purchases
 * 
 */
export type Purchases = $Result.DefaultSelection<Prisma.$PurchasesPayload>
/**
 * Model Expenses
 * 
 */
export type Expenses = $Result.DefaultSelection<Prisma.$ExpensesPayload>
/**
 * Model SalesSummary
 * 
 */
export type SalesSummary = $Result.DefaultSelection<Prisma.$SalesSummaryPayload>
/**
 * Model PurchaseSummary
 * 
 */
export type PurchaseSummary = $Result.DefaultSelection<Prisma.$PurchaseSummaryPayload>
/**
 * Model ExpenseSummary
 * 
 */
export type ExpenseSummary = $Result.DefaultSelection<Prisma.$ExpenseSummaryPayload>
/**
 * Model ExpenseByCategory
 * 
 */
export type ExpenseByCategory = $Result.DefaultSelection<Prisma.$ExpenseByCategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchases`: Exposes CRUD operations for the **Purchases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchases.findMany()
    * ```
    */
  get purchases(): Prisma.PurchasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **Expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.ExpensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesSummary`: Exposes CRUD operations for the **SalesSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesSummaries
    * const salesSummaries = await prisma.salesSummary.findMany()
    * ```
    */
  get salesSummary(): Prisma.SalesSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseSummary`: Exposes CRUD operations for the **PurchaseSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseSummaries
    * const purchaseSummaries = await prisma.purchaseSummary.findMany()
    * ```
    */
  get purchaseSummary(): Prisma.PurchaseSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseSummary`: Exposes CRUD operations for the **ExpenseSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseSummaries
    * const expenseSummaries = await prisma.expenseSummary.findMany()
    * ```
    */
  get expenseSummary(): Prisma.ExpenseSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseByCategory`: Exposes CRUD operations for the **ExpenseByCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseByCategories
    * const expenseByCategories = await prisma.expenseByCategory.findMany()
    * ```
    */
  get expenseByCategory(): Prisma.ExpenseByCategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Products: 'Products',
    Sales: 'Sales',
    Purchases: 'Purchases',
    Expenses: 'Expenses',
    SalesSummary: 'SalesSummary',
    PurchaseSummary: 'PurchaseSummary',
    ExpenseSummary: 'ExpenseSummary',
    ExpenseByCategory: 'ExpenseByCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "products" | "sales" | "purchases" | "expenses" | "salesSummary" | "purchaseSummary" | "expenseSummary" | "expenseByCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      Purchases: {
        payload: Prisma.$PurchasesPayload<ExtArgs>
        fields: Prisma.PurchasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          findFirst: {
            args: Prisma.PurchasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          findMany: {
            args: Prisma.PurchasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          create: {
            args: Prisma.PurchasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          createMany: {
            args: Prisma.PurchasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          delete: {
            args: Prisma.PurchasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          update: {
            args: Prisma.PurchasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          deleteMany: {
            args: Prisma.PurchasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          upsert: {
            args: Prisma.PurchasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          aggregate: {
            args: Prisma.PurchasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchases>
          }
          groupBy: {
            args: Prisma.PurchasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchasesCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasesCountAggregateOutputType> | number
          }
        }
      }
      Expenses: {
        payload: Prisma.$ExpensesPayload<ExtArgs>
        fields: Prisma.ExpensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          findFirst: {
            args: Prisma.ExpensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          findMany: {
            args: Prisma.ExpensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          create: {
            args: Prisma.ExpensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          createMany: {
            args: Prisma.ExpensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpensesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          delete: {
            args: Prisma.ExpensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          update: {
            args: Prisma.ExpensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          deleteMany: {
            args: Prisma.ExpensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpensesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          upsert: {
            args: Prisma.ExpensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.ExpensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      SalesSummary: {
        payload: Prisma.$SalesSummaryPayload<ExtArgs>
        fields: Prisma.SalesSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>
          }
          findFirst: {
            args: Prisma.SalesSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>
          }
          findMany: {
            args: Prisma.SalesSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>[]
          }
          create: {
            args: Prisma.SalesSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>
          }
          createMany: {
            args: Prisma.SalesSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>[]
          }
          delete: {
            args: Prisma.SalesSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>
          }
          update: {
            args: Prisma.SalesSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>
          }
          deleteMany: {
            args: Prisma.SalesSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>[]
          }
          upsert: {
            args: Prisma.SalesSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesSummaryPayload>
          }
          aggregate: {
            args: Prisma.SalesSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesSummary>
          }
          groupBy: {
            args: Prisma.SalesSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<SalesSummaryCountAggregateOutputType> | number
          }
        }
      }
      PurchaseSummary: {
        payload: Prisma.$PurchaseSummaryPayload<ExtArgs>
        fields: Prisma.PurchaseSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>
          }
          findFirst: {
            args: Prisma.PurchaseSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>
          }
          findMany: {
            args: Prisma.PurchaseSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>[]
          }
          create: {
            args: Prisma.PurchaseSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>
          }
          createMany: {
            args: Prisma.PurchaseSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>[]
          }
          delete: {
            args: Prisma.PurchaseSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>
          }
          update: {
            args: Prisma.PurchaseSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseSummaryPayload>
          }
          aggregate: {
            args: Prisma.PurchaseSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseSummary>
          }
          groupBy: {
            args: Prisma.PurchaseSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseSummaryCountAggregateOutputType> | number
          }
        }
      }
      ExpenseSummary: {
        payload: Prisma.$ExpenseSummaryPayload<ExtArgs>
        fields: Prisma.ExpenseSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>
          }
          findFirst: {
            args: Prisma.ExpenseSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>
          }
          findMany: {
            args: Prisma.ExpenseSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>[]
          }
          create: {
            args: Prisma.ExpenseSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>
          }
          createMany: {
            args: Prisma.ExpenseSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>[]
          }
          delete: {
            args: Prisma.ExpenseSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>
          }
          update: {
            args: Prisma.ExpenseSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSummaryPayload>
          }
          aggregate: {
            args: Prisma.ExpenseSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseSummary>
          }
          groupBy: {
            args: Prisma.ExpenseSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseSummaryCountAggregateOutputType> | number
          }
        }
      }
      ExpenseByCategory: {
        payload: Prisma.$ExpenseByCategoryPayload<ExtArgs>
        fields: Prisma.ExpenseByCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseByCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseByCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>
          }
          findFirst: {
            args: Prisma.ExpenseByCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseByCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>
          }
          findMany: {
            args: Prisma.ExpenseByCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>[]
          }
          create: {
            args: Prisma.ExpenseByCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>
          }
          createMany: {
            args: Prisma.ExpenseByCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseByCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>[]
          }
          delete: {
            args: Prisma.ExpenseByCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>
          }
          update: {
            args: Prisma.ExpenseByCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseByCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseByCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseByCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseByCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseByCategoryPayload>
          }
          aggregate: {
            args: Prisma.ExpenseByCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseByCategory>
          }
          groupBy: {
            args: Prisma.ExpenseByCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseByCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseByCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseByCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    products?: ProductsOmit
    sales?: SalesOmit
    purchases?: PurchasesOmit
    expenses?: ExpensesOmit
    salesSummary?: SalesSummaryOmit
    purchaseSummary?: PurchaseSummaryOmit
    expenseSummary?: ExpenseSummaryOmit
    expenseByCategory?: ExpenseByCategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    Sales: number
    Purchases: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sales?: boolean | ProductsCountOutputTypeCountSalesArgs
    Purchases?: boolean | ProductsCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasesWhereInput
  }


  /**
   * Count Type ExpenseSummaryCountOutputType
   */

  export type ExpenseSummaryCountOutputType = {
    ExpenseByCategory: number
  }

  export type ExpenseSummaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ExpenseByCategory?: boolean | ExpenseSummaryCountOutputTypeCountExpenseByCategoryArgs
  }

  // Custom InputTypes
  /**
   * ExpenseSummaryCountOutputType without action
   */
  export type ExpenseSummaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummaryCountOutputType
     */
    select?: ExpenseSummaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseSummaryCountOutputType without action
   */
  export type ExpenseSummaryCountOutputTypeCountExpenseByCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseByCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    userId: string | null
    name: string | null
    email: string | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: string | null
    name: string | null
    email: string | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    name: number
    email: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    userId?: true
    name?: true
    email?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    name?: true
    email?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: string
    name: string
    email: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    userId?: boolean
    name?: boolean
    email?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "name" | "email", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      name: string
      email: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const usersWithUserIdOnly = await prisma.users.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const usersWithUserIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly userId: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
    rating: number | null
    stockQuantity: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
    rating: number | null
    stockQuantity: number | null
  }

  export type ProductsMinAggregateOutputType = {
    productId: string | null
    name: string | null
    price: number | null
    rating: number | null
    stockQuantity: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    productId: string | null
    name: string | null
    price: number | null
    rating: number | null
    stockQuantity: number | null
  }

  export type ProductsCountAggregateOutputType = {
    productId: number
    name: number
    price: number
    rating: number
    stockQuantity: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    rating?: true
    stockQuantity?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    rating?: true
    stockQuantity?: true
  }

  export type ProductsMinAggregateInputType = {
    productId?: true
    name?: true
    price?: true
    rating?: true
    stockQuantity?: true
  }

  export type ProductsMaxAggregateInputType = {
    productId?: true
    name?: true
    price?: true
    rating?: true
    stockQuantity?: true
  }

  export type ProductsCountAggregateInputType = {
    productId?: true
    name?: true
    price?: true
    rating?: true
    stockQuantity?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    productId: string
    name: string
    price: number
    rating: number | null
    stockQuantity: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    price?: boolean
    rating?: boolean
    stockQuantity?: boolean
    Sales?: boolean | Products$SalesArgs<ExtArgs>
    Purchases?: boolean | Products$PurchasesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    price?: boolean
    rating?: boolean
    stockQuantity?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    price?: boolean
    rating?: boolean
    stockQuantity?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    productId?: boolean
    name?: boolean
    price?: boolean
    rating?: boolean
    stockQuantity?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "name" | "price" | "rating" | "stockQuantity", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sales?: boolean | Products$SalesArgs<ExtArgs>
    Purchases?: boolean | Products$PurchasesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      Sales: Prisma.$SalesPayload<ExtArgs>[]
      Purchases: Prisma.$PurchasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      name: string
      price: number
      rating: number | null
      stockQuantity: number
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productsWithProductIdOnly = await prisma.products.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productId`
     * const productsWithProductIdOnly = await prisma.products.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `productId`
     * const productsWithProductIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Sales<T extends Products$SalesArgs<ExtArgs> = {}>(args?: Subset<T, Products$SalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Purchases<T extends Products$PurchasesArgs<ExtArgs> = {}>(args?: Subset<T, Products$PurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly productId: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Float'>
    readonly rating: FieldRef<"Products", 'Float'>
    readonly stockQuantity: FieldRef<"Products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.Sales
   */
  export type Products$SalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    cursor?: SalesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Products.Purchases
   */
  export type Products$PurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    where?: PurchasesWhereInput
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    cursor?: PurchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalAmount: number | null
  }

  export type SalesSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalAmount: number | null
  }

  export type SalesMinAggregateOutputType = {
    saleId: string | null
    productId: string | null
    timestamp: Date | null
    quantity: number | null
    unitPrice: number | null
    totalAmount: number | null
  }

  export type SalesMaxAggregateOutputType = {
    saleId: string | null
    productId: string | null
    timestamp: Date | null
    quantity: number | null
    unitPrice: number | null
    totalAmount: number | null
  }

  export type SalesCountAggregateOutputType = {
    saleId: number
    productId: number
    timestamp: number
    quantity: number
    unitPrice: number
    totalAmount: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalAmount?: true
  }

  export type SalesSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalAmount?: true
  }

  export type SalesMinAggregateInputType = {
    saleId?: true
    productId?: true
    timestamp?: true
    quantity?: true
    unitPrice?: true
    totalAmount?: true
  }

  export type SalesMaxAggregateInputType = {
    saleId?: true
    productId?: true
    timestamp?: true
    quantity?: true
    unitPrice?: true
    totalAmount?: true
  }

  export type SalesCountAggregateInputType = {
    saleId?: true
    productId?: true
    timestamp?: true
    quantity?: true
    unitPrice?: true
    totalAmount?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    saleId: string
    productId: string
    timestamp: Date
    quantity: number
    unitPrice: number
    totalAmount: number
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    productId?: boolean
    timestamp?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalAmount?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    productId?: boolean
    timestamp?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalAmount?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saleId?: boolean
    productId?: boolean
    timestamp?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalAmount?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    saleId?: boolean
    productId?: boolean
    timestamp?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalAmount?: boolean
  }

  export type SalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"saleId" | "productId" | "timestamp" | "quantity" | "unitPrice" | "totalAmount", ExtArgs["result"]["sales"]>
  export type SalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type SalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type SalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      saleId: string
      productId: string
      timestamp: Date
      quantity: number
      unitPrice: number
      totalAmount: number
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `saleId`
     * const salesWithSaleIdOnly = await prisma.sales.findMany({ select: { saleId: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `saleId`
     * const salesWithSaleIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { saleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SalesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `saleId`
     * const salesWithSaleIdOnly = await prisma.sales.updateManyAndReturn({
     *   select: { saleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sales model
   */
  interface SalesFieldRefs {
    readonly saleId: FieldRef<"Sales", 'String'>
    readonly productId: FieldRef<"Sales", 'String'>
    readonly timestamp: FieldRef<"Sales", 'DateTime'>
    readonly quantity: FieldRef<"Sales", 'Int'>
    readonly unitPrice: FieldRef<"Sales", 'Float'>
    readonly totalAmount: FieldRef<"Sales", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales updateManyAndReturn
   */
  export type SalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
  }


  /**
   * Model Purchases
   */

  export type AggregatePurchases = {
    _count: PurchasesCountAggregateOutputType | null
    _avg: PurchasesAvgAggregateOutputType | null
    _sum: PurchasesSumAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  export type PurchasesAvgAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
    totalCost: number | null
  }

  export type PurchasesSumAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
    totalCost: number | null
  }

  export type PurchasesMinAggregateOutputType = {
    purchaseId: string | null
    productId: string | null
    timestamp: Date | null
    quantity: number | null
    unitCost: number | null
    totalCost: number | null
  }

  export type PurchasesMaxAggregateOutputType = {
    purchaseId: string | null
    productId: string | null
    timestamp: Date | null
    quantity: number | null
    unitCost: number | null
    totalCost: number | null
  }

  export type PurchasesCountAggregateOutputType = {
    purchaseId: number
    productId: number
    timestamp: number
    quantity: number
    unitCost: number
    totalCost: number
    _all: number
  }


  export type PurchasesAvgAggregateInputType = {
    quantity?: true
    unitCost?: true
    totalCost?: true
  }

  export type PurchasesSumAggregateInputType = {
    quantity?: true
    unitCost?: true
    totalCost?: true
  }

  export type PurchasesMinAggregateInputType = {
    purchaseId?: true
    productId?: true
    timestamp?: true
    quantity?: true
    unitCost?: true
    totalCost?: true
  }

  export type PurchasesMaxAggregateInputType = {
    purchaseId?: true
    productId?: true
    timestamp?: true
    quantity?: true
    unitCost?: true
    totalCost?: true
  }

  export type PurchasesCountAggregateInputType = {
    purchaseId?: true
    productId?: true
    timestamp?: true
    quantity?: true
    unitCost?: true
    totalCost?: true
    _all?: true
  }

  export type PurchasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to aggregate.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasesMaxAggregateInputType
  }

  export type GetPurchasesAggregateType<T extends PurchasesAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchases[P]>
      : GetScalarType<T[P], AggregatePurchases[P]>
  }




  export type PurchasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasesWhereInput
    orderBy?: PurchasesOrderByWithAggregationInput | PurchasesOrderByWithAggregationInput[]
    by: PurchasesScalarFieldEnum[] | PurchasesScalarFieldEnum
    having?: PurchasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasesCountAggregateInputType | true
    _avg?: PurchasesAvgAggregateInputType
    _sum?: PurchasesSumAggregateInputType
    _min?: PurchasesMinAggregateInputType
    _max?: PurchasesMaxAggregateInputType
  }

  export type PurchasesGroupByOutputType = {
    purchaseId: string
    productId: string
    timestamp: Date
    quantity: number
    unitCost: number
    totalCost: number
    _count: PurchasesCountAggregateOutputType | null
    _avg: PurchasesAvgAggregateOutputType | null
    _sum: PurchasesSumAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  type GetPurchasesGroupByPayload<T extends PurchasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
        }
      >
    >


  export type PurchasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseId?: boolean
    productId?: boolean
    timestamp?: boolean
    quantity?: boolean
    unitCost?: boolean
    totalCost?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseId?: boolean
    productId?: boolean
    timestamp?: boolean
    quantity?: boolean
    unitCost?: boolean
    totalCost?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseId?: boolean
    productId?: boolean
    timestamp?: boolean
    quantity?: boolean
    unitCost?: boolean
    totalCost?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectScalar = {
    purchaseId?: boolean
    productId?: boolean
    timestamp?: boolean
    quantity?: boolean
    unitCost?: boolean
    totalCost?: boolean
  }

  export type PurchasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purchaseId" | "productId" | "timestamp" | "quantity" | "unitCost" | "totalCost", ExtArgs["result"]["purchases"]>
  export type PurchasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type PurchasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type PurchasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $PurchasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchases"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      purchaseId: string
      productId: string
      timestamp: Date
      quantity: number
      unitCost: number
      totalCost: number
    }, ExtArgs["result"]["purchases"]>
    composites: {}
  }

  type PurchasesGetPayload<S extends boolean | null | undefined | PurchasesDefaultArgs> = $Result.GetResult<Prisma.$PurchasesPayload, S>

  type PurchasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchasesCountAggregateInputType | true
    }

  export interface PurchasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchases'], meta: { name: 'Purchases' } }
    /**
     * Find zero or one Purchases that matches the filter.
     * @param {PurchasesFindUniqueArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasesFindUniqueArgs>(args: SelectSubset<T, PurchasesFindUniqueArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchasesFindUniqueOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasesFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindFirstArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasesFindFirstArgs>(args?: SelectSubset<T, PurchasesFindFirstArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindFirstOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasesFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchases.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchases.findMany({ take: 10 })
     * 
     * // Only select the `purchaseId`
     * const purchasesWithPurchaseIdOnly = await prisma.purchases.findMany({ select: { purchaseId: true } })
     * 
     */
    findMany<T extends PurchasesFindManyArgs>(args?: SelectSubset<T, PurchasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchases.
     * @param {PurchasesCreateArgs} args - Arguments to create a Purchases.
     * @example
     * // Create one Purchases
     * const Purchases = await prisma.purchases.create({
     *   data: {
     *     // ... data to create a Purchases
     *   }
     * })
     * 
     */
    create<T extends PurchasesCreateArgs>(args: SelectSubset<T, PurchasesCreateArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchasesCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchasesCreateManyArgs>(args?: SelectSubset<T, PurchasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchasesCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `purchaseId`
     * const purchasesWithPurchaseIdOnly = await prisma.purchases.createManyAndReturn({
     *   select: { purchaseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchasesCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchases.
     * @param {PurchasesDeleteArgs} args - Arguments to delete one Purchases.
     * @example
     * // Delete one Purchases
     * const Purchases = await prisma.purchases.delete({
     *   where: {
     *     // ... filter to delete one Purchases
     *   }
     * })
     * 
     */
    delete<T extends PurchasesDeleteArgs>(args: SelectSubset<T, PurchasesDeleteArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchases.
     * @param {PurchasesUpdateArgs} args - Arguments to update one Purchases.
     * @example
     * // Update one Purchases
     * const purchases = await prisma.purchases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchasesUpdateArgs>(args: SelectSubset<T, PurchasesUpdateArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchasesDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchasesDeleteManyArgs>(args?: SelectSubset<T, PurchasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchasesUpdateManyArgs>(args: SelectSubset<T, PurchasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchasesUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `purchaseId`
     * const purchasesWithPurchaseIdOnly = await prisma.purchases.updateManyAndReturn({
     *   select: { purchaseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchasesUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchases.
     * @param {PurchasesUpsertArgs} args - Arguments to update or create a Purchases.
     * @example
     * // Update or create a Purchases
     * const purchases = await prisma.purchases.upsert({
     *   create: {
     *     // ... data to create a Purchases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchases we want to update
     *   }
     * })
     */
    upsert<T extends PurchasesUpsertArgs>(args: SelectSubset<T, PurchasesUpsertArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchases.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchasesCountArgs>(
      args?: Subset<T, PurchasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends PurchasesAggregateArgs>(args: Subset<T, PurchasesAggregateArgs>): Prisma.PrismaPromise<GetPurchasesAggregateType<T>>

    /**
     * Group by Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends PurchasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchasesGroupByArgs['orderBy'] }
        : { orderBy?: PurchasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchases model
   */
  readonly fields: PurchasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchases model
   */
  interface PurchasesFieldRefs {
    readonly purchaseId: FieldRef<"Purchases", 'String'>
    readonly productId: FieldRef<"Purchases", 'String'>
    readonly timestamp: FieldRef<"Purchases", 'DateTime'>
    readonly quantity: FieldRef<"Purchases", 'Int'>
    readonly unitCost: FieldRef<"Purchases", 'Float'>
    readonly totalCost: FieldRef<"Purchases", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Purchases findUnique
   */
  export type PurchasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases findUniqueOrThrow
   */
  export type PurchasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases findFirst
   */
  export type PurchasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases findFirstOrThrow
   */
  export type PurchasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases findMany
   */
  export type PurchasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases create
   */
  export type PurchasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchases.
     */
    data: XOR<PurchasesCreateInput, PurchasesUncheckedCreateInput>
  }

  /**
   * Purchases createMany
   */
  export type PurchasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchasesCreateManyInput | PurchasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchases createManyAndReturn
   */
  export type PurchasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchasesCreateManyInput | PurchasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchases update
   */
  export type PurchasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchases.
     */
    data: XOR<PurchasesUpdateInput, PurchasesUncheckedUpdateInput>
    /**
     * Choose, which Purchases to update.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases updateMany
   */
  export type PurchasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchases updateManyAndReturn
   */
  export type PurchasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchases upsert
   */
  export type PurchasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchases to update in case it exists.
     */
    where: PurchasesWhereUniqueInput
    /**
     * In case the Purchases found by the `where` argument doesn't exist, create a new Purchases with this data.
     */
    create: XOR<PurchasesCreateInput, PurchasesUncheckedCreateInput>
    /**
     * In case the Purchases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchasesUpdateInput, PurchasesUncheckedUpdateInput>
  }

  /**
   * Purchases delete
   */
  export type PurchasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter which Purchases to delete.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases deleteMany
   */
  export type PurchasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchases without action
   */
  export type PurchasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
  }


  /**
   * Model Expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpensesSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpensesMinAggregateOutputType = {
    expenseId: string | null
    category: string | null
    amount: number | null
    timestamp: Date | null
  }

  export type ExpensesMaxAggregateOutputType = {
    expenseId: string | null
    category: string | null
    amount: number | null
    timestamp: Date | null
  }

  export type ExpensesCountAggregateOutputType = {
    expenseId: number
    category: number
    amount: number
    timestamp: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    amount?: true
  }

  export type ExpensesSumAggregateInputType = {
    amount?: true
  }

  export type ExpensesMinAggregateInputType = {
    expenseId?: true
    category?: true
    amount?: true
    timestamp?: true
  }

  export type ExpensesMaxAggregateInputType = {
    expenseId?: true
    category?: true
    amount?: true
    timestamp?: true
  }

  export type ExpensesCountAggregateInputType = {
    expenseId?: true
    category?: true
    amount?: true
    timestamp?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to aggregate.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type ExpensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpensesWhereInput
    orderBy?: ExpensesOrderByWithAggregationInput | ExpensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: ExpensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    expenseId: string
    category: string
    amount: number
    timestamp: Date
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends ExpensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type ExpensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseId?: boolean
    category?: boolean
    amount?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseId?: boolean
    category?: boolean
    amount?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseId?: boolean
    category?: boolean
    amount?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectScalar = {
    expenseId?: boolean
    category?: boolean
    amount?: boolean
    timestamp?: boolean
  }

  export type ExpensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expenseId" | "category" | "amount" | "timestamp", ExtArgs["result"]["expenses"]>

  export type $ExpensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expenses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      expenseId: string
      category: string
      amount: number
      timestamp: Date
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type ExpensesGetPayload<S extends boolean | null | undefined | ExpensesDefaultArgs> = $Result.GetResult<Prisma.$ExpensesPayload, S>

  type ExpensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface ExpensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expenses'], meta: { name: 'Expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {ExpensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpensesFindUniqueArgs>(args: SelectSubset<T, ExpensesFindUniqueArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpensesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpensesFindFirstArgs>(args?: SelectSubset<T, ExpensesFindFirstArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpensesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `expenseId`
     * const expensesWithExpenseIdOnly = await prisma.expenses.findMany({ select: { expenseId: true } })
     * 
     */
    findMany<T extends ExpensesFindManyArgs>(args?: SelectSubset<T, ExpensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses.
     * @param {ExpensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends ExpensesCreateArgs>(args: SelectSubset<T, ExpensesCreateArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpensesCreateManyArgs>(args?: SelectSubset<T, ExpensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpensesCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `expenseId`
     * const expensesWithExpenseIdOnly = await prisma.expenses.createManyAndReturn({
     *   select: { expenseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpensesCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpensesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expenses.
     * @param {ExpensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends ExpensesDeleteArgs>(args: SelectSubset<T, ExpensesDeleteArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses.
     * @param {ExpensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpensesUpdateArgs>(args: SelectSubset<T, ExpensesUpdateArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpensesDeleteManyArgs>(args?: SelectSubset<T, ExpensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpensesUpdateManyArgs>(args: SelectSubset<T, ExpensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpensesUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `expenseId`
     * const expensesWithExpenseIdOnly = await prisma.expenses.updateManyAndReturn({
     *   select: { expenseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpensesUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpensesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expenses.
     * @param {ExpensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends ExpensesUpsertArgs>(args: SelectSubset<T, ExpensesUpsertArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpensesCountArgs>(
      args?: Subset<T, ExpensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends ExpensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpensesGroupByArgs['orderBy'] }
        : { orderBy?: ExpensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expenses model
   */
  readonly fields: ExpensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expenses model
   */
  interface ExpensesFieldRefs {
    readonly expenseId: FieldRef<"Expenses", 'String'>
    readonly category: FieldRef<"Expenses", 'String'>
    readonly amount: FieldRef<"Expenses", 'Float'>
    readonly timestamp: FieldRef<"Expenses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expenses findUnique
   */
  export type ExpensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses findUniqueOrThrow
   */
  export type ExpensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses findFirst
   */
  export type ExpensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses findFirstOrThrow
   */
  export type ExpensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses findMany
   */
  export type ExpensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses create
   */
  export type ExpensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The data needed to create a Expenses.
     */
    data: XOR<ExpensesCreateInput, ExpensesUncheckedCreateInput>
  }

  /**
   * Expenses createMany
   */
  export type ExpensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpensesCreateManyInput | ExpensesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expenses createManyAndReturn
   */
  export type ExpensesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpensesCreateManyInput | ExpensesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expenses update
   */
  export type ExpensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The data needed to update a Expenses.
     */
    data: XOR<ExpensesUpdateInput, ExpensesUncheckedUpdateInput>
    /**
     * Choose, which Expenses to update.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses updateMany
   */
  export type ExpensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expenses updateManyAndReturn
   */
  export type ExpensesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expenses upsert
   */
  export type ExpensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The filter to search for the Expenses to update in case it exists.
     */
    where: ExpensesWhereUniqueInput
    /**
     * In case the Expenses found by the `where` argument doesn't exist, create a new Expenses with this data.
     */
    create: XOR<ExpensesCreateInput, ExpensesUncheckedCreateInput>
    /**
     * In case the Expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpensesUpdateInput, ExpensesUncheckedUpdateInput>
  }

  /**
   * Expenses delete
   */
  export type ExpensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Filter which Expenses to delete.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses deleteMany
   */
  export type ExpensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expenses without action
   */
  export type ExpensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
  }


  /**
   * Model SalesSummary
   */

  export type AggregateSalesSummary = {
    _count: SalesSummaryCountAggregateOutputType | null
    _avg: SalesSummaryAvgAggregateOutputType | null
    _sum: SalesSummarySumAggregateOutputType | null
    _min: SalesSummaryMinAggregateOutputType | null
    _max: SalesSummaryMaxAggregateOutputType | null
  }

  export type SalesSummaryAvgAggregateOutputType = {
    totalValue: number | null
    changePercentage: number | null
  }

  export type SalesSummarySumAggregateOutputType = {
    totalValue: number | null
    changePercentage: number | null
  }

  export type SalesSummaryMinAggregateOutputType = {
    salesSummaryId: string | null
    totalValue: number | null
    changePercentage: number | null
    date: Date | null
  }

  export type SalesSummaryMaxAggregateOutputType = {
    salesSummaryId: string | null
    totalValue: number | null
    changePercentage: number | null
    date: Date | null
  }

  export type SalesSummaryCountAggregateOutputType = {
    salesSummaryId: number
    totalValue: number
    changePercentage: number
    date: number
    _all: number
  }


  export type SalesSummaryAvgAggregateInputType = {
    totalValue?: true
    changePercentage?: true
  }

  export type SalesSummarySumAggregateInputType = {
    totalValue?: true
    changePercentage?: true
  }

  export type SalesSummaryMinAggregateInputType = {
    salesSummaryId?: true
    totalValue?: true
    changePercentage?: true
    date?: true
  }

  export type SalesSummaryMaxAggregateInputType = {
    salesSummaryId?: true
    totalValue?: true
    changePercentage?: true
    date?: true
  }

  export type SalesSummaryCountAggregateInputType = {
    salesSummaryId?: true
    totalValue?: true
    changePercentage?: true
    date?: true
    _all?: true
  }

  export type SalesSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesSummary to aggregate.
     */
    where?: SalesSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesSummaries to fetch.
     */
    orderBy?: SalesSummaryOrderByWithRelationInput | SalesSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesSummaries
    **/
    _count?: true | SalesSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesSummaryMaxAggregateInputType
  }

  export type GetSalesSummaryAggregateType<T extends SalesSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesSummary[P]>
      : GetScalarType<T[P], AggregateSalesSummary[P]>
  }




  export type SalesSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesSummaryWhereInput
    orderBy?: SalesSummaryOrderByWithAggregationInput | SalesSummaryOrderByWithAggregationInput[]
    by: SalesSummaryScalarFieldEnum[] | SalesSummaryScalarFieldEnum
    having?: SalesSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesSummaryCountAggregateInputType | true
    _avg?: SalesSummaryAvgAggregateInputType
    _sum?: SalesSummarySumAggregateInputType
    _min?: SalesSummaryMinAggregateInputType
    _max?: SalesSummaryMaxAggregateInputType
  }

  export type SalesSummaryGroupByOutputType = {
    salesSummaryId: string
    totalValue: number
    changePercentage: number
    date: Date
    _count: SalesSummaryCountAggregateOutputType | null
    _avg: SalesSummaryAvgAggregateOutputType | null
    _sum: SalesSummarySumAggregateOutputType | null
    _min: SalesSummaryMinAggregateOutputType | null
    _max: SalesSummaryMaxAggregateOutputType | null
  }

  type GetSalesSummaryGroupByPayload<T extends SalesSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], SalesSummaryGroupByOutputType[P]>
        }
      >
    >


  export type SalesSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    salesSummaryId?: boolean
    totalValue?: boolean
    changePercentage?: boolean
    date?: boolean
  }, ExtArgs["result"]["salesSummary"]>

  export type SalesSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    salesSummaryId?: boolean
    totalValue?: boolean
    changePercentage?: boolean
    date?: boolean
  }, ExtArgs["result"]["salesSummary"]>

  export type SalesSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    salesSummaryId?: boolean
    totalValue?: boolean
    changePercentage?: boolean
    date?: boolean
  }, ExtArgs["result"]["salesSummary"]>

  export type SalesSummarySelectScalar = {
    salesSummaryId?: boolean
    totalValue?: boolean
    changePercentage?: boolean
    date?: boolean
  }

  export type SalesSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"salesSummaryId" | "totalValue" | "changePercentage" | "date", ExtArgs["result"]["salesSummary"]>

  export type $SalesSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesSummary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      salesSummaryId: string
      totalValue: number
      changePercentage: number
      date: Date
    }, ExtArgs["result"]["salesSummary"]>
    composites: {}
  }

  type SalesSummaryGetPayload<S extends boolean | null | undefined | SalesSummaryDefaultArgs> = $Result.GetResult<Prisma.$SalesSummaryPayload, S>

  type SalesSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesSummaryCountAggregateInputType | true
    }

  export interface SalesSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesSummary'], meta: { name: 'SalesSummary' } }
    /**
     * Find zero or one SalesSummary that matches the filter.
     * @param {SalesSummaryFindUniqueArgs} args - Arguments to find a SalesSummary
     * @example
     * // Get one SalesSummary
     * const salesSummary = await prisma.salesSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesSummaryFindUniqueArgs>(args: SelectSubset<T, SalesSummaryFindUniqueArgs<ExtArgs>>): Prisma__SalesSummaryClient<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesSummaryFindUniqueOrThrowArgs} args - Arguments to find a SalesSummary
     * @example
     * // Get one SalesSummary
     * const salesSummary = await prisma.salesSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesSummaryClient<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryFindFirstArgs} args - Arguments to find a SalesSummary
     * @example
     * // Get one SalesSummary
     * const salesSummary = await prisma.salesSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesSummaryFindFirstArgs>(args?: SelectSubset<T, SalesSummaryFindFirstArgs<ExtArgs>>): Prisma__SalesSummaryClient<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryFindFirstOrThrowArgs} args - Arguments to find a SalesSummary
     * @example
     * // Get one SalesSummary
     * const salesSummary = await prisma.salesSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesSummaryClient<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesSummaries
     * const salesSummaries = await prisma.salesSummary.findMany()
     * 
     * // Get first 10 SalesSummaries
     * const salesSummaries = await prisma.salesSummary.findMany({ take: 10 })
     * 
     * // Only select the `salesSummaryId`
     * const salesSummaryWithSalesSummaryIdOnly = await prisma.salesSummary.findMany({ select: { salesSummaryId: true } })
     * 
     */
    findMany<T extends SalesSummaryFindManyArgs>(args?: SelectSubset<T, SalesSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesSummary.
     * @param {SalesSummaryCreateArgs} args - Arguments to create a SalesSummary.
     * @example
     * // Create one SalesSummary
     * const SalesSummary = await prisma.salesSummary.create({
     *   data: {
     *     // ... data to create a SalesSummary
     *   }
     * })
     * 
     */
    create<T extends SalesSummaryCreateArgs>(args: SelectSubset<T, SalesSummaryCreateArgs<ExtArgs>>): Prisma__SalesSummaryClient<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesSummaries.
     * @param {SalesSummaryCreateManyArgs} args - Arguments to create many SalesSummaries.
     * @example
     * // Create many SalesSummaries
     * const salesSummary = await prisma.salesSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesSummaryCreateManyArgs>(args?: SelectSubset<T, SalesSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesSummaries and returns the data saved in the database.
     * @param {SalesSummaryCreateManyAndReturnArgs} args - Arguments to create many SalesSummaries.
     * @example
     * // Create many SalesSummaries
     * const salesSummary = await prisma.salesSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesSummaries and only return the `salesSummaryId`
     * const salesSummaryWithSalesSummaryIdOnly = await prisma.salesSummary.createManyAndReturn({
     *   select: { salesSummaryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesSummary.
     * @param {SalesSummaryDeleteArgs} args - Arguments to delete one SalesSummary.
     * @example
     * // Delete one SalesSummary
     * const SalesSummary = await prisma.salesSummary.delete({
     *   where: {
     *     // ... filter to delete one SalesSummary
     *   }
     * })
     * 
     */
    delete<T extends SalesSummaryDeleteArgs>(args: SelectSubset<T, SalesSummaryDeleteArgs<ExtArgs>>): Prisma__SalesSummaryClient<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesSummary.
     * @param {SalesSummaryUpdateArgs} args - Arguments to update one SalesSummary.
     * @example
     * // Update one SalesSummary
     * const salesSummary = await prisma.salesSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesSummaryUpdateArgs>(args: SelectSubset<T, SalesSummaryUpdateArgs<ExtArgs>>): Prisma__SalesSummaryClient<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesSummaries.
     * @param {SalesSummaryDeleteManyArgs} args - Arguments to filter SalesSummaries to delete.
     * @example
     * // Delete a few SalesSummaries
     * const { count } = await prisma.salesSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesSummaryDeleteManyArgs>(args?: SelectSubset<T, SalesSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesSummaries
     * const salesSummary = await prisma.salesSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesSummaryUpdateManyArgs>(args: SelectSubset<T, SalesSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesSummaries and returns the data updated in the database.
     * @param {SalesSummaryUpdateManyAndReturnArgs} args - Arguments to update many SalesSummaries.
     * @example
     * // Update many SalesSummaries
     * const salesSummary = await prisma.salesSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesSummaries and only return the `salesSummaryId`
     * const salesSummaryWithSalesSummaryIdOnly = await prisma.salesSummary.updateManyAndReturn({
     *   select: { salesSummaryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesSummary.
     * @param {SalesSummaryUpsertArgs} args - Arguments to update or create a SalesSummary.
     * @example
     * // Update or create a SalesSummary
     * const salesSummary = await prisma.salesSummary.upsert({
     *   create: {
     *     // ... data to create a SalesSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesSummary we want to update
     *   }
     * })
     */
    upsert<T extends SalesSummaryUpsertArgs>(args: SelectSubset<T, SalesSummaryUpsertArgs<ExtArgs>>): Prisma__SalesSummaryClient<$Result.GetResult<Prisma.$SalesSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryCountArgs} args - Arguments to filter SalesSummaries to count.
     * @example
     * // Count the number of SalesSummaries
     * const count = await prisma.salesSummary.count({
     *   where: {
     *     // ... the filter for the SalesSummaries we want to count
     *   }
     * })
    **/
    count<T extends SalesSummaryCountArgs>(
      args?: Subset<T, SalesSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends SalesSummaryAggregateArgs>(args: Subset<T, SalesSummaryAggregateArgs>): Prisma.PrismaPromise<GetSalesSummaryAggregateType<T>>

    /**
     * Group by SalesSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesSummaryGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends SalesSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesSummaryGroupByArgs['orderBy'] }
        : { orderBy?: SalesSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesSummary model
   */
  readonly fields: SalesSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesSummary model
   */
  interface SalesSummaryFieldRefs {
    readonly salesSummaryId: FieldRef<"SalesSummary", 'String'>
    readonly totalValue: FieldRef<"SalesSummary", 'Float'>
    readonly changePercentage: FieldRef<"SalesSummary", 'Float'>
    readonly date: FieldRef<"SalesSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesSummary findUnique
   */
  export type SalesSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * Filter, which SalesSummary to fetch.
     */
    where: SalesSummaryWhereUniqueInput
  }

  /**
   * SalesSummary findUniqueOrThrow
   */
  export type SalesSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * Filter, which SalesSummary to fetch.
     */
    where: SalesSummaryWhereUniqueInput
  }

  /**
   * SalesSummary findFirst
   */
  export type SalesSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * Filter, which SalesSummary to fetch.
     */
    where?: SalesSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesSummaries to fetch.
     */
    orderBy?: SalesSummaryOrderByWithRelationInput | SalesSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesSummaries.
     */
    cursor?: SalesSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesSummaries.
     */
    distinct?: SalesSummaryScalarFieldEnum | SalesSummaryScalarFieldEnum[]
  }

  /**
   * SalesSummary findFirstOrThrow
   */
  export type SalesSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * Filter, which SalesSummary to fetch.
     */
    where?: SalesSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesSummaries to fetch.
     */
    orderBy?: SalesSummaryOrderByWithRelationInput | SalesSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesSummaries.
     */
    cursor?: SalesSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesSummaries.
     */
    distinct?: SalesSummaryScalarFieldEnum | SalesSummaryScalarFieldEnum[]
  }

  /**
   * SalesSummary findMany
   */
  export type SalesSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * Filter, which SalesSummaries to fetch.
     */
    where?: SalesSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesSummaries to fetch.
     */
    orderBy?: SalesSummaryOrderByWithRelationInput | SalesSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesSummaries.
     */
    cursor?: SalesSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesSummaries.
     */
    skip?: number
    distinct?: SalesSummaryScalarFieldEnum | SalesSummaryScalarFieldEnum[]
  }

  /**
   * SalesSummary create
   */
  export type SalesSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * The data needed to create a SalesSummary.
     */
    data: XOR<SalesSummaryCreateInput, SalesSummaryUncheckedCreateInput>
  }

  /**
   * SalesSummary createMany
   */
  export type SalesSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesSummaries.
     */
    data: SalesSummaryCreateManyInput | SalesSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesSummary createManyAndReturn
   */
  export type SalesSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many SalesSummaries.
     */
    data: SalesSummaryCreateManyInput | SalesSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesSummary update
   */
  export type SalesSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * The data needed to update a SalesSummary.
     */
    data: XOR<SalesSummaryUpdateInput, SalesSummaryUncheckedUpdateInput>
    /**
     * Choose, which SalesSummary to update.
     */
    where: SalesSummaryWhereUniqueInput
  }

  /**
   * SalesSummary updateMany
   */
  export type SalesSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesSummaries.
     */
    data: XOR<SalesSummaryUpdateManyMutationInput, SalesSummaryUncheckedUpdateManyInput>
    /**
     * Filter which SalesSummaries to update
     */
    where?: SalesSummaryWhereInput
    /**
     * Limit how many SalesSummaries to update.
     */
    limit?: number
  }

  /**
   * SalesSummary updateManyAndReturn
   */
  export type SalesSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * The data used to update SalesSummaries.
     */
    data: XOR<SalesSummaryUpdateManyMutationInput, SalesSummaryUncheckedUpdateManyInput>
    /**
     * Filter which SalesSummaries to update
     */
    where?: SalesSummaryWhereInput
    /**
     * Limit how many SalesSummaries to update.
     */
    limit?: number
  }

  /**
   * SalesSummary upsert
   */
  export type SalesSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * The filter to search for the SalesSummary to update in case it exists.
     */
    where: SalesSummaryWhereUniqueInput
    /**
     * In case the SalesSummary found by the `where` argument doesn't exist, create a new SalesSummary with this data.
     */
    create: XOR<SalesSummaryCreateInput, SalesSummaryUncheckedCreateInput>
    /**
     * In case the SalesSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesSummaryUpdateInput, SalesSummaryUncheckedUpdateInput>
  }

  /**
   * SalesSummary delete
   */
  export type SalesSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
    /**
     * Filter which SalesSummary to delete.
     */
    where: SalesSummaryWhereUniqueInput
  }

  /**
   * SalesSummary deleteMany
   */
  export type SalesSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesSummaries to delete
     */
    where?: SalesSummaryWhereInput
    /**
     * Limit how many SalesSummaries to delete.
     */
    limit?: number
  }

  /**
   * SalesSummary without action
   */
  export type SalesSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesSummary
     */
    select?: SalesSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesSummary
     */
    omit?: SalesSummaryOmit<ExtArgs> | null
  }


  /**
   * Model PurchaseSummary
   */

  export type AggregatePurchaseSummary = {
    _count: PurchaseSummaryCountAggregateOutputType | null
    _avg: PurchaseSummaryAvgAggregateOutputType | null
    _sum: PurchaseSummarySumAggregateOutputType | null
    _min: PurchaseSummaryMinAggregateOutputType | null
    _max: PurchaseSummaryMaxAggregateOutputType | null
  }

  export type PurchaseSummaryAvgAggregateOutputType = {
    totalPurchased: number | null
    changePercentage: number | null
  }

  export type PurchaseSummarySumAggregateOutputType = {
    totalPurchased: number | null
    changePercentage: number | null
  }

  export type PurchaseSummaryMinAggregateOutputType = {
    purchaseSummaryId: string | null
    totalPurchased: number | null
    changePercentage: number | null
    date: Date | null
  }

  export type PurchaseSummaryMaxAggregateOutputType = {
    purchaseSummaryId: string | null
    totalPurchased: number | null
    changePercentage: number | null
    date: Date | null
  }

  export type PurchaseSummaryCountAggregateOutputType = {
    purchaseSummaryId: number
    totalPurchased: number
    changePercentage: number
    date: number
    _all: number
  }


  export type PurchaseSummaryAvgAggregateInputType = {
    totalPurchased?: true
    changePercentage?: true
  }

  export type PurchaseSummarySumAggregateInputType = {
    totalPurchased?: true
    changePercentage?: true
  }

  export type PurchaseSummaryMinAggregateInputType = {
    purchaseSummaryId?: true
    totalPurchased?: true
    changePercentage?: true
    date?: true
  }

  export type PurchaseSummaryMaxAggregateInputType = {
    purchaseSummaryId?: true
    totalPurchased?: true
    changePercentage?: true
    date?: true
  }

  export type PurchaseSummaryCountAggregateInputType = {
    purchaseSummaryId?: true
    totalPurchased?: true
    changePercentage?: true
    date?: true
    _all?: true
  }

  export type PurchaseSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseSummary to aggregate.
     */
    where?: PurchaseSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseSummaries to fetch.
     */
    orderBy?: PurchaseSummaryOrderByWithRelationInput | PurchaseSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseSummaries
    **/
    _count?: true | PurchaseSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseSummaryMaxAggregateInputType
  }

  export type GetPurchaseSummaryAggregateType<T extends PurchaseSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseSummary[P]>
      : GetScalarType<T[P], AggregatePurchaseSummary[P]>
  }




  export type PurchaseSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseSummaryWhereInput
    orderBy?: PurchaseSummaryOrderByWithAggregationInput | PurchaseSummaryOrderByWithAggregationInput[]
    by: PurchaseSummaryScalarFieldEnum[] | PurchaseSummaryScalarFieldEnum
    having?: PurchaseSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseSummaryCountAggregateInputType | true
    _avg?: PurchaseSummaryAvgAggregateInputType
    _sum?: PurchaseSummarySumAggregateInputType
    _min?: PurchaseSummaryMinAggregateInputType
    _max?: PurchaseSummaryMaxAggregateInputType
  }

  export type PurchaseSummaryGroupByOutputType = {
    purchaseSummaryId: string
    totalPurchased: number
    changePercentage: number
    date: Date
    _count: PurchaseSummaryCountAggregateOutputType | null
    _avg: PurchaseSummaryAvgAggregateOutputType | null
    _sum: PurchaseSummarySumAggregateOutputType | null
    _min: PurchaseSummaryMinAggregateOutputType | null
    _max: PurchaseSummaryMaxAggregateOutputType | null
  }

  type GetPurchaseSummaryGroupByPayload<T extends PurchaseSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseSummaryGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseSummaryId?: boolean
    totalPurchased?: boolean
    changePercentage?: boolean
    date?: boolean
  }, ExtArgs["result"]["purchaseSummary"]>

  export type PurchaseSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseSummaryId?: boolean
    totalPurchased?: boolean
    changePercentage?: boolean
    date?: boolean
  }, ExtArgs["result"]["purchaseSummary"]>

  export type PurchaseSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseSummaryId?: boolean
    totalPurchased?: boolean
    changePercentage?: boolean
    date?: boolean
  }, ExtArgs["result"]["purchaseSummary"]>

  export type PurchaseSummarySelectScalar = {
    purchaseSummaryId?: boolean
    totalPurchased?: boolean
    changePercentage?: boolean
    date?: boolean
  }

  export type PurchaseSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purchaseSummaryId" | "totalPurchased" | "changePercentage" | "date", ExtArgs["result"]["purchaseSummary"]>

  export type $PurchaseSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseSummary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      purchaseSummaryId: string
      totalPurchased: number
      changePercentage: number
      date: Date
    }, ExtArgs["result"]["purchaseSummary"]>
    composites: {}
  }

  type PurchaseSummaryGetPayload<S extends boolean | null | undefined | PurchaseSummaryDefaultArgs> = $Result.GetResult<Prisma.$PurchaseSummaryPayload, S>

  type PurchaseSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseSummaryCountAggregateInputType | true
    }

  export interface PurchaseSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseSummary'], meta: { name: 'PurchaseSummary' } }
    /**
     * Find zero or one PurchaseSummary that matches the filter.
     * @param {PurchaseSummaryFindUniqueArgs} args - Arguments to find a PurchaseSummary
     * @example
     * // Get one PurchaseSummary
     * const purchaseSummary = await prisma.purchaseSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseSummaryFindUniqueArgs>(args: SelectSubset<T, PurchaseSummaryFindUniqueArgs<ExtArgs>>): Prisma__PurchaseSummaryClient<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseSummaryFindUniqueOrThrowArgs} args - Arguments to find a PurchaseSummary
     * @example
     * // Get one PurchaseSummary
     * const purchaseSummary = await prisma.purchaseSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseSummaryClient<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseSummaryFindFirstArgs} args - Arguments to find a PurchaseSummary
     * @example
     * // Get one PurchaseSummary
     * const purchaseSummary = await prisma.purchaseSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseSummaryFindFirstArgs>(args?: SelectSubset<T, PurchaseSummaryFindFirstArgs<ExtArgs>>): Prisma__PurchaseSummaryClient<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseSummaryFindFirstOrThrowArgs} args - Arguments to find a PurchaseSummary
     * @example
     * // Get one PurchaseSummary
     * const purchaseSummary = await prisma.purchaseSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseSummaryClient<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseSummaries
     * const purchaseSummaries = await prisma.purchaseSummary.findMany()
     * 
     * // Get first 10 PurchaseSummaries
     * const purchaseSummaries = await prisma.purchaseSummary.findMany({ take: 10 })
     * 
     * // Only select the `purchaseSummaryId`
     * const purchaseSummaryWithPurchaseSummaryIdOnly = await prisma.purchaseSummary.findMany({ select: { purchaseSummaryId: true } })
     * 
     */
    findMany<T extends PurchaseSummaryFindManyArgs>(args?: SelectSubset<T, PurchaseSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseSummary.
     * @param {PurchaseSummaryCreateArgs} args - Arguments to create a PurchaseSummary.
     * @example
     * // Create one PurchaseSummary
     * const PurchaseSummary = await prisma.purchaseSummary.create({
     *   data: {
     *     // ... data to create a PurchaseSummary
     *   }
     * })
     * 
     */
    create<T extends PurchaseSummaryCreateArgs>(args: SelectSubset<T, PurchaseSummaryCreateArgs<ExtArgs>>): Prisma__PurchaseSummaryClient<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseSummaries.
     * @param {PurchaseSummaryCreateManyArgs} args - Arguments to create many PurchaseSummaries.
     * @example
     * // Create many PurchaseSummaries
     * const purchaseSummary = await prisma.purchaseSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseSummaryCreateManyArgs>(args?: SelectSubset<T, PurchaseSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseSummaries and returns the data saved in the database.
     * @param {PurchaseSummaryCreateManyAndReturnArgs} args - Arguments to create many PurchaseSummaries.
     * @example
     * // Create many PurchaseSummaries
     * const purchaseSummary = await prisma.purchaseSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseSummaries and only return the `purchaseSummaryId`
     * const purchaseSummaryWithPurchaseSummaryIdOnly = await prisma.purchaseSummary.createManyAndReturn({
     *   select: { purchaseSummaryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseSummary.
     * @param {PurchaseSummaryDeleteArgs} args - Arguments to delete one PurchaseSummary.
     * @example
     * // Delete one PurchaseSummary
     * const PurchaseSummary = await prisma.purchaseSummary.delete({
     *   where: {
     *     // ... filter to delete one PurchaseSummary
     *   }
     * })
     * 
     */
    delete<T extends PurchaseSummaryDeleteArgs>(args: SelectSubset<T, PurchaseSummaryDeleteArgs<ExtArgs>>): Prisma__PurchaseSummaryClient<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseSummary.
     * @param {PurchaseSummaryUpdateArgs} args - Arguments to update one PurchaseSummary.
     * @example
     * // Update one PurchaseSummary
     * const purchaseSummary = await prisma.purchaseSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseSummaryUpdateArgs>(args: SelectSubset<T, PurchaseSummaryUpdateArgs<ExtArgs>>): Prisma__PurchaseSummaryClient<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseSummaries.
     * @param {PurchaseSummaryDeleteManyArgs} args - Arguments to filter PurchaseSummaries to delete.
     * @example
     * // Delete a few PurchaseSummaries
     * const { count } = await prisma.purchaseSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseSummaryDeleteManyArgs>(args?: SelectSubset<T, PurchaseSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseSummaries
     * const purchaseSummary = await prisma.purchaseSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseSummaryUpdateManyArgs>(args: SelectSubset<T, PurchaseSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseSummaries and returns the data updated in the database.
     * @param {PurchaseSummaryUpdateManyAndReturnArgs} args - Arguments to update many PurchaseSummaries.
     * @example
     * // Update many PurchaseSummaries
     * const purchaseSummary = await prisma.purchaseSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseSummaries and only return the `purchaseSummaryId`
     * const purchaseSummaryWithPurchaseSummaryIdOnly = await prisma.purchaseSummary.updateManyAndReturn({
     *   select: { purchaseSummaryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseSummary.
     * @param {PurchaseSummaryUpsertArgs} args - Arguments to update or create a PurchaseSummary.
     * @example
     * // Update or create a PurchaseSummary
     * const purchaseSummary = await prisma.purchaseSummary.upsert({
     *   create: {
     *     // ... data to create a PurchaseSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseSummary we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseSummaryUpsertArgs>(args: SelectSubset<T, PurchaseSummaryUpsertArgs<ExtArgs>>): Prisma__PurchaseSummaryClient<$Result.GetResult<Prisma.$PurchaseSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseSummaryCountArgs} args - Arguments to filter PurchaseSummaries to count.
     * @example
     * // Count the number of PurchaseSummaries
     * const count = await prisma.purchaseSummary.count({
     *   where: {
     *     // ... the filter for the PurchaseSummaries we want to count
     *   }
     * })
    **/
    count<T extends PurchaseSummaryCountArgs>(
      args?: Subset<T, PurchaseSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends PurchaseSummaryAggregateArgs>(args: Subset<T, PurchaseSummaryAggregateArgs>): Prisma.PrismaPromise<GetPurchaseSummaryAggregateType<T>>

    /**
     * Group by PurchaseSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseSummaryGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends PurchaseSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseSummaryGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseSummary model
   */
  readonly fields: PurchaseSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseSummary model
   */
  interface PurchaseSummaryFieldRefs {
    readonly purchaseSummaryId: FieldRef<"PurchaseSummary", 'String'>
    readonly totalPurchased: FieldRef<"PurchaseSummary", 'Float'>
    readonly changePercentage: FieldRef<"PurchaseSummary", 'Float'>
    readonly date: FieldRef<"PurchaseSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseSummary findUnique
   */
  export type PurchaseSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseSummary to fetch.
     */
    where: PurchaseSummaryWhereUniqueInput
  }

  /**
   * PurchaseSummary findUniqueOrThrow
   */
  export type PurchaseSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseSummary to fetch.
     */
    where: PurchaseSummaryWhereUniqueInput
  }

  /**
   * PurchaseSummary findFirst
   */
  export type PurchaseSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseSummary to fetch.
     */
    where?: PurchaseSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseSummaries to fetch.
     */
    orderBy?: PurchaseSummaryOrderByWithRelationInput | PurchaseSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseSummaries.
     */
    cursor?: PurchaseSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseSummaries.
     */
    distinct?: PurchaseSummaryScalarFieldEnum | PurchaseSummaryScalarFieldEnum[]
  }

  /**
   * PurchaseSummary findFirstOrThrow
   */
  export type PurchaseSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseSummary to fetch.
     */
    where?: PurchaseSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseSummaries to fetch.
     */
    orderBy?: PurchaseSummaryOrderByWithRelationInput | PurchaseSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseSummaries.
     */
    cursor?: PurchaseSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseSummaries.
     */
    distinct?: PurchaseSummaryScalarFieldEnum | PurchaseSummaryScalarFieldEnum[]
  }

  /**
   * PurchaseSummary findMany
   */
  export type PurchaseSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * Filter, which PurchaseSummaries to fetch.
     */
    where?: PurchaseSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseSummaries to fetch.
     */
    orderBy?: PurchaseSummaryOrderByWithRelationInput | PurchaseSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseSummaries.
     */
    cursor?: PurchaseSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseSummaries.
     */
    skip?: number
    distinct?: PurchaseSummaryScalarFieldEnum | PurchaseSummaryScalarFieldEnum[]
  }

  /**
   * PurchaseSummary create
   */
  export type PurchaseSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * The data needed to create a PurchaseSummary.
     */
    data: XOR<PurchaseSummaryCreateInput, PurchaseSummaryUncheckedCreateInput>
  }

  /**
   * PurchaseSummary createMany
   */
  export type PurchaseSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseSummaries.
     */
    data: PurchaseSummaryCreateManyInput | PurchaseSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseSummary createManyAndReturn
   */
  export type PurchaseSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseSummaries.
     */
    data: PurchaseSummaryCreateManyInput | PurchaseSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseSummary update
   */
  export type PurchaseSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * The data needed to update a PurchaseSummary.
     */
    data: XOR<PurchaseSummaryUpdateInput, PurchaseSummaryUncheckedUpdateInput>
    /**
     * Choose, which PurchaseSummary to update.
     */
    where: PurchaseSummaryWhereUniqueInput
  }

  /**
   * PurchaseSummary updateMany
   */
  export type PurchaseSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseSummaries.
     */
    data: XOR<PurchaseSummaryUpdateManyMutationInput, PurchaseSummaryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseSummaries to update
     */
    where?: PurchaseSummaryWhereInput
    /**
     * Limit how many PurchaseSummaries to update.
     */
    limit?: number
  }

  /**
   * PurchaseSummary updateManyAndReturn
   */
  export type PurchaseSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseSummaries.
     */
    data: XOR<PurchaseSummaryUpdateManyMutationInput, PurchaseSummaryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseSummaries to update
     */
    where?: PurchaseSummaryWhereInput
    /**
     * Limit how many PurchaseSummaries to update.
     */
    limit?: number
  }

  /**
   * PurchaseSummary upsert
   */
  export type PurchaseSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * The filter to search for the PurchaseSummary to update in case it exists.
     */
    where: PurchaseSummaryWhereUniqueInput
    /**
     * In case the PurchaseSummary found by the `where` argument doesn't exist, create a new PurchaseSummary with this data.
     */
    create: XOR<PurchaseSummaryCreateInput, PurchaseSummaryUncheckedCreateInput>
    /**
     * In case the PurchaseSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseSummaryUpdateInput, PurchaseSummaryUncheckedUpdateInput>
  }

  /**
   * PurchaseSummary delete
   */
  export type PurchaseSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
    /**
     * Filter which PurchaseSummary to delete.
     */
    where: PurchaseSummaryWhereUniqueInput
  }

  /**
   * PurchaseSummary deleteMany
   */
  export type PurchaseSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseSummaries to delete
     */
    where?: PurchaseSummaryWhereInput
    /**
     * Limit how many PurchaseSummaries to delete.
     */
    limit?: number
  }

  /**
   * PurchaseSummary without action
   */
  export type PurchaseSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseSummary
     */
    select?: PurchaseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseSummary
     */
    omit?: PurchaseSummaryOmit<ExtArgs> | null
  }


  /**
   * Model ExpenseSummary
   */

  export type AggregateExpenseSummary = {
    _count: ExpenseSummaryCountAggregateOutputType | null
    _avg: ExpenseSummaryAvgAggregateOutputType | null
    _sum: ExpenseSummarySumAggregateOutputType | null
    _min: ExpenseSummaryMinAggregateOutputType | null
    _max: ExpenseSummaryMaxAggregateOutputType | null
  }

  export type ExpenseSummaryAvgAggregateOutputType = {
    totalExpenses: number | null
  }

  export type ExpenseSummarySumAggregateOutputType = {
    totalExpenses: number | null
  }

  export type ExpenseSummaryMinAggregateOutputType = {
    expenseSummaryId: string | null
    totalExpenses: number | null
    date: Date | null
  }

  export type ExpenseSummaryMaxAggregateOutputType = {
    expenseSummaryId: string | null
    totalExpenses: number | null
    date: Date | null
  }

  export type ExpenseSummaryCountAggregateOutputType = {
    expenseSummaryId: number
    totalExpenses: number
    date: number
    _all: number
  }


  export type ExpenseSummaryAvgAggregateInputType = {
    totalExpenses?: true
  }

  export type ExpenseSummarySumAggregateInputType = {
    totalExpenses?: true
  }

  export type ExpenseSummaryMinAggregateInputType = {
    expenseSummaryId?: true
    totalExpenses?: true
    date?: true
  }

  export type ExpenseSummaryMaxAggregateInputType = {
    expenseSummaryId?: true
    totalExpenses?: true
    date?: true
  }

  export type ExpenseSummaryCountAggregateInputType = {
    expenseSummaryId?: true
    totalExpenses?: true
    date?: true
    _all?: true
  }

  export type ExpenseSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseSummary to aggregate.
     */
    where?: ExpenseSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseSummaries to fetch.
     */
    orderBy?: ExpenseSummaryOrderByWithRelationInput | ExpenseSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseSummaries
    **/
    _count?: true | ExpenseSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseSummaryMaxAggregateInputType
  }

  export type GetExpenseSummaryAggregateType<T extends ExpenseSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseSummary[P]>
      : GetScalarType<T[P], AggregateExpenseSummary[P]>
  }




  export type ExpenseSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseSummaryWhereInput
    orderBy?: ExpenseSummaryOrderByWithAggregationInput | ExpenseSummaryOrderByWithAggregationInput[]
    by: ExpenseSummaryScalarFieldEnum[] | ExpenseSummaryScalarFieldEnum
    having?: ExpenseSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseSummaryCountAggregateInputType | true
    _avg?: ExpenseSummaryAvgAggregateInputType
    _sum?: ExpenseSummarySumAggregateInputType
    _min?: ExpenseSummaryMinAggregateInputType
    _max?: ExpenseSummaryMaxAggregateInputType
  }

  export type ExpenseSummaryGroupByOutputType = {
    expenseSummaryId: string
    totalExpenses: number
    date: Date
    _count: ExpenseSummaryCountAggregateOutputType | null
    _avg: ExpenseSummaryAvgAggregateOutputType | null
    _sum: ExpenseSummarySumAggregateOutputType | null
    _min: ExpenseSummaryMinAggregateOutputType | null
    _max: ExpenseSummaryMaxAggregateOutputType | null
  }

  type GetExpenseSummaryGroupByPayload<T extends ExpenseSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseSummaryGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseSummaryId?: boolean
    totalExpenses?: boolean
    date?: boolean
    ExpenseByCategory?: boolean | ExpenseSummary$ExpenseByCategoryArgs<ExtArgs>
    _count?: boolean | ExpenseSummaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseSummary"]>

  export type ExpenseSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseSummaryId?: boolean
    totalExpenses?: boolean
    date?: boolean
  }, ExtArgs["result"]["expenseSummary"]>

  export type ExpenseSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseSummaryId?: boolean
    totalExpenses?: boolean
    date?: boolean
  }, ExtArgs["result"]["expenseSummary"]>

  export type ExpenseSummarySelectScalar = {
    expenseSummaryId?: boolean
    totalExpenses?: boolean
    date?: boolean
  }

  export type ExpenseSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expenseSummaryId" | "totalExpenses" | "date", ExtArgs["result"]["expenseSummary"]>
  export type ExpenseSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ExpenseByCategory?: boolean | ExpenseSummary$ExpenseByCategoryArgs<ExtArgs>
    _count?: boolean | ExpenseSummaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExpenseSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExpenseSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseSummary"
    objects: {
      ExpenseByCategory: Prisma.$ExpenseByCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      expenseSummaryId: string
      totalExpenses: number
      date: Date
    }, ExtArgs["result"]["expenseSummary"]>
    composites: {}
  }

  type ExpenseSummaryGetPayload<S extends boolean | null | undefined | ExpenseSummaryDefaultArgs> = $Result.GetResult<Prisma.$ExpenseSummaryPayload, S>

  type ExpenseSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseSummaryCountAggregateInputType | true
    }

  export interface ExpenseSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseSummary'], meta: { name: 'ExpenseSummary' } }
    /**
     * Find zero or one ExpenseSummary that matches the filter.
     * @param {ExpenseSummaryFindUniqueArgs} args - Arguments to find a ExpenseSummary
     * @example
     * // Get one ExpenseSummary
     * const expenseSummary = await prisma.expenseSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseSummaryFindUniqueArgs>(args: SelectSubset<T, ExpenseSummaryFindUniqueArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseSummaryFindUniqueOrThrowArgs} args - Arguments to find a ExpenseSummary
     * @example
     * // Get one ExpenseSummary
     * const expenseSummary = await prisma.expenseSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSummaryFindFirstArgs} args - Arguments to find a ExpenseSummary
     * @example
     * // Get one ExpenseSummary
     * const expenseSummary = await prisma.expenseSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseSummaryFindFirstArgs>(args?: SelectSubset<T, ExpenseSummaryFindFirstArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSummaryFindFirstOrThrowArgs} args - Arguments to find a ExpenseSummary
     * @example
     * // Get one ExpenseSummary
     * const expenseSummary = await prisma.expenseSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseSummaries
     * const expenseSummaries = await prisma.expenseSummary.findMany()
     * 
     * // Get first 10 ExpenseSummaries
     * const expenseSummaries = await prisma.expenseSummary.findMany({ take: 10 })
     * 
     * // Only select the `expenseSummaryId`
     * const expenseSummaryWithExpenseSummaryIdOnly = await prisma.expenseSummary.findMany({ select: { expenseSummaryId: true } })
     * 
     */
    findMany<T extends ExpenseSummaryFindManyArgs>(args?: SelectSubset<T, ExpenseSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseSummary.
     * @param {ExpenseSummaryCreateArgs} args - Arguments to create a ExpenseSummary.
     * @example
     * // Create one ExpenseSummary
     * const ExpenseSummary = await prisma.expenseSummary.create({
     *   data: {
     *     // ... data to create a ExpenseSummary
     *   }
     * })
     * 
     */
    create<T extends ExpenseSummaryCreateArgs>(args: SelectSubset<T, ExpenseSummaryCreateArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseSummaries.
     * @param {ExpenseSummaryCreateManyArgs} args - Arguments to create many ExpenseSummaries.
     * @example
     * // Create many ExpenseSummaries
     * const expenseSummary = await prisma.expenseSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseSummaryCreateManyArgs>(args?: SelectSubset<T, ExpenseSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseSummaries and returns the data saved in the database.
     * @param {ExpenseSummaryCreateManyAndReturnArgs} args - Arguments to create many ExpenseSummaries.
     * @example
     * // Create many ExpenseSummaries
     * const expenseSummary = await prisma.expenseSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseSummaries and only return the `expenseSummaryId`
     * const expenseSummaryWithExpenseSummaryIdOnly = await prisma.expenseSummary.createManyAndReturn({
     *   select: { expenseSummaryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseSummary.
     * @param {ExpenseSummaryDeleteArgs} args - Arguments to delete one ExpenseSummary.
     * @example
     * // Delete one ExpenseSummary
     * const ExpenseSummary = await prisma.expenseSummary.delete({
     *   where: {
     *     // ... filter to delete one ExpenseSummary
     *   }
     * })
     * 
     */
    delete<T extends ExpenseSummaryDeleteArgs>(args: SelectSubset<T, ExpenseSummaryDeleteArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseSummary.
     * @param {ExpenseSummaryUpdateArgs} args - Arguments to update one ExpenseSummary.
     * @example
     * // Update one ExpenseSummary
     * const expenseSummary = await prisma.expenseSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseSummaryUpdateArgs>(args: SelectSubset<T, ExpenseSummaryUpdateArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseSummaries.
     * @param {ExpenseSummaryDeleteManyArgs} args - Arguments to filter ExpenseSummaries to delete.
     * @example
     * // Delete a few ExpenseSummaries
     * const { count } = await prisma.expenseSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseSummaryDeleteManyArgs>(args?: SelectSubset<T, ExpenseSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseSummaries
     * const expenseSummary = await prisma.expenseSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseSummaryUpdateManyArgs>(args: SelectSubset<T, ExpenseSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseSummaries and returns the data updated in the database.
     * @param {ExpenseSummaryUpdateManyAndReturnArgs} args - Arguments to update many ExpenseSummaries.
     * @example
     * // Update many ExpenseSummaries
     * const expenseSummary = await prisma.expenseSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseSummaries and only return the `expenseSummaryId`
     * const expenseSummaryWithExpenseSummaryIdOnly = await prisma.expenseSummary.updateManyAndReturn({
     *   select: { expenseSummaryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseSummary.
     * @param {ExpenseSummaryUpsertArgs} args - Arguments to update or create a ExpenseSummary.
     * @example
     * // Update or create a ExpenseSummary
     * const expenseSummary = await prisma.expenseSummary.upsert({
     *   create: {
     *     // ... data to create a ExpenseSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseSummary we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseSummaryUpsertArgs>(args: SelectSubset<T, ExpenseSummaryUpsertArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSummaryCountArgs} args - Arguments to filter ExpenseSummaries to count.
     * @example
     * // Count the number of ExpenseSummaries
     * const count = await prisma.expenseSummary.count({
     *   where: {
     *     // ... the filter for the ExpenseSummaries we want to count
     *   }
     * })
    **/
    count<T extends ExpenseSummaryCountArgs>(
      args?: Subset<T, ExpenseSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends ExpenseSummaryAggregateArgs>(args: Subset<T, ExpenseSummaryAggregateArgs>): Prisma.PrismaPromise<GetExpenseSummaryAggregateType<T>>

    /**
     * Group by ExpenseSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseSummaryGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends ExpenseSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseSummaryGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseSummary model
   */
  readonly fields: ExpenseSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ExpenseByCategory<T extends ExpenseSummary$ExpenseByCategoryArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseSummary$ExpenseByCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseSummary model
   */
  interface ExpenseSummaryFieldRefs {
    readonly expenseSummaryId: FieldRef<"ExpenseSummary", 'String'>
    readonly totalExpenses: FieldRef<"ExpenseSummary", 'Float'>
    readonly date: FieldRef<"ExpenseSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseSummary findUnique
   */
  export type ExpenseSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSummary to fetch.
     */
    where: ExpenseSummaryWhereUniqueInput
  }

  /**
   * ExpenseSummary findUniqueOrThrow
   */
  export type ExpenseSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSummary to fetch.
     */
    where: ExpenseSummaryWhereUniqueInput
  }

  /**
   * ExpenseSummary findFirst
   */
  export type ExpenseSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSummary to fetch.
     */
    where?: ExpenseSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseSummaries to fetch.
     */
    orderBy?: ExpenseSummaryOrderByWithRelationInput | ExpenseSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseSummaries.
     */
    cursor?: ExpenseSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseSummaries.
     */
    distinct?: ExpenseSummaryScalarFieldEnum | ExpenseSummaryScalarFieldEnum[]
  }

  /**
   * ExpenseSummary findFirstOrThrow
   */
  export type ExpenseSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSummary to fetch.
     */
    where?: ExpenseSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseSummaries to fetch.
     */
    orderBy?: ExpenseSummaryOrderByWithRelationInput | ExpenseSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseSummaries.
     */
    cursor?: ExpenseSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseSummaries.
     */
    distinct?: ExpenseSummaryScalarFieldEnum | ExpenseSummaryScalarFieldEnum[]
  }

  /**
   * ExpenseSummary findMany
   */
  export type ExpenseSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseSummaries to fetch.
     */
    where?: ExpenseSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseSummaries to fetch.
     */
    orderBy?: ExpenseSummaryOrderByWithRelationInput | ExpenseSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseSummaries.
     */
    cursor?: ExpenseSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseSummaries.
     */
    skip?: number
    distinct?: ExpenseSummaryScalarFieldEnum | ExpenseSummaryScalarFieldEnum[]
  }

  /**
   * ExpenseSummary create
   */
  export type ExpenseSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseSummary.
     */
    data: XOR<ExpenseSummaryCreateInput, ExpenseSummaryUncheckedCreateInput>
  }

  /**
   * ExpenseSummary createMany
   */
  export type ExpenseSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseSummaries.
     */
    data: ExpenseSummaryCreateManyInput | ExpenseSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseSummary createManyAndReturn
   */
  export type ExpenseSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseSummaries.
     */
    data: ExpenseSummaryCreateManyInput | ExpenseSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseSummary update
   */
  export type ExpenseSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseSummary.
     */
    data: XOR<ExpenseSummaryUpdateInput, ExpenseSummaryUncheckedUpdateInput>
    /**
     * Choose, which ExpenseSummary to update.
     */
    where: ExpenseSummaryWhereUniqueInput
  }

  /**
   * ExpenseSummary updateMany
   */
  export type ExpenseSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseSummaries.
     */
    data: XOR<ExpenseSummaryUpdateManyMutationInput, ExpenseSummaryUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseSummaries to update
     */
    where?: ExpenseSummaryWhereInput
    /**
     * Limit how many ExpenseSummaries to update.
     */
    limit?: number
  }

  /**
   * ExpenseSummary updateManyAndReturn
   */
  export type ExpenseSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseSummaries.
     */
    data: XOR<ExpenseSummaryUpdateManyMutationInput, ExpenseSummaryUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseSummaries to update
     */
    where?: ExpenseSummaryWhereInput
    /**
     * Limit how many ExpenseSummaries to update.
     */
    limit?: number
  }

  /**
   * ExpenseSummary upsert
   */
  export type ExpenseSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseSummary to update in case it exists.
     */
    where: ExpenseSummaryWhereUniqueInput
    /**
     * In case the ExpenseSummary found by the `where` argument doesn't exist, create a new ExpenseSummary with this data.
     */
    create: XOR<ExpenseSummaryCreateInput, ExpenseSummaryUncheckedCreateInput>
    /**
     * In case the ExpenseSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseSummaryUpdateInput, ExpenseSummaryUncheckedUpdateInput>
  }

  /**
   * ExpenseSummary delete
   */
  export type ExpenseSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
    /**
     * Filter which ExpenseSummary to delete.
     */
    where: ExpenseSummaryWhereUniqueInput
  }

  /**
   * ExpenseSummary deleteMany
   */
  export type ExpenseSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseSummaries to delete
     */
    where?: ExpenseSummaryWhereInput
    /**
     * Limit how many ExpenseSummaries to delete.
     */
    limit?: number
  }

  /**
   * ExpenseSummary.ExpenseByCategory
   */
  export type ExpenseSummary$ExpenseByCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    where?: ExpenseByCategoryWhereInput
    orderBy?: ExpenseByCategoryOrderByWithRelationInput | ExpenseByCategoryOrderByWithRelationInput[]
    cursor?: ExpenseByCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseByCategoryScalarFieldEnum | ExpenseByCategoryScalarFieldEnum[]
  }

  /**
   * ExpenseSummary without action
   */
  export type ExpenseSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseSummary
     */
    select?: ExpenseSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseSummary
     */
    omit?: ExpenseSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseSummaryInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseByCategory
   */

  export type AggregateExpenseByCategory = {
    _count: ExpenseByCategoryCountAggregateOutputType | null
    _avg: ExpenseByCategoryAvgAggregateOutputType | null
    _sum: ExpenseByCategorySumAggregateOutputType | null
    _min: ExpenseByCategoryMinAggregateOutputType | null
    _max: ExpenseByCategoryMaxAggregateOutputType | null
  }

  export type ExpenseByCategoryAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseByCategorySumAggregateOutputType = {
    amount: bigint | null
  }

  export type ExpenseByCategoryMinAggregateOutputType = {
    expenseByCategoryId: string | null
    expenseSummaryId: string | null
    category: string | null
    amount: bigint | null
    date: Date | null
  }

  export type ExpenseByCategoryMaxAggregateOutputType = {
    expenseByCategoryId: string | null
    expenseSummaryId: string | null
    category: string | null
    amount: bigint | null
    date: Date | null
  }

  export type ExpenseByCategoryCountAggregateOutputType = {
    expenseByCategoryId: number
    expenseSummaryId: number
    category: number
    amount: number
    date: number
    _all: number
  }


  export type ExpenseByCategoryAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseByCategorySumAggregateInputType = {
    amount?: true
  }

  export type ExpenseByCategoryMinAggregateInputType = {
    expenseByCategoryId?: true
    expenseSummaryId?: true
    category?: true
    amount?: true
    date?: true
  }

  export type ExpenseByCategoryMaxAggregateInputType = {
    expenseByCategoryId?: true
    expenseSummaryId?: true
    category?: true
    amount?: true
    date?: true
  }

  export type ExpenseByCategoryCountAggregateInputType = {
    expenseByCategoryId?: true
    expenseSummaryId?: true
    category?: true
    amount?: true
    date?: true
    _all?: true
  }

  export type ExpenseByCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseByCategory to aggregate.
     */
    where?: ExpenseByCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseByCategories to fetch.
     */
    orderBy?: ExpenseByCategoryOrderByWithRelationInput | ExpenseByCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseByCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseByCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseByCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseByCategories
    **/
    _count?: true | ExpenseByCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseByCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseByCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseByCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseByCategoryMaxAggregateInputType
  }

  export type GetExpenseByCategoryAggregateType<T extends ExpenseByCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseByCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseByCategory[P]>
      : GetScalarType<T[P], AggregateExpenseByCategory[P]>
  }




  export type ExpenseByCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseByCategoryWhereInput
    orderBy?: ExpenseByCategoryOrderByWithAggregationInput | ExpenseByCategoryOrderByWithAggregationInput[]
    by: ExpenseByCategoryScalarFieldEnum[] | ExpenseByCategoryScalarFieldEnum
    having?: ExpenseByCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseByCategoryCountAggregateInputType | true
    _avg?: ExpenseByCategoryAvgAggregateInputType
    _sum?: ExpenseByCategorySumAggregateInputType
    _min?: ExpenseByCategoryMinAggregateInputType
    _max?: ExpenseByCategoryMaxAggregateInputType
  }

  export type ExpenseByCategoryGroupByOutputType = {
    expenseByCategoryId: string
    expenseSummaryId: string
    category: string
    amount: bigint
    date: Date
    _count: ExpenseByCategoryCountAggregateOutputType | null
    _avg: ExpenseByCategoryAvgAggregateOutputType | null
    _sum: ExpenseByCategorySumAggregateOutputType | null
    _min: ExpenseByCategoryMinAggregateOutputType | null
    _max: ExpenseByCategoryMaxAggregateOutputType | null
  }

  type GetExpenseByCategoryGroupByPayload<T extends ExpenseByCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseByCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseByCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseByCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseByCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseByCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseByCategoryId?: boolean
    expenseSummaryId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseByCategory"]>

  export type ExpenseByCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseByCategoryId?: boolean
    expenseSummaryId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseByCategory"]>

  export type ExpenseByCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenseByCategoryId?: boolean
    expenseSummaryId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseByCategory"]>

  export type ExpenseByCategorySelectScalar = {
    expenseByCategoryId?: boolean
    expenseSummaryId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
  }

  export type ExpenseByCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expenseByCategoryId" | "expenseSummaryId" | "category" | "amount" | "date", ExtArgs["result"]["expenseByCategory"]>
  export type ExpenseByCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>
  }
  export type ExpenseByCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>
  }
  export type ExpenseByCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseSummary?: boolean | ExpenseSummaryDefaultArgs<ExtArgs>
  }

  export type $ExpenseByCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseByCategory"
    objects: {
      expenseSummary: Prisma.$ExpenseSummaryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      expenseByCategoryId: string
      expenseSummaryId: string
      category: string
      amount: bigint
      date: Date
    }, ExtArgs["result"]["expenseByCategory"]>
    composites: {}
  }

  type ExpenseByCategoryGetPayload<S extends boolean | null | undefined | ExpenseByCategoryDefaultArgs> = $Result.GetResult<Prisma.$ExpenseByCategoryPayload, S>

  type ExpenseByCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseByCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseByCategoryCountAggregateInputType | true
    }

  export interface ExpenseByCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseByCategory'], meta: { name: 'ExpenseByCategory' } }
    /**
     * Find zero or one ExpenseByCategory that matches the filter.
     * @param {ExpenseByCategoryFindUniqueArgs} args - Arguments to find a ExpenseByCategory
     * @example
     * // Get one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseByCategoryFindUniqueArgs>(args: SelectSubset<T, ExpenseByCategoryFindUniqueArgs<ExtArgs>>): Prisma__ExpenseByCategoryClient<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseByCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseByCategoryFindUniqueOrThrowArgs} args - Arguments to find a ExpenseByCategory
     * @example
     * // Get one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseByCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseByCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseByCategoryClient<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseByCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryFindFirstArgs} args - Arguments to find a ExpenseByCategory
     * @example
     * // Get one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseByCategoryFindFirstArgs>(args?: SelectSubset<T, ExpenseByCategoryFindFirstArgs<ExtArgs>>): Prisma__ExpenseByCategoryClient<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseByCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryFindFirstOrThrowArgs} args - Arguments to find a ExpenseByCategory
     * @example
     * // Get one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseByCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseByCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseByCategoryClient<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseByCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseByCategories
     * const expenseByCategories = await prisma.expenseByCategory.findMany()
     * 
     * // Get first 10 ExpenseByCategories
     * const expenseByCategories = await prisma.expenseByCategory.findMany({ take: 10 })
     * 
     * // Only select the `expenseByCategoryId`
     * const expenseByCategoryWithExpenseByCategoryIdOnly = await prisma.expenseByCategory.findMany({ select: { expenseByCategoryId: true } })
     * 
     */
    findMany<T extends ExpenseByCategoryFindManyArgs>(args?: SelectSubset<T, ExpenseByCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseByCategory.
     * @param {ExpenseByCategoryCreateArgs} args - Arguments to create a ExpenseByCategory.
     * @example
     * // Create one ExpenseByCategory
     * const ExpenseByCategory = await prisma.expenseByCategory.create({
     *   data: {
     *     // ... data to create a ExpenseByCategory
     *   }
     * })
     * 
     */
    create<T extends ExpenseByCategoryCreateArgs>(args: SelectSubset<T, ExpenseByCategoryCreateArgs<ExtArgs>>): Prisma__ExpenseByCategoryClient<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseByCategories.
     * @param {ExpenseByCategoryCreateManyArgs} args - Arguments to create many ExpenseByCategories.
     * @example
     * // Create many ExpenseByCategories
     * const expenseByCategory = await prisma.expenseByCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseByCategoryCreateManyArgs>(args?: SelectSubset<T, ExpenseByCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseByCategories and returns the data saved in the database.
     * @param {ExpenseByCategoryCreateManyAndReturnArgs} args - Arguments to create many ExpenseByCategories.
     * @example
     * // Create many ExpenseByCategories
     * const expenseByCategory = await prisma.expenseByCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseByCategories and only return the `expenseByCategoryId`
     * const expenseByCategoryWithExpenseByCategoryIdOnly = await prisma.expenseByCategory.createManyAndReturn({
     *   select: { expenseByCategoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseByCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseByCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseByCategory.
     * @param {ExpenseByCategoryDeleteArgs} args - Arguments to delete one ExpenseByCategory.
     * @example
     * // Delete one ExpenseByCategory
     * const ExpenseByCategory = await prisma.expenseByCategory.delete({
     *   where: {
     *     // ... filter to delete one ExpenseByCategory
     *   }
     * })
     * 
     */
    delete<T extends ExpenseByCategoryDeleteArgs>(args: SelectSubset<T, ExpenseByCategoryDeleteArgs<ExtArgs>>): Prisma__ExpenseByCategoryClient<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseByCategory.
     * @param {ExpenseByCategoryUpdateArgs} args - Arguments to update one ExpenseByCategory.
     * @example
     * // Update one ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseByCategoryUpdateArgs>(args: SelectSubset<T, ExpenseByCategoryUpdateArgs<ExtArgs>>): Prisma__ExpenseByCategoryClient<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseByCategories.
     * @param {ExpenseByCategoryDeleteManyArgs} args - Arguments to filter ExpenseByCategories to delete.
     * @example
     * // Delete a few ExpenseByCategories
     * const { count } = await prisma.expenseByCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseByCategoryDeleteManyArgs>(args?: SelectSubset<T, ExpenseByCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseByCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseByCategories
     * const expenseByCategory = await prisma.expenseByCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseByCategoryUpdateManyArgs>(args: SelectSubset<T, ExpenseByCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseByCategories and returns the data updated in the database.
     * @param {ExpenseByCategoryUpdateManyAndReturnArgs} args - Arguments to update many ExpenseByCategories.
     * @example
     * // Update many ExpenseByCategories
     * const expenseByCategory = await prisma.expenseByCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseByCategories and only return the `expenseByCategoryId`
     * const expenseByCategoryWithExpenseByCategoryIdOnly = await prisma.expenseByCategory.updateManyAndReturn({
     *   select: { expenseByCategoryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseByCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseByCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseByCategory.
     * @param {ExpenseByCategoryUpsertArgs} args - Arguments to update or create a ExpenseByCategory.
     * @example
     * // Update or create a ExpenseByCategory
     * const expenseByCategory = await prisma.expenseByCategory.upsert({
     *   create: {
     *     // ... data to create a ExpenseByCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseByCategory we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseByCategoryUpsertArgs>(args: SelectSubset<T, ExpenseByCategoryUpsertArgs<ExtArgs>>): Prisma__ExpenseByCategoryClient<$Result.GetResult<Prisma.$ExpenseByCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseByCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryCountArgs} args - Arguments to filter ExpenseByCategories to count.
     * @example
     * // Count the number of ExpenseByCategories
     * const count = await prisma.expenseByCategory.count({
     *   where: {
     *     // ... the filter for the ExpenseByCategories we want to count
     *   }
     * })
    **/
    count<T extends ExpenseByCategoryCountArgs>(
      args?: Subset<T, ExpenseByCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseByCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseByCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    **/
    aggregate<T extends ExpenseByCategoryAggregateArgs>(args: Subset<T, ExpenseByCategoryAggregateArgs>): Prisma.PrismaPromise<GetExpenseByCategoryAggregateType<T>>

    /**
     * Group by ExpenseByCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseByCategoryGroupByArgs} args - Group by arguments.
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
     * 
    **/
    groupBy<
      T extends ExpenseByCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseByCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseByCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseByCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseByCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseByCategory model
   */
  readonly fields: ExpenseByCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseByCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseByCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenseSummary<T extends ExpenseSummaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseSummaryDefaultArgs<ExtArgs>>): Prisma__ExpenseSummaryClient<$Result.GetResult<Prisma.$ExpenseSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseByCategory model
   */
  interface ExpenseByCategoryFieldRefs {
    readonly expenseByCategoryId: FieldRef<"ExpenseByCategory", 'String'>
    readonly expenseSummaryId: FieldRef<"ExpenseByCategory", 'String'>
    readonly category: FieldRef<"ExpenseByCategory", 'String'>
    readonly amount: FieldRef<"ExpenseByCategory", 'BigInt'>
    readonly date: FieldRef<"ExpenseByCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseByCategory findUnique
   */
  export type ExpenseByCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseByCategory to fetch.
     */
    where: ExpenseByCategoryWhereUniqueInput
  }

  /**
   * ExpenseByCategory findUniqueOrThrow
   */
  export type ExpenseByCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseByCategory to fetch.
     */
    where: ExpenseByCategoryWhereUniqueInput
  }

  /**
   * ExpenseByCategory findFirst
   */
  export type ExpenseByCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseByCategory to fetch.
     */
    where?: ExpenseByCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseByCategories to fetch.
     */
    orderBy?: ExpenseByCategoryOrderByWithRelationInput | ExpenseByCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseByCategories.
     */
    cursor?: ExpenseByCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseByCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseByCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseByCategories.
     */
    distinct?: ExpenseByCategoryScalarFieldEnum | ExpenseByCategoryScalarFieldEnum[]
  }

  /**
   * ExpenseByCategory findFirstOrThrow
   */
  export type ExpenseByCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseByCategory to fetch.
     */
    where?: ExpenseByCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseByCategories to fetch.
     */
    orderBy?: ExpenseByCategoryOrderByWithRelationInput | ExpenseByCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseByCategories.
     */
    cursor?: ExpenseByCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseByCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseByCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseByCategories.
     */
    distinct?: ExpenseByCategoryScalarFieldEnum | ExpenseByCategoryScalarFieldEnum[]
  }

  /**
   * ExpenseByCategory findMany
   */
  export type ExpenseByCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseByCategories to fetch.
     */
    where?: ExpenseByCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseByCategories to fetch.
     */
    orderBy?: ExpenseByCategoryOrderByWithRelationInput | ExpenseByCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseByCategories.
     */
    cursor?: ExpenseByCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseByCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseByCategories.
     */
    skip?: number
    distinct?: ExpenseByCategoryScalarFieldEnum | ExpenseByCategoryScalarFieldEnum[]
  }

  /**
   * ExpenseByCategory create
   */
  export type ExpenseByCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseByCategory.
     */
    data: XOR<ExpenseByCategoryCreateInput, ExpenseByCategoryUncheckedCreateInput>
  }

  /**
   * ExpenseByCategory createMany
   */
  export type ExpenseByCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseByCategories.
     */
    data: ExpenseByCategoryCreateManyInput | ExpenseByCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseByCategory createManyAndReturn
   */
  export type ExpenseByCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseByCategories.
     */
    data: ExpenseByCategoryCreateManyInput | ExpenseByCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseByCategory update
   */
  export type ExpenseByCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseByCategory.
     */
    data: XOR<ExpenseByCategoryUpdateInput, ExpenseByCategoryUncheckedUpdateInput>
    /**
     * Choose, which ExpenseByCategory to update.
     */
    where: ExpenseByCategoryWhereUniqueInput
  }

  /**
   * ExpenseByCategory updateMany
   */
  export type ExpenseByCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseByCategories.
     */
    data: XOR<ExpenseByCategoryUpdateManyMutationInput, ExpenseByCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseByCategories to update
     */
    where?: ExpenseByCategoryWhereInput
    /**
     * Limit how many ExpenseByCategories to update.
     */
    limit?: number
  }

  /**
   * ExpenseByCategory updateManyAndReturn
   */
  export type ExpenseByCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseByCategories.
     */
    data: XOR<ExpenseByCategoryUpdateManyMutationInput, ExpenseByCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseByCategories to update
     */
    where?: ExpenseByCategoryWhereInput
    /**
     * Limit how many ExpenseByCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseByCategory upsert
   */
  export type ExpenseByCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseByCategory to update in case it exists.
     */
    where: ExpenseByCategoryWhereUniqueInput
    /**
     * In case the ExpenseByCategory found by the `where` argument doesn't exist, create a new ExpenseByCategory with this data.
     */
    create: XOR<ExpenseByCategoryCreateInput, ExpenseByCategoryUncheckedCreateInput>
    /**
     * In case the ExpenseByCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseByCategoryUpdateInput, ExpenseByCategoryUncheckedUpdateInput>
  }

  /**
   * ExpenseByCategory delete
   */
  export type ExpenseByCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
    /**
     * Filter which ExpenseByCategory to delete.
     */
    where: ExpenseByCategoryWhereUniqueInput
  }

  /**
   * ExpenseByCategory deleteMany
   */
  export type ExpenseByCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseByCategories to delete
     */
    where?: ExpenseByCategoryWhereInput
    /**
     * Limit how many ExpenseByCategories to delete.
     */
    limit?: number
  }

  /**
   * ExpenseByCategory without action
   */
  export type ExpenseByCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseByCategory
     */
    select?: ExpenseByCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseByCategory
     */
    omit?: ExpenseByCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseByCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    name: 'name',
    email: 'email'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    productId: 'productId',
    name: 'name',
    price: 'price',
    rating: 'rating',
    stockQuantity: 'stockQuantity'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    saleId: 'saleId',
    productId: 'productId',
    timestamp: 'timestamp',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalAmount: 'totalAmount'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const PurchasesScalarFieldEnum: {
    purchaseId: 'purchaseId',
    productId: 'productId',
    timestamp: 'timestamp',
    quantity: 'quantity',
    unitCost: 'unitCost',
    totalCost: 'totalCost'
  };

  export type PurchasesScalarFieldEnum = (typeof PurchasesScalarFieldEnum)[keyof typeof PurchasesScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    expenseId: 'expenseId',
    category: 'category',
    amount: 'amount',
    timestamp: 'timestamp'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const SalesSummaryScalarFieldEnum: {
    salesSummaryId: 'salesSummaryId',
    totalValue: 'totalValue',
    changePercentage: 'changePercentage',
    date: 'date'
  };

  export type SalesSummaryScalarFieldEnum = (typeof SalesSummaryScalarFieldEnum)[keyof typeof SalesSummaryScalarFieldEnum]


  export const PurchaseSummaryScalarFieldEnum: {
    purchaseSummaryId: 'purchaseSummaryId',
    totalPurchased: 'totalPurchased',
    changePercentage: 'changePercentage',
    date: 'date'
  };

  export type PurchaseSummaryScalarFieldEnum = (typeof PurchaseSummaryScalarFieldEnum)[keyof typeof PurchaseSummaryScalarFieldEnum]


  export const ExpenseSummaryScalarFieldEnum: {
    expenseSummaryId: 'expenseSummaryId',
    totalExpenses: 'totalExpenses',
    date: 'date'
  };

  export type ExpenseSummaryScalarFieldEnum = (typeof ExpenseSummaryScalarFieldEnum)[keyof typeof ExpenseSummaryScalarFieldEnum]


  export const ExpenseByCategoryScalarFieldEnum: {
    expenseByCategoryId: 'expenseByCategoryId',
    expenseSummaryId: 'expenseSummaryId',
    category: 'category',
    amount: 'amount',
    date: 'date'
  };

  export type ExpenseByCategoryScalarFieldEnum = (typeof ExpenseByCategoryScalarFieldEnum)[keyof typeof ExpenseByCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
  }, "userId">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    productId?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    price?: FloatFilter<"Products"> | number
    rating?: FloatNullableFilter<"Products"> | number | null
    stockQuantity?: IntFilter<"Products"> | number
    Sales?: SalesListRelationFilter
    Purchases?: PurchasesListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    rating?: SortOrderInput | SortOrder
    stockQuantity?: SortOrder
    Sales?: SalesOrderByRelationAggregateInput
    Purchases?: PurchasesOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    productId?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    price?: FloatFilter<"Products"> | number
    rating?: FloatNullableFilter<"Products"> | number | null
    stockQuantity?: IntFilter<"Products"> | number
    Sales?: SalesListRelationFilter
    Purchases?: PurchasesListRelationFilter
  }, "productId">

  export type ProductsOrderByWithAggregationInput = {
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    rating?: SortOrderInput | SortOrder
    stockQuantity?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"Products"> | string
    name?: StringWithAggregatesFilter<"Products"> | string
    price?: FloatWithAggregatesFilter<"Products"> | number
    rating?: FloatNullableWithAggregatesFilter<"Products"> | number | null
    stockQuantity?: IntWithAggregatesFilter<"Products"> | number
  }

  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    saleId?: StringFilter<"Sales"> | string
    productId?: StringFilter<"Sales"> | string
    timestamp?: DateTimeFilter<"Sales"> | Date | string
    quantity?: IntFilter<"Sales"> | number
    unitPrice?: FloatFilter<"Sales"> | number
    totalAmount?: FloatFilter<"Sales"> | number
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type SalesOrderByWithRelationInput = {
    saleId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    product?: ProductsOrderByWithRelationInput
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    saleId?: string
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    productId?: StringFilter<"Sales"> | string
    timestamp?: DateTimeFilter<"Sales"> | Date | string
    quantity?: IntFilter<"Sales"> | number
    unitPrice?: FloatFilter<"Sales"> | number
    totalAmount?: FloatFilter<"Sales"> | number
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "saleId">

  export type SalesOrderByWithAggregationInput = {
    saleId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    _count?: SalesCountOrderByAggregateInput
    _avg?: SalesAvgOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
    _sum?: SalesSumOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    saleId?: StringWithAggregatesFilter<"Sales"> | string
    productId?: StringWithAggregatesFilter<"Sales"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    quantity?: IntWithAggregatesFilter<"Sales"> | number
    unitPrice?: FloatWithAggregatesFilter<"Sales"> | number
    totalAmount?: FloatWithAggregatesFilter<"Sales"> | number
  }

  export type PurchasesWhereInput = {
    AND?: PurchasesWhereInput | PurchasesWhereInput[]
    OR?: PurchasesWhereInput[]
    NOT?: PurchasesWhereInput | PurchasesWhereInput[]
    purchaseId?: StringFilter<"Purchases"> | string
    productId?: StringFilter<"Purchases"> | string
    timestamp?: DateTimeFilter<"Purchases"> | Date | string
    quantity?: IntFilter<"Purchases"> | number
    unitCost?: FloatFilter<"Purchases"> | number
    totalCost?: FloatFilter<"Purchases"> | number
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type PurchasesOrderByWithRelationInput = {
    purchaseId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
    product?: ProductsOrderByWithRelationInput
  }

  export type PurchasesWhereUniqueInput = Prisma.AtLeast<{
    purchaseId?: string
    AND?: PurchasesWhereInput | PurchasesWhereInput[]
    OR?: PurchasesWhereInput[]
    NOT?: PurchasesWhereInput | PurchasesWhereInput[]
    productId?: StringFilter<"Purchases"> | string
    timestamp?: DateTimeFilter<"Purchases"> | Date | string
    quantity?: IntFilter<"Purchases"> | number
    unitCost?: FloatFilter<"Purchases"> | number
    totalCost?: FloatFilter<"Purchases"> | number
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "purchaseId">

  export type PurchasesOrderByWithAggregationInput = {
    purchaseId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
    _count?: PurchasesCountOrderByAggregateInput
    _avg?: PurchasesAvgOrderByAggregateInput
    _max?: PurchasesMaxOrderByAggregateInput
    _min?: PurchasesMinOrderByAggregateInput
    _sum?: PurchasesSumOrderByAggregateInput
  }

  export type PurchasesScalarWhereWithAggregatesInput = {
    AND?: PurchasesScalarWhereWithAggregatesInput | PurchasesScalarWhereWithAggregatesInput[]
    OR?: PurchasesScalarWhereWithAggregatesInput[]
    NOT?: PurchasesScalarWhereWithAggregatesInput | PurchasesScalarWhereWithAggregatesInput[]
    purchaseId?: StringWithAggregatesFilter<"Purchases"> | string
    productId?: StringWithAggregatesFilter<"Purchases"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Purchases"> | Date | string
    quantity?: IntWithAggregatesFilter<"Purchases"> | number
    unitCost?: FloatWithAggregatesFilter<"Purchases"> | number
    totalCost?: FloatWithAggregatesFilter<"Purchases"> | number
  }

  export type ExpensesWhereInput = {
    AND?: ExpensesWhereInput | ExpensesWhereInput[]
    OR?: ExpensesWhereInput[]
    NOT?: ExpensesWhereInput | ExpensesWhereInput[]
    expenseId?: StringFilter<"Expenses"> | string
    category?: StringFilter<"Expenses"> | string
    amount?: FloatFilter<"Expenses"> | number
    timestamp?: DateTimeFilter<"Expenses"> | Date | string
  }

  export type ExpensesOrderByWithRelationInput = {
    expenseId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type ExpensesWhereUniqueInput = Prisma.AtLeast<{
    expenseId?: string
    AND?: ExpensesWhereInput | ExpensesWhereInput[]
    OR?: ExpensesWhereInput[]
    NOT?: ExpensesWhereInput | ExpensesWhereInput[]
    category?: StringFilter<"Expenses"> | string
    amount?: FloatFilter<"Expenses"> | number
    timestamp?: DateTimeFilter<"Expenses"> | Date | string
  }, "expenseId">

  export type ExpensesOrderByWithAggregationInput = {
    expenseId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    _count?: ExpensesCountOrderByAggregateInput
    _avg?: ExpensesAvgOrderByAggregateInput
    _max?: ExpensesMaxOrderByAggregateInput
    _min?: ExpensesMinOrderByAggregateInput
    _sum?: ExpensesSumOrderByAggregateInput
  }

  export type ExpensesScalarWhereWithAggregatesInput = {
    AND?: ExpensesScalarWhereWithAggregatesInput | ExpensesScalarWhereWithAggregatesInput[]
    OR?: ExpensesScalarWhereWithAggregatesInput[]
    NOT?: ExpensesScalarWhereWithAggregatesInput | ExpensesScalarWhereWithAggregatesInput[]
    expenseId?: StringWithAggregatesFilter<"Expenses"> | string
    category?: StringWithAggregatesFilter<"Expenses"> | string
    amount?: FloatWithAggregatesFilter<"Expenses"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Expenses"> | Date | string
  }

  export type SalesSummaryWhereInput = {
    AND?: SalesSummaryWhereInput | SalesSummaryWhereInput[]
    OR?: SalesSummaryWhereInput[]
    NOT?: SalesSummaryWhereInput | SalesSummaryWhereInput[]
    salesSummaryId?: StringFilter<"SalesSummary"> | string
    totalValue?: FloatFilter<"SalesSummary"> | number
    changePercentage?: FloatFilter<"SalesSummary"> | number
    date?: DateTimeFilter<"SalesSummary"> | Date | string
  }

  export type SalesSummaryOrderByWithRelationInput = {
    salesSummaryId?: SortOrder
    totalValue?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
  }

  export type SalesSummaryWhereUniqueInput = Prisma.AtLeast<{
    salesSummaryId?: string
    AND?: SalesSummaryWhereInput | SalesSummaryWhereInput[]
    OR?: SalesSummaryWhereInput[]
    NOT?: SalesSummaryWhereInput | SalesSummaryWhereInput[]
    totalValue?: FloatFilter<"SalesSummary"> | number
    changePercentage?: FloatFilter<"SalesSummary"> | number
    date?: DateTimeFilter<"SalesSummary"> | Date | string
  }, "salesSummaryId">

  export type SalesSummaryOrderByWithAggregationInput = {
    salesSummaryId?: SortOrder
    totalValue?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
    _count?: SalesSummaryCountOrderByAggregateInput
    _avg?: SalesSummaryAvgOrderByAggregateInput
    _max?: SalesSummaryMaxOrderByAggregateInput
    _min?: SalesSummaryMinOrderByAggregateInput
    _sum?: SalesSummarySumOrderByAggregateInput
  }

  export type SalesSummaryScalarWhereWithAggregatesInput = {
    AND?: SalesSummaryScalarWhereWithAggregatesInput | SalesSummaryScalarWhereWithAggregatesInput[]
    OR?: SalesSummaryScalarWhereWithAggregatesInput[]
    NOT?: SalesSummaryScalarWhereWithAggregatesInput | SalesSummaryScalarWhereWithAggregatesInput[]
    salesSummaryId?: StringWithAggregatesFilter<"SalesSummary"> | string
    totalValue?: FloatWithAggregatesFilter<"SalesSummary"> | number
    changePercentage?: FloatWithAggregatesFilter<"SalesSummary"> | number
    date?: DateTimeWithAggregatesFilter<"SalesSummary"> | Date | string
  }

  export type PurchaseSummaryWhereInput = {
    AND?: PurchaseSummaryWhereInput | PurchaseSummaryWhereInput[]
    OR?: PurchaseSummaryWhereInput[]
    NOT?: PurchaseSummaryWhereInput | PurchaseSummaryWhereInput[]
    purchaseSummaryId?: StringFilter<"PurchaseSummary"> | string
    totalPurchased?: FloatFilter<"PurchaseSummary"> | number
    changePercentage?: FloatFilter<"PurchaseSummary"> | number
    date?: DateTimeFilter<"PurchaseSummary"> | Date | string
  }

  export type PurchaseSummaryOrderByWithRelationInput = {
    purchaseSummaryId?: SortOrder
    totalPurchased?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
  }

  export type PurchaseSummaryWhereUniqueInput = Prisma.AtLeast<{
    purchaseSummaryId?: string
    AND?: PurchaseSummaryWhereInput | PurchaseSummaryWhereInput[]
    OR?: PurchaseSummaryWhereInput[]
    NOT?: PurchaseSummaryWhereInput | PurchaseSummaryWhereInput[]
    totalPurchased?: FloatFilter<"PurchaseSummary"> | number
    changePercentage?: FloatFilter<"PurchaseSummary"> | number
    date?: DateTimeFilter<"PurchaseSummary"> | Date | string
  }, "purchaseSummaryId">

  export type PurchaseSummaryOrderByWithAggregationInput = {
    purchaseSummaryId?: SortOrder
    totalPurchased?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
    _count?: PurchaseSummaryCountOrderByAggregateInput
    _avg?: PurchaseSummaryAvgOrderByAggregateInput
    _max?: PurchaseSummaryMaxOrderByAggregateInput
    _min?: PurchaseSummaryMinOrderByAggregateInput
    _sum?: PurchaseSummarySumOrderByAggregateInput
  }

  export type PurchaseSummaryScalarWhereWithAggregatesInput = {
    AND?: PurchaseSummaryScalarWhereWithAggregatesInput | PurchaseSummaryScalarWhereWithAggregatesInput[]
    OR?: PurchaseSummaryScalarWhereWithAggregatesInput[]
    NOT?: PurchaseSummaryScalarWhereWithAggregatesInput | PurchaseSummaryScalarWhereWithAggregatesInput[]
    purchaseSummaryId?: StringWithAggregatesFilter<"PurchaseSummary"> | string
    totalPurchased?: FloatWithAggregatesFilter<"PurchaseSummary"> | number
    changePercentage?: FloatWithAggregatesFilter<"PurchaseSummary"> | number
    date?: DateTimeWithAggregatesFilter<"PurchaseSummary"> | Date | string
  }

  export type ExpenseSummaryWhereInput = {
    AND?: ExpenseSummaryWhereInput | ExpenseSummaryWhereInput[]
    OR?: ExpenseSummaryWhereInput[]
    NOT?: ExpenseSummaryWhereInput | ExpenseSummaryWhereInput[]
    expenseSummaryId?: StringFilter<"ExpenseSummary"> | string
    totalExpenses?: FloatFilter<"ExpenseSummary"> | number
    date?: DateTimeFilter<"ExpenseSummary"> | Date | string
    ExpenseByCategory?: ExpenseByCategoryListRelationFilter
  }

  export type ExpenseSummaryOrderByWithRelationInput = {
    expenseSummaryId?: SortOrder
    totalExpenses?: SortOrder
    date?: SortOrder
    ExpenseByCategory?: ExpenseByCategoryOrderByRelationAggregateInput
  }

  export type ExpenseSummaryWhereUniqueInput = Prisma.AtLeast<{
    expenseSummaryId?: string
    AND?: ExpenseSummaryWhereInput | ExpenseSummaryWhereInput[]
    OR?: ExpenseSummaryWhereInput[]
    NOT?: ExpenseSummaryWhereInput | ExpenseSummaryWhereInput[]
    totalExpenses?: FloatFilter<"ExpenseSummary"> | number
    date?: DateTimeFilter<"ExpenseSummary"> | Date | string
    ExpenseByCategory?: ExpenseByCategoryListRelationFilter
  }, "expenseSummaryId">

  export type ExpenseSummaryOrderByWithAggregationInput = {
    expenseSummaryId?: SortOrder
    totalExpenses?: SortOrder
    date?: SortOrder
    _count?: ExpenseSummaryCountOrderByAggregateInput
    _avg?: ExpenseSummaryAvgOrderByAggregateInput
    _max?: ExpenseSummaryMaxOrderByAggregateInput
    _min?: ExpenseSummaryMinOrderByAggregateInput
    _sum?: ExpenseSummarySumOrderByAggregateInput
  }

  export type ExpenseSummaryScalarWhereWithAggregatesInput = {
    AND?: ExpenseSummaryScalarWhereWithAggregatesInput | ExpenseSummaryScalarWhereWithAggregatesInput[]
    OR?: ExpenseSummaryScalarWhereWithAggregatesInput[]
    NOT?: ExpenseSummaryScalarWhereWithAggregatesInput | ExpenseSummaryScalarWhereWithAggregatesInput[]
    expenseSummaryId?: StringWithAggregatesFilter<"ExpenseSummary"> | string
    totalExpenses?: FloatWithAggregatesFilter<"ExpenseSummary"> | number
    date?: DateTimeWithAggregatesFilter<"ExpenseSummary"> | Date | string
  }

  export type ExpenseByCategoryWhereInput = {
    AND?: ExpenseByCategoryWhereInput | ExpenseByCategoryWhereInput[]
    OR?: ExpenseByCategoryWhereInput[]
    NOT?: ExpenseByCategoryWhereInput | ExpenseByCategoryWhereInput[]
    expenseByCategoryId?: StringFilter<"ExpenseByCategory"> | string
    expenseSummaryId?: StringFilter<"ExpenseByCategory"> | string
    category?: StringFilter<"ExpenseByCategory"> | string
    amount?: BigIntFilter<"ExpenseByCategory"> | bigint | number
    date?: DateTimeFilter<"ExpenseByCategory"> | Date | string
    expenseSummary?: XOR<ExpenseSummaryScalarRelationFilter, ExpenseSummaryWhereInput>
  }

  export type ExpenseByCategoryOrderByWithRelationInput = {
    expenseByCategoryId?: SortOrder
    expenseSummaryId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    expenseSummary?: ExpenseSummaryOrderByWithRelationInput
  }

  export type ExpenseByCategoryWhereUniqueInput = Prisma.AtLeast<{
    expenseByCategoryId?: string
    AND?: ExpenseByCategoryWhereInput | ExpenseByCategoryWhereInput[]
    OR?: ExpenseByCategoryWhereInput[]
    NOT?: ExpenseByCategoryWhereInput | ExpenseByCategoryWhereInput[]
    expenseSummaryId?: StringFilter<"ExpenseByCategory"> | string
    category?: StringFilter<"ExpenseByCategory"> | string
    amount?: BigIntFilter<"ExpenseByCategory"> | bigint | number
    date?: DateTimeFilter<"ExpenseByCategory"> | Date | string
    expenseSummary?: XOR<ExpenseSummaryScalarRelationFilter, ExpenseSummaryWhereInput>
  }, "expenseByCategoryId">

  export type ExpenseByCategoryOrderByWithAggregationInput = {
    expenseByCategoryId?: SortOrder
    expenseSummaryId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    _count?: ExpenseByCategoryCountOrderByAggregateInput
    _avg?: ExpenseByCategoryAvgOrderByAggregateInput
    _max?: ExpenseByCategoryMaxOrderByAggregateInput
    _min?: ExpenseByCategoryMinOrderByAggregateInput
    _sum?: ExpenseByCategorySumOrderByAggregateInput
  }

  export type ExpenseByCategoryScalarWhereWithAggregatesInput = {
    AND?: ExpenseByCategoryScalarWhereWithAggregatesInput | ExpenseByCategoryScalarWhereWithAggregatesInput[]
    OR?: ExpenseByCategoryScalarWhereWithAggregatesInput[]
    NOT?: ExpenseByCategoryScalarWhereWithAggregatesInput | ExpenseByCategoryScalarWhereWithAggregatesInput[]
    expenseByCategoryId?: StringWithAggregatesFilter<"ExpenseByCategory"> | string
    expenseSummaryId?: StringWithAggregatesFilter<"ExpenseByCategory"> | string
    category?: StringWithAggregatesFilter<"ExpenseByCategory"> | string
    amount?: BigIntWithAggregatesFilter<"ExpenseByCategory"> | bigint | number
    date?: DateTimeWithAggregatesFilter<"ExpenseByCategory"> | Date | string
  }

  export type UsersCreateInput = {
    userId: string
    name: string
    email: string
  }

  export type UsersUncheckedCreateInput = {
    userId: string
    name: string
    email: string
  }

  export type UsersUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateManyInput = {
    userId: string
    name: string
    email: string
  }

  export type UsersUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsCreateInput = {
    productId: string
    name: string
    price: number
    rating?: number | null
    stockQuantity: number
    Sales?: SalesCreateNestedManyWithoutProductInput
    Purchases?: PurchasesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    productId: string
    name: string
    price: number
    rating?: number | null
    stockQuantity: number
    Sales?: SalesUncheckedCreateNestedManyWithoutProductInput
    Purchases?: PurchasesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    Sales?: SalesUpdateManyWithoutProductNestedInput
    Purchases?: PurchasesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    Sales?: SalesUncheckedUpdateManyWithoutProductNestedInput
    Purchases?: PurchasesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    productId: string
    name: string
    price: number
    rating?: number | null
    stockQuantity: number
  }

  export type ProductsUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type SalesCreateInput = {
    saleId: string
    timestamp: Date | string
    quantity: number
    unitPrice: number
    totalAmount: number
    product: ProductsCreateNestedOneWithoutSalesInput
  }

  export type SalesUncheckedCreateInput = {
    saleId: string
    productId: string
    timestamp: Date | string
    quantity: number
    unitPrice: number
    totalAmount: number
  }

  export type SalesUpdateInput = {
    saleId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    product?: ProductsUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateInput = {
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesCreateManyInput = {
    saleId: string
    productId: string
    timestamp: Date | string
    quantity: number
    unitPrice: number
    totalAmount: number
  }

  export type SalesUpdateManyMutationInput = {
    saleId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateManyInput = {
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchasesCreateInput = {
    purchaseId: string
    timestamp: Date | string
    quantity: number
    unitCost: number
    totalCost: number
    product: ProductsCreateNestedOneWithoutPurchasesInput
  }

  export type PurchasesUncheckedCreateInput = {
    purchaseId: string
    productId: string
    timestamp: Date | string
    quantity: number
    unitCost: number
    totalCost: number
  }

  export type PurchasesUpdateInput = {
    purchaseId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    product?: ProductsUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchasesUncheckedUpdateInput = {
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchasesCreateManyInput = {
    purchaseId: string
    productId: string
    timestamp: Date | string
    quantity: number
    unitCost: number
    totalCost: number
  }

  export type PurchasesUpdateManyMutationInput = {
    purchaseId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchasesUncheckedUpdateManyInput = {
    purchaseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type ExpensesCreateInput = {
    expenseId: string
    category: string
    amount: number
    timestamp: Date | string
  }

  export type ExpensesUncheckedCreateInput = {
    expenseId: string
    category: string
    amount: number
    timestamp: Date | string
  }

  export type ExpensesUpdateInput = {
    expenseId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesUncheckedUpdateInput = {
    expenseId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesCreateManyInput = {
    expenseId: string
    category: string
    amount: number
    timestamp: Date | string
  }

  export type ExpensesUpdateManyMutationInput = {
    expenseId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesUncheckedUpdateManyInput = {
    expenseId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesSummaryCreateInput = {
    salesSummaryId: string
    totalValue: number
    changePercentage: number
    date: Date | string
  }

  export type SalesSummaryUncheckedCreateInput = {
    salesSummaryId: string
    totalValue: number
    changePercentage: number
    date: Date | string
  }

  export type SalesSummaryUpdateInput = {
    salesSummaryId?: StringFieldUpdateOperationsInput | string
    totalValue?: FloatFieldUpdateOperationsInput | number
    changePercentage?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesSummaryUncheckedUpdateInput = {
    salesSummaryId?: StringFieldUpdateOperationsInput | string
    totalValue?: FloatFieldUpdateOperationsInput | number
    changePercentage?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesSummaryCreateManyInput = {
    salesSummaryId: string
    totalValue: number
    changePercentage: number
    date: Date | string
  }

  export type SalesSummaryUpdateManyMutationInput = {
    salesSummaryId?: StringFieldUpdateOperationsInput | string
    totalValue?: FloatFieldUpdateOperationsInput | number
    changePercentage?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesSummaryUncheckedUpdateManyInput = {
    salesSummaryId?: StringFieldUpdateOperationsInput | string
    totalValue?: FloatFieldUpdateOperationsInput | number
    changePercentage?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseSummaryCreateInput = {
    purchaseSummaryId: string
    totalPurchased: number
    changePercentage: number
    date: Date | string
  }

  export type PurchaseSummaryUncheckedCreateInput = {
    purchaseSummaryId: string
    totalPurchased: number
    changePercentage: number
    date: Date | string
  }

  export type PurchaseSummaryUpdateInput = {
    purchaseSummaryId?: StringFieldUpdateOperationsInput | string
    totalPurchased?: FloatFieldUpdateOperationsInput | number
    changePercentage?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseSummaryUncheckedUpdateInput = {
    purchaseSummaryId?: StringFieldUpdateOperationsInput | string
    totalPurchased?: FloatFieldUpdateOperationsInput | number
    changePercentage?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseSummaryCreateManyInput = {
    purchaseSummaryId: string
    totalPurchased: number
    changePercentage: number
    date: Date | string
  }

  export type PurchaseSummaryUpdateManyMutationInput = {
    purchaseSummaryId?: StringFieldUpdateOperationsInput | string
    totalPurchased?: FloatFieldUpdateOperationsInput | number
    changePercentage?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseSummaryUncheckedUpdateManyInput = {
    purchaseSummaryId?: StringFieldUpdateOperationsInput | string
    totalPurchased?: FloatFieldUpdateOperationsInput | number
    changePercentage?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseSummaryCreateInput = {
    expenseSummaryId: string
    totalExpenses: number
    date: Date | string
    ExpenseByCategory?: ExpenseByCategoryCreateNestedManyWithoutExpenseSummaryInput
  }

  export type ExpenseSummaryUncheckedCreateInput = {
    expenseSummaryId: string
    totalExpenses: number
    date: Date | string
    ExpenseByCategory?: ExpenseByCategoryUncheckedCreateNestedManyWithoutExpenseSummaryInput
  }

  export type ExpenseSummaryUpdateInput = {
    expenseSummaryId?: StringFieldUpdateOperationsInput | string
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ExpenseByCategory?: ExpenseByCategoryUpdateManyWithoutExpenseSummaryNestedInput
  }

  export type ExpenseSummaryUncheckedUpdateInput = {
    expenseSummaryId?: StringFieldUpdateOperationsInput | string
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ExpenseByCategory?: ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryNestedInput
  }

  export type ExpenseSummaryCreateManyInput = {
    expenseSummaryId: string
    totalExpenses: number
    date: Date | string
  }

  export type ExpenseSummaryUpdateManyMutationInput = {
    expenseSummaryId?: StringFieldUpdateOperationsInput | string
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseSummaryUncheckedUpdateManyInput = {
    expenseSummaryId?: StringFieldUpdateOperationsInput | string
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseByCategoryCreateInput = {
    expenseByCategoryId: string
    category: string
    amount: bigint | number
    date: Date | string
    expenseSummary: ExpenseSummaryCreateNestedOneWithoutExpenseByCategoryInput
  }

  export type ExpenseByCategoryUncheckedCreateInput = {
    expenseByCategoryId: string
    expenseSummaryId: string
    category: string
    amount: bigint | number
    date: Date | string
  }

  export type ExpenseByCategoryUpdateInput = {
    expenseByCategoryId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseSummary?: ExpenseSummaryUpdateOneRequiredWithoutExpenseByCategoryNestedInput
  }

  export type ExpenseByCategoryUncheckedUpdateInput = {
    expenseByCategoryId?: StringFieldUpdateOperationsInput | string
    expenseSummaryId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseByCategoryCreateManyInput = {
    expenseByCategoryId: string
    expenseSummaryId: string
    category: string
    amount: bigint | number
    date: Date | string
  }

  export type ExpenseByCategoryUpdateManyMutationInput = {
    expenseByCategoryId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseByCategoryUncheckedUpdateManyInput = {
    expenseByCategoryId?: StringFieldUpdateOperationsInput | string
    expenseSummaryId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SalesListRelationFilter = {
    every?: SalesWhereInput
    some?: SalesWhereInput
    none?: SalesWhereInput
  }

  export type PurchasesListRelationFilter = {
    every?: PurchasesWhereInput
    some?: PurchasesWhereInput
    none?: PurchasesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    stockQuantity?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    stockQuantity?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    stockQuantity?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    stockQuantity?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    stockQuantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type SalesCountOrderByAggregateInput = {
    saleId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    saleId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    saleId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PurchasesCountOrderByAggregateInput = {
    purchaseId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchasesAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchasesMaxOrderByAggregateInput = {
    purchaseId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchasesMinOrderByAggregateInput = {
    purchaseId?: SortOrder
    productId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type PurchasesSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
    totalCost?: SortOrder
  }

  export type ExpensesCountOrderByAggregateInput = {
    expenseId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type ExpensesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpensesMaxOrderByAggregateInput = {
    expenseId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type ExpensesMinOrderByAggregateInput = {
    expenseId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type ExpensesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalesSummaryCountOrderByAggregateInput = {
    salesSummaryId?: SortOrder
    totalValue?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
  }

  export type SalesSummaryAvgOrderByAggregateInput = {
    totalValue?: SortOrder
    changePercentage?: SortOrder
  }

  export type SalesSummaryMaxOrderByAggregateInput = {
    salesSummaryId?: SortOrder
    totalValue?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
  }

  export type SalesSummaryMinOrderByAggregateInput = {
    salesSummaryId?: SortOrder
    totalValue?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
  }

  export type SalesSummarySumOrderByAggregateInput = {
    totalValue?: SortOrder
    changePercentage?: SortOrder
  }

  export type PurchaseSummaryCountOrderByAggregateInput = {
    purchaseSummaryId?: SortOrder
    totalPurchased?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
  }

  export type PurchaseSummaryAvgOrderByAggregateInput = {
    totalPurchased?: SortOrder
    changePercentage?: SortOrder
  }

  export type PurchaseSummaryMaxOrderByAggregateInput = {
    purchaseSummaryId?: SortOrder
    totalPurchased?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
  }

  export type PurchaseSummaryMinOrderByAggregateInput = {
    purchaseSummaryId?: SortOrder
    totalPurchased?: SortOrder
    changePercentage?: SortOrder
    date?: SortOrder
  }

  export type PurchaseSummarySumOrderByAggregateInput = {
    totalPurchased?: SortOrder
    changePercentage?: SortOrder
  }

  export type ExpenseByCategoryListRelationFilter = {
    every?: ExpenseByCategoryWhereInput
    some?: ExpenseByCategoryWhereInput
    none?: ExpenseByCategoryWhereInput
  }

  export type ExpenseByCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseSummaryCountOrderByAggregateInput = {
    expenseSummaryId?: SortOrder
    totalExpenses?: SortOrder
    date?: SortOrder
  }

  export type ExpenseSummaryAvgOrderByAggregateInput = {
    totalExpenses?: SortOrder
  }

  export type ExpenseSummaryMaxOrderByAggregateInput = {
    expenseSummaryId?: SortOrder
    totalExpenses?: SortOrder
    date?: SortOrder
  }

  export type ExpenseSummaryMinOrderByAggregateInput = {
    expenseSummaryId?: SortOrder
    totalExpenses?: SortOrder
    date?: SortOrder
  }

  export type ExpenseSummarySumOrderByAggregateInput = {
    totalExpenses?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ExpenseSummaryScalarRelationFilter = {
    is?: ExpenseSummaryWhereInput
    isNot?: ExpenseSummaryWhereInput
  }

  export type ExpenseByCategoryCountOrderByAggregateInput = {
    expenseByCategoryId?: SortOrder
    expenseSummaryId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type ExpenseByCategoryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseByCategoryMaxOrderByAggregateInput = {
    expenseByCategoryId?: SortOrder
    expenseSummaryId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type ExpenseByCategoryMinOrderByAggregateInput = {
    expenseByCategoryId?: SortOrder
    expenseSummaryId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
  }

  export type ExpenseByCategorySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SalesCreateNestedManyWithoutProductInput = {
    create?: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput> | SalesCreateWithoutProductInput[] | SalesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutProductInput | SalesCreateOrConnectWithoutProductInput[]
    createMany?: SalesCreateManyProductInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type PurchasesCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchasesCreateWithoutProductInput, PurchasesUncheckedCreateWithoutProductInput> | PurchasesCreateWithoutProductInput[] | PurchasesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutProductInput | PurchasesCreateOrConnectWithoutProductInput[]
    createMany?: PurchasesCreateManyProductInputEnvelope
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
  }

  export type SalesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput> | SalesCreateWithoutProductInput[] | SalesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutProductInput | SalesCreateOrConnectWithoutProductInput[]
    createMany?: SalesCreateManyProductInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type PurchasesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchasesCreateWithoutProductInput, PurchasesUncheckedCreateWithoutProductInput> | PurchasesCreateWithoutProductInput[] | PurchasesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutProductInput | PurchasesCreateOrConnectWithoutProductInput[]
    createMany?: PurchasesCreateManyProductInputEnvelope
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalesUpdateManyWithoutProductNestedInput = {
    create?: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput> | SalesCreateWithoutProductInput[] | SalesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutProductInput | SalesCreateOrConnectWithoutProductInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutProductInput | SalesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SalesCreateManyProductInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutProductInput | SalesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutProductInput | SalesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type PurchasesUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchasesCreateWithoutProductInput, PurchasesUncheckedCreateWithoutProductInput> | PurchasesCreateWithoutProductInput[] | PurchasesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutProductInput | PurchasesCreateOrConnectWithoutProductInput[]
    upsert?: PurchasesUpsertWithWhereUniqueWithoutProductInput | PurchasesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchasesCreateManyProductInputEnvelope
    set?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    disconnect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    delete?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    update?: PurchasesUpdateWithWhereUniqueWithoutProductInput | PurchasesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchasesUpdateManyWithWhereWithoutProductInput | PurchasesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
  }

  export type SalesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput> | SalesCreateWithoutProductInput[] | SalesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutProductInput | SalesCreateOrConnectWithoutProductInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutProductInput | SalesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SalesCreateManyProductInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutProductInput | SalesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutProductInput | SalesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type PurchasesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchasesCreateWithoutProductInput, PurchasesUncheckedCreateWithoutProductInput> | PurchasesCreateWithoutProductInput[] | PurchasesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchasesCreateOrConnectWithoutProductInput | PurchasesCreateOrConnectWithoutProductInput[]
    upsert?: PurchasesUpsertWithWhereUniqueWithoutProductInput | PurchasesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchasesCreateManyProductInputEnvelope
    set?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    disconnect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    delete?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    connect?: PurchasesWhereUniqueInput | PurchasesWhereUniqueInput[]
    update?: PurchasesUpdateWithWhereUniqueWithoutProductInput | PurchasesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchasesUpdateManyWithWhereWithoutProductInput | PurchasesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutSalesInput = {
    create?: XOR<ProductsCreateWithoutSalesInput, ProductsUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutSalesInput
    connect?: ProductsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductsUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<ProductsCreateWithoutSalesInput, ProductsUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutSalesInput
    upsert?: ProductsUpsertWithoutSalesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutSalesInput, ProductsUpdateWithoutSalesInput>, ProductsUncheckedUpdateWithoutSalesInput>
  }

  export type ProductsCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<ProductsCreateWithoutPurchasesInput, ProductsUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutPurchasesInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<ProductsCreateWithoutPurchasesInput, ProductsUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutPurchasesInput
    upsert?: ProductsUpsertWithoutPurchasesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutPurchasesInput, ProductsUpdateWithoutPurchasesInput>, ProductsUncheckedUpdateWithoutPurchasesInput>
  }

  export type ExpenseByCategoryCreateNestedManyWithoutExpenseSummaryInput = {
    create?: XOR<ExpenseByCategoryCreateWithoutExpenseSummaryInput, ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput> | ExpenseByCategoryCreateWithoutExpenseSummaryInput[] | ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[]
    connectOrCreate?: ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput | ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[]
    createMany?: ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope
    connect?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
  }

  export type ExpenseByCategoryUncheckedCreateNestedManyWithoutExpenseSummaryInput = {
    create?: XOR<ExpenseByCategoryCreateWithoutExpenseSummaryInput, ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput> | ExpenseByCategoryCreateWithoutExpenseSummaryInput[] | ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[]
    connectOrCreate?: ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput | ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[]
    createMany?: ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope
    connect?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
  }

  export type ExpenseByCategoryUpdateManyWithoutExpenseSummaryNestedInput = {
    create?: XOR<ExpenseByCategoryCreateWithoutExpenseSummaryInput, ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput> | ExpenseByCategoryCreateWithoutExpenseSummaryInput[] | ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[]
    connectOrCreate?: ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput | ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[]
    upsert?: ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput | ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput[]
    createMany?: ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope
    set?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
    disconnect?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
    delete?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
    connect?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
    update?: ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput | ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput[]
    updateMany?: ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput | ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput[]
    deleteMany?: ExpenseByCategoryScalarWhereInput | ExpenseByCategoryScalarWhereInput[]
  }

  export type ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryNestedInput = {
    create?: XOR<ExpenseByCategoryCreateWithoutExpenseSummaryInput, ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput> | ExpenseByCategoryCreateWithoutExpenseSummaryInput[] | ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput[]
    connectOrCreate?: ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput | ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput[]
    upsert?: ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput | ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput[]
    createMany?: ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope
    set?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
    disconnect?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
    delete?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
    connect?: ExpenseByCategoryWhereUniqueInput | ExpenseByCategoryWhereUniqueInput[]
    update?: ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput | ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput[]
    updateMany?: ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput | ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput[]
    deleteMany?: ExpenseByCategoryScalarWhereInput | ExpenseByCategoryScalarWhereInput[]
  }

  export type ExpenseSummaryCreateNestedOneWithoutExpenseByCategoryInput = {
    create?: XOR<ExpenseSummaryCreateWithoutExpenseByCategoryInput, ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput>
    connectOrCreate?: ExpenseSummaryCreateOrConnectWithoutExpenseByCategoryInput
    connect?: ExpenseSummaryWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ExpenseSummaryUpdateOneRequiredWithoutExpenseByCategoryNestedInput = {
    create?: XOR<ExpenseSummaryCreateWithoutExpenseByCategoryInput, ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput>
    connectOrCreate?: ExpenseSummaryCreateOrConnectWithoutExpenseByCategoryInput
    upsert?: ExpenseSummaryUpsertWithoutExpenseByCategoryInput
    connect?: ExpenseSummaryWhereUniqueInput
    update?: XOR<XOR<ExpenseSummaryUpdateToOneWithWhereWithoutExpenseByCategoryInput, ExpenseSummaryUpdateWithoutExpenseByCategoryInput>, ExpenseSummaryUncheckedUpdateWithoutExpenseByCategoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type SalesCreateWithoutProductInput = {
    saleId: string
    timestamp: Date | string
    quantity: number
    unitPrice: number
    totalAmount: number
  }

  export type SalesUncheckedCreateWithoutProductInput = {
    saleId: string
    timestamp: Date | string
    quantity: number
    unitPrice: number
    totalAmount: number
  }

  export type SalesCreateOrConnectWithoutProductInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput>
  }

  export type SalesCreateManyProductInputEnvelope = {
    data: SalesCreateManyProductInput | SalesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PurchasesCreateWithoutProductInput = {
    purchaseId: string
    timestamp: Date | string
    quantity: number
    unitCost: number
    totalCost: number
  }

  export type PurchasesUncheckedCreateWithoutProductInput = {
    purchaseId: string
    timestamp: Date | string
    quantity: number
    unitCost: number
    totalCost: number
  }

  export type PurchasesCreateOrConnectWithoutProductInput = {
    where: PurchasesWhereUniqueInput
    create: XOR<PurchasesCreateWithoutProductInput, PurchasesUncheckedCreateWithoutProductInput>
  }

  export type PurchasesCreateManyProductInputEnvelope = {
    data: PurchasesCreateManyProductInput | PurchasesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SalesUpsertWithWhereUniqueWithoutProductInput = {
    where: SalesWhereUniqueInput
    update: XOR<SalesUpdateWithoutProductInput, SalesUncheckedUpdateWithoutProductInput>
    create: XOR<SalesCreateWithoutProductInput, SalesUncheckedCreateWithoutProductInput>
  }

  export type SalesUpdateWithWhereUniqueWithoutProductInput = {
    where: SalesWhereUniqueInput
    data: XOR<SalesUpdateWithoutProductInput, SalesUncheckedUpdateWithoutProductInput>
  }

  export type SalesUpdateManyWithWhereWithoutProductInput = {
    where: SalesScalarWhereInput
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyWithoutProductInput>
  }

  export type SalesScalarWhereInput = {
    AND?: SalesScalarWhereInput | SalesScalarWhereInput[]
    OR?: SalesScalarWhereInput[]
    NOT?: SalesScalarWhereInput | SalesScalarWhereInput[]
    saleId?: StringFilter<"Sales"> | string
    productId?: StringFilter<"Sales"> | string
    timestamp?: DateTimeFilter<"Sales"> | Date | string
    quantity?: IntFilter<"Sales"> | number
    unitPrice?: FloatFilter<"Sales"> | number
    totalAmount?: FloatFilter<"Sales"> | number
  }

  export type PurchasesUpsertWithWhereUniqueWithoutProductInput = {
    where: PurchasesWhereUniqueInput
    update: XOR<PurchasesUpdateWithoutProductInput, PurchasesUncheckedUpdateWithoutProductInput>
    create: XOR<PurchasesCreateWithoutProductInput, PurchasesUncheckedCreateWithoutProductInput>
  }

  export type PurchasesUpdateWithWhereUniqueWithoutProductInput = {
    where: PurchasesWhereUniqueInput
    data: XOR<PurchasesUpdateWithoutProductInput, PurchasesUncheckedUpdateWithoutProductInput>
  }

  export type PurchasesUpdateManyWithWhereWithoutProductInput = {
    where: PurchasesScalarWhereInput
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyWithoutProductInput>
  }

  export type PurchasesScalarWhereInput = {
    AND?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
    OR?: PurchasesScalarWhereInput[]
    NOT?: PurchasesScalarWhereInput | PurchasesScalarWhereInput[]
    purchaseId?: StringFilter<"Purchases"> | string
    productId?: StringFilter<"Purchases"> | string
    timestamp?: DateTimeFilter<"Purchases"> | Date | string
    quantity?: IntFilter<"Purchases"> | number
    unitCost?: FloatFilter<"Purchases"> | number
    totalCost?: FloatFilter<"Purchases"> | number
  }

  export type ProductsCreateWithoutSalesInput = {
    productId: string
    name: string
    price: number
    rating?: number | null
    stockQuantity: number
    Purchases?: PurchasesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutSalesInput = {
    productId: string
    name: string
    price: number
    rating?: number | null
    stockQuantity: number
    Purchases?: PurchasesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutSalesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutSalesInput, ProductsUncheckedCreateWithoutSalesInput>
  }

  export type ProductsUpsertWithoutSalesInput = {
    update: XOR<ProductsUpdateWithoutSalesInput, ProductsUncheckedUpdateWithoutSalesInput>
    create: XOR<ProductsCreateWithoutSalesInput, ProductsUncheckedCreateWithoutSalesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutSalesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutSalesInput, ProductsUncheckedUpdateWithoutSalesInput>
  }

  export type ProductsUpdateWithoutSalesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    Purchases?: PurchasesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutSalesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    Purchases?: PurchasesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateWithoutPurchasesInput = {
    productId: string
    name: string
    price: number
    rating?: number | null
    stockQuantity: number
    Sales?: SalesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutPurchasesInput = {
    productId: string
    name: string
    price: number
    rating?: number | null
    stockQuantity: number
    Sales?: SalesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutPurchasesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutPurchasesInput, ProductsUncheckedCreateWithoutPurchasesInput>
  }

  export type ProductsUpsertWithoutPurchasesInput = {
    update: XOR<ProductsUpdateWithoutPurchasesInput, ProductsUncheckedUpdateWithoutPurchasesInput>
    create: XOR<ProductsCreateWithoutPurchasesInput, ProductsUncheckedCreateWithoutPurchasesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutPurchasesInput, ProductsUncheckedUpdateWithoutPurchasesInput>
  }

  export type ProductsUpdateWithoutPurchasesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    Sales?: SalesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutPurchasesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    Sales?: SalesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ExpenseByCategoryCreateWithoutExpenseSummaryInput = {
    expenseByCategoryId: string
    category: string
    amount: bigint | number
    date: Date | string
  }

  export type ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput = {
    expenseByCategoryId: string
    category: string
    amount: bigint | number
    date: Date | string
  }

  export type ExpenseByCategoryCreateOrConnectWithoutExpenseSummaryInput = {
    where: ExpenseByCategoryWhereUniqueInput
    create: XOR<ExpenseByCategoryCreateWithoutExpenseSummaryInput, ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput>
  }

  export type ExpenseByCategoryCreateManyExpenseSummaryInputEnvelope = {
    data: ExpenseByCategoryCreateManyExpenseSummaryInput | ExpenseByCategoryCreateManyExpenseSummaryInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseByCategoryUpsertWithWhereUniqueWithoutExpenseSummaryInput = {
    where: ExpenseByCategoryWhereUniqueInput
    update: XOR<ExpenseByCategoryUpdateWithoutExpenseSummaryInput, ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput>
    create: XOR<ExpenseByCategoryCreateWithoutExpenseSummaryInput, ExpenseByCategoryUncheckedCreateWithoutExpenseSummaryInput>
  }

  export type ExpenseByCategoryUpdateWithWhereUniqueWithoutExpenseSummaryInput = {
    where: ExpenseByCategoryWhereUniqueInput
    data: XOR<ExpenseByCategoryUpdateWithoutExpenseSummaryInput, ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput>
  }

  export type ExpenseByCategoryUpdateManyWithWhereWithoutExpenseSummaryInput = {
    where: ExpenseByCategoryScalarWhereInput
    data: XOR<ExpenseByCategoryUpdateManyMutationInput, ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryInput>
  }

  export type ExpenseByCategoryScalarWhereInput = {
    AND?: ExpenseByCategoryScalarWhereInput | ExpenseByCategoryScalarWhereInput[]
    OR?: ExpenseByCategoryScalarWhereInput[]
    NOT?: ExpenseByCategoryScalarWhereInput | ExpenseByCategoryScalarWhereInput[]
    expenseByCategoryId?: StringFilter<"ExpenseByCategory"> | string
    expenseSummaryId?: StringFilter<"ExpenseByCategory"> | string
    category?: StringFilter<"ExpenseByCategory"> | string
    amount?: BigIntFilter<"ExpenseByCategory"> | bigint | number
    date?: DateTimeFilter<"ExpenseByCategory"> | Date | string
  }

  export type ExpenseSummaryCreateWithoutExpenseByCategoryInput = {
    expenseSummaryId: string
    totalExpenses: number
    date: Date | string
  }

  export type ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput = {
    expenseSummaryId: string
    totalExpenses: number
    date: Date | string
  }

  export type ExpenseSummaryCreateOrConnectWithoutExpenseByCategoryInput = {
    where: ExpenseSummaryWhereUniqueInput
    create: XOR<ExpenseSummaryCreateWithoutExpenseByCategoryInput, ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput>
  }

  export type ExpenseSummaryUpsertWithoutExpenseByCategoryInput = {
    update: XOR<ExpenseSummaryUpdateWithoutExpenseByCategoryInput, ExpenseSummaryUncheckedUpdateWithoutExpenseByCategoryInput>
    create: XOR<ExpenseSummaryCreateWithoutExpenseByCategoryInput, ExpenseSummaryUncheckedCreateWithoutExpenseByCategoryInput>
    where?: ExpenseSummaryWhereInput
  }

  export type ExpenseSummaryUpdateToOneWithWhereWithoutExpenseByCategoryInput = {
    where?: ExpenseSummaryWhereInput
    data: XOR<ExpenseSummaryUpdateWithoutExpenseByCategoryInput, ExpenseSummaryUncheckedUpdateWithoutExpenseByCategoryInput>
  }

  export type ExpenseSummaryUpdateWithoutExpenseByCategoryInput = {
    expenseSummaryId?: StringFieldUpdateOperationsInput | string
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseSummaryUncheckedUpdateWithoutExpenseByCategoryInput = {
    expenseSummaryId?: StringFieldUpdateOperationsInput | string
    totalExpenses?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCreateManyProductInput = {
    saleId: string
    timestamp: Date | string
    quantity: number
    unitPrice: number
    totalAmount: number
  }

  export type PurchasesCreateManyProductInput = {
    purchaseId: string
    timestamp: Date | string
    quantity: number
    unitCost: number
    totalCost: number
  }

  export type SalesUpdateWithoutProductInput = {
    saleId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateWithoutProductInput = {
    saleId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateManyWithoutProductInput = {
    saleId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchasesUpdateWithoutProductInput = {
    purchaseId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchasesUncheckedUpdateWithoutProductInput = {
    purchaseId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchasesUncheckedUpdateManyWithoutProductInput = {
    purchaseId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type ExpenseByCategoryCreateManyExpenseSummaryInput = {
    expenseByCategoryId: string
    category: string
    amount: bigint | number
    date: Date | string
  }

  export type ExpenseByCategoryUpdateWithoutExpenseSummaryInput = {
    expenseByCategoryId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseByCategoryUncheckedUpdateWithoutExpenseSummaryInput = {
    expenseByCategoryId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseByCategoryUncheckedUpdateManyWithoutExpenseSummaryInput = {
    expenseByCategoryId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ExternalAccount
 * 
 */
export type ExternalAccount = $Result.DefaultSelection<Prisma.$ExternalAccountPayload>
/**
 * Model EmailVerification
 * 
 */
export type EmailVerification = $Result.DefaultSelection<Prisma.$EmailVerificationPayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model MultiFactorAuthentication
 * 
 */
export type MultiFactorAuthentication = $Result.DefaultSelection<Prisma.$MultiFactorAuthenticationPayload>
/**
 * Model Totp
 * 
 */
export type Totp = $Result.DefaultSelection<Prisma.$TotpPayload>
/**
 * Model Restriction
 * 
 */
export type Restriction = $Result.DefaultSelection<Prisma.$RestrictionPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AccountProvider: {
  GOOGLE: 'GOOGLE',
  GITHUB: 'GITHUB'
};

export type AccountProvider = (typeof AccountProvider)[keyof typeof AccountProvider]


export const EmailVerificationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED'
};

export type EmailVerificationStatus = (typeof EmailVerificationStatus)[keyof typeof EmailVerificationStatus]


export const TotpStatus: {
  DISABLED: 'DISABLED',
  PENDING: 'PENDING',
  ENABLED: 'ENABLED'
};

export type TotpStatus = (typeof TotpStatus)[keyof typeof TotpStatus]


export const RestrictionReason: {
  INAPPROPRIATE_USERNAME: 'INAPPROPRIATE_USERNAME',
  SPAM: 'SPAM',
  OFFENSIVE_BEHAVIOR: 'OFFENSIVE_BEHAVIOR'
};

export type RestrictionReason = (typeof RestrictionReason)[keyof typeof RestrictionReason]


export const RestrictionStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELED: 'CANCELED'
};

export type RestrictionStatus = (typeof RestrictionStatus)[keyof typeof RestrictionStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AccountProvider = $Enums.AccountProvider

export const AccountProvider: typeof $Enums.AccountProvider

export type EmailVerificationStatus = $Enums.EmailVerificationStatus

export const EmailVerificationStatus: typeof $Enums.EmailVerificationStatus

export type TotpStatus = $Enums.TotpStatus

export const TotpStatus: typeof $Enums.TotpStatus

export type RestrictionReason = $Enums.RestrictionReason

export const RestrictionReason: typeof $Enums.RestrictionReason

export type RestrictionStatus = $Enums.RestrictionStatus

export const RestrictionStatus: typeof $Enums.RestrictionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.externalAccount`: Exposes CRUD operations for the **ExternalAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalAccounts
    * const externalAccounts = await prisma.externalAccount.findMany()
    * ```
    */
  get externalAccount(): Prisma.ExternalAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerification`: Exposes CRUD operations for the **EmailVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerifications
    * const emailVerifications = await prisma.emailVerification.findMany()
    * ```
    */
  get emailVerification(): Prisma.EmailVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.multiFactorAuthentication`: Exposes CRUD operations for the **MultiFactorAuthentication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MultiFactorAuthentications
    * const multiFactorAuthentications = await prisma.multiFactorAuthentication.findMany()
    * ```
    */
  get multiFactorAuthentication(): Prisma.MultiFactorAuthenticationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.totp`: Exposes CRUD operations for the **Totp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Totps
    * const totps = await prisma.totp.findMany()
    * ```
    */
  get totp(): Prisma.TotpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restriction`: Exposes CRUD operations for the **Restriction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restrictions
    * const restrictions = await prisma.restriction.findMany()
    * ```
    */
  get restriction(): Prisma.RestrictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    ExternalAccount: 'ExternalAccount',
    EmailVerification: 'EmailVerification',
    PasswordReset: 'PasswordReset',
    MultiFactorAuthentication: 'MultiFactorAuthentication',
    Totp: 'Totp',
    Restriction: 'Restriction',
    Page: 'Page'
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
      modelProps: "user" | "externalAccount" | "emailVerification" | "passwordReset" | "multiFactorAuthentication" | "totp" | "restriction" | "page"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ExternalAccount: {
        payload: Prisma.$ExternalAccountPayload<ExtArgs>
        fields: Prisma.ExternalAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          findFirst: {
            args: Prisma.ExternalAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          findMany: {
            args: Prisma.ExternalAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>[]
          }
          create: {
            args: Prisma.ExternalAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          createMany: {
            args: Prisma.ExternalAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExternalAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>[]
          }
          delete: {
            args: Prisma.ExternalAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          update: {
            args: Prisma.ExternalAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          deleteMany: {
            args: Prisma.ExternalAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExternalAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>[]
          }
          upsert: {
            args: Prisma.ExternalAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalAccountPayload>
          }
          aggregate: {
            args: Prisma.ExternalAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternalAccount>
          }
          groupBy: {
            args: Prisma.ExternalAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternalAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalAccountCountArgs<ExtArgs>
            result: $Utils.Optional<ExternalAccountCountAggregateOutputType> | number
          }
        }
      }
      EmailVerification: {
        payload: Prisma.$EmailVerificationPayload<ExtArgs>
        fields: Prisma.EmailVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          update: {
            args: Prisma.EmailVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerification>
          }
          groupBy: {
            args: Prisma.EmailVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      MultiFactorAuthentication: {
        payload: Prisma.$MultiFactorAuthenticationPayload<ExtArgs>
        fields: Prisma.MultiFactorAuthenticationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MultiFactorAuthenticationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MultiFactorAuthenticationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>
          }
          findFirst: {
            args: Prisma.MultiFactorAuthenticationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MultiFactorAuthenticationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>
          }
          findMany: {
            args: Prisma.MultiFactorAuthenticationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>[]
          }
          create: {
            args: Prisma.MultiFactorAuthenticationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>
          }
          createMany: {
            args: Prisma.MultiFactorAuthenticationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MultiFactorAuthenticationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>[]
          }
          delete: {
            args: Prisma.MultiFactorAuthenticationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>
          }
          update: {
            args: Prisma.MultiFactorAuthenticationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>
          }
          deleteMany: {
            args: Prisma.MultiFactorAuthenticationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MultiFactorAuthenticationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MultiFactorAuthenticationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>[]
          }
          upsert: {
            args: Prisma.MultiFactorAuthenticationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiFactorAuthenticationPayload>
          }
          aggregate: {
            args: Prisma.MultiFactorAuthenticationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMultiFactorAuthentication>
          }
          groupBy: {
            args: Prisma.MultiFactorAuthenticationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MultiFactorAuthenticationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MultiFactorAuthenticationCountArgs<ExtArgs>
            result: $Utils.Optional<MultiFactorAuthenticationCountAggregateOutputType> | number
          }
        }
      }
      Totp: {
        payload: Prisma.$TotpPayload<ExtArgs>
        fields: Prisma.TotpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TotpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TotpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>
          }
          findFirst: {
            args: Prisma.TotpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TotpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>
          }
          findMany: {
            args: Prisma.TotpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>[]
          }
          create: {
            args: Prisma.TotpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>
          }
          createMany: {
            args: Prisma.TotpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TotpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>[]
          }
          delete: {
            args: Prisma.TotpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>
          }
          update: {
            args: Prisma.TotpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>
          }
          deleteMany: {
            args: Prisma.TotpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TotpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TotpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>[]
          }
          upsert: {
            args: Prisma.TotpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotpPayload>
          }
          aggregate: {
            args: Prisma.TotpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTotp>
          }
          groupBy: {
            args: Prisma.TotpGroupByArgs<ExtArgs>
            result: $Utils.Optional<TotpGroupByOutputType>[]
          }
          count: {
            args: Prisma.TotpCountArgs<ExtArgs>
            result: $Utils.Optional<TotpCountAggregateOutputType> | number
          }
        }
      }
      Restriction: {
        payload: Prisma.$RestrictionPayload<ExtArgs>
        fields: Prisma.RestrictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestrictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestrictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          findFirst: {
            args: Prisma.RestrictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestrictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          findMany: {
            args: Prisma.RestrictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>[]
          }
          create: {
            args: Prisma.RestrictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          createMany: {
            args: Prisma.RestrictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestrictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>[]
          }
          delete: {
            args: Prisma.RestrictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          update: {
            args: Prisma.RestrictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          deleteMany: {
            args: Prisma.RestrictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestrictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestrictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>[]
          }
          upsert: {
            args: Prisma.RestrictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          aggregate: {
            args: Prisma.RestrictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestriction>
          }
          groupBy: {
            args: Prisma.RestrictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestrictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestrictionCountArgs<ExtArgs>
            result: $Utils.Optional<RestrictionCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
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
    user?: UserOmit
    externalAccount?: ExternalAccountOmit
    emailVerification?: EmailVerificationOmit
    passwordReset?: PasswordResetOmit
    multiFactorAuthentication?: MultiFactorAuthenticationOmit
    totp?: TotpOmit
    restriction?: RestrictionOmit
    page?: PageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    externalAccounts: number
    restrictions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    externalAccounts?: boolean | UserCountOutputTypeCountExternalAccountsArgs
    restrictions?: boolean | UserCountOutputTypeCountRestrictionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExternalAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRestrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestrictionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    displayName: string | null
    avatar: string | null
    points: number | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    displayName: string | null
    avatar: string | null
    points: number | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    displayName: number
    avatar: number
    points: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    displayName?: true
    avatar?: true
    points?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    displayName?: true
    avatar?: true
    points?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    displayName?: true
    avatar?: true
    points?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    username: string
    displayName: string
    avatar: string | null
    points: number
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    points?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerification?: boolean | User$emailVerificationArgs<ExtArgs>
    passwordReset?: boolean | User$passwordResetArgs<ExtArgs>
    externalAccounts?: boolean | User$externalAccountsArgs<ExtArgs>
    mfa?: boolean | User$mfaArgs<ExtArgs>
    restrictions?: boolean | User$restrictionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    points?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    points?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    points?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "displayName" | "avatar" | "points" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailVerification?: boolean | User$emailVerificationArgs<ExtArgs>
    passwordReset?: boolean | User$passwordResetArgs<ExtArgs>
    externalAccounts?: boolean | User$externalAccountsArgs<ExtArgs>
    mfa?: boolean | User$mfaArgs<ExtArgs>
    restrictions?: boolean | User$restrictionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emailVerification: Prisma.$EmailVerificationPayload<ExtArgs> | null
      passwordReset: Prisma.$PasswordResetPayload<ExtArgs> | null
      externalAccounts: Prisma.$ExternalAccountPayload<ExtArgs>[]
      mfa: Prisma.$MultiFactorAuthenticationPayload<ExtArgs> | null
      restrictions: Prisma.$RestrictionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      username: string
      displayName: string
      avatar: string | null
      points: number
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emailVerification<T extends User$emailVerificationArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    passwordReset<T extends User$passwordResetArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    externalAccounts<T extends User$externalAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$externalAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mfa<T extends User$mfaArgs<ExtArgs> = {}>(args?: Subset<T, User$mfaArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    restrictions<T extends User$restrictionsArgs<ExtArgs> = {}>(args?: Subset<T, User$restrictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly points: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emailVerification
   */
  export type User$emailVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    where?: EmailVerificationWhereInput
  }

  /**
   * User.passwordReset
   */
  export type User$passwordResetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    where?: PasswordResetWhereInput
  }

  /**
   * User.externalAccounts
   */
  export type User$externalAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    where?: ExternalAccountWhereInput
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    cursor?: ExternalAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * User.mfa
   */
  export type User$mfaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    where?: MultiFactorAuthenticationWhereInput
  }

  /**
   * User.restrictions
   */
  export type User$restrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    where?: RestrictionWhereInput
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    cursor?: RestrictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ExternalAccount
   */

  export type AggregateExternalAccount = {
    _count: ExternalAccountCountAggregateOutputType | null
    _avg: ExternalAccountAvgAggregateOutputType | null
    _sum: ExternalAccountSumAggregateOutputType | null
    _min: ExternalAccountMinAggregateOutputType | null
    _max: ExternalAccountMaxAggregateOutputType | null
  }

  export type ExternalAccountAvgAggregateOutputType = {
    expiry: number | null
  }

  export type ExternalAccountSumAggregateOutputType = {
    expiry: number | null
  }

  export type ExternalAccountMinAggregateOutputType = {
    id: string | null
    provider: $Enums.AccountProvider | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    expiry: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExternalAccountMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.AccountProvider | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    expiry: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExternalAccountCountAggregateOutputType = {
    id: number
    provider: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    expiry: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExternalAccountAvgAggregateInputType = {
    expiry?: true
  }

  export type ExternalAccountSumAggregateInputType = {
    expiry?: true
  }

  export type ExternalAccountMinAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExternalAccountMaxAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExternalAccountCountAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExternalAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalAccount to aggregate.
     */
    where?: ExternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalAccounts to fetch.
     */
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalAccounts
    **/
    _count?: true | ExternalAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExternalAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExternalAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalAccountMaxAggregateInputType
  }

  export type GetExternalAccountAggregateType<T extends ExternalAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalAccount[P]>
      : GetScalarType<T[P], AggregateExternalAccount[P]>
  }




  export type ExternalAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalAccountWhereInput
    orderBy?: ExternalAccountOrderByWithAggregationInput | ExternalAccountOrderByWithAggregationInput[]
    by: ExternalAccountScalarFieldEnum[] | ExternalAccountScalarFieldEnum
    having?: ExternalAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalAccountCountAggregateInputType | true
    _avg?: ExternalAccountAvgAggregateInputType
    _sum?: ExternalAccountSumAggregateInputType
    _min?: ExternalAccountMinAggregateInputType
    _max?: ExternalAccountMaxAggregateInputType
  }

  export type ExternalAccountGroupByOutputType = {
    id: string
    provider: $Enums.AccountProvider
    providerAccountId: string
    refreshToken: string | null
    accessToken: string | null
    expiry: number | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ExternalAccountCountAggregateOutputType | null
    _avg: ExternalAccountAvgAggregateOutputType | null
    _sum: ExternalAccountSumAggregateOutputType | null
    _min: ExternalAccountMinAggregateOutputType | null
    _max: ExternalAccountMaxAggregateOutputType | null
  }

  type GetExternalAccountGroupByPayload<T extends ExternalAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalAccountGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalAccountGroupByOutputType[P]>
        }
      >
    >


  export type ExternalAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalAccount"]>

  export type ExternalAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalAccount"]>

  export type ExternalAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalAccount"]>

  export type ExternalAccountSelectScalar = {
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExternalAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "providerAccountId" | "refreshToken" | "accessToken" | "expiry" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["externalAccount"]>
  export type ExternalAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExternalAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExternalAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExternalAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.AccountProvider
      providerAccountId: string
      refreshToken: string | null
      accessToken: string | null
      expiry: number | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["externalAccount"]>
    composites: {}
  }

  type ExternalAccountGetPayload<S extends boolean | null | undefined | ExternalAccountDefaultArgs> = $Result.GetResult<Prisma.$ExternalAccountPayload, S>

  type ExternalAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExternalAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExternalAccountCountAggregateInputType | true
    }

  export interface ExternalAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalAccount'], meta: { name: 'ExternalAccount' } }
    /**
     * Find zero or one ExternalAccount that matches the filter.
     * @param {ExternalAccountFindUniqueArgs} args - Arguments to find a ExternalAccount
     * @example
     * // Get one ExternalAccount
     * const externalAccount = await prisma.externalAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternalAccountFindUniqueArgs>(args: SelectSubset<T, ExternalAccountFindUniqueArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExternalAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExternalAccountFindUniqueOrThrowArgs} args - Arguments to find a ExternalAccount
     * @example
     * // Get one ExternalAccount
     * const externalAccount = await prisma.externalAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternalAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternalAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountFindFirstArgs} args - Arguments to find a ExternalAccount
     * @example
     * // Get one ExternalAccount
     * const externalAccount = await prisma.externalAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternalAccountFindFirstArgs>(args?: SelectSubset<T, ExternalAccountFindFirstArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountFindFirstOrThrowArgs} args - Arguments to find a ExternalAccount
     * @example
     * // Get one ExternalAccount
     * const externalAccount = await prisma.externalAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternalAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternalAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExternalAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalAccounts
     * const externalAccounts = await prisma.externalAccount.findMany()
     * 
     * // Get first 10 ExternalAccounts
     * const externalAccounts = await prisma.externalAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalAccountWithIdOnly = await prisma.externalAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExternalAccountFindManyArgs>(args?: SelectSubset<T, ExternalAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExternalAccount.
     * @param {ExternalAccountCreateArgs} args - Arguments to create a ExternalAccount.
     * @example
     * // Create one ExternalAccount
     * const ExternalAccount = await prisma.externalAccount.create({
     *   data: {
     *     // ... data to create a ExternalAccount
     *   }
     * })
     * 
     */
    create<T extends ExternalAccountCreateArgs>(args: SelectSubset<T, ExternalAccountCreateArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExternalAccounts.
     * @param {ExternalAccountCreateManyArgs} args - Arguments to create many ExternalAccounts.
     * @example
     * // Create many ExternalAccounts
     * const externalAccount = await prisma.externalAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternalAccountCreateManyArgs>(args?: SelectSubset<T, ExternalAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExternalAccounts and returns the data saved in the database.
     * @param {ExternalAccountCreateManyAndReturnArgs} args - Arguments to create many ExternalAccounts.
     * @example
     * // Create many ExternalAccounts
     * const externalAccount = await prisma.externalAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExternalAccounts and only return the `id`
     * const externalAccountWithIdOnly = await prisma.externalAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExternalAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, ExternalAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExternalAccount.
     * @param {ExternalAccountDeleteArgs} args - Arguments to delete one ExternalAccount.
     * @example
     * // Delete one ExternalAccount
     * const ExternalAccount = await prisma.externalAccount.delete({
     *   where: {
     *     // ... filter to delete one ExternalAccount
     *   }
     * })
     * 
     */
    delete<T extends ExternalAccountDeleteArgs>(args: SelectSubset<T, ExternalAccountDeleteArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExternalAccount.
     * @param {ExternalAccountUpdateArgs} args - Arguments to update one ExternalAccount.
     * @example
     * // Update one ExternalAccount
     * const externalAccount = await prisma.externalAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternalAccountUpdateArgs>(args: SelectSubset<T, ExternalAccountUpdateArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExternalAccounts.
     * @param {ExternalAccountDeleteManyArgs} args - Arguments to filter ExternalAccounts to delete.
     * @example
     * // Delete a few ExternalAccounts
     * const { count } = await prisma.externalAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternalAccountDeleteManyArgs>(args?: SelectSubset<T, ExternalAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalAccounts
     * const externalAccount = await prisma.externalAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternalAccountUpdateManyArgs>(args: SelectSubset<T, ExternalAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalAccounts and returns the data updated in the database.
     * @param {ExternalAccountUpdateManyAndReturnArgs} args - Arguments to update many ExternalAccounts.
     * @example
     * // Update many ExternalAccounts
     * const externalAccount = await prisma.externalAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExternalAccounts and only return the `id`
     * const externalAccountWithIdOnly = await prisma.externalAccount.updateManyAndReturn({
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
     * 
     */
    updateManyAndReturn<T extends ExternalAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, ExternalAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExternalAccount.
     * @param {ExternalAccountUpsertArgs} args - Arguments to update or create a ExternalAccount.
     * @example
     * // Update or create a ExternalAccount
     * const externalAccount = await prisma.externalAccount.upsert({
     *   create: {
     *     // ... data to create a ExternalAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalAccount we want to update
     *   }
     * })
     */
    upsert<T extends ExternalAccountUpsertArgs>(args: SelectSubset<T, ExternalAccountUpsertArgs<ExtArgs>>): Prisma__ExternalAccountClient<$Result.GetResult<Prisma.$ExternalAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExternalAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountCountArgs} args - Arguments to filter ExternalAccounts to count.
     * @example
     * // Count the number of ExternalAccounts
     * const count = await prisma.externalAccount.count({
     *   where: {
     *     // ... the filter for the ExternalAccounts we want to count
     *   }
     * })
    **/
    count<T extends ExternalAccountCountArgs>(
      args?: Subset<T, ExternalAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalAccountAggregateArgs>(args: Subset<T, ExternalAccountAggregateArgs>): Prisma.PrismaPromise<GetExternalAccountAggregateType<T>>

    /**
     * Group by ExternalAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalAccountGroupByArgs} args - Group by arguments.
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
      T extends ExternalAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalAccountGroupByArgs['orderBy'] }
        : { orderBy?: ExternalAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExternalAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalAccount model
   */
  readonly fields: ExternalAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExternalAccount model
   */
  interface ExternalAccountFieldRefs {
    readonly id: FieldRef<"ExternalAccount", 'String'>
    readonly provider: FieldRef<"ExternalAccount", 'AccountProvider'>
    readonly providerAccountId: FieldRef<"ExternalAccount", 'String'>
    readonly refreshToken: FieldRef<"ExternalAccount", 'String'>
    readonly accessToken: FieldRef<"ExternalAccount", 'String'>
    readonly expiry: FieldRef<"ExternalAccount", 'Int'>
    readonly userId: FieldRef<"ExternalAccount", 'String'>
    readonly createdAt: FieldRef<"ExternalAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"ExternalAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExternalAccount findUnique
   */
  export type ExternalAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccount to fetch.
     */
    where: ExternalAccountWhereUniqueInput
  }

  /**
   * ExternalAccount findUniqueOrThrow
   */
  export type ExternalAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccount to fetch.
     */
    where: ExternalAccountWhereUniqueInput
  }

  /**
   * ExternalAccount findFirst
   */
  export type ExternalAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccount to fetch.
     */
    where?: ExternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalAccounts to fetch.
     */
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalAccounts.
     */
    cursor?: ExternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalAccounts.
     */
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * ExternalAccount findFirstOrThrow
   */
  export type ExternalAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccount to fetch.
     */
    where?: ExternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalAccounts to fetch.
     */
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalAccounts.
     */
    cursor?: ExternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalAccounts.
     */
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * ExternalAccount findMany
   */
  export type ExternalAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter, which ExternalAccounts to fetch.
     */
    where?: ExternalAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalAccounts to fetch.
     */
    orderBy?: ExternalAccountOrderByWithRelationInput | ExternalAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalAccounts.
     */
    cursor?: ExternalAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalAccounts.
     */
    skip?: number
    distinct?: ExternalAccountScalarFieldEnum | ExternalAccountScalarFieldEnum[]
  }

  /**
   * ExternalAccount create
   */
  export type ExternalAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalAccount.
     */
    data: XOR<ExternalAccountCreateInput, ExternalAccountUncheckedCreateInput>
  }

  /**
   * ExternalAccount createMany
   */
  export type ExternalAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalAccounts.
     */
    data: ExternalAccountCreateManyInput | ExternalAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalAccount createManyAndReturn
   */
  export type ExternalAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * The data used to create many ExternalAccounts.
     */
    data: ExternalAccountCreateManyInput | ExternalAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExternalAccount update
   */
  export type ExternalAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalAccount.
     */
    data: XOR<ExternalAccountUpdateInput, ExternalAccountUncheckedUpdateInput>
    /**
     * Choose, which ExternalAccount to update.
     */
    where: ExternalAccountWhereUniqueInput
  }

  /**
   * ExternalAccount updateMany
   */
  export type ExternalAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalAccounts.
     */
    data: XOR<ExternalAccountUpdateManyMutationInput, ExternalAccountUncheckedUpdateManyInput>
    /**
     * Filter which ExternalAccounts to update
     */
    where?: ExternalAccountWhereInput
    /**
     * Limit how many ExternalAccounts to update.
     */
    limit?: number
  }

  /**
   * ExternalAccount updateManyAndReturn
   */
  export type ExternalAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * The data used to update ExternalAccounts.
     */
    data: XOR<ExternalAccountUpdateManyMutationInput, ExternalAccountUncheckedUpdateManyInput>
    /**
     * Filter which ExternalAccounts to update
     */
    where?: ExternalAccountWhereInput
    /**
     * Limit how many ExternalAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExternalAccount upsert
   */
  export type ExternalAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalAccount to update in case it exists.
     */
    where: ExternalAccountWhereUniqueInput
    /**
     * In case the ExternalAccount found by the `where` argument doesn't exist, create a new ExternalAccount with this data.
     */
    create: XOR<ExternalAccountCreateInput, ExternalAccountUncheckedCreateInput>
    /**
     * In case the ExternalAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalAccountUpdateInput, ExternalAccountUncheckedUpdateInput>
  }

  /**
   * ExternalAccount delete
   */
  export type ExternalAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
    /**
     * Filter which ExternalAccount to delete.
     */
    where: ExternalAccountWhereUniqueInput
  }

  /**
   * ExternalAccount deleteMany
   */
  export type ExternalAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalAccounts to delete
     */
    where?: ExternalAccountWhereInput
    /**
     * Limit how many ExternalAccounts to delete.
     */
    limit?: number
  }

  /**
   * ExternalAccount without action
   */
  export type ExternalAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalAccount
     */
    select?: ExternalAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalAccount
     */
    omit?: ExternalAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalAccountInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerification
   */

  export type AggregateEmailVerification = {
    _count: EmailVerificationCountAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }

  export type EmailVerificationMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiry: Date | null
    status: $Enums.EmailVerificationStatus | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailVerificationMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiry: Date | null
    status: $Enums.EmailVerificationStatus | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailVerificationCountAggregateOutputType = {
    id: number
    token: number
    expiry: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailVerificationMinAggregateInputType = {
    id?: true
    token?: true
    expiry?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailVerificationMaxAggregateInputType = {
    id?: true
    token?: true
    expiry?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailVerificationCountAggregateInputType = {
    id?: true
    token?: true
    expiry?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerification to aggregate.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerifications
    **/
    _count?: true | EmailVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationMaxAggregateInputType
  }

  export type GetEmailVerificationAggregateType<T extends EmailVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerification[P]>
      : GetScalarType<T[P], AggregateEmailVerification[P]>
  }




  export type EmailVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithAggregationInput | EmailVerificationOrderByWithAggregationInput[]
    by: EmailVerificationScalarFieldEnum[] | EmailVerificationScalarFieldEnum
    having?: EmailVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationCountAggregateInputType | true
    _min?: EmailVerificationMinAggregateInputType
    _max?: EmailVerificationMaxAggregateInputType
  }

  export type EmailVerificationGroupByOutputType = {
    id: string
    token: string
    expiry: Date | null
    status: $Enums.EmailVerificationStatus
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: EmailVerificationCountAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }

  type GetEmailVerificationGroupByPayload<T extends EmailVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiry?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiry?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiry?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectScalar = {
    id?: boolean
    token?: boolean
    expiry?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiry" | "status" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["emailVerification"]>
  export type EmailVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiry: Date | null
      status: $Enums.EmailVerificationStatus
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailVerification"]>
    composites: {}
  }

  type EmailVerificationGetPayload<S extends boolean | null | undefined | EmailVerificationDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationPayload, S>

  type EmailVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationCountAggregateInputType | true
    }

  export interface EmailVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerification'], meta: { name: 'EmailVerification' } }
    /**
     * Find zero or one EmailVerification that matches the filter.
     * @param {EmailVerificationFindUniqueArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationFindUniqueArgs>(args: SelectSubset<T, EmailVerificationFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationFindUniqueOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationFindFirstArgs>(args?: SelectSubset<T, EmailVerificationFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany()
     * 
     * // Get first 10 EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationFindManyArgs>(args?: SelectSubset<T, EmailVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerification.
     * @param {EmailVerificationCreateArgs} args - Arguments to create a EmailVerification.
     * @example
     * // Create one EmailVerification
     * const EmailVerification = await prisma.emailVerification.create({
     *   data: {
     *     // ... data to create a EmailVerification
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationCreateArgs>(args: SelectSubset<T, EmailVerificationCreateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerifications.
     * @param {EmailVerificationCreateManyArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationCreateManyArgs>(args?: SelectSubset<T, EmailVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerifications and returns the data saved in the database.
     * @param {EmailVerificationCreateManyAndReturnArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerification.
     * @param {EmailVerificationDeleteArgs} args - Arguments to delete one EmailVerification.
     * @example
     * // Delete one EmailVerification
     * const EmailVerification = await prisma.emailVerification.delete({
     *   where: {
     *     // ... filter to delete one EmailVerification
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationDeleteArgs>(args: SelectSubset<T, EmailVerificationDeleteArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerification.
     * @param {EmailVerificationUpdateArgs} args - Arguments to update one EmailVerification.
     * @example
     * // Update one EmailVerification
     * const emailVerification = await prisma.emailVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationUpdateArgs>(args: SelectSubset<T, EmailVerificationUpdateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerifications.
     * @param {EmailVerificationDeleteManyArgs} args - Arguments to filter EmailVerifications to delete.
     * @example
     * // Delete a few EmailVerifications
     * const { count } = await prisma.emailVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationUpdateManyArgs>(args: SelectSubset<T, EmailVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications and returns the data updated in the database.
     * @param {EmailVerificationUpdateManyAndReturnArgs} args - Arguments to update many EmailVerifications.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.updateManyAndReturn({
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
     * 
     */
    updateManyAndReturn<T extends EmailVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerification.
     * @param {EmailVerificationUpsertArgs} args - Arguments to update or create a EmailVerification.
     * @example
     * // Update or create a EmailVerification
     * const emailVerification = await prisma.emailVerification.upsert({
     *   create: {
     *     // ... data to create a EmailVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerification we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationUpsertArgs>(args: SelectSubset<T, EmailVerificationUpsertArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCountArgs} args - Arguments to filter EmailVerifications to count.
     * @example
     * // Count the number of EmailVerifications
     * const count = await prisma.emailVerification.count({
     *   where: {
     *     // ... the filter for the EmailVerifications we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationCountArgs>(
      args?: Subset<T, EmailVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationAggregateArgs>(args: Subset<T, EmailVerificationAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationAggregateType<T>>

    /**
     * Group by EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerification model
   */
  readonly fields: EmailVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailVerification model
   */
  interface EmailVerificationFieldRefs {
    readonly id: FieldRef<"EmailVerification", 'String'>
    readonly token: FieldRef<"EmailVerification", 'String'>
    readonly expiry: FieldRef<"EmailVerification", 'DateTime'>
    readonly status: FieldRef<"EmailVerification", 'EmailVerificationStatus'>
    readonly userId: FieldRef<"EmailVerification", 'String'>
    readonly createdAt: FieldRef<"EmailVerification", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerification findUnique
   */
  export type EmailVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification findUniqueOrThrow
   */
  export type EmailVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification findFirst
   */
  export type EmailVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification findFirstOrThrow
   */
  export type EmailVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification findMany
   */
  export type EmailVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification create
   */
  export type EmailVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerification.
     */
    data: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
  }

  /**
   * EmailVerification createMany
   */
  export type EmailVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerification createManyAndReturn
   */
  export type EmailVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerification update
   */
  export type EmailVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerification.
     */
    data: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
    /**
     * Choose, which EmailVerification to update.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification updateMany
   */
  export type EmailVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number
  }

  /**
   * EmailVerification updateManyAndReturn
   */
  export type EmailVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerification upsert
   */
  export type EmailVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerification to update in case it exists.
     */
    where: EmailVerificationWhereUniqueInput
    /**
     * In case the EmailVerification found by the `where` argument doesn't exist, create a new EmailVerification with this data.
     */
    create: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
    /**
     * In case the EmailVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
  }

  /**
   * EmailVerification delete
   */
  export type EmailVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter which EmailVerification to delete.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification deleteMany
   */
  export type EmailVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerifications to delete
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to delete.
     */
    limit?: number
  }

  /**
   * EmailVerification without action
   */
  export type EmailVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiry: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiry: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    token: number
    expiry: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PasswordResetMinAggregateInputType = {
    id?: true
    token?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    token?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    token?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: string
    token: string
    expiry: Date
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectScalar = {
    id?: boolean
    token?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiry" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["passwordReset"]>
  export type PasswordResetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiry: Date
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.updateManyAndReturn({
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
     * 
     */
    updateManyAndReturn<T extends PasswordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordReset model
   */
  interface PasswordResetFieldRefs {
    readonly id: FieldRef<"PasswordReset", 'String'>
    readonly token: FieldRef<"PasswordReset", 'String'>
    readonly expiry: FieldRef<"PasswordReset", 'DateTime'>
    readonly userId: FieldRef<"PasswordReset", 'String'>
    readonly createdAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly updatedAt: FieldRef<"PasswordReset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset createManyAndReturn
   */
  export type PasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset updateManyAndReturn
   */
  export type PasswordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
  }


  /**
   * Model MultiFactorAuthentication
   */

  export type AggregateMultiFactorAuthentication = {
    _count: MultiFactorAuthenticationCountAggregateOutputType | null
    _min: MultiFactorAuthenticationMinAggregateOutputType | null
    _max: MultiFactorAuthenticationMaxAggregateOutputType | null
  }

  export type MultiFactorAuthenticationMinAggregateOutputType = {
    id: string | null
    totpId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MultiFactorAuthenticationMaxAggregateOutputType = {
    id: string | null
    totpId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MultiFactorAuthenticationCountAggregateOutputType = {
    id: number
    recoveryCodes: number
    totpId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MultiFactorAuthenticationMinAggregateInputType = {
    id?: true
    totpId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MultiFactorAuthenticationMaxAggregateInputType = {
    id?: true
    totpId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MultiFactorAuthenticationCountAggregateInputType = {
    id?: true
    recoveryCodes?: true
    totpId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MultiFactorAuthenticationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MultiFactorAuthentication to aggregate.
     */
    where?: MultiFactorAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiFactorAuthentications to fetch.
     */
    orderBy?: MultiFactorAuthenticationOrderByWithRelationInput | MultiFactorAuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MultiFactorAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiFactorAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiFactorAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MultiFactorAuthentications
    **/
    _count?: true | MultiFactorAuthenticationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MultiFactorAuthenticationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MultiFactorAuthenticationMaxAggregateInputType
  }

  export type GetMultiFactorAuthenticationAggregateType<T extends MultiFactorAuthenticationAggregateArgs> = {
        [P in keyof T & keyof AggregateMultiFactorAuthentication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMultiFactorAuthentication[P]>
      : GetScalarType<T[P], AggregateMultiFactorAuthentication[P]>
  }




  export type MultiFactorAuthenticationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MultiFactorAuthenticationWhereInput
    orderBy?: MultiFactorAuthenticationOrderByWithAggregationInput | MultiFactorAuthenticationOrderByWithAggregationInput[]
    by: MultiFactorAuthenticationScalarFieldEnum[] | MultiFactorAuthenticationScalarFieldEnum
    having?: MultiFactorAuthenticationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MultiFactorAuthenticationCountAggregateInputType | true
    _min?: MultiFactorAuthenticationMinAggregateInputType
    _max?: MultiFactorAuthenticationMaxAggregateInputType
  }

  export type MultiFactorAuthenticationGroupByOutputType = {
    id: string
    recoveryCodes: string[]
    totpId: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: MultiFactorAuthenticationCountAggregateOutputType | null
    _min: MultiFactorAuthenticationMinAggregateOutputType | null
    _max: MultiFactorAuthenticationMaxAggregateOutputType | null
  }

  type GetMultiFactorAuthenticationGroupByPayload<T extends MultiFactorAuthenticationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MultiFactorAuthenticationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MultiFactorAuthenticationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MultiFactorAuthenticationGroupByOutputType[P]>
            : GetScalarType<T[P], MultiFactorAuthenticationGroupByOutputType[P]>
        }
      >
    >


  export type MultiFactorAuthenticationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCodes?: boolean
    totpId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totp?: boolean | MultiFactorAuthentication$totpArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["multiFactorAuthentication"]>

  export type MultiFactorAuthenticationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCodes?: boolean
    totpId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totp?: boolean | MultiFactorAuthentication$totpArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["multiFactorAuthentication"]>

  export type MultiFactorAuthenticationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCodes?: boolean
    totpId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    totp?: boolean | MultiFactorAuthentication$totpArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["multiFactorAuthentication"]>

  export type MultiFactorAuthenticationSelectScalar = {
    id?: boolean
    recoveryCodes?: boolean
    totpId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MultiFactorAuthenticationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recoveryCodes" | "totpId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["multiFactorAuthentication"]>
  export type MultiFactorAuthenticationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    totp?: boolean | MultiFactorAuthentication$totpArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MultiFactorAuthenticationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    totp?: boolean | MultiFactorAuthentication$totpArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MultiFactorAuthenticationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    totp?: boolean | MultiFactorAuthentication$totpArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MultiFactorAuthenticationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MultiFactorAuthentication"
    objects: {
      totp: Prisma.$TotpPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recoveryCodes: string[]
      totpId: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["multiFactorAuthentication"]>
    composites: {}
  }

  type MultiFactorAuthenticationGetPayload<S extends boolean | null | undefined | MultiFactorAuthenticationDefaultArgs> = $Result.GetResult<Prisma.$MultiFactorAuthenticationPayload, S>

  type MultiFactorAuthenticationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MultiFactorAuthenticationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MultiFactorAuthenticationCountAggregateInputType | true
    }

  export interface MultiFactorAuthenticationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MultiFactorAuthentication'], meta: { name: 'MultiFactorAuthentication' } }
    /**
     * Find zero or one MultiFactorAuthentication that matches the filter.
     * @param {MultiFactorAuthenticationFindUniqueArgs} args - Arguments to find a MultiFactorAuthentication
     * @example
     * // Get one MultiFactorAuthentication
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MultiFactorAuthenticationFindUniqueArgs>(args: SelectSubset<T, MultiFactorAuthenticationFindUniqueArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MultiFactorAuthentication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MultiFactorAuthenticationFindUniqueOrThrowArgs} args - Arguments to find a MultiFactorAuthentication
     * @example
     * // Get one MultiFactorAuthentication
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MultiFactorAuthenticationFindUniqueOrThrowArgs>(args: SelectSubset<T, MultiFactorAuthenticationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MultiFactorAuthentication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiFactorAuthenticationFindFirstArgs} args - Arguments to find a MultiFactorAuthentication
     * @example
     * // Get one MultiFactorAuthentication
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MultiFactorAuthenticationFindFirstArgs>(args?: SelectSubset<T, MultiFactorAuthenticationFindFirstArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MultiFactorAuthentication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiFactorAuthenticationFindFirstOrThrowArgs} args - Arguments to find a MultiFactorAuthentication
     * @example
     * // Get one MultiFactorAuthentication
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MultiFactorAuthenticationFindFirstOrThrowArgs>(args?: SelectSubset<T, MultiFactorAuthenticationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MultiFactorAuthentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiFactorAuthenticationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MultiFactorAuthentications
     * const multiFactorAuthentications = await prisma.multiFactorAuthentication.findMany()
     * 
     * // Get first 10 MultiFactorAuthentications
     * const multiFactorAuthentications = await prisma.multiFactorAuthentication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const multiFactorAuthenticationWithIdOnly = await prisma.multiFactorAuthentication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MultiFactorAuthenticationFindManyArgs>(args?: SelectSubset<T, MultiFactorAuthenticationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MultiFactorAuthentication.
     * @param {MultiFactorAuthenticationCreateArgs} args - Arguments to create a MultiFactorAuthentication.
     * @example
     * // Create one MultiFactorAuthentication
     * const MultiFactorAuthentication = await prisma.multiFactorAuthentication.create({
     *   data: {
     *     // ... data to create a MultiFactorAuthentication
     *   }
     * })
     * 
     */
    create<T extends MultiFactorAuthenticationCreateArgs>(args: SelectSubset<T, MultiFactorAuthenticationCreateArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MultiFactorAuthentications.
     * @param {MultiFactorAuthenticationCreateManyArgs} args - Arguments to create many MultiFactorAuthentications.
     * @example
     * // Create many MultiFactorAuthentications
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MultiFactorAuthenticationCreateManyArgs>(args?: SelectSubset<T, MultiFactorAuthenticationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MultiFactorAuthentications and returns the data saved in the database.
     * @param {MultiFactorAuthenticationCreateManyAndReturnArgs} args - Arguments to create many MultiFactorAuthentications.
     * @example
     * // Create many MultiFactorAuthentications
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MultiFactorAuthentications and only return the `id`
     * const multiFactorAuthenticationWithIdOnly = await prisma.multiFactorAuthentication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MultiFactorAuthenticationCreateManyAndReturnArgs>(args?: SelectSubset<T, MultiFactorAuthenticationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MultiFactorAuthentication.
     * @param {MultiFactorAuthenticationDeleteArgs} args - Arguments to delete one MultiFactorAuthentication.
     * @example
     * // Delete one MultiFactorAuthentication
     * const MultiFactorAuthentication = await prisma.multiFactorAuthentication.delete({
     *   where: {
     *     // ... filter to delete one MultiFactorAuthentication
     *   }
     * })
     * 
     */
    delete<T extends MultiFactorAuthenticationDeleteArgs>(args: SelectSubset<T, MultiFactorAuthenticationDeleteArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MultiFactorAuthentication.
     * @param {MultiFactorAuthenticationUpdateArgs} args - Arguments to update one MultiFactorAuthentication.
     * @example
     * // Update one MultiFactorAuthentication
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MultiFactorAuthenticationUpdateArgs>(args: SelectSubset<T, MultiFactorAuthenticationUpdateArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MultiFactorAuthentications.
     * @param {MultiFactorAuthenticationDeleteManyArgs} args - Arguments to filter MultiFactorAuthentications to delete.
     * @example
     * // Delete a few MultiFactorAuthentications
     * const { count } = await prisma.multiFactorAuthentication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MultiFactorAuthenticationDeleteManyArgs>(args?: SelectSubset<T, MultiFactorAuthenticationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MultiFactorAuthentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiFactorAuthenticationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MultiFactorAuthentications
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MultiFactorAuthenticationUpdateManyArgs>(args: SelectSubset<T, MultiFactorAuthenticationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MultiFactorAuthentications and returns the data updated in the database.
     * @param {MultiFactorAuthenticationUpdateManyAndReturnArgs} args - Arguments to update many MultiFactorAuthentications.
     * @example
     * // Update many MultiFactorAuthentications
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MultiFactorAuthentications and only return the `id`
     * const multiFactorAuthenticationWithIdOnly = await prisma.multiFactorAuthentication.updateManyAndReturn({
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
     * 
     */
    updateManyAndReturn<T extends MultiFactorAuthenticationUpdateManyAndReturnArgs>(args: SelectSubset<T, MultiFactorAuthenticationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MultiFactorAuthentication.
     * @param {MultiFactorAuthenticationUpsertArgs} args - Arguments to update or create a MultiFactorAuthentication.
     * @example
     * // Update or create a MultiFactorAuthentication
     * const multiFactorAuthentication = await prisma.multiFactorAuthentication.upsert({
     *   create: {
     *     // ... data to create a MultiFactorAuthentication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MultiFactorAuthentication we want to update
     *   }
     * })
     */
    upsert<T extends MultiFactorAuthenticationUpsertArgs>(args: SelectSubset<T, MultiFactorAuthenticationUpsertArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MultiFactorAuthentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiFactorAuthenticationCountArgs} args - Arguments to filter MultiFactorAuthentications to count.
     * @example
     * // Count the number of MultiFactorAuthentications
     * const count = await prisma.multiFactorAuthentication.count({
     *   where: {
     *     // ... the filter for the MultiFactorAuthentications we want to count
     *   }
     * })
    **/
    count<T extends MultiFactorAuthenticationCountArgs>(
      args?: Subset<T, MultiFactorAuthenticationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MultiFactorAuthenticationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MultiFactorAuthentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiFactorAuthenticationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MultiFactorAuthenticationAggregateArgs>(args: Subset<T, MultiFactorAuthenticationAggregateArgs>): Prisma.PrismaPromise<GetMultiFactorAuthenticationAggregateType<T>>

    /**
     * Group by MultiFactorAuthentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiFactorAuthenticationGroupByArgs} args - Group by arguments.
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
      T extends MultiFactorAuthenticationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MultiFactorAuthenticationGroupByArgs['orderBy'] }
        : { orderBy?: MultiFactorAuthenticationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MultiFactorAuthenticationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMultiFactorAuthenticationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MultiFactorAuthentication model
   */
  readonly fields: MultiFactorAuthenticationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MultiFactorAuthentication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MultiFactorAuthenticationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    totp<T extends MultiFactorAuthentication$totpArgs<ExtArgs> = {}>(args?: Subset<T, MultiFactorAuthentication$totpArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MultiFactorAuthentication model
   */
  interface MultiFactorAuthenticationFieldRefs {
    readonly id: FieldRef<"MultiFactorAuthentication", 'String'>
    readonly recoveryCodes: FieldRef<"MultiFactorAuthentication", 'String[]'>
    readonly totpId: FieldRef<"MultiFactorAuthentication", 'String'>
    readonly userId: FieldRef<"MultiFactorAuthentication", 'String'>
    readonly createdAt: FieldRef<"MultiFactorAuthentication", 'DateTime'>
    readonly updatedAt: FieldRef<"MultiFactorAuthentication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MultiFactorAuthentication findUnique
   */
  export type MultiFactorAuthenticationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which MultiFactorAuthentication to fetch.
     */
    where: MultiFactorAuthenticationWhereUniqueInput
  }

  /**
   * MultiFactorAuthentication findUniqueOrThrow
   */
  export type MultiFactorAuthenticationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which MultiFactorAuthentication to fetch.
     */
    where: MultiFactorAuthenticationWhereUniqueInput
  }

  /**
   * MultiFactorAuthentication findFirst
   */
  export type MultiFactorAuthenticationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which MultiFactorAuthentication to fetch.
     */
    where?: MultiFactorAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiFactorAuthentications to fetch.
     */
    orderBy?: MultiFactorAuthenticationOrderByWithRelationInput | MultiFactorAuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MultiFactorAuthentications.
     */
    cursor?: MultiFactorAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiFactorAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiFactorAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MultiFactorAuthentications.
     */
    distinct?: MultiFactorAuthenticationScalarFieldEnum | MultiFactorAuthenticationScalarFieldEnum[]
  }

  /**
   * MultiFactorAuthentication findFirstOrThrow
   */
  export type MultiFactorAuthenticationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which MultiFactorAuthentication to fetch.
     */
    where?: MultiFactorAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiFactorAuthentications to fetch.
     */
    orderBy?: MultiFactorAuthenticationOrderByWithRelationInput | MultiFactorAuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MultiFactorAuthentications.
     */
    cursor?: MultiFactorAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiFactorAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiFactorAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MultiFactorAuthentications.
     */
    distinct?: MultiFactorAuthenticationScalarFieldEnum | MultiFactorAuthenticationScalarFieldEnum[]
  }

  /**
   * MultiFactorAuthentication findMany
   */
  export type MultiFactorAuthenticationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which MultiFactorAuthentications to fetch.
     */
    where?: MultiFactorAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiFactorAuthentications to fetch.
     */
    orderBy?: MultiFactorAuthenticationOrderByWithRelationInput | MultiFactorAuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MultiFactorAuthentications.
     */
    cursor?: MultiFactorAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiFactorAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiFactorAuthentications.
     */
    skip?: number
    distinct?: MultiFactorAuthenticationScalarFieldEnum | MultiFactorAuthenticationScalarFieldEnum[]
  }

  /**
   * MultiFactorAuthentication create
   */
  export type MultiFactorAuthenticationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * The data needed to create a MultiFactorAuthentication.
     */
    data: XOR<MultiFactorAuthenticationCreateInput, MultiFactorAuthenticationUncheckedCreateInput>
  }

  /**
   * MultiFactorAuthentication createMany
   */
  export type MultiFactorAuthenticationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MultiFactorAuthentications.
     */
    data: MultiFactorAuthenticationCreateManyInput | MultiFactorAuthenticationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MultiFactorAuthentication createManyAndReturn
   */
  export type MultiFactorAuthenticationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * The data used to create many MultiFactorAuthentications.
     */
    data: MultiFactorAuthenticationCreateManyInput | MultiFactorAuthenticationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MultiFactorAuthentication update
   */
  export type MultiFactorAuthenticationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * The data needed to update a MultiFactorAuthentication.
     */
    data: XOR<MultiFactorAuthenticationUpdateInput, MultiFactorAuthenticationUncheckedUpdateInput>
    /**
     * Choose, which MultiFactorAuthentication to update.
     */
    where: MultiFactorAuthenticationWhereUniqueInput
  }

  /**
   * MultiFactorAuthentication updateMany
   */
  export type MultiFactorAuthenticationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MultiFactorAuthentications.
     */
    data: XOR<MultiFactorAuthenticationUpdateManyMutationInput, MultiFactorAuthenticationUncheckedUpdateManyInput>
    /**
     * Filter which MultiFactorAuthentications to update
     */
    where?: MultiFactorAuthenticationWhereInput
    /**
     * Limit how many MultiFactorAuthentications to update.
     */
    limit?: number
  }

  /**
   * MultiFactorAuthentication updateManyAndReturn
   */
  export type MultiFactorAuthenticationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * The data used to update MultiFactorAuthentications.
     */
    data: XOR<MultiFactorAuthenticationUpdateManyMutationInput, MultiFactorAuthenticationUncheckedUpdateManyInput>
    /**
     * Filter which MultiFactorAuthentications to update
     */
    where?: MultiFactorAuthenticationWhereInput
    /**
     * Limit how many MultiFactorAuthentications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MultiFactorAuthentication upsert
   */
  export type MultiFactorAuthenticationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * The filter to search for the MultiFactorAuthentication to update in case it exists.
     */
    where: MultiFactorAuthenticationWhereUniqueInput
    /**
     * In case the MultiFactorAuthentication found by the `where` argument doesn't exist, create a new MultiFactorAuthentication with this data.
     */
    create: XOR<MultiFactorAuthenticationCreateInput, MultiFactorAuthenticationUncheckedCreateInput>
    /**
     * In case the MultiFactorAuthentication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MultiFactorAuthenticationUpdateInput, MultiFactorAuthenticationUncheckedUpdateInput>
  }

  /**
   * MultiFactorAuthentication delete
   */
  export type MultiFactorAuthenticationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    /**
     * Filter which MultiFactorAuthentication to delete.
     */
    where: MultiFactorAuthenticationWhereUniqueInput
  }

  /**
   * MultiFactorAuthentication deleteMany
   */
  export type MultiFactorAuthenticationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MultiFactorAuthentications to delete
     */
    where?: MultiFactorAuthenticationWhereInput
    /**
     * Limit how many MultiFactorAuthentications to delete.
     */
    limit?: number
  }

  /**
   * MultiFactorAuthentication.totp
   */
  export type MultiFactorAuthentication$totpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    where?: TotpWhereInput
  }

  /**
   * MultiFactorAuthentication without action
   */
  export type MultiFactorAuthenticationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
  }


  /**
   * Model Totp
   */

  export type AggregateTotp = {
    _count: TotpCountAggregateOutputType | null
    _min: TotpMinAggregateOutputType | null
    _max: TotpMaxAggregateOutputType | null
  }

  export type TotpMinAggregateOutputType = {
    id: string | null
    status: $Enums.TotpStatus | null
    secret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TotpMaxAggregateOutputType = {
    id: string | null
    status: $Enums.TotpStatus | null
    secret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TotpCountAggregateOutputType = {
    id: number
    status: number
    secret: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TotpMinAggregateInputType = {
    id?: true
    status?: true
    secret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TotpMaxAggregateInputType = {
    id?: true
    status?: true
    secret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TotpCountAggregateInputType = {
    id?: true
    status?: true
    secret?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TotpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Totp to aggregate.
     */
    where?: TotpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Totps to fetch.
     */
    orderBy?: TotpOrderByWithRelationInput | TotpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TotpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Totps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Totps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Totps
    **/
    _count?: true | TotpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TotpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TotpMaxAggregateInputType
  }

  export type GetTotpAggregateType<T extends TotpAggregateArgs> = {
        [P in keyof T & keyof AggregateTotp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTotp[P]>
      : GetScalarType<T[P], AggregateTotp[P]>
  }




  export type TotpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TotpWhereInput
    orderBy?: TotpOrderByWithAggregationInput | TotpOrderByWithAggregationInput[]
    by: TotpScalarFieldEnum[] | TotpScalarFieldEnum
    having?: TotpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TotpCountAggregateInputType | true
    _min?: TotpMinAggregateInputType
    _max?: TotpMaxAggregateInputType
  }

  export type TotpGroupByOutputType = {
    id: string
    status: $Enums.TotpStatus
    secret: string | null
    createdAt: Date
    updatedAt: Date
    _count: TotpCountAggregateOutputType | null
    _min: TotpMinAggregateOutputType | null
    _max: TotpMaxAggregateOutputType | null
  }

  type GetTotpGroupByPayload<T extends TotpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TotpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TotpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TotpGroupByOutputType[P]>
            : GetScalarType<T[P], TotpGroupByOutputType[P]>
        }
      >
    >


  export type TotpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    secret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mfa?: boolean | Totp$mfaArgs<ExtArgs>
  }, ExtArgs["result"]["totp"]>

  export type TotpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    secret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["totp"]>

  export type TotpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    secret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["totp"]>

  export type TotpSelectScalar = {
    id?: boolean
    status?: boolean
    secret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TotpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "secret" | "createdAt" | "updatedAt", ExtArgs["result"]["totp"]>
  export type TotpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mfa?: boolean | Totp$mfaArgs<ExtArgs>
  }
  export type TotpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TotpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TotpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Totp"
    objects: {
      mfa: Prisma.$MultiFactorAuthenticationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.TotpStatus
      secret: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["totp"]>
    composites: {}
  }

  type TotpGetPayload<S extends boolean | null | undefined | TotpDefaultArgs> = $Result.GetResult<Prisma.$TotpPayload, S>

  type TotpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TotpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TotpCountAggregateInputType | true
    }

  export interface TotpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Totp'], meta: { name: 'Totp' } }
    /**
     * Find zero or one Totp that matches the filter.
     * @param {TotpFindUniqueArgs} args - Arguments to find a Totp
     * @example
     * // Get one Totp
     * const totp = await prisma.totp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TotpFindUniqueArgs>(args: SelectSubset<T, TotpFindUniqueArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Totp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TotpFindUniqueOrThrowArgs} args - Arguments to find a Totp
     * @example
     * // Get one Totp
     * const totp = await prisma.totp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TotpFindUniqueOrThrowArgs>(args: SelectSubset<T, TotpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Totp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotpFindFirstArgs} args - Arguments to find a Totp
     * @example
     * // Get one Totp
     * const totp = await prisma.totp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TotpFindFirstArgs>(args?: SelectSubset<T, TotpFindFirstArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Totp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotpFindFirstOrThrowArgs} args - Arguments to find a Totp
     * @example
     * // Get one Totp
     * const totp = await prisma.totp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TotpFindFirstOrThrowArgs>(args?: SelectSubset<T, TotpFindFirstOrThrowArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Totps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Totps
     * const totps = await prisma.totp.findMany()
     * 
     * // Get first 10 Totps
     * const totps = await prisma.totp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const totpWithIdOnly = await prisma.totp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TotpFindManyArgs>(args?: SelectSubset<T, TotpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Totp.
     * @param {TotpCreateArgs} args - Arguments to create a Totp.
     * @example
     * // Create one Totp
     * const Totp = await prisma.totp.create({
     *   data: {
     *     // ... data to create a Totp
     *   }
     * })
     * 
     */
    create<T extends TotpCreateArgs>(args: SelectSubset<T, TotpCreateArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Totps.
     * @param {TotpCreateManyArgs} args - Arguments to create many Totps.
     * @example
     * // Create many Totps
     * const totp = await prisma.totp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TotpCreateManyArgs>(args?: SelectSubset<T, TotpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Totps and returns the data saved in the database.
     * @param {TotpCreateManyAndReturnArgs} args - Arguments to create many Totps.
     * @example
     * // Create many Totps
     * const totp = await prisma.totp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Totps and only return the `id`
     * const totpWithIdOnly = await prisma.totp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TotpCreateManyAndReturnArgs>(args?: SelectSubset<T, TotpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Totp.
     * @param {TotpDeleteArgs} args - Arguments to delete one Totp.
     * @example
     * // Delete one Totp
     * const Totp = await prisma.totp.delete({
     *   where: {
     *     // ... filter to delete one Totp
     *   }
     * })
     * 
     */
    delete<T extends TotpDeleteArgs>(args: SelectSubset<T, TotpDeleteArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Totp.
     * @param {TotpUpdateArgs} args - Arguments to update one Totp.
     * @example
     * // Update one Totp
     * const totp = await prisma.totp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TotpUpdateArgs>(args: SelectSubset<T, TotpUpdateArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Totps.
     * @param {TotpDeleteManyArgs} args - Arguments to filter Totps to delete.
     * @example
     * // Delete a few Totps
     * const { count } = await prisma.totp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TotpDeleteManyArgs>(args?: SelectSubset<T, TotpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Totps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Totps
     * const totp = await prisma.totp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TotpUpdateManyArgs>(args: SelectSubset<T, TotpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Totps and returns the data updated in the database.
     * @param {TotpUpdateManyAndReturnArgs} args - Arguments to update many Totps.
     * @example
     * // Update many Totps
     * const totp = await prisma.totp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Totps and only return the `id`
     * const totpWithIdOnly = await prisma.totp.updateManyAndReturn({
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
     * 
     */
    updateManyAndReturn<T extends TotpUpdateManyAndReturnArgs>(args: SelectSubset<T, TotpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Totp.
     * @param {TotpUpsertArgs} args - Arguments to update or create a Totp.
     * @example
     * // Update or create a Totp
     * const totp = await prisma.totp.upsert({
     *   create: {
     *     // ... data to create a Totp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Totp we want to update
     *   }
     * })
     */
    upsert<T extends TotpUpsertArgs>(args: SelectSubset<T, TotpUpsertArgs<ExtArgs>>): Prisma__TotpClient<$Result.GetResult<Prisma.$TotpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Totps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotpCountArgs} args - Arguments to filter Totps to count.
     * @example
     * // Count the number of Totps
     * const count = await prisma.totp.count({
     *   where: {
     *     // ... the filter for the Totps we want to count
     *   }
     * })
    **/
    count<T extends TotpCountArgs>(
      args?: Subset<T, TotpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TotpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Totp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TotpAggregateArgs>(args: Subset<T, TotpAggregateArgs>): Prisma.PrismaPromise<GetTotpAggregateType<T>>

    /**
     * Group by Totp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotpGroupByArgs} args - Group by arguments.
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
      T extends TotpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TotpGroupByArgs['orderBy'] }
        : { orderBy?: TotpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TotpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTotpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Totp model
   */
  readonly fields: TotpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Totp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TotpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mfa<T extends Totp$mfaArgs<ExtArgs> = {}>(args?: Subset<T, Totp$mfaArgs<ExtArgs>>): Prisma__MultiFactorAuthenticationClient<$Result.GetResult<Prisma.$MultiFactorAuthenticationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Totp model
   */
  interface TotpFieldRefs {
    readonly id: FieldRef<"Totp", 'String'>
    readonly status: FieldRef<"Totp", 'TotpStatus'>
    readonly secret: FieldRef<"Totp", 'String'>
    readonly createdAt: FieldRef<"Totp", 'DateTime'>
    readonly updatedAt: FieldRef<"Totp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Totp findUnique
   */
  export type TotpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * Filter, which Totp to fetch.
     */
    where: TotpWhereUniqueInput
  }

  /**
   * Totp findUniqueOrThrow
   */
  export type TotpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * Filter, which Totp to fetch.
     */
    where: TotpWhereUniqueInput
  }

  /**
   * Totp findFirst
   */
  export type TotpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * Filter, which Totp to fetch.
     */
    where?: TotpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Totps to fetch.
     */
    orderBy?: TotpOrderByWithRelationInput | TotpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Totps.
     */
    cursor?: TotpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Totps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Totps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Totps.
     */
    distinct?: TotpScalarFieldEnum | TotpScalarFieldEnum[]
  }

  /**
   * Totp findFirstOrThrow
   */
  export type TotpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * Filter, which Totp to fetch.
     */
    where?: TotpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Totps to fetch.
     */
    orderBy?: TotpOrderByWithRelationInput | TotpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Totps.
     */
    cursor?: TotpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Totps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Totps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Totps.
     */
    distinct?: TotpScalarFieldEnum | TotpScalarFieldEnum[]
  }

  /**
   * Totp findMany
   */
  export type TotpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * Filter, which Totps to fetch.
     */
    where?: TotpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Totps to fetch.
     */
    orderBy?: TotpOrderByWithRelationInput | TotpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Totps.
     */
    cursor?: TotpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Totps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Totps.
     */
    skip?: number
    distinct?: TotpScalarFieldEnum | TotpScalarFieldEnum[]
  }

  /**
   * Totp create
   */
  export type TotpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * The data needed to create a Totp.
     */
    data: XOR<TotpCreateInput, TotpUncheckedCreateInput>
  }

  /**
   * Totp createMany
   */
  export type TotpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Totps.
     */
    data: TotpCreateManyInput | TotpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Totp createManyAndReturn
   */
  export type TotpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * The data used to create many Totps.
     */
    data: TotpCreateManyInput | TotpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Totp update
   */
  export type TotpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * The data needed to update a Totp.
     */
    data: XOR<TotpUpdateInput, TotpUncheckedUpdateInput>
    /**
     * Choose, which Totp to update.
     */
    where: TotpWhereUniqueInput
  }

  /**
   * Totp updateMany
   */
  export type TotpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Totps.
     */
    data: XOR<TotpUpdateManyMutationInput, TotpUncheckedUpdateManyInput>
    /**
     * Filter which Totps to update
     */
    where?: TotpWhereInput
    /**
     * Limit how many Totps to update.
     */
    limit?: number
  }

  /**
   * Totp updateManyAndReturn
   */
  export type TotpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * The data used to update Totps.
     */
    data: XOR<TotpUpdateManyMutationInput, TotpUncheckedUpdateManyInput>
    /**
     * Filter which Totps to update
     */
    where?: TotpWhereInput
    /**
     * Limit how many Totps to update.
     */
    limit?: number
  }

  /**
   * Totp upsert
   */
  export type TotpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * The filter to search for the Totp to update in case it exists.
     */
    where: TotpWhereUniqueInput
    /**
     * In case the Totp found by the `where` argument doesn't exist, create a new Totp with this data.
     */
    create: XOR<TotpCreateInput, TotpUncheckedCreateInput>
    /**
     * In case the Totp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TotpUpdateInput, TotpUncheckedUpdateInput>
  }

  /**
   * Totp delete
   */
  export type TotpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
    /**
     * Filter which Totp to delete.
     */
    where: TotpWhereUniqueInput
  }

  /**
   * Totp deleteMany
   */
  export type TotpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Totps to delete
     */
    where?: TotpWhereInput
    /**
     * Limit how many Totps to delete.
     */
    limit?: number
  }

  /**
   * Totp.mfa
   */
  export type Totp$mfaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiFactorAuthentication
     */
    select?: MultiFactorAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiFactorAuthentication
     */
    omit?: MultiFactorAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiFactorAuthenticationInclude<ExtArgs> | null
    where?: MultiFactorAuthenticationWhereInput
  }

  /**
   * Totp without action
   */
  export type TotpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Totp
     */
    select?: TotpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Totp
     */
    omit?: TotpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotpInclude<ExtArgs> | null
  }


  /**
   * Model Restriction
   */

  export type AggregateRestriction = {
    _count: RestrictionCountAggregateOutputType | null
    _min: RestrictionMinAggregateOutputType | null
    _max: RestrictionMaxAggregateOutputType | null
  }

  export type RestrictionMinAggregateOutputType = {
    id: string | null
    reason: $Enums.RestrictionReason | null
    until: Date | null
    status: $Enums.RestrictionStatus | null
    userId: string | null
    createdAt: Date | null
  }

  export type RestrictionMaxAggregateOutputType = {
    id: string | null
    reason: $Enums.RestrictionReason | null
    until: Date | null
    status: $Enums.RestrictionStatus | null
    userId: string | null
    createdAt: Date | null
  }

  export type RestrictionCountAggregateOutputType = {
    id: number
    reason: number
    until: number
    status: number
    userId: number
    createdAt: number
    _all: number
  }


  export type RestrictionMinAggregateInputType = {
    id?: true
    reason?: true
    until?: true
    status?: true
    userId?: true
    createdAt?: true
  }

  export type RestrictionMaxAggregateInputType = {
    id?: true
    reason?: true
    until?: true
    status?: true
    userId?: true
    createdAt?: true
  }

  export type RestrictionCountAggregateInputType = {
    id?: true
    reason?: true
    until?: true
    status?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type RestrictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restriction to aggregate.
     */
    where?: RestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restrictions to fetch.
     */
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restrictions
    **/
    _count?: true | RestrictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestrictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestrictionMaxAggregateInputType
  }

  export type GetRestrictionAggregateType<T extends RestrictionAggregateArgs> = {
        [P in keyof T & keyof AggregateRestriction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestriction[P]>
      : GetScalarType<T[P], AggregateRestriction[P]>
  }




  export type RestrictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestrictionWhereInput
    orderBy?: RestrictionOrderByWithAggregationInput | RestrictionOrderByWithAggregationInput[]
    by: RestrictionScalarFieldEnum[] | RestrictionScalarFieldEnum
    having?: RestrictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestrictionCountAggregateInputType | true
    _min?: RestrictionMinAggregateInputType
    _max?: RestrictionMaxAggregateInputType
  }

  export type RestrictionGroupByOutputType = {
    id: string
    reason: $Enums.RestrictionReason
    until: Date | null
    status: $Enums.RestrictionStatus
    userId: string
    createdAt: Date
    _count: RestrictionCountAggregateOutputType | null
    _min: RestrictionMinAggregateOutputType | null
    _max: RestrictionMaxAggregateOutputType | null
  }

  type GetRestrictionGroupByPayload<T extends RestrictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestrictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestrictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestrictionGroupByOutputType[P]>
            : GetScalarType<T[P], RestrictionGroupByOutputType[P]>
        }
      >
    >


  export type RestrictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    until?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restriction"]>

  export type RestrictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    until?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restriction"]>

  export type RestrictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    until?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restriction"]>

  export type RestrictionSelectScalar = {
    id?: boolean
    reason?: boolean
    until?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type RestrictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reason" | "until" | "status" | "userId" | "createdAt", ExtArgs["result"]["restriction"]>
  export type RestrictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RestrictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RestrictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RestrictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restriction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reason: $Enums.RestrictionReason
      until: Date | null
      status: $Enums.RestrictionStatus
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["restriction"]>
    composites: {}
  }

  type RestrictionGetPayload<S extends boolean | null | undefined | RestrictionDefaultArgs> = $Result.GetResult<Prisma.$RestrictionPayload, S>

  type RestrictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestrictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestrictionCountAggregateInputType | true
    }

  export interface RestrictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restriction'], meta: { name: 'Restriction' } }
    /**
     * Find zero or one Restriction that matches the filter.
     * @param {RestrictionFindUniqueArgs} args - Arguments to find a Restriction
     * @example
     * // Get one Restriction
     * const restriction = await prisma.restriction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestrictionFindUniqueArgs>(args: SelectSubset<T, RestrictionFindUniqueArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restriction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestrictionFindUniqueOrThrowArgs} args - Arguments to find a Restriction
     * @example
     * // Get one Restriction
     * const restriction = await prisma.restriction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestrictionFindUniqueOrThrowArgs>(args: SelectSubset<T, RestrictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restriction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionFindFirstArgs} args - Arguments to find a Restriction
     * @example
     * // Get one Restriction
     * const restriction = await prisma.restriction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestrictionFindFirstArgs>(args?: SelectSubset<T, RestrictionFindFirstArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restriction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionFindFirstOrThrowArgs} args - Arguments to find a Restriction
     * @example
     * // Get one Restriction
     * const restriction = await prisma.restriction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestrictionFindFirstOrThrowArgs>(args?: SelectSubset<T, RestrictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restrictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restrictions
     * const restrictions = await prisma.restriction.findMany()
     * 
     * // Get first 10 Restrictions
     * const restrictions = await prisma.restriction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restrictionWithIdOnly = await prisma.restriction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestrictionFindManyArgs>(args?: SelectSubset<T, RestrictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restriction.
     * @param {RestrictionCreateArgs} args - Arguments to create a Restriction.
     * @example
     * // Create one Restriction
     * const Restriction = await prisma.restriction.create({
     *   data: {
     *     // ... data to create a Restriction
     *   }
     * })
     * 
     */
    create<T extends RestrictionCreateArgs>(args: SelectSubset<T, RestrictionCreateArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restrictions.
     * @param {RestrictionCreateManyArgs} args - Arguments to create many Restrictions.
     * @example
     * // Create many Restrictions
     * const restriction = await prisma.restriction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestrictionCreateManyArgs>(args?: SelectSubset<T, RestrictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restrictions and returns the data saved in the database.
     * @param {RestrictionCreateManyAndReturnArgs} args - Arguments to create many Restrictions.
     * @example
     * // Create many Restrictions
     * const restriction = await prisma.restriction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restrictions and only return the `id`
     * const restrictionWithIdOnly = await prisma.restriction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestrictionCreateManyAndReturnArgs>(args?: SelectSubset<T, RestrictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restriction.
     * @param {RestrictionDeleteArgs} args - Arguments to delete one Restriction.
     * @example
     * // Delete one Restriction
     * const Restriction = await prisma.restriction.delete({
     *   where: {
     *     // ... filter to delete one Restriction
     *   }
     * })
     * 
     */
    delete<T extends RestrictionDeleteArgs>(args: SelectSubset<T, RestrictionDeleteArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restriction.
     * @param {RestrictionUpdateArgs} args - Arguments to update one Restriction.
     * @example
     * // Update one Restriction
     * const restriction = await prisma.restriction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestrictionUpdateArgs>(args: SelectSubset<T, RestrictionUpdateArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restrictions.
     * @param {RestrictionDeleteManyArgs} args - Arguments to filter Restrictions to delete.
     * @example
     * // Delete a few Restrictions
     * const { count } = await prisma.restriction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestrictionDeleteManyArgs>(args?: SelectSubset<T, RestrictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restrictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restrictions
     * const restriction = await prisma.restriction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestrictionUpdateManyArgs>(args: SelectSubset<T, RestrictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restrictions and returns the data updated in the database.
     * @param {RestrictionUpdateManyAndReturnArgs} args - Arguments to update many Restrictions.
     * @example
     * // Update many Restrictions
     * const restriction = await prisma.restriction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restrictions and only return the `id`
     * const restrictionWithIdOnly = await prisma.restriction.updateManyAndReturn({
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
     * 
     */
    updateManyAndReturn<T extends RestrictionUpdateManyAndReturnArgs>(args: SelectSubset<T, RestrictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restriction.
     * @param {RestrictionUpsertArgs} args - Arguments to update or create a Restriction.
     * @example
     * // Update or create a Restriction
     * const restriction = await prisma.restriction.upsert({
     *   create: {
     *     // ... data to create a Restriction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restriction we want to update
     *   }
     * })
     */
    upsert<T extends RestrictionUpsertArgs>(args: SelectSubset<T, RestrictionUpsertArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restrictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionCountArgs} args - Arguments to filter Restrictions to count.
     * @example
     * // Count the number of Restrictions
     * const count = await prisma.restriction.count({
     *   where: {
     *     // ... the filter for the Restrictions we want to count
     *   }
     * })
    **/
    count<T extends RestrictionCountArgs>(
      args?: Subset<T, RestrictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestrictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restriction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestrictionAggregateArgs>(args: Subset<T, RestrictionAggregateArgs>): Prisma.PrismaPromise<GetRestrictionAggregateType<T>>

    /**
     * Group by Restriction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionGroupByArgs} args - Group by arguments.
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
      T extends RestrictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestrictionGroupByArgs['orderBy'] }
        : { orderBy?: RestrictionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestrictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestrictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restriction model
   */
  readonly fields: RestrictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restriction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestrictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Restriction model
   */
  interface RestrictionFieldRefs {
    readonly id: FieldRef<"Restriction", 'String'>
    readonly reason: FieldRef<"Restriction", 'RestrictionReason'>
    readonly until: FieldRef<"Restriction", 'DateTime'>
    readonly status: FieldRef<"Restriction", 'RestrictionStatus'>
    readonly userId: FieldRef<"Restriction", 'String'>
    readonly createdAt: FieldRef<"Restriction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restriction findUnique
   */
  export type RestrictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restriction to fetch.
     */
    where: RestrictionWhereUniqueInput
  }

  /**
   * Restriction findUniqueOrThrow
   */
  export type RestrictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restriction to fetch.
     */
    where: RestrictionWhereUniqueInput
  }

  /**
   * Restriction findFirst
   */
  export type RestrictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restriction to fetch.
     */
    where?: RestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restrictions to fetch.
     */
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restrictions.
     */
    cursor?: RestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restrictions.
     */
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Restriction findFirstOrThrow
   */
  export type RestrictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restriction to fetch.
     */
    where?: RestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restrictions to fetch.
     */
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restrictions.
     */
    cursor?: RestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restrictions.
     */
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Restriction findMany
   */
  export type RestrictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restrictions to fetch.
     */
    where?: RestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restrictions to fetch.
     */
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restrictions.
     */
    cursor?: RestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restrictions.
     */
    skip?: number
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Restriction create
   */
  export type RestrictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * The data needed to create a Restriction.
     */
    data: XOR<RestrictionCreateInput, RestrictionUncheckedCreateInput>
  }

  /**
   * Restriction createMany
   */
  export type RestrictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restrictions.
     */
    data: RestrictionCreateManyInput | RestrictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restriction createManyAndReturn
   */
  export type RestrictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * The data used to create many Restrictions.
     */
    data: RestrictionCreateManyInput | RestrictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restriction update
   */
  export type RestrictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * The data needed to update a Restriction.
     */
    data: XOR<RestrictionUpdateInput, RestrictionUncheckedUpdateInput>
    /**
     * Choose, which Restriction to update.
     */
    where: RestrictionWhereUniqueInput
  }

  /**
   * Restriction updateMany
   */
  export type RestrictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restrictions.
     */
    data: XOR<RestrictionUpdateManyMutationInput, RestrictionUncheckedUpdateManyInput>
    /**
     * Filter which Restrictions to update
     */
    where?: RestrictionWhereInput
    /**
     * Limit how many Restrictions to update.
     */
    limit?: number
  }

  /**
   * Restriction updateManyAndReturn
   */
  export type RestrictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * The data used to update Restrictions.
     */
    data: XOR<RestrictionUpdateManyMutationInput, RestrictionUncheckedUpdateManyInput>
    /**
     * Filter which Restrictions to update
     */
    where?: RestrictionWhereInput
    /**
     * Limit how many Restrictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restriction upsert
   */
  export type RestrictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * The filter to search for the Restriction to update in case it exists.
     */
    where: RestrictionWhereUniqueInput
    /**
     * In case the Restriction found by the `where` argument doesn't exist, create a new Restriction with this data.
     */
    create: XOR<RestrictionCreateInput, RestrictionUncheckedCreateInput>
    /**
     * In case the Restriction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestrictionUpdateInput, RestrictionUncheckedUpdateInput>
  }

  /**
   * Restriction delete
   */
  export type RestrictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter which Restriction to delete.
     */
    where: RestrictionWhereUniqueInput
  }

  /**
   * Restriction deleteMany
   */
  export type RestrictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restrictions to delete
     */
    where?: RestrictionWhereInput
    /**
     * Limit how many Restrictions to delete.
     */
    limit?: number
  }

  /**
   * Restriction without action
   */
  export type RestrictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    thumbnail: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    thumbnail: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    thumbnail: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    thumbnail?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    thumbnail?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    thumbnail?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    thumbnail: string | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    thumbnail?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    thumbnail?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    thumbnail?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    thumbnail?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "thumbnail" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      thumbnail: string | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
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
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
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
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly title: FieldRef<"Page", 'String'>
    readonly slug: FieldRef<"Page", 'String'>
    readonly content: FieldRef<"Page", 'String'>
    readonly thumbnail: FieldRef<"Page", 'String'>
    readonly isPublished: FieldRef<"Page", 'Boolean'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    displayName: 'displayName',
    avatar: 'avatar',
    points: 'points',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExternalAccountScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    expiry: 'expiry',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExternalAccountScalarFieldEnum = (typeof ExternalAccountScalarFieldEnum)[keyof typeof ExternalAccountScalarFieldEnum]


  export const EmailVerificationScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiry: 'expiry',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailVerificationScalarFieldEnum = (typeof EmailVerificationScalarFieldEnum)[keyof typeof EmailVerificationScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiry: 'expiry',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const MultiFactorAuthenticationScalarFieldEnum: {
    id: 'id',
    recoveryCodes: 'recoveryCodes',
    totpId: 'totpId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MultiFactorAuthenticationScalarFieldEnum = (typeof MultiFactorAuthenticationScalarFieldEnum)[keyof typeof MultiFactorAuthenticationScalarFieldEnum]


  export const TotpScalarFieldEnum: {
    id: 'id',
    status: 'status',
    secret: 'secret',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TotpScalarFieldEnum = (typeof TotpScalarFieldEnum)[keyof typeof TotpScalarFieldEnum]


  export const RestrictionScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    until: 'until',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type RestrictionScalarFieldEnum = (typeof RestrictionScalarFieldEnum)[keyof typeof RestrictionScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    thumbnail: 'thumbnail',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AccountProvider'
   */
  export type EnumAccountProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountProvider'>
    


  /**
   * Reference to a field of type 'AccountProvider[]'
   */
  export type ListEnumAccountProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountProvider[]'>
    


  /**
   * Reference to a field of type 'EmailVerificationStatus'
   */
  export type EnumEmailVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailVerificationStatus'>
    


  /**
   * Reference to a field of type 'EmailVerificationStatus[]'
   */
  export type ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailVerificationStatus[]'>
    


  /**
   * Reference to a field of type 'TotpStatus'
   */
  export type EnumTotpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TotpStatus'>
    


  /**
   * Reference to a field of type 'TotpStatus[]'
   */
  export type ListEnumTotpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TotpStatus[]'>
    


  /**
   * Reference to a field of type 'RestrictionReason'
   */
  export type EnumRestrictionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RestrictionReason'>
    


  /**
   * Reference to a field of type 'RestrictionReason[]'
   */
  export type ListEnumRestrictionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RestrictionReason[]'>
    


  /**
   * Reference to a field of type 'RestrictionStatus'
   */
  export type EnumRestrictionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RestrictionStatus'>
    


  /**
   * Reference to a field of type 'RestrictionStatus[]'
   */
  export type ListEnumRestrictionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RestrictionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerification?: XOR<EmailVerificationNullableScalarRelationFilter, EmailVerificationWhereInput> | null
    passwordReset?: XOR<PasswordResetNullableScalarRelationFilter, PasswordResetWhereInput> | null
    externalAccounts?: ExternalAccountListRelationFilter
    mfa?: XOR<MultiFactorAuthenticationNullableScalarRelationFilter, MultiFactorAuthenticationWhereInput> | null
    restrictions?: RestrictionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    points?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerification?: EmailVerificationOrderByWithRelationInput
    passwordReset?: PasswordResetOrderByWithRelationInput
    externalAccounts?: ExternalAccountOrderByRelationAggregateInput
    mfa?: MultiFactorAuthenticationOrderByWithRelationInput
    restrictions?: RestrictionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    displayName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerification?: XOR<EmailVerificationNullableScalarRelationFilter, EmailVerificationWhereInput> | null
    passwordReset?: XOR<PasswordResetNullableScalarRelationFilter, PasswordResetWhereInput> | null
    externalAccounts?: ExternalAccountListRelationFilter
    mfa?: XOR<MultiFactorAuthenticationNullableScalarRelationFilter, MultiFactorAuthenticationWhereInput> | null
    restrictions?: RestrictionListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    points?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    points?: IntWithAggregatesFilter<"User"> | number
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ExternalAccountWhereInput = {
    AND?: ExternalAccountWhereInput | ExternalAccountWhereInput[]
    OR?: ExternalAccountWhereInput[]
    NOT?: ExternalAccountWhereInput | ExternalAccountWhereInput[]
    id?: StringFilter<"ExternalAccount"> | string
    provider?: EnumAccountProviderFilter<"ExternalAccount"> | $Enums.AccountProvider
    providerAccountId?: StringFilter<"ExternalAccount"> | string
    refreshToken?: StringNullableFilter<"ExternalAccount"> | string | null
    accessToken?: StringNullableFilter<"ExternalAccount"> | string | null
    expiry?: IntNullableFilter<"ExternalAccount"> | number | null
    userId?: StringFilter<"ExternalAccount"> | string
    createdAt?: DateTimeFilter<"ExternalAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExternalAccountOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiry?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExternalAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerAccountId?: string
    userId_provider?: ExternalAccountUserIdProviderCompoundUniqueInput
    AND?: ExternalAccountWhereInput | ExternalAccountWhereInput[]
    OR?: ExternalAccountWhereInput[]
    NOT?: ExternalAccountWhereInput | ExternalAccountWhereInput[]
    provider?: EnumAccountProviderFilter<"ExternalAccount"> | $Enums.AccountProvider
    refreshToken?: StringNullableFilter<"ExternalAccount"> | string | null
    accessToken?: StringNullableFilter<"ExternalAccount"> | string | null
    expiry?: IntNullableFilter<"ExternalAccount"> | number | null
    userId?: StringFilter<"ExternalAccount"> | string
    createdAt?: DateTimeFilter<"ExternalAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "providerAccountId" | "userId_provider">

  export type ExternalAccountOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiry?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExternalAccountCountOrderByAggregateInput
    _avg?: ExternalAccountAvgOrderByAggregateInput
    _max?: ExternalAccountMaxOrderByAggregateInput
    _min?: ExternalAccountMinOrderByAggregateInput
    _sum?: ExternalAccountSumOrderByAggregateInput
  }

  export type ExternalAccountScalarWhereWithAggregatesInput = {
    AND?: ExternalAccountScalarWhereWithAggregatesInput | ExternalAccountScalarWhereWithAggregatesInput[]
    OR?: ExternalAccountScalarWhereWithAggregatesInput[]
    NOT?: ExternalAccountScalarWhereWithAggregatesInput | ExternalAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExternalAccount"> | string
    provider?: EnumAccountProviderWithAggregatesFilter<"ExternalAccount"> | $Enums.AccountProvider
    providerAccountId?: StringWithAggregatesFilter<"ExternalAccount"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"ExternalAccount"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"ExternalAccount"> | string | null
    expiry?: IntNullableWithAggregatesFilter<"ExternalAccount"> | number | null
    userId?: StringWithAggregatesFilter<"ExternalAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExternalAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExternalAccount"> | Date | string
  }

  export type EmailVerificationWhereInput = {
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    id?: StringFilter<"EmailVerification"> | string
    token?: StringFilter<"EmailVerification"> | string
    expiry?: DateTimeNullableFilter<"EmailVerification"> | Date | string | null
    status?: EnumEmailVerificationStatusFilter<"EmailVerification"> | $Enums.EmailVerificationStatus
    userId?: StringFilter<"EmailVerification"> | string
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
    updatedAt?: DateTimeFilter<"EmailVerification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    userId?: string
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    expiry?: DateTimeNullableFilter<"EmailVerification"> | Date | string | null
    status?: EnumEmailVerificationStatusFilter<"EmailVerification"> | $Enums.EmailVerificationStatus
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
    updatedAt?: DateTimeFilter<"EmailVerification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token" | "userId">

  export type EmailVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailVerificationCountOrderByAggregateInput
    _max?: EmailVerificationMaxOrderByAggregateInput
    _min?: EmailVerificationMinOrderByAggregateInput
  }

  export type EmailVerificationScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerification"> | string
    token?: StringWithAggregatesFilter<"EmailVerification"> | string
    expiry?: DateTimeNullableWithAggregatesFilter<"EmailVerification"> | Date | string | null
    status?: EnumEmailVerificationStatusWithAggregatesFilter<"EmailVerification"> | $Enums.EmailVerificationStatus
    userId?: StringWithAggregatesFilter<"EmailVerification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    id?: StringFilter<"PasswordReset"> | string
    token?: StringFilter<"PasswordReset"> | string
    expiry?: DateTimeFilter<"PasswordReset"> | Date | string
    userId?: StringFilter<"PasswordReset"> | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    updatedAt?: DateTimeFilter<"PasswordReset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    userId?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    expiry?: DateTimeFilter<"PasswordReset"> | Date | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    updatedAt?: DateTimeFilter<"PasswordReset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token" | "userId">

  export type PasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordReset"> | string
    token?: StringWithAggregatesFilter<"PasswordReset"> | string
    expiry?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    userId?: StringWithAggregatesFilter<"PasswordReset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
  }

  export type MultiFactorAuthenticationWhereInput = {
    AND?: MultiFactorAuthenticationWhereInput | MultiFactorAuthenticationWhereInput[]
    OR?: MultiFactorAuthenticationWhereInput[]
    NOT?: MultiFactorAuthenticationWhereInput | MultiFactorAuthenticationWhereInput[]
    id?: StringFilter<"MultiFactorAuthentication"> | string
    recoveryCodes?: StringNullableListFilter<"MultiFactorAuthentication">
    totpId?: StringNullableFilter<"MultiFactorAuthentication"> | string | null
    userId?: StringFilter<"MultiFactorAuthentication"> | string
    createdAt?: DateTimeFilter<"MultiFactorAuthentication"> | Date | string
    updatedAt?: DateTimeFilter<"MultiFactorAuthentication"> | Date | string
    totp?: XOR<TotpNullableScalarRelationFilter, TotpWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MultiFactorAuthenticationOrderByWithRelationInput = {
    id?: SortOrder
    recoveryCodes?: SortOrder
    totpId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    totp?: TotpOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MultiFactorAuthenticationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    totpId?: string
    userId?: string
    AND?: MultiFactorAuthenticationWhereInput | MultiFactorAuthenticationWhereInput[]
    OR?: MultiFactorAuthenticationWhereInput[]
    NOT?: MultiFactorAuthenticationWhereInput | MultiFactorAuthenticationWhereInput[]
    recoveryCodes?: StringNullableListFilter<"MultiFactorAuthentication">
    createdAt?: DateTimeFilter<"MultiFactorAuthentication"> | Date | string
    updatedAt?: DateTimeFilter<"MultiFactorAuthentication"> | Date | string
    totp?: XOR<TotpNullableScalarRelationFilter, TotpWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "totpId" | "userId">

  export type MultiFactorAuthenticationOrderByWithAggregationInput = {
    id?: SortOrder
    recoveryCodes?: SortOrder
    totpId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MultiFactorAuthenticationCountOrderByAggregateInput
    _max?: MultiFactorAuthenticationMaxOrderByAggregateInput
    _min?: MultiFactorAuthenticationMinOrderByAggregateInput
  }

  export type MultiFactorAuthenticationScalarWhereWithAggregatesInput = {
    AND?: MultiFactorAuthenticationScalarWhereWithAggregatesInput | MultiFactorAuthenticationScalarWhereWithAggregatesInput[]
    OR?: MultiFactorAuthenticationScalarWhereWithAggregatesInput[]
    NOT?: MultiFactorAuthenticationScalarWhereWithAggregatesInput | MultiFactorAuthenticationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MultiFactorAuthentication"> | string
    recoveryCodes?: StringNullableListFilter<"MultiFactorAuthentication">
    totpId?: StringNullableWithAggregatesFilter<"MultiFactorAuthentication"> | string | null
    userId?: StringWithAggregatesFilter<"MultiFactorAuthentication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MultiFactorAuthentication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MultiFactorAuthentication"> | Date | string
  }

  export type TotpWhereInput = {
    AND?: TotpWhereInput | TotpWhereInput[]
    OR?: TotpWhereInput[]
    NOT?: TotpWhereInput | TotpWhereInput[]
    id?: StringFilter<"Totp"> | string
    status?: EnumTotpStatusFilter<"Totp"> | $Enums.TotpStatus
    secret?: StringNullableFilter<"Totp"> | string | null
    createdAt?: DateTimeFilter<"Totp"> | Date | string
    updatedAt?: DateTimeFilter<"Totp"> | Date | string
    mfa?: XOR<MultiFactorAuthenticationNullableScalarRelationFilter, MultiFactorAuthenticationWhereInput> | null
  }

  export type TotpOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    secret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mfa?: MultiFactorAuthenticationOrderByWithRelationInput
  }

  export type TotpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TotpWhereInput | TotpWhereInput[]
    OR?: TotpWhereInput[]
    NOT?: TotpWhereInput | TotpWhereInput[]
    status?: EnumTotpStatusFilter<"Totp"> | $Enums.TotpStatus
    secret?: StringNullableFilter<"Totp"> | string | null
    createdAt?: DateTimeFilter<"Totp"> | Date | string
    updatedAt?: DateTimeFilter<"Totp"> | Date | string
    mfa?: XOR<MultiFactorAuthenticationNullableScalarRelationFilter, MultiFactorAuthenticationWhereInput> | null
  }, "id">

  export type TotpOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    secret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TotpCountOrderByAggregateInput
    _max?: TotpMaxOrderByAggregateInput
    _min?: TotpMinOrderByAggregateInput
  }

  export type TotpScalarWhereWithAggregatesInput = {
    AND?: TotpScalarWhereWithAggregatesInput | TotpScalarWhereWithAggregatesInput[]
    OR?: TotpScalarWhereWithAggregatesInput[]
    NOT?: TotpScalarWhereWithAggregatesInput | TotpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Totp"> | string
    status?: EnumTotpStatusWithAggregatesFilter<"Totp"> | $Enums.TotpStatus
    secret?: StringNullableWithAggregatesFilter<"Totp"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Totp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Totp"> | Date | string
  }

  export type RestrictionWhereInput = {
    AND?: RestrictionWhereInput | RestrictionWhereInput[]
    OR?: RestrictionWhereInput[]
    NOT?: RestrictionWhereInput | RestrictionWhereInput[]
    id?: StringFilter<"Restriction"> | string
    reason?: EnumRestrictionReasonFilter<"Restriction"> | $Enums.RestrictionReason
    until?: DateTimeNullableFilter<"Restriction"> | Date | string | null
    status?: EnumRestrictionStatusFilter<"Restriction"> | $Enums.RestrictionStatus
    userId?: StringFilter<"Restriction"> | string
    createdAt?: DateTimeFilter<"Restriction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RestrictionOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    until?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RestrictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RestrictionWhereInput | RestrictionWhereInput[]
    OR?: RestrictionWhereInput[]
    NOT?: RestrictionWhereInput | RestrictionWhereInput[]
    reason?: EnumRestrictionReasonFilter<"Restriction"> | $Enums.RestrictionReason
    until?: DateTimeNullableFilter<"Restriction"> | Date | string | null
    status?: EnumRestrictionStatusFilter<"Restriction"> | $Enums.RestrictionStatus
    userId?: StringFilter<"Restriction"> | string
    createdAt?: DateTimeFilter<"Restriction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RestrictionOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    until?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: RestrictionCountOrderByAggregateInput
    _max?: RestrictionMaxOrderByAggregateInput
    _min?: RestrictionMinOrderByAggregateInput
  }

  export type RestrictionScalarWhereWithAggregatesInput = {
    AND?: RestrictionScalarWhereWithAggregatesInput | RestrictionScalarWhereWithAggregatesInput[]
    OR?: RestrictionScalarWhereWithAggregatesInput[]
    NOT?: RestrictionScalarWhereWithAggregatesInput | RestrictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restriction"> | string
    reason?: EnumRestrictionReasonWithAggregatesFilter<"Restriction"> | $Enums.RestrictionReason
    until?: DateTimeNullableWithAggregatesFilter<"Restriction"> | Date | string | null
    status?: EnumRestrictionStatusWithAggregatesFilter<"Restriction"> | $Enums.RestrictionStatus
    userId?: StringWithAggregatesFilter<"Restriction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Restriction"> | Date | string
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    title?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    content?: StringFilter<"Page"> | string
    thumbnail?: StringNullableFilter<"Page"> | string | null
    isPublished?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    title?: StringFilter<"Page"> | string
    content?: StringFilter<"Page"> | string
    thumbnail?: StringNullableFilter<"Page"> | string | null
    isPublished?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
  }, "id" | "slug">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    title?: StringWithAggregatesFilter<"Page"> | string
    slug?: StringWithAggregatesFilter<"Page"> | string
    content?: StringWithAggregatesFilter<"Page"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"Page"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Page"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationCreateNestedOneWithoutUserInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountCreateNestedManyWithoutUserInput
    mfa?: MultiFactorAuthenticationCreateNestedOneWithoutUserInput
    restrictions?: RestrictionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationUncheckedCreateNestedOneWithoutUserInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountUncheckedCreateNestedManyWithoutUserInput
    mfa?: MultiFactorAuthenticationUncheckedCreateNestedOneWithoutUserInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUpdateOneWithoutUserNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUpdateManyWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUpdateOneWithoutUserNestedInput
    restrictions?: RestrictionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUncheckedUpdateOneWithoutUserNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUncheckedUpdateManyWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUncheckedUpdateOneWithoutUserNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalAccountCreateInput = {
    id?: string
    provider: $Enums.AccountProvider
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiry?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutExternalAccountsInput
  }

  export type ExternalAccountUncheckedCreateInput = {
    id?: string
    provider: $Enums.AccountProvider
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiry?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExternalAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAccountProviderFieldUpdateOperationsInput | $Enums.AccountProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExternalAccountsNestedInput
  }

  export type ExternalAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAccountProviderFieldUpdateOperationsInput | $Enums.AccountProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalAccountCreateManyInput = {
    id?: string
    provider: $Enums.AccountProvider
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiry?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExternalAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAccountProviderFieldUpdateOperationsInput | $Enums.AccountProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAccountProviderFieldUpdateOperationsInput | $Enums.AccountProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateInput = {
    id?: string
    token: string
    expiry?: Date | string | null
    status?: $Enums.EmailVerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmailVerificationInput
  }

  export type EmailVerificationUncheckedCreateInput = {
    id?: string
    token: string
    expiry?: Date | string | null
    status?: $Enums.EmailVerificationStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmailVerificationStatusFieldUpdateOperationsInput | $Enums.EmailVerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailVerificationNestedInput
  }

  export type EmailVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmailVerificationStatusFieldUpdateOperationsInput | $Enums.EmailVerificationStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateManyInput = {
    id?: string
    token: string
    expiry?: Date | string | null
    status?: $Enums.EmailVerificationStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmailVerificationStatusFieldUpdateOperationsInput | $Enums.EmailVerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmailVerificationStatusFieldUpdateOperationsInput | $Enums.EmailVerificationStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateInput = {
    id?: string
    token: string
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetInput
  }

  export type PasswordResetUncheckedCreateInput = {
    id?: string
    token: string
    expiry: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordResetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetNestedInput
  }

  export type PasswordResetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateManyInput = {
    id?: string
    token: string
    expiry: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordResetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiFactorAuthenticationCreateInput = {
    id?: string
    recoveryCodes?: MultiFactorAuthenticationCreaterecoveryCodesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    totp?: TotpCreateNestedOneWithoutMfaInput
    user: UserCreateNestedOneWithoutMfaInput
  }

  export type MultiFactorAuthenticationUncheckedCreateInput = {
    id?: string
    recoveryCodes?: MultiFactorAuthenticationCreaterecoveryCodesInput | string[]
    totpId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MultiFactorAuthenticationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: MultiFactorAuthenticationUpdaterecoveryCodesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totp?: TotpUpdateOneWithoutMfaNestedInput
    user?: UserUpdateOneRequiredWithoutMfaNestedInput
  }

  export type MultiFactorAuthenticationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: MultiFactorAuthenticationUpdaterecoveryCodesInput | string[]
    totpId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiFactorAuthenticationCreateManyInput = {
    id?: string
    recoveryCodes?: MultiFactorAuthenticationCreaterecoveryCodesInput | string[]
    totpId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MultiFactorAuthenticationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: MultiFactorAuthenticationUpdaterecoveryCodesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiFactorAuthenticationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: MultiFactorAuthenticationUpdaterecoveryCodesInput | string[]
    totpId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TotpCreateInput = {
    id?: string
    status?: $Enums.TotpStatus
    secret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mfa?: MultiFactorAuthenticationCreateNestedOneWithoutTotpInput
  }

  export type TotpUncheckedCreateInput = {
    id?: string
    status?: $Enums.TotpStatus
    secret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mfa?: MultiFactorAuthenticationUncheckedCreateNestedOneWithoutTotpInput
  }

  export type TotpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTotpStatusFieldUpdateOperationsInput | $Enums.TotpStatus
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mfa?: MultiFactorAuthenticationUpdateOneWithoutTotpNestedInput
  }

  export type TotpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTotpStatusFieldUpdateOperationsInput | $Enums.TotpStatus
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mfa?: MultiFactorAuthenticationUncheckedUpdateOneWithoutTotpNestedInput
  }

  export type TotpCreateManyInput = {
    id?: string
    status?: $Enums.TotpStatus
    secret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TotpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTotpStatusFieldUpdateOperationsInput | $Enums.TotpStatus
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TotpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTotpStatusFieldUpdateOperationsInput | $Enums.TotpStatus
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionCreateInput = {
    id?: string
    reason: $Enums.RestrictionReason
    until?: Date | string | null
    status?: $Enums.RestrictionStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRestrictionsInput
  }

  export type RestrictionUncheckedCreateInput = {
    id?: string
    reason: $Enums.RestrictionReason
    until?: Date | string | null
    status?: $Enums.RestrictionStatus
    userId: string
    createdAt?: Date | string
  }

  export type RestrictionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumRestrictionReasonFieldUpdateOperationsInput | $Enums.RestrictionReason
    until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRestrictionStatusFieldUpdateOperationsInput | $Enums.RestrictionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRestrictionsNestedInput
  }

  export type RestrictionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumRestrictionReasonFieldUpdateOperationsInput | $Enums.RestrictionReason
    until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRestrictionStatusFieldUpdateOperationsInput | $Enums.RestrictionStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionCreateManyInput = {
    id?: string
    reason: $Enums.RestrictionReason
    until?: Date | string | null
    status?: $Enums.RestrictionStatus
    userId: string
    createdAt?: Date | string
  }

  export type RestrictionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumRestrictionReasonFieldUpdateOperationsInput | $Enums.RestrictionReason
    until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRestrictionStatusFieldUpdateOperationsInput | $Enums.RestrictionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumRestrictionReasonFieldUpdateOperationsInput | $Enums.RestrictionReason
    until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRestrictionStatusFieldUpdateOperationsInput | $Enums.RestrictionStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    thumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type EmailVerificationNullableScalarRelationFilter = {
    is?: EmailVerificationWhereInput | null
    isNot?: EmailVerificationWhereInput | null
  }

  export type PasswordResetNullableScalarRelationFilter = {
    is?: PasswordResetWhereInput | null
    isNot?: PasswordResetWhereInput | null
  }

  export type ExternalAccountListRelationFilter = {
    every?: ExternalAccountWhereInput
    some?: ExternalAccountWhereInput
    none?: ExternalAccountWhereInput
  }

  export type MultiFactorAuthenticationNullableScalarRelationFilter = {
    is?: MultiFactorAuthenticationWhereInput | null
    isNot?: MultiFactorAuthenticationWhereInput | null
  }

  export type RestrictionListRelationFilter = {
    every?: RestrictionWhereInput
    some?: RestrictionWhereInput
    none?: RestrictionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExternalAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestrictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EnumAccountProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountProvider | EnumAccountProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AccountProvider[] | ListEnumAccountProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountProvider[] | ListEnumAccountProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountProviderFilter<$PrismaModel> | $Enums.AccountProvider
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExternalAccountUserIdProviderCompoundUniqueInput = {
    userId: string
    provider: $Enums.AccountProvider
  }

  export type ExternalAccountCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalAccountAvgOrderByAggregateInput = {
    expiry?: SortOrder
  }

  export type ExternalAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalAccountMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalAccountSumOrderByAggregateInput = {
    expiry?: SortOrder
  }

  export type EnumAccountProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountProvider | EnumAccountProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AccountProvider[] | ListEnumAccountProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountProvider[] | ListEnumAccountProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountProviderWithAggregatesFilter<$PrismaModel> | $Enums.AccountProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountProviderFilter<$PrismaModel>
    _max?: NestedEnumAccountProviderFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumEmailVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailVerificationStatus | EnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailVerificationStatus[] | ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailVerificationStatus[] | ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailVerificationStatusFilter<$PrismaModel> | $Enums.EmailVerificationStatus
  }

  export type EmailVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEmailVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailVerificationStatus | EnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailVerificationStatus[] | ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailVerificationStatus[] | ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailVerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailVerificationStatusFilter<$PrismaModel>
  }

  export type PasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TotpNullableScalarRelationFilter = {
    is?: TotpWhereInput | null
    isNot?: TotpWhereInput | null
  }

  export type MultiFactorAuthenticationCountOrderByAggregateInput = {
    id?: SortOrder
    recoveryCodes?: SortOrder
    totpId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MultiFactorAuthenticationMaxOrderByAggregateInput = {
    id?: SortOrder
    totpId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MultiFactorAuthenticationMinOrderByAggregateInput = {
    id?: SortOrder
    totpId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTotpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TotpStatus | EnumTotpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TotpStatus[] | ListEnumTotpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TotpStatus[] | ListEnumTotpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTotpStatusFilter<$PrismaModel> | $Enums.TotpStatus
  }

  export type TotpCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    secret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TotpMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    secret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TotpMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    secret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTotpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TotpStatus | EnumTotpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TotpStatus[] | ListEnumTotpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TotpStatus[] | ListEnumTotpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTotpStatusWithAggregatesFilter<$PrismaModel> | $Enums.TotpStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTotpStatusFilter<$PrismaModel>
    _max?: NestedEnumTotpStatusFilter<$PrismaModel>
  }

  export type EnumRestrictionReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.RestrictionReason | EnumRestrictionReasonFieldRefInput<$PrismaModel>
    in?: $Enums.RestrictionReason[] | ListEnumRestrictionReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestrictionReason[] | ListEnumRestrictionReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumRestrictionReasonFilter<$PrismaModel> | $Enums.RestrictionReason
  }

  export type EnumRestrictionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RestrictionStatus | EnumRestrictionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RestrictionStatus[] | ListEnumRestrictionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestrictionStatus[] | ListEnumRestrictionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRestrictionStatusFilter<$PrismaModel> | $Enums.RestrictionStatus
  }

  export type RestrictionCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    until?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RestrictionMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    until?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RestrictionMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    until?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRestrictionReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RestrictionReason | EnumRestrictionReasonFieldRefInput<$PrismaModel>
    in?: $Enums.RestrictionReason[] | ListEnumRestrictionReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestrictionReason[] | ListEnumRestrictionReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumRestrictionReasonWithAggregatesFilter<$PrismaModel> | $Enums.RestrictionReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRestrictionReasonFilter<$PrismaModel>
    _max?: NestedEnumRestrictionReasonFilter<$PrismaModel>
  }

  export type EnumRestrictionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RestrictionStatus | EnumRestrictionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RestrictionStatus[] | ListEnumRestrictionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestrictionStatus[] | ListEnumRestrictionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRestrictionStatusWithAggregatesFilter<$PrismaModel> | $Enums.RestrictionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRestrictionStatusFilter<$PrismaModel>
    _max?: NestedEnumRestrictionStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmailVerificationCreateNestedOneWithoutUserInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput
    connect?: EmailVerificationWhereUniqueInput
  }

  export type PasswordResetCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput
    connect?: PasswordResetWhereUniqueInput
  }

  export type ExternalAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput> | ExternalAccountCreateWithoutUserInput[] | ExternalAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutUserInput | ExternalAccountCreateOrConnectWithoutUserInput[]
    createMany?: ExternalAccountCreateManyUserInputEnvelope
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
  }

  export type MultiFactorAuthenticationCreateNestedOneWithoutUserInput = {
    create?: XOR<MultiFactorAuthenticationCreateWithoutUserInput, MultiFactorAuthenticationUncheckedCreateWithoutUserInput>
    connectOrCreate?: MultiFactorAuthenticationCreateOrConnectWithoutUserInput
    connect?: MultiFactorAuthenticationWhereUniqueInput
  }

  export type RestrictionCreateNestedManyWithoutUserInput = {
    create?: XOR<RestrictionCreateWithoutUserInput, RestrictionUncheckedCreateWithoutUserInput> | RestrictionCreateWithoutUserInput[] | RestrictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutUserInput | RestrictionCreateOrConnectWithoutUserInput[]
    createMany?: RestrictionCreateManyUserInputEnvelope
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
  }

  export type EmailVerificationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput
    connect?: EmailVerificationWhereUniqueInput
  }

  export type PasswordResetUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput
    connect?: PasswordResetWhereUniqueInput
  }

  export type ExternalAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput> | ExternalAccountCreateWithoutUserInput[] | ExternalAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutUserInput | ExternalAccountCreateOrConnectWithoutUserInput[]
    createMany?: ExternalAccountCreateManyUserInputEnvelope
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
  }

  export type MultiFactorAuthenticationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MultiFactorAuthenticationCreateWithoutUserInput, MultiFactorAuthenticationUncheckedCreateWithoutUserInput>
    connectOrCreate?: MultiFactorAuthenticationCreateOrConnectWithoutUserInput
    connect?: MultiFactorAuthenticationWhereUniqueInput
  }

  export type RestrictionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RestrictionCreateWithoutUserInput, RestrictionUncheckedCreateWithoutUserInput> | RestrictionCreateWithoutUserInput[] | RestrictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutUserInput | RestrictionCreateOrConnectWithoutUserInput[]
    createMany?: RestrictionCreateManyUserInputEnvelope
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmailVerificationUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput
    upsert?: EmailVerificationUpsertWithoutUserInput
    disconnect?: EmailVerificationWhereInput | boolean
    delete?: EmailVerificationWhereInput | boolean
    connect?: EmailVerificationWhereUniqueInput
    update?: XOR<XOR<EmailVerificationUpdateToOneWithWhereWithoutUserInput, EmailVerificationUpdateWithoutUserInput>, EmailVerificationUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput
    upsert?: PasswordResetUpsertWithoutUserInput
    disconnect?: PasswordResetWhereInput | boolean
    delete?: PasswordResetWhereInput | boolean
    connect?: PasswordResetWhereUniqueInput
    update?: XOR<XOR<PasswordResetUpdateToOneWithWhereWithoutUserInput, PasswordResetUpdateWithoutUserInput>, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type ExternalAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput> | ExternalAccountCreateWithoutUserInput[] | ExternalAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutUserInput | ExternalAccountCreateOrConnectWithoutUserInput[]
    upsert?: ExternalAccountUpsertWithWhereUniqueWithoutUserInput | ExternalAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExternalAccountCreateManyUserInputEnvelope
    set?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    disconnect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    delete?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    update?: ExternalAccountUpdateWithWhereUniqueWithoutUserInput | ExternalAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExternalAccountUpdateManyWithWhereWithoutUserInput | ExternalAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
  }

  export type MultiFactorAuthenticationUpdateOneWithoutUserNestedInput = {
    create?: XOR<MultiFactorAuthenticationCreateWithoutUserInput, MultiFactorAuthenticationUncheckedCreateWithoutUserInput>
    connectOrCreate?: MultiFactorAuthenticationCreateOrConnectWithoutUserInput
    upsert?: MultiFactorAuthenticationUpsertWithoutUserInput
    disconnect?: MultiFactorAuthenticationWhereInput | boolean
    delete?: MultiFactorAuthenticationWhereInput | boolean
    connect?: MultiFactorAuthenticationWhereUniqueInput
    update?: XOR<XOR<MultiFactorAuthenticationUpdateToOneWithWhereWithoutUserInput, MultiFactorAuthenticationUpdateWithoutUserInput>, MultiFactorAuthenticationUncheckedUpdateWithoutUserInput>
  }

  export type RestrictionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RestrictionCreateWithoutUserInput, RestrictionUncheckedCreateWithoutUserInput> | RestrictionCreateWithoutUserInput[] | RestrictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutUserInput | RestrictionCreateOrConnectWithoutUserInput[]
    upsert?: RestrictionUpsertWithWhereUniqueWithoutUserInput | RestrictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RestrictionCreateManyUserInputEnvelope
    set?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    disconnect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    delete?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    update?: RestrictionUpdateWithWhereUniqueWithoutUserInput | RestrictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RestrictionUpdateManyWithWhereWithoutUserInput | RestrictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
  }

  export type EmailVerificationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput
    upsert?: EmailVerificationUpsertWithoutUserInput
    disconnect?: EmailVerificationWhereInput | boolean
    delete?: EmailVerificationWhereInput | boolean
    connect?: EmailVerificationWhereUniqueInput
    update?: XOR<XOR<EmailVerificationUpdateToOneWithWhereWithoutUserInput, EmailVerificationUpdateWithoutUserInput>, EmailVerificationUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput
    upsert?: PasswordResetUpsertWithoutUserInput
    disconnect?: PasswordResetWhereInput | boolean
    delete?: PasswordResetWhereInput | boolean
    connect?: PasswordResetWhereUniqueInput
    update?: XOR<XOR<PasswordResetUpdateToOneWithWhereWithoutUserInput, PasswordResetUpdateWithoutUserInput>, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type ExternalAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput> | ExternalAccountCreateWithoutUserInput[] | ExternalAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExternalAccountCreateOrConnectWithoutUserInput | ExternalAccountCreateOrConnectWithoutUserInput[]
    upsert?: ExternalAccountUpsertWithWhereUniqueWithoutUserInput | ExternalAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExternalAccountCreateManyUserInputEnvelope
    set?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    disconnect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    delete?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    connect?: ExternalAccountWhereUniqueInput | ExternalAccountWhereUniqueInput[]
    update?: ExternalAccountUpdateWithWhereUniqueWithoutUserInput | ExternalAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExternalAccountUpdateManyWithWhereWithoutUserInput | ExternalAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
  }

  export type MultiFactorAuthenticationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MultiFactorAuthenticationCreateWithoutUserInput, MultiFactorAuthenticationUncheckedCreateWithoutUserInput>
    connectOrCreate?: MultiFactorAuthenticationCreateOrConnectWithoutUserInput
    upsert?: MultiFactorAuthenticationUpsertWithoutUserInput
    disconnect?: MultiFactorAuthenticationWhereInput | boolean
    delete?: MultiFactorAuthenticationWhereInput | boolean
    connect?: MultiFactorAuthenticationWhereUniqueInput
    update?: XOR<XOR<MultiFactorAuthenticationUpdateToOneWithWhereWithoutUserInput, MultiFactorAuthenticationUpdateWithoutUserInput>, MultiFactorAuthenticationUncheckedUpdateWithoutUserInput>
  }

  export type RestrictionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RestrictionCreateWithoutUserInput, RestrictionUncheckedCreateWithoutUserInput> | RestrictionCreateWithoutUserInput[] | RestrictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutUserInput | RestrictionCreateOrConnectWithoutUserInput[]
    upsert?: RestrictionUpsertWithWhereUniqueWithoutUserInput | RestrictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RestrictionCreateManyUserInputEnvelope
    set?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    disconnect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    delete?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    update?: RestrictionUpdateWithWhereUniqueWithoutUserInput | RestrictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RestrictionUpdateManyWithWhereWithoutUserInput | RestrictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExternalAccountsInput = {
    create?: XOR<UserCreateWithoutExternalAccountsInput, UserUncheckedCreateWithoutExternalAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExternalAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAccountProviderFieldUpdateOperationsInput = {
    set?: $Enums.AccountProvider
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutExternalAccountsNestedInput = {
    create?: XOR<UserCreateWithoutExternalAccountsInput, UserUncheckedCreateWithoutExternalAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExternalAccountsInput
    upsert?: UserUpsertWithoutExternalAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExternalAccountsInput, UserUpdateWithoutExternalAccountsInput>, UserUncheckedUpdateWithoutExternalAccountsInput>
  }

  export type UserCreateNestedOneWithoutEmailVerificationInput = {
    create?: XOR<UserCreateWithoutEmailVerificationInput, UserUncheckedCreateWithoutEmailVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumEmailVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailVerificationStatus
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationInput, UserUncheckedCreateWithoutEmailVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationInput
    upsert?: UserUpsertWithoutEmailVerificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationInput, UserUpdateWithoutEmailVerificationInput>, UserUncheckedUpdateWithoutEmailVerificationInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetInput = {
    create?: XOR<UserCreateWithoutPasswordResetInput, UserUncheckedCreateWithoutPasswordResetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetInput, UserUncheckedCreateWithoutPasswordResetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetInput
    upsert?: UserUpsertWithoutPasswordResetInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetInput, UserUpdateWithoutPasswordResetInput>, UserUncheckedUpdateWithoutPasswordResetInput>
  }

  export type MultiFactorAuthenticationCreaterecoveryCodesInput = {
    set: string[]
  }

  export type TotpCreateNestedOneWithoutMfaInput = {
    create?: XOR<TotpCreateWithoutMfaInput, TotpUncheckedCreateWithoutMfaInput>
    connectOrCreate?: TotpCreateOrConnectWithoutMfaInput
    connect?: TotpWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMfaInput = {
    create?: XOR<UserCreateWithoutMfaInput, UserUncheckedCreateWithoutMfaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMfaInput
    connect?: UserWhereUniqueInput
  }

  export type MultiFactorAuthenticationUpdaterecoveryCodesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TotpUpdateOneWithoutMfaNestedInput = {
    create?: XOR<TotpCreateWithoutMfaInput, TotpUncheckedCreateWithoutMfaInput>
    connectOrCreate?: TotpCreateOrConnectWithoutMfaInput
    upsert?: TotpUpsertWithoutMfaInput
    disconnect?: TotpWhereInput | boolean
    delete?: TotpWhereInput | boolean
    connect?: TotpWhereUniqueInput
    update?: XOR<XOR<TotpUpdateToOneWithWhereWithoutMfaInput, TotpUpdateWithoutMfaInput>, TotpUncheckedUpdateWithoutMfaInput>
  }

  export type UserUpdateOneRequiredWithoutMfaNestedInput = {
    create?: XOR<UserCreateWithoutMfaInput, UserUncheckedCreateWithoutMfaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMfaInput
    upsert?: UserUpsertWithoutMfaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMfaInput, UserUpdateWithoutMfaInput>, UserUncheckedUpdateWithoutMfaInput>
  }

  export type MultiFactorAuthenticationCreateNestedOneWithoutTotpInput = {
    create?: XOR<MultiFactorAuthenticationCreateWithoutTotpInput, MultiFactorAuthenticationUncheckedCreateWithoutTotpInput>
    connectOrCreate?: MultiFactorAuthenticationCreateOrConnectWithoutTotpInput
    connect?: MultiFactorAuthenticationWhereUniqueInput
  }

  export type MultiFactorAuthenticationUncheckedCreateNestedOneWithoutTotpInput = {
    create?: XOR<MultiFactorAuthenticationCreateWithoutTotpInput, MultiFactorAuthenticationUncheckedCreateWithoutTotpInput>
    connectOrCreate?: MultiFactorAuthenticationCreateOrConnectWithoutTotpInput
    connect?: MultiFactorAuthenticationWhereUniqueInput
  }

  export type EnumTotpStatusFieldUpdateOperationsInput = {
    set?: $Enums.TotpStatus
  }

  export type MultiFactorAuthenticationUpdateOneWithoutTotpNestedInput = {
    create?: XOR<MultiFactorAuthenticationCreateWithoutTotpInput, MultiFactorAuthenticationUncheckedCreateWithoutTotpInput>
    connectOrCreate?: MultiFactorAuthenticationCreateOrConnectWithoutTotpInput
    upsert?: MultiFactorAuthenticationUpsertWithoutTotpInput
    disconnect?: MultiFactorAuthenticationWhereInput | boolean
    delete?: MultiFactorAuthenticationWhereInput | boolean
    connect?: MultiFactorAuthenticationWhereUniqueInput
    update?: XOR<XOR<MultiFactorAuthenticationUpdateToOneWithWhereWithoutTotpInput, MultiFactorAuthenticationUpdateWithoutTotpInput>, MultiFactorAuthenticationUncheckedUpdateWithoutTotpInput>
  }

  export type MultiFactorAuthenticationUncheckedUpdateOneWithoutTotpNestedInput = {
    create?: XOR<MultiFactorAuthenticationCreateWithoutTotpInput, MultiFactorAuthenticationUncheckedCreateWithoutTotpInput>
    connectOrCreate?: MultiFactorAuthenticationCreateOrConnectWithoutTotpInput
    upsert?: MultiFactorAuthenticationUpsertWithoutTotpInput
    disconnect?: MultiFactorAuthenticationWhereInput | boolean
    delete?: MultiFactorAuthenticationWhereInput | boolean
    connect?: MultiFactorAuthenticationWhereUniqueInput
    update?: XOR<XOR<MultiFactorAuthenticationUpdateToOneWithWhereWithoutTotpInput, MultiFactorAuthenticationUpdateWithoutTotpInput>, MultiFactorAuthenticationUncheckedUpdateWithoutTotpInput>
  }

  export type UserCreateNestedOneWithoutRestrictionsInput = {
    create?: XOR<UserCreateWithoutRestrictionsInput, UserUncheckedCreateWithoutRestrictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRestrictionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRestrictionReasonFieldUpdateOperationsInput = {
    set?: $Enums.RestrictionReason
  }

  export type EnumRestrictionStatusFieldUpdateOperationsInput = {
    set?: $Enums.RestrictionStatus
  }

  export type UserUpdateOneRequiredWithoutRestrictionsNestedInput = {
    create?: XOR<UserCreateWithoutRestrictionsInput, UserUncheckedCreateWithoutRestrictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRestrictionsInput
    upsert?: UserUpsertWithoutRestrictionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRestrictionsInput, UserUpdateWithoutRestrictionsInput>, UserUncheckedUpdateWithoutRestrictionsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumAccountProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountProvider | EnumAccountProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AccountProvider[] | ListEnumAccountProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountProvider[] | ListEnumAccountProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountProviderFilter<$PrismaModel> | $Enums.AccountProvider
  }

  export type NestedEnumAccountProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountProvider | EnumAccountProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AccountProvider[] | ListEnumAccountProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountProvider[] | ListEnumAccountProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountProviderWithAggregatesFilter<$PrismaModel> | $Enums.AccountProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountProviderFilter<$PrismaModel>
    _max?: NestedEnumAccountProviderFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEmailVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailVerificationStatus | EnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailVerificationStatus[] | ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailVerificationStatus[] | ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailVerificationStatusFilter<$PrismaModel> | $Enums.EmailVerificationStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmailVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailVerificationStatus | EnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailVerificationStatus[] | ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailVerificationStatus[] | ListEnumEmailVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailVerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailVerificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumTotpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TotpStatus | EnumTotpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TotpStatus[] | ListEnumTotpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TotpStatus[] | ListEnumTotpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTotpStatusFilter<$PrismaModel> | $Enums.TotpStatus
  }

  export type NestedEnumTotpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TotpStatus | EnumTotpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TotpStatus[] | ListEnumTotpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TotpStatus[] | ListEnumTotpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTotpStatusWithAggregatesFilter<$PrismaModel> | $Enums.TotpStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTotpStatusFilter<$PrismaModel>
    _max?: NestedEnumTotpStatusFilter<$PrismaModel>
  }

  export type NestedEnumRestrictionReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.RestrictionReason | EnumRestrictionReasonFieldRefInput<$PrismaModel>
    in?: $Enums.RestrictionReason[] | ListEnumRestrictionReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestrictionReason[] | ListEnumRestrictionReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumRestrictionReasonFilter<$PrismaModel> | $Enums.RestrictionReason
  }

  export type NestedEnumRestrictionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RestrictionStatus | EnumRestrictionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RestrictionStatus[] | ListEnumRestrictionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestrictionStatus[] | ListEnumRestrictionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRestrictionStatusFilter<$PrismaModel> | $Enums.RestrictionStatus
  }

  export type NestedEnumRestrictionReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RestrictionReason | EnumRestrictionReasonFieldRefInput<$PrismaModel>
    in?: $Enums.RestrictionReason[] | ListEnumRestrictionReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestrictionReason[] | ListEnumRestrictionReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumRestrictionReasonWithAggregatesFilter<$PrismaModel> | $Enums.RestrictionReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRestrictionReasonFilter<$PrismaModel>
    _max?: NestedEnumRestrictionReasonFilter<$PrismaModel>
  }

  export type NestedEnumRestrictionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RestrictionStatus | EnumRestrictionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RestrictionStatus[] | ListEnumRestrictionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RestrictionStatus[] | ListEnumRestrictionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRestrictionStatusWithAggregatesFilter<$PrismaModel> | $Enums.RestrictionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRestrictionStatusFilter<$PrismaModel>
    _max?: NestedEnumRestrictionStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmailVerificationCreateWithoutUserInput = {
    id?: string
    token: string
    expiry?: Date | string | null
    status?: $Enums.EmailVerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailVerificationUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiry?: Date | string | null
    status?: $Enums.EmailVerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailVerificationCreateOrConnectWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput
    create: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetCreateWithoutUserInput = {
    id?: string
    token: string
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordResetUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordResetCreateOrConnectWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
  }

  export type ExternalAccountCreateWithoutUserInput = {
    id?: string
    provider: $Enums.AccountProvider
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiry?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExternalAccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.AccountProvider
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiry?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExternalAccountCreateOrConnectWithoutUserInput = {
    where: ExternalAccountWhereUniqueInput
    create: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput>
  }

  export type ExternalAccountCreateManyUserInputEnvelope = {
    data: ExternalAccountCreateManyUserInput | ExternalAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MultiFactorAuthenticationCreateWithoutUserInput = {
    id?: string
    recoveryCodes?: MultiFactorAuthenticationCreaterecoveryCodesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    totp?: TotpCreateNestedOneWithoutMfaInput
  }

  export type MultiFactorAuthenticationUncheckedCreateWithoutUserInput = {
    id?: string
    recoveryCodes?: MultiFactorAuthenticationCreaterecoveryCodesInput | string[]
    totpId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MultiFactorAuthenticationCreateOrConnectWithoutUserInput = {
    where: MultiFactorAuthenticationWhereUniqueInput
    create: XOR<MultiFactorAuthenticationCreateWithoutUserInput, MultiFactorAuthenticationUncheckedCreateWithoutUserInput>
  }

  export type RestrictionCreateWithoutUserInput = {
    id?: string
    reason: $Enums.RestrictionReason
    until?: Date | string | null
    status?: $Enums.RestrictionStatus
    createdAt?: Date | string
  }

  export type RestrictionUncheckedCreateWithoutUserInput = {
    id?: string
    reason: $Enums.RestrictionReason
    until?: Date | string | null
    status?: $Enums.RestrictionStatus
    createdAt?: Date | string
  }

  export type RestrictionCreateOrConnectWithoutUserInput = {
    where: RestrictionWhereUniqueInput
    create: XOR<RestrictionCreateWithoutUserInput, RestrictionUncheckedCreateWithoutUserInput>
  }

  export type RestrictionCreateManyUserInputEnvelope = {
    data: RestrictionCreateManyUserInput | RestrictionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationUpsertWithoutUserInput = {
    update: XOR<EmailVerificationUpdateWithoutUserInput, EmailVerificationUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
    where?: EmailVerificationWhereInput
  }

  export type EmailVerificationUpdateToOneWithWhereWithoutUserInput = {
    where?: EmailVerificationWhereInput
    data: XOR<EmailVerificationUpdateWithoutUserInput, EmailVerificationUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmailVerificationStatusFieldUpdateOperationsInput | $Enums.EmailVerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumEmailVerificationStatusFieldUpdateOperationsInput | $Enums.EmailVerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUpsertWithoutUserInput = {
    update: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    where?: PasswordResetWhereInput
  }

  export type PasswordResetUpdateToOneWithWhereWithoutUserInput = {
    where?: PasswordResetWhereInput
    data: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: ExternalAccountWhereUniqueInput
    update: XOR<ExternalAccountUpdateWithoutUserInput, ExternalAccountUncheckedUpdateWithoutUserInput>
    create: XOR<ExternalAccountCreateWithoutUserInput, ExternalAccountUncheckedCreateWithoutUserInput>
  }

  export type ExternalAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: ExternalAccountWhereUniqueInput
    data: XOR<ExternalAccountUpdateWithoutUserInput, ExternalAccountUncheckedUpdateWithoutUserInput>
  }

  export type ExternalAccountUpdateManyWithWhereWithoutUserInput = {
    where: ExternalAccountScalarWhereInput
    data: XOR<ExternalAccountUpdateManyMutationInput, ExternalAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type ExternalAccountScalarWhereInput = {
    AND?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
    OR?: ExternalAccountScalarWhereInput[]
    NOT?: ExternalAccountScalarWhereInput | ExternalAccountScalarWhereInput[]
    id?: StringFilter<"ExternalAccount"> | string
    provider?: EnumAccountProviderFilter<"ExternalAccount"> | $Enums.AccountProvider
    providerAccountId?: StringFilter<"ExternalAccount"> | string
    refreshToken?: StringNullableFilter<"ExternalAccount"> | string | null
    accessToken?: StringNullableFilter<"ExternalAccount"> | string | null
    expiry?: IntNullableFilter<"ExternalAccount"> | number | null
    userId?: StringFilter<"ExternalAccount"> | string
    createdAt?: DateTimeFilter<"ExternalAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalAccount"> | Date | string
  }

  export type MultiFactorAuthenticationUpsertWithoutUserInput = {
    update: XOR<MultiFactorAuthenticationUpdateWithoutUserInput, MultiFactorAuthenticationUncheckedUpdateWithoutUserInput>
    create: XOR<MultiFactorAuthenticationCreateWithoutUserInput, MultiFactorAuthenticationUncheckedCreateWithoutUserInput>
    where?: MultiFactorAuthenticationWhereInput
  }

  export type MultiFactorAuthenticationUpdateToOneWithWhereWithoutUserInput = {
    where?: MultiFactorAuthenticationWhereInput
    data: XOR<MultiFactorAuthenticationUpdateWithoutUserInput, MultiFactorAuthenticationUncheckedUpdateWithoutUserInput>
  }

  export type MultiFactorAuthenticationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: MultiFactorAuthenticationUpdaterecoveryCodesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totp?: TotpUpdateOneWithoutMfaNestedInput
  }

  export type MultiFactorAuthenticationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: MultiFactorAuthenticationUpdaterecoveryCodesInput | string[]
    totpId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionUpsertWithWhereUniqueWithoutUserInput = {
    where: RestrictionWhereUniqueInput
    update: XOR<RestrictionUpdateWithoutUserInput, RestrictionUncheckedUpdateWithoutUserInput>
    create: XOR<RestrictionCreateWithoutUserInput, RestrictionUncheckedCreateWithoutUserInput>
  }

  export type RestrictionUpdateWithWhereUniqueWithoutUserInput = {
    where: RestrictionWhereUniqueInput
    data: XOR<RestrictionUpdateWithoutUserInput, RestrictionUncheckedUpdateWithoutUserInput>
  }

  export type RestrictionUpdateManyWithWhereWithoutUserInput = {
    where: RestrictionScalarWhereInput
    data: XOR<RestrictionUpdateManyMutationInput, RestrictionUncheckedUpdateManyWithoutUserInput>
  }

  export type RestrictionScalarWhereInput = {
    AND?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
    OR?: RestrictionScalarWhereInput[]
    NOT?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
    id?: StringFilter<"Restriction"> | string
    reason?: EnumRestrictionReasonFilter<"Restriction"> | $Enums.RestrictionReason
    until?: DateTimeNullableFilter<"Restriction"> | Date | string | null
    status?: EnumRestrictionStatusFilter<"Restriction"> | $Enums.RestrictionStatus
    userId?: StringFilter<"Restriction"> | string
    createdAt?: DateTimeFilter<"Restriction"> | Date | string
  }

  export type UserCreateWithoutExternalAccountsInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationCreateNestedOneWithoutUserInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
    mfa?: MultiFactorAuthenticationCreateNestedOneWithoutUserInput
    restrictions?: RestrictionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExternalAccountsInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationUncheckedCreateNestedOneWithoutUserInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
    mfa?: MultiFactorAuthenticationUncheckedCreateNestedOneWithoutUserInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExternalAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExternalAccountsInput, UserUncheckedCreateWithoutExternalAccountsInput>
  }

  export type UserUpsertWithoutExternalAccountsInput = {
    update: XOR<UserUpdateWithoutExternalAccountsInput, UserUncheckedUpdateWithoutExternalAccountsInput>
    create: XOR<UserCreateWithoutExternalAccountsInput, UserUncheckedCreateWithoutExternalAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExternalAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExternalAccountsInput, UserUncheckedUpdateWithoutExternalAccountsInput>
  }

  export type UserUpdateWithoutExternalAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUpdateOneWithoutUserNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUpdateOneWithoutUserNestedInput
    restrictions?: RestrictionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExternalAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUncheckedUpdateOneWithoutUserNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUncheckedUpdateOneWithoutUserNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmailVerificationInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountCreateNestedManyWithoutUserInput
    mfa?: MultiFactorAuthenticationCreateNestedOneWithoutUserInput
    restrictions?: RestrictionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountUncheckedCreateNestedManyWithoutUserInput
    mfa?: MultiFactorAuthenticationUncheckedCreateNestedOneWithoutUserInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationInput, UserUncheckedCreateWithoutEmailVerificationInput>
  }

  export type UserUpsertWithoutEmailVerificationInput = {
    update: XOR<UserUpdateWithoutEmailVerificationInput, UserUncheckedUpdateWithoutEmailVerificationInput>
    create: XOR<UserCreateWithoutEmailVerificationInput, UserUncheckedCreateWithoutEmailVerificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationInput, UserUncheckedUpdateWithoutEmailVerificationInput>
  }

  export type UserUpdateWithoutEmailVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUpdateManyWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUpdateOneWithoutUserNestedInput
    restrictions?: RestrictionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUncheckedUpdateManyWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUncheckedUpdateOneWithoutUserNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountCreateNestedManyWithoutUserInput
    mfa?: MultiFactorAuthenticationCreateNestedOneWithoutUserInput
    restrictions?: RestrictionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationUncheckedCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountUncheckedCreateNestedManyWithoutUserInput
    mfa?: MultiFactorAuthenticationUncheckedCreateNestedOneWithoutUserInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetInput, UserUncheckedCreateWithoutPasswordResetInput>
  }

  export type UserUpsertWithoutPasswordResetInput = {
    update: XOR<UserUpdateWithoutPasswordResetInput, UserUncheckedUpdateWithoutPasswordResetInput>
    create: XOR<UserCreateWithoutPasswordResetInput, UserUncheckedCreateWithoutPasswordResetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetInput, UserUncheckedUpdateWithoutPasswordResetInput>
  }

  export type UserUpdateWithoutPasswordResetInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUpdateManyWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUpdateOneWithoutUserNestedInput
    restrictions?: RestrictionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUncheckedUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUncheckedUpdateManyWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUncheckedUpdateOneWithoutUserNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TotpCreateWithoutMfaInput = {
    id?: string
    status?: $Enums.TotpStatus
    secret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TotpUncheckedCreateWithoutMfaInput = {
    id?: string
    status?: $Enums.TotpStatus
    secret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TotpCreateOrConnectWithoutMfaInput = {
    where: TotpWhereUniqueInput
    create: XOR<TotpCreateWithoutMfaInput, TotpUncheckedCreateWithoutMfaInput>
  }

  export type UserCreateWithoutMfaInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationCreateNestedOneWithoutUserInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountCreateNestedManyWithoutUserInput
    restrictions?: RestrictionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMfaInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationUncheckedCreateNestedOneWithoutUserInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountUncheckedCreateNestedManyWithoutUserInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMfaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMfaInput, UserUncheckedCreateWithoutMfaInput>
  }

  export type TotpUpsertWithoutMfaInput = {
    update: XOR<TotpUpdateWithoutMfaInput, TotpUncheckedUpdateWithoutMfaInput>
    create: XOR<TotpCreateWithoutMfaInput, TotpUncheckedCreateWithoutMfaInput>
    where?: TotpWhereInput
  }

  export type TotpUpdateToOneWithWhereWithoutMfaInput = {
    where?: TotpWhereInput
    data: XOR<TotpUpdateWithoutMfaInput, TotpUncheckedUpdateWithoutMfaInput>
  }

  export type TotpUpdateWithoutMfaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTotpStatusFieldUpdateOperationsInput | $Enums.TotpStatus
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TotpUncheckedUpdateWithoutMfaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTotpStatusFieldUpdateOperationsInput | $Enums.TotpStatus
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMfaInput = {
    update: XOR<UserUpdateWithoutMfaInput, UserUncheckedUpdateWithoutMfaInput>
    create: XOR<UserCreateWithoutMfaInput, UserUncheckedCreateWithoutMfaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMfaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMfaInput, UserUncheckedUpdateWithoutMfaInput>
  }

  export type UserUpdateWithoutMfaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUpdateOneWithoutUserNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUpdateManyWithoutUserNestedInput
    restrictions?: RestrictionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMfaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUncheckedUpdateOneWithoutUserNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUncheckedUpdateManyWithoutUserNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MultiFactorAuthenticationCreateWithoutTotpInput = {
    id?: string
    recoveryCodes?: MultiFactorAuthenticationCreaterecoveryCodesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMfaInput
  }

  export type MultiFactorAuthenticationUncheckedCreateWithoutTotpInput = {
    id?: string
    recoveryCodes?: MultiFactorAuthenticationCreaterecoveryCodesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MultiFactorAuthenticationCreateOrConnectWithoutTotpInput = {
    where: MultiFactorAuthenticationWhereUniqueInput
    create: XOR<MultiFactorAuthenticationCreateWithoutTotpInput, MultiFactorAuthenticationUncheckedCreateWithoutTotpInput>
  }

  export type MultiFactorAuthenticationUpsertWithoutTotpInput = {
    update: XOR<MultiFactorAuthenticationUpdateWithoutTotpInput, MultiFactorAuthenticationUncheckedUpdateWithoutTotpInput>
    create: XOR<MultiFactorAuthenticationCreateWithoutTotpInput, MultiFactorAuthenticationUncheckedCreateWithoutTotpInput>
    where?: MultiFactorAuthenticationWhereInput
  }

  export type MultiFactorAuthenticationUpdateToOneWithWhereWithoutTotpInput = {
    where?: MultiFactorAuthenticationWhereInput
    data: XOR<MultiFactorAuthenticationUpdateWithoutTotpInput, MultiFactorAuthenticationUncheckedUpdateWithoutTotpInput>
  }

  export type MultiFactorAuthenticationUpdateWithoutTotpInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: MultiFactorAuthenticationUpdaterecoveryCodesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMfaNestedInput
  }

  export type MultiFactorAuthenticationUncheckedUpdateWithoutTotpInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCodes?: MultiFactorAuthenticationUpdaterecoveryCodesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRestrictionsInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationCreateNestedOneWithoutUserInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountCreateNestedManyWithoutUserInput
    mfa?: MultiFactorAuthenticationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRestrictionsInput = {
    id?: string
    email: string
    password?: string | null
    username: string
    displayName: string
    avatar?: string | null
    points?: number
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerification?: EmailVerificationUncheckedCreateNestedOneWithoutUserInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
    externalAccounts?: ExternalAccountUncheckedCreateNestedManyWithoutUserInput
    mfa?: MultiFactorAuthenticationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRestrictionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRestrictionsInput, UserUncheckedCreateWithoutRestrictionsInput>
  }

  export type UserUpsertWithoutRestrictionsInput = {
    update: XOR<UserUpdateWithoutRestrictionsInput, UserUncheckedUpdateWithoutRestrictionsInput>
    create: XOR<UserCreateWithoutRestrictionsInput, UserUncheckedCreateWithoutRestrictionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRestrictionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRestrictionsInput, UserUncheckedUpdateWithoutRestrictionsInput>
  }

  export type UserUpdateWithoutRestrictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUpdateOneWithoutUserNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUpdateManyWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRestrictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerification?: EmailVerificationUncheckedUpdateOneWithoutUserNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
    externalAccounts?: ExternalAccountUncheckedUpdateManyWithoutUserNestedInput
    mfa?: MultiFactorAuthenticationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ExternalAccountCreateManyUserInput = {
    id?: string
    provider: $Enums.AccountProvider
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    expiry?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestrictionCreateManyUserInput = {
    id?: string
    reason: $Enums.RestrictionReason
    until?: Date | string | null
    status?: $Enums.RestrictionStatus
    createdAt?: Date | string
  }

  export type ExternalAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAccountProviderFieldUpdateOperationsInput | $Enums.AccountProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAccountProviderFieldUpdateOperationsInput | $Enums.AccountProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAccountProviderFieldUpdateOperationsInput | $Enums.AccountProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumRestrictionReasonFieldUpdateOperationsInput | $Enums.RestrictionReason
    until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRestrictionStatusFieldUpdateOperationsInput | $Enums.RestrictionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumRestrictionReasonFieldUpdateOperationsInput | $Enums.RestrictionReason
    until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRestrictionStatusFieldUpdateOperationsInput | $Enums.RestrictionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumRestrictionReasonFieldUpdateOperationsInput | $Enums.RestrictionReason
    until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRestrictionStatusFieldUpdateOperationsInput | $Enums.RestrictionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
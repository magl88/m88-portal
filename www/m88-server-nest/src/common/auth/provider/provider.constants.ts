import { FactoryProvider, ModuleMetadata } from "@nestjs/common";

import { BaseOAuthService } from "./services/base-oauth.service";

/**
 * Symbol for identifying provider options.
 */
export const ProviderOptionsSymbol = Symbol();

/**
 * Type for provider options.
 *
 * This type describes the base URL and an array of OAuth services.
 */
export type TypeOptions = {
	baseUrl: string;
	services: BaseOAuthService[];
};

/**
 * Type for asynchronous provider options.
 *
 * This type describes asynchronous options, including imports and factory functions.
 */
export type TypeAsyncOptions = Pick<ModuleMetadata, "imports"> &
	Pick<FactoryProvider<TypeOptions>, "useFactory" | "inject">;

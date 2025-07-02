import { DynamicModule, Module } from "@nestjs/common";

import {
	ProviderOptionsSymbol,
	TypeAsyncOptions,
	TypeOptions,
} from "./provider.constants";
import { ProviderService } from "./provider.service";

/**
 * Module for managing OAuth providers.
 */
@Module({})
export class ProviderModule {
	/**
	 * Registration of a module with synchronous provider options.
	 *
	 * @param options - Provider options containing the base URL and services.
	 * @returns Dynamic module of providers.
	 */
	public static register(options: TypeOptions): DynamicModule {
		return {
			module: ProviderModule,
			providers: [
				{
					useValue: options.services,
					provide: ProviderOptionsSymbol,
				},
				ProviderService,
			],
			exports: [ProviderService],
		};
	}

	/**
	 * Registration of a module with asynchronous provider options.
	 *
	 * @param options - Asynchronous provider options, including imports and factory functions.
	 * @returns Dynamic module of providers.
	 */
	public static registerAsync(options: TypeAsyncOptions): DynamicModule {
		return {
			module: ProviderModule,
			imports: options.imports,
			providers: [
				{
					useFactory: options.useFactory,
					provide: ProviderOptionsSymbol,
					inject: options.inject,
				},
				ProviderService,
			],
			exports: [ProviderService],
		};
	}
}

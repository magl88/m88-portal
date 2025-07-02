import { Inject, Injectable, OnModuleInit } from "@nestjs/common";

import { ProviderOptionsSymbol, TypeOptions } from "./provider.constants";
import { BaseOAuthService } from "./services/base-oauth.service";

/**
 * Service for managing OAuth providers.
 */
@Injectable()
export class ProviderService implements OnModuleInit {
	/**
	 * Constructor for the provider service.
	 *
	 * @param options - Provider options containing the base URL and services.
	 */
	public constructor(
		@Inject(ProviderOptionsSymbol) private readonly options: TypeOptions,
	) {}

	/**
	 * Initialization of the module.
	 *
	 * Sets the base URL for all provider services.
	 */
	public onModuleInit() {
		for (const provider of this.options.services) {
			provider.baseUrl = this.options.baseUrl;
		}
	}

	/**
	 * Finds a provider service by name.
	 *
	 * @param service - Name of the provider service.
	 * @returns Provider service or null if not found.
	 */
	public findByService(service: string): BaseOAuthService | null {
		return this.options.services.find((s) => s.name === service) ?? null;
	}
}

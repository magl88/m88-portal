import { ConfigService } from "@nestjs/config";

import { getOAuthGoogleConfig } from "@/shared/configs/";

import { TypeOptions } from "./provider.constants";
import { GoogleProvider } from "./services/google.provider";

/**
 * Configuration for OAuth providers.
 *
 * This function asynchronously extracts configuration parameters from ConfigService
 * and forms an object of configuration for OAuth providers.
 *
 * @param configService - Service for working with the application configuration.
 * @returns Object of configuration for OAuth providers.
 */
export const getProvidersConfig = async (
	configService: ConfigService,
): Promise<TypeOptions> => {
	const host = configService.getOrThrow<string>("APPLICATION_HOST");
	const port = configService.getOrThrow<number>("APPLICATION_PORT");

	const baseUrl = `${host}:${port}`;

	return {
		baseUrl,
		services: [new GoogleProvider(getOAuthGoogleConfig(configService))],
	};
};

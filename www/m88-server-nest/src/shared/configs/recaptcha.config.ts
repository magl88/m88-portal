import { ConfigService } from "@nestjs/config";
import { GoogleRecaptchaModuleOptions } from "@nestlab/google-recaptcha";

import { isDev } from "../utils";

/**
 * Configuration for Google reCAPTCHA.
 *
 * This function asynchronously extracts configuration parameters from ConfigService
 * and forms an object configuration for the Google reCAPTCHA module.
 *
 * @param configService - Service for working with the application configuration.
 * @returns Object configuration for Google reCAPTCHA.
 */
export const getRecaptchaConfig = async (
	configService: ConfigService,
): Promise<GoogleRecaptchaModuleOptions> => ({
	secretKey: configService.getOrThrow<string>("GOOGLE_RECAPTCHA_SECRET_KEY"),
	response: (req) => req.headers.recaptcha,
	skipIf: isDev(configService),
});

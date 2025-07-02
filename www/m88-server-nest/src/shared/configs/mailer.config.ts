import { MailerOptions } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { I18nService } from "nestjs-i18n";

import { isDev } from "../utils";

/**
 * Configuration for the mail server.
 *
 * This function asynchronously extracts configuration parameters from ConfigService
 * and forms an object configuration for Mailer.
 *
 * @param configService - Service for working with the application configuration.
 * @returns Object configuration for Mailer.
 */
export const getMailerConfig = async (
	configService: ConfigService,
	i18nService: I18nService,
): Promise<MailerOptions> => ({
	transport: {
		host: configService.getOrThrow<string>("MAIL_HOST"),
		port: configService.getOrThrow<number>("MAIL_PORT"),
		secure: !isDev(configService),
		auth: {
			user: configService.getOrThrow<string>("MAIL_LOGIN"),
			pass: configService.getOrThrow<string>("MAIL_PASSWORD"),
		},
	},
	defaults: {
		from: `"M88 Portal" ${configService.getOrThrow<string>("MAIL_LOGIN")}`,
	},
});

import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { I18nService } from "nestjs-i18n";

import { getMailerConfig } from "../../configs";

import { MailService } from "./mail.service";

@Module({
	imports: [
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getMailerConfig,
			inject: [ConfigService, I18nService],
		}),
	],
	providers: [MailService],
})
export class MailModule {}

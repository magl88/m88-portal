import { Module } from "@nestjs/common";
import {
	AcceptLanguageResolver,
	CookieResolver,
	HeaderResolver,
	I18nModule,
	QueryResolver,
} from "nestjs-i18n";
import { join } from "path";

import { MailModule } from "./mail/mail.module";

@Module({
	imports: [
		MailModule,
		I18nModule.forRoot({
			fallbackLanguage: "en",
			fallbacks: {
				"en-*": "en",
				"ru-*": "ru",
			},
			loaderOptions: {
				path: join(__dirname, "i18n"),
				watch: true,
			},
			typesOutputPath: join(__dirname, "../../../src/shared/libs/i18n/i18n.types.ts"),
			resolvers: [
				{ use: QueryResolver, options: ["lang"] },
				{ use: HeaderResolver, options: ["lang"] },
				{ use: CookieResolver, options: ["NEXT_LOCALE"] },
				AcceptLanguageResolver,
			],
		}),
	],
})
export class LibsModule {}

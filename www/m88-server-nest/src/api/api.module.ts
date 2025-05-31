import { TurnstileModule } from "@magl88/nestjs-cloudflare-captcha";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";

import { getTurnstileConfig } from "@/config";

import { AccountModule } from "./auth/account/account.module";
import { ExternalModule } from "./auth/external/external.module";
import { MfaModule } from "./auth/mfa/mfa.module";
import { SessionModule } from "./auth/session/session.module";
import { PageModule } from "./page/page.module";
import { RestrictionModule } from "./restriction/restriction.module";
import { StatisticsModule } from "./statistics/statistics.module";
import { UsersModule } from "./users/users.module";

@Module({
	imports: [
		TurnstileModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getTurnstileConfig,
			inject: [ConfigService],
		}),
		ScheduleModule.forRoot(),
		AccountModule,
		ExternalModule,
		SessionModule,
		MfaModule,
		RestrictionModule,
		UsersModule,
		StatisticsModule,
		PageModule,
	],
})
export class ApiModule {}

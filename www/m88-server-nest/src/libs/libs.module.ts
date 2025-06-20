import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { getBullmqConfig } from "@/config/bullmq.config";

import { MailModule } from "./mail/mail.module";
import { StorageModule } from "./storage/storage.module";

@Module({
	imports: [
		BullModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getBullmqConfig,
			inject: [ConfigService],
		}),
		MailModule,
		StorageModule,
	],
})
export class LibsModule {}

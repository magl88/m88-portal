import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { CommonModule } from "./common/common.module";
import { CoreModule } from "./core/core.module";
import { InfraModule } from "./shared/infra/infra.module";
import { LibsModule } from "./shared/libs/libs.module";
import { IS_DEV_ENV } from "./shared/utils";

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true,
		}),
		CoreModule,
		CommonModule,
		InfraModule,
		LibsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

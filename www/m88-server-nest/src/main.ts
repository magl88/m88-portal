import {
	ClassSerializerInterceptor,
	Logger,
	ValidationPipe,
	VersioningType,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory, Reflector } from "@nestjs/core";
import helmet from "helmet";

import { AppModule } from "./app.module";
import { LoggingInterceptor } from "./common/interceptors";
import { setupSwagger } from "./common/utils";
import { getCorsConfig, getHelmetConfig, getValidationPipeConfig } from "./config";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = app.get(ConfigService);
	const logger = new Logger(AppModule.name);

	app.use(helmet(getHelmetConfig()));
	app.setGlobalPrefix("api", {
		exclude: [{ path: "swagger", method: 6 }],
	});
	// app.enableVersioning({
	// 	type: VersioningType.URI,
	// 	defaultVersion: "1",
	// });
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

	app.useGlobalInterceptors(new LoggingInterceptor());

	app.useGlobalPipes(new ValidationPipe(getValidationPipeConfig()));

	app.enableCors(getCorsConfig(config));

	setupSwagger(app);

	const port = config.getOrThrow<number>("APPLICATION_PORT");
	const host = config.getOrThrow<string>("APPLICATION_URL");

	try {
		await app.listen(port ?? 3000);

		logger.log(`🚀 Server is running at: ${host}/api`);
		logger.log(`📄 Swagger is available at: ${host}/swagger`);
	} catch (error) {
		logger.error(`❌ Failed to start server: ${error.message}`, error);
		process.exit(1);
	}
}

bootstrap();

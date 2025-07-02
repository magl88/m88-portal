import { ClassSerializerInterceptor, Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory, Reflector } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import helmet from "helmet";
import { I18nValidationExceptionFilter, I18nValidationPipe } from "nestjs-i18n";

import { AppModule } from "./app.module";
import {
	getCorsConfig,
	getHelmetConfig,
	getSessionConfig,
	getValidationPipeConfig,
} from "./shared/configs";
import { LoggingInterceptor } from "./shared/interceptors/logging.interceptor";
import { setupSwagger } from "./shared/utils";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = app.get(ConfigService);
	const logger = new Logger(AppModule.name);

	app.setGlobalPrefix("api");

	app.use(helmet(getHelmetConfig()));
	app.enableCors(getCorsConfig(config));

	app.use(cookieParser(config.getOrThrow<string>("COOKIES_SECRET")));

	app.useGlobalPipes(new ValidationPipe(getValidationPipeConfig()));
	app.useGlobalPipes(new I18nValidationPipe());

	app.useGlobalInterceptors(new LoggingInterceptor());
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

	app.useGlobalFilters(new I18nValidationExceptionFilter());

	app.use(session(await getSessionConfig(config)));

	setupSwagger(app);

	try {
		const host = config.getOrThrow<string>("APPLICATION_HOST");
		const port = config.getOrThrow<number>("APPLICATION_PORT");

		await app.listen(port ?? 3000);

		logger.log(`🚀 Server is running at: ${host}:${port}/api`);
		logger.log(`📄 Swagger is available at: ${host}:${port}/swagger`);
	} catch (error) {
		logger.error(`❌ Failed to start server: ${error.message}`, error);
		process.exit(1);
	}
}

bootstrap();

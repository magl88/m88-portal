import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MinioModule } from "nestjs-minio-client";

import { getS3MinioConfig } from "@/shared/configs/s3minio.config";

import { S3MinioService } from "./s3minio.service";

@Module({
	imports: [
		MinioModule.registerAsync({
			imports: [ConfigModule],
			useFactory: getS3MinioConfig,
			inject: [ConfigService],
		}),
	],
	providers: [S3MinioService],
	exports: [S3MinioService],
})
export class S3MinioModule {}

import { ConfigService } from "@nestjs/config";

export const getS3MinioConfig = async (configService: ConfigService) => ({
	endPoint: configService.getOrThrow<string>("MINIO_ENDPOINT"),
	port: configService.getOrThrow<number>("MINIO_PORT"),
	accessKey: configService.getOrThrow<string>("MINIO_ACCESS_KEY"),
	secretKey: configService.getOrThrow<string>("MINIO_SECRET_KEY"),
	useSSL: configService.getOrThrow<boolean>("MINIO_USE_SSL"),
});

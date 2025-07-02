import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as Minio from "minio";

import { parseBoolean } from "@/shared/utils";
import { slugify } from "@/shared/utils/slugify";

@Injectable()
export class MinioService {
	private minioClient: Minio.Client;
	private bucketName: string;

	constructor(private readonly configService: ConfigService) {
		this.minioClient = new Minio.Client({
			endPoint: this.configService.getOrThrow<string>("MINIO_ENDPOINT"),
			port: Number(this.configService.getOrThrow<string>("MINIO_PORT")),
			useSSL: parseBoolean(this.configService.getOrThrow<string>("MINIO_USE_SSL")),
			accessKey: this.configService.getOrThrow<string>("MINIO_ACCESS_KEY"),
			secretKey: this.configService.getOrThrow<string>("MINIO_SECRET_KEY"),
		});
		this.bucketName = this.configService.getOrThrow<string>("MINIO_BUCKET");
	}

	async createBucketIfNotExists() {
		const bucketExists = await this.minioClient.bucketExists(this.bucketName);
		if (!bucketExists) {
			await this.minioClient.makeBucket(this.bucketName, "eu-west-1");
		}
	}

	async uploadFile(file: Express.Multer.File) {
		const fileName = `${Date.now()}-${file.originalname.replace(/[\s]+/gi, "-")}`;
		const result = await this.minioClient.putObject(
			this.bucketName,
			fileName,
			file.buffer,
			file.size,
			{
				originalname: file.originalname,
				fieldname: file.fieldname,
				encoding: file.encoding,
				mimetype: file.mimetype,
				size: file.size,
			},
		);

		return fileName;
	}

	async getFileUrl(fileName: string) {
		const url = await this.minioClient.presignedUrl("GET", this.bucketName, fileName);

		return url;
	}

	async deleteFile(fileName: string) {
		await this.minioClient.removeObject(this.bucketName, fileName);
	}
}

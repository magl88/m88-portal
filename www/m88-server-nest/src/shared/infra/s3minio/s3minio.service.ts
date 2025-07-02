import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as crypto from "crypto";
import { MinioClient, MinioService } from "nestjs-minio-client";

import { BufferedFile } from "./s3minio.model";

@Injectable()
export class S3MinioService {
	public constructor(
		private readonly configService: ConfigService,
		private readonly minio: MinioService,
	) {
		this.logger = new Logger("MinioStorageService");
		this.baseBucket = this.configService.getOrThrow<string>("MINIO_BUCKET");
		this.baseUrl = this.configService.getOrThrow<string>("MINIO_ENDPOINT");
		this.port = this.configService.getOrThrow<string>("MINIO_PORT");
	}

	private readonly logger: Logger;
	private readonly baseBucket;
	private readonly baseUrl;
	private readonly port;

	public get client(): MinioClient {
		return this.minio.client;
	}

	public async upload(file: BufferedFile, baseBucket: string = this.baseBucket) {
		if (!(file.mimetype.includes("jpeg") || file.mimetype.includes("png"))) {
			throw new HttpException("Error uploading file", HttpStatus.BAD_REQUEST);
		}
		let temp_filename = Date.now().toString();
		let hashedFileName = crypto.createHash("md5").update(temp_filename).digest("hex");
		let ext = file.originalname.substring(
			file.originalname.lastIndexOf("."),
			file.originalname.length,
		);
		const metaData = {
			"Content-Type": file.mimetype,
			"X-Amz-Meta-Testing": 1234,
		};
		let filename = hashedFileName + ext;
		const fileName: string = `${filename}`;
		const fileBuffer = file.buffer;
		this.client.putObject(
			baseBucket,
			fileName,
			fileBuffer,
			metaData as any,
			function (err, res) {
				if (err) throw new HttpException("Error uploading file", HttpStatus.BAD_REQUEST);
			},
		);

		return {
			url: `${this.baseUrl}:${this.port}/${this.baseBucket}/${filename}`,
		};
	}

	// async delete(objetName: string, baseBucket: string = this.baseBucket, removeOpts?: RemoveOptions) {
	// 	this.client.removeObject(baseBucket, objetName, removeOpts, (err: any, res: any) => {
	// 		if (err)
	// 			throw new HttpException("Oops Something wrong happend", HttpStatus.BAD_REQUEST);
	// 	});

	// 	return {
	// 		msg: "Successfully deleted",
	// 	};
	// }
}

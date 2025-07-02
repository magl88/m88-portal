import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import { MinioService } from "@/shared/infra/minio/minio.service";

@Injectable()
export class FileService {
	constructor(private readonly minioService: MinioService) {}

	async uploadFile(file: Express.Multer.File) {
		console.log("filAAAAAAAAAAAAAAAAAAAAAAAAAAA", file);
		const fileName = await this.minioService.uploadFile(file);
		return {
			fileName,
		};
	}

	async uploadFiles(files: Express.Multer.File[]) {
		console.log("filAAAAAAAAAAAAAAAAAAAAAAAAAAA", files);
		// const fileName = await this.minioService.uploadFile(file);
		// return {
		// 	fileName,
		// };
	}

	async getFile(fileName: string) {
		const fileUrl = await this.minioService.getFileUrl(fileName);
		return fileUrl;
	}

	async deleteFile(fileName: string) {
		await this.minioService.deleteFile(fileName);
	}
}

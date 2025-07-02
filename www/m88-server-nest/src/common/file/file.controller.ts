import {
	Controller,
	Delete,
	Get,
	Param,
	Post,
	UploadedFile,
	UploadedFiles,
	UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import {
	ApiBody,
	ApiConsumes,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
} from "@nestjs/swagger";

import { FileService } from "./file.service";

@ApiTags("File")
@Controller("file")
export class FileController {
	constructor(private readonly fileService: FileService) {}

	@ApiOperation({
		summary: "Upload File",
		description: "Upload a file to the server.",
	})
	@ApiOkResponse({
		description: "File uploaded successfully",
		type: String,
	})
	@ApiBody({
		type: "multipart/form-data",
		required: true,
		schema: {
			type: "object",
			properties: {
				file: {
					type: "string",
					format: "binary",
				},
			},
		},
	})
	@ApiConsumes("multipart/form-data")
	@UseInterceptors(FileInterceptor("file"))
	@Post()
	async uploadFile(@UploadedFile() file: Express.Multer.File) {
		return this.fileService.uploadFile(file);
	}

	@ApiOperation({
		summary: "Upload Files",
		description: "Upload multiple files to the server.",
	})
	@ApiOkResponse({
		description: "Files uploaded successfully",
		type: [String],
	})
	@ApiOkResponse({
		description: "File uploaded successfully",
		type: String,
	})
	@ApiBody({
		type: "multipart/form-data",
		required: true,
		schema: {
			type: "object",
			properties: {
				files: {
					type: "array",
					items: {
						type: "string",
						format: "binary",
					},
				},
			},
		},
	})
	@ApiConsumes("multipart/form-data")
	@UseInterceptors(FilesInterceptor("files"))
	@Post("files")
	async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
		return this.fileService.uploadFiles(files);
	}

	@ApiOperation({
		summary: "Get File",
		description: "Get a file from the server.",
	})
	@ApiOkResponse({
		description: "File retrieved successfully",
		type: String,
	})
	@Get(":fileName")
	async getFile(@Param("fileName") fileName: string) {
		return this.fileService.getFile(fileName);
	}

	@ApiOperation({
		summary: "Delete File",
		description: "Delete a file from the server.",
	})
	@ApiOkResponse({
		description: "File deleted successfully",
		type: String,
	})
	@Delete(":fileName")
	async deleteFile(@Param("fileName") fileName: string) {
		return this.fileService.deleteFile(fileName);
	}
}

// import { Body, Controller, Delete, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
// import { FileInterceptor } from "@nestjs/platform-express";
// import { BufferedFile } from "../../minio-client/interfaces/bufferedFile.interface";
// import { DeleteDto } from "../dto/delete.dto";
// import { UploadService } from "../services/upload.service";

// @Controller('upload')
// export class UploadController {
//     constructor(private uploadService: UploadService) { }

//     @Post('image')
//     @UseInterceptors(FileInterceptor('image'))
//     async uploadImage(@UploadedFile() image: BufferedFile) {
//         return await this.uploadService.uploadImage(image);
//     }
//     @Post('delete')
//     async deleteImage(@Body() body: DeleteDto) {
//         return await this.uploadService.deleteImage(body.image);
//     }
// }

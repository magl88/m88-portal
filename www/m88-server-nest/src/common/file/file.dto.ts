import { UploadedFile, UploadedFiles } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class FileDto {
	@ApiProperty({
		description: "The file to upload",
		format: "binary",
	})
	file: Express.Multer.File;
}

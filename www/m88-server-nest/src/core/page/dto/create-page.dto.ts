import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreatePageRequestDTO {
	@IsString()
	@IsNotEmpty({ message: "validation.NOT_EMPTY" })
	@ApiProperty()
	title: string;

	@IsString()
	@IsNotEmpty({ message: "validation.NOT_EMPTY" })
	@ApiProperty()
	slug: string;

	@IsString()
	@IsNotEmpty({ message: "validation.NOT_EMPTY" })
	@MinLength(6)
	@ApiProperty()
	content: string;

	@IsString()
	@IsNotEmpty({ message: "validation.NOT_EMPTY" })
	@ApiProperty()
	thumbnail: string;

	@IsBoolean()
	@IsNotEmpty({ message: "validation.NOT_EMPTY" })
	@ApiProperty()
	isPublished: boolean;

	@IsBoolean()
	@IsNotEmpty({ message: "validation.NOT_EMPTY" })
	@ApiProperty()
	isPrivate: boolean;
}

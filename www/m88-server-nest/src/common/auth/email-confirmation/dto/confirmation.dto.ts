import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

/**
 * DTO for email confirmation.
 */
export class ConfirmationDto {
	/**
	 * Confirmation token.
	 * @example "123e4567-e89b-12d3-a456-426614174000"
	 */
	@IsString({ message: "Token must be a string." })
	@IsNotEmpty({ message: "Token cannot be empty." })
	@ApiProperty({
		description: "Email confirmation token",
		example: "123e4567-e89b-12d3-a456-426614174000",
	})
	token: string;
}

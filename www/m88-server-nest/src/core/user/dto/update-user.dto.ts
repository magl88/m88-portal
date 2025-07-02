import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

/**
 * DTO for updating user data.
 */
export class UpdateUserDto {
	/**
	 * User name.
	 * @example John Doe
	 */
	@IsString({ message: "validation.IS_STRING" })
	@IsNotEmpty({ message: "validation.NOT_EMPTY" })
	@ApiProperty({
		example: "John Doe",
		description: "The name of the user",
	})
	name: string;

	/**
	 * User email.
	 * @example example@example.com
	 */
	@IsString({ message: "validation.IS_STRING" })
	@IsEmail({}, { message: "validation.INVALID_EMAIL" })
	@IsNotEmpty({ message: "validation.NOT_EMPTY" })
	@ApiProperty({
		example: "example@example.com",
		description: "The email of the user",
	})
	email: string;

	/**
	 * Flag indicating whether two-factor authentication is enabled.
	 */
	@IsBoolean({ message: "validation.IS_BOOLEAN" })
	@ApiProperty({
		example: true,
		description: "The two-factor authentication status",
	})
	isTwoFactorEnabled: boolean;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

/**
 * DTO for user login to the system.
 */
export class LoginDto {
	/**
	 * User email.
	 * @example example@example.com
	 */
	@ApiProperty({
		description: "User email",
		example: "example@example.com",
	})
	@IsString({ message: "Email must be a string." })
	@IsEmail({}, { message: "Invalid email format." })
	@IsNotEmpty({ message: "Email is required." })
	email: string;

	/**
	 * User password.
	 * @example password123
	 */
	@ApiProperty({
		description: "User password",
		example: "password123",
	})
	@IsString({ message: "Password must be a string." })
	@IsNotEmpty({ message: "Password cannot be empty." })
	@MinLength(6, { message: "Password must contain at least 6 characters." })
	password: string;

	/**
	 * Two-factor authentication code (optional).
	 * @example 123456
	 */
	@ApiProperty({
		description: "Two-factor authentication code",
		example: "123456",
	})
	@IsOptional()
	@IsString()
	code: string;
}

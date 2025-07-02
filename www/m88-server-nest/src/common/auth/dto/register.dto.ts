import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from "class-validator";

import { IsPasswordsMatchingConstraint } from "../decorators/is-passwords-matching-constraint.decorator";

/**
 * DTO for user registration.
 */
export class RegisterDto {
	/**
	 * User name.
	 * @example John Doe
	 */
	@ApiProperty({
		description: "User name",
		example: "John Doe",
	})
	@IsString({ message: "Name must be a string." })
	@IsNotEmpty({ message: "Name is required." })
	name: string;

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
	@IsNotEmpty({ message: "Password is required." })
	@MinLength(6, {
		message: "Password must contain at least 6 characters.",
	})
	password: string;

	/**
	 * Password confirmation.
	 * @example password123
	 */
	@ApiProperty({
		description: "User password repeat",
		example: "password123",
	})
	@IsString({ message: "Password repeat must be a string." })
	@IsNotEmpty({ message: "Password repeat is required." })
	@MinLength(6, {
		message: "Password repeat must contain at least 6 characters.",
	})
	@Validate(IsPasswordsMatchingConstraint, {
		message: "Passwords do not match.",
	})
	passwordRepeat: string;
}

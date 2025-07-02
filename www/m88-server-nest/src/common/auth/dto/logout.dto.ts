import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

/**
 * DTO for user logout from the system.
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
}

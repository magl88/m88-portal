import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { $Enums, Account, User } from "@prisma/generated";

export class UserEntity implements Omit<User, "password"> {
	@ApiProperty({
		description: "User ID",
		example: "123e4567-e89b-12d3-a456-426614174000",
	})
	id: string;

	@ApiProperty({
		description: "User email",
		example: "user@example.com",
	})
	email: string;

	@ApiProperty({
		description: "User display name",
		example: "John Doe",
	})
	displayName: string;

	@ApiPropertyOptional({
		description: "User picture",
		example: "https://example.com/picture.png",
	})
	picture: string | null;

	@ApiProperty({
		description: "User role",
		enum: $Enums.UserRole,
	})
	role: $Enums.UserRole;

	@ApiProperty({
		description: "User is verified",
		example: true,
	})
	isVerified: boolean;

	@ApiProperty({
		description: "User is two factor enabled",
		example: true,
	})
	isTwoFactorEnabled: boolean;

	@ApiProperty({
		description: "User auth method",
		enum: $Enums.AuthMethod,
	})
	method: $Enums.AuthMethod;

	@ApiProperty({
		description: "User accounts",
		example: [
			{
				provider: "google",
				providerAccountId: "1234567890",
				expiresAt: 1717334400,
			},
		],
	})
	accounts: Account[];

	@ApiProperty({
		description: "User created at",
		example: "2021-01-01T00:00:00.000Z",
	})
	createdAt: Date;

	@ApiProperty({
		description: "User updated at",
		example: "2021-01-01T00:00:00.000Z",
	})
	updatedAt: Date;
}

import { ApiProperty } from "@nestjs/swagger";

export class EmailConfirmationEntity {
	@ApiProperty({
		description: "Email confirmation token",
		example: "1234567890",
	})
	token: string;

	@ApiProperty({
		description: "Email confirmation token expires in",
		example: "2021-01-01T00:00:00.000Z",
	})
	expiresIn: Date;
}

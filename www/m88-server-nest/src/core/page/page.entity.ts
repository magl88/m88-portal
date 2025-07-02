import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { $Enums, Page } from "@prisma/generated";

export class PageEntity implements Page {
	@ApiProperty({
		description: "Page ID (UUID)",
		example: "b7e6c1a2-3f4d-4e2a-9c1b-123456789abc",
	})
	id: string;

	@ApiProperty({ description: "Page title", example: "About Us" })
	title: string;

	@ApiProperty({ description: "Unique slug for the page", example: "about-us" })
	slug: string;

	@ApiProperty({
		description: "Page content HTML",
		example: "<h1>About Us</h1><p>Company info...</p>",
	})
	content: string;

	@ApiPropertyOptional({
		description: "Thumbnail image URL",
		example: "https://example.com/image.png",
	})
	thumbnail: string | null;

	@ApiProperty({
		description: "Page locale",
		enum: $Enums.Locale,
		example: $Enums.Locale.EN,
	})
	locale: $Enums.Locale;

	@ApiProperty({ description: "Is the page published?" })
	isPublished: boolean;

	@ApiProperty({ description: "Is the page private?" })
	isPrivate: boolean;

	@ApiProperty({
		description: "Roles that can access the page",
		enum: $Enums.UserRole,
		isArray: true,
	})
	forRoles: $Enums.UserRole[];

	@ApiProperty({ description: "Creation date", example: "2024-05-01T12:34:56.789Z" })
	createdAt: Date;

	@ApiProperty({ description: "Last update date", example: "2024-05-02T10:20:30.456Z" })
	updatedAt: Date;
}

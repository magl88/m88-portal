import { ApiProperty } from "@nestjs/swagger";

export class PageResponse {
	@ApiProperty({
		description: "Unique identifier",
		example: "b8f6cfd2-c850-4bb5-9876-e12bb55e3e94",
	})
	id: string;

	@ApiProperty({
		description: "The title of the page",
		example: "How to use Prisma with NestJS",
	})
	title: string;

	@ApiProperty({
		description: "The slug of the page, used in the URL",
		example: "how-to-use-prisma-with-nestjs",
	})
	slug: string;

	@ApiProperty({
		description: "The content of the page",
		example: "<p>How to use Prisma with NestJS</p>",
	})
	content: string;

	@ApiProperty({
		description: "Identifier of the page thumbnail",
		example: "UCSOW2TFUGL34ZWCOZSAHDFU4W",
		required: false,
	})
	thumbnail?: string;

	@ApiProperty({
		description: "Is published the page",
		example: true,
	})
	isPublished: boolean;

	@ApiProperty({
		description: "The creation date of the page",
		example: "2025-05-09T21:09:00Z",
	})
	createdAt: Date;

	@ApiProperty({
		description: "The last update date of the page",
		example: "2025-05-09T21:09:00Z",
	})
	updatedAt: Date;
}

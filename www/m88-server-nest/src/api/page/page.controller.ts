import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

import { PageResponse } from "./dto";
import { PageService } from "./page.service";

@ApiTags("Page")
@Controller("pages")
export class PageController {
	public constructor(private readonly pageService: PageService) {}

	@ApiOperation({
		summary: "Fetch All Pages",
		description: "Retrieve a list of all available pages.",
	})
	@ApiOkResponse({
		type: [PageResponse],
	})
	@Get()
	@HttpCode(HttpStatus.OK)
	public async getAll() {
		return this.pageService.getAll();
	}

	@ApiOperation({
		summary: "Get Page By Slug",
		description: "Retrieve a page using its unique slug identifier.",
	})
	@ApiOkResponse({
		type: PageResponse,
	})
	@Get(":slug")
	@HttpCode(HttpStatus.OK)
	public async getBySlug(@Param("slug") slug: string) {
		return this.pageService.getBySlug(slug);
	}
}

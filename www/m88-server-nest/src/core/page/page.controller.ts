import {
	Body,
	Controller,
	Get,
	Headers,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Query,
	Req,
	UseInterceptors,
	ValidationPipe,
} from "@nestjs/common";
import {
	ApiHeader,
	ApiOkResponse,
	ApiOperation,
	ApiResponse,
	ApiTags,
} from "@nestjs/swagger";
import { UserRole } from "@prisma/generated";

import { Authorization } from "@/common/auth/decorators";
import { PaginationDto } from "@/shared/dto";

import {
	CreatePageRequestDTO,
	// CreatePageResponseDTO,
	// PageRequestDTO,
	// PageResponseDTO,
} from "./dto";
import { PageEntity } from "./page.entity";
import { PageService } from "./page.service";

@ApiTags("Pages")
@Controller("pages")
export class PageController {
	public constructor(private readonly pageService: PageService) {}

	// @Get() - GET /pages - Fetch All Pages
	@ApiOperation({
		summary: "Fetch All Pages",
		description: "Retrieve a list of all available pages.",
	})
	@ApiOkResponse({
		type: PageEntity,
		isArray: true,
	})
	@ApiResponse({
		status: 200,
		description: "OK. Return all pages.",
		type: PageEntity,
		isArray: true,
	})
	@HttpCode(HttpStatus.OK)
	@Get()
	public async getAll(
		@Query(ValidationPipe) paginationDto: PaginationDto,
	): Promise<PageEntity[]> {
		return this.pageService.getAll(paginationDto);
	}

	@ApiOperation({
		summary: "Get Page By Slug",
		description: "Retrieve a page using its unique slug identifier.",
	})
	@ApiOkResponse({
		type: PageEntity,
	})
	@ApiResponse({ status: 200, description: "OK. Return page by slug." })
	@HttpCode(HttpStatus.OK)
	@Get(":slug")
	public async getBySlug(
		@Req() req: Request,
		@Param("slug") slug: string,
		@Headers() headers: Headers,
	): Promise<PageEntity> {
		return this.pageService.getBySlug(req, slug, headers);
	}

	// @ApiOperation({
	// 	summary: "Create New Page",
	// 	description: "Create a new Page.",
	// })
	// @ApiResponse({
	// 	status: HttpStatus.OK,
	// 	type: CreatePageResponseDTO,
	// })
	// @ApiHeader({
	// 	name: "X-Session-Token",
	// 	required: true,
	// })
	// @Authorization(UserRole.ADMIN)
	// @HttpCode(HttpStatus.OK)
	// @Post()
	// public async create(
	// 	@Body(ValidationPipe) dto: CreatePageRequestDTO,
	// ): Promise<CreatePageResponseDTO> {
	// 	return this.pageService.create(dto);
	// }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/generated";
import { I18nContext, I18nService } from "nestjs-i18n";

import { PaginationDto } from "@/shared/dto";
import { PrismaService } from "@/shared/infra/prisma/prisma.service";
// import { RedisService } from "@/shared/infra/redis/redis.service";
import { slugify } from "@/shared/utils";

// import { PageRequestDTO, PageResponseDTO } from "./dto";
// import { CreatePageRequestDTO, CreatePageResponseDTO } from "./dto/create-page.dto";
@Injectable()
export class PageService {
	public constructor(
		private readonly i18n: I18nService,
		private readonly prismaService: PrismaService,
		// private readonly redisService: RedisService,
	) {}

	public async getAll(paginationDto: PaginationDto) {
		const pages = await this.prismaService.page.findMany({
			where: {
				isPublished: true,
			},
			orderBy: {
				createdAt: "desc",
			},
			skip: paginationDto.offset,
			take: paginationDto.limit,
		});

		return pages;
	}

	public async getBySlug(req: Request, slug: string, headers: Headers) {
		const currentLocale = this.i18n;
		// console.log("CurrentФФФ locale:", currentLocale.resolveLanguage());
		// console.log("CurrentЫЫЫ locale:", I18nContext.current()?.lang);
		// console.log("Consoleheaders: ", req.);

		// const cachedPage = await this.redisService.get(`pages:${slug}`);

		// if (cachedPage) return JSON.parse(cachedPage);

		const page = await this.prismaService.page.findUniqueOrThrow({
			where: {
				slug,
				isPublished: true,
			},
		});

		if (!page)
			throw new NotFoundException(
				this.i18n.t("common.PageNotFound", { lang: I18nContext.current()?.lang }),
			);

		// await this.redisService.set(
		// 	`pages:${page.slug}`,
		// 	JSON.stringify(page),
		// 	"EX",
		// 	10 * 60,
		// );

		return page;
	}

	// public async create(dto: CreatePageRequestDTO): Promise<CreatePageResponseDTO> {
	// 	const { ...data } = dto;

	// 	const page = await this.prismaService.page.create({
	// 		data: {
	// 			...data,
	// 			slug: slugify(data.slug),
	// 		},
	// 	});

	// 	return { ...page };
	// }
}

import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "@/infra/prisma/prisma.service";
import { RedisService } from "@/infra/redis/redis.service";

@Injectable()
export class PageService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly redisService: RedisService,
	) {}

	public async getAll() {
		const pages = await this.prismaService.page.findMany({
			where: {
				isPublished: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return pages;
	}

	public async getBySlug(slug: string) {
		const cachedPage = await this.redisService.get(`pages:${slug}`);

		if (cachedPage) return JSON.parse(cachedPage);

		const page = await this.prismaService.page.findUnique({
			where: {
				slug,
				isPublished: true,
			},
		});

		if (!page) throw new NotFoundException("Page not found");

		await this.redisService.set(
			`pages:${page.slug}`,
			JSON.stringify(page),
			"EX",
			10 * 60,
		);

		return page;
	}
}

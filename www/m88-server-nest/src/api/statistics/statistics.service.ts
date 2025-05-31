import { Injectable } from "@nestjs/common";
import { format, subMonths } from "date-fns";

import { PrismaService } from "@/infra/prisma/prisma.service";

@Injectable()
export class StatisticsService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async getStatistics() {
		const [users] = await Promise.all([this.prismaService.user.count()]);

		return {
			users,
		};
	}

	public async getUserRegistrations() {
		const oneMonthAgo = subMonths(new Date(), 1);

		const registrations = await this.prismaService.user.groupBy({
			by: ["createdAt"],
			_count: {
				id: true,
			},
			where: {
				createdAt: {
					gte: oneMonthAgo,
				},
			},
			orderBy: {
				createdAt: "asc",
			},
		});

		const grouped = registrations.reduce(
			(acc, { createdAt, _count }) => {
				const date = format(createdAt, "yyyy-MM-dd");

				if (!acc[date]) acc[date] = 0;

				acc[date] += _count.id;

				return acc;
			},
			{} as Record<string, number>,
		);

		return Object.entries(grouped).map(([date, users]) => ({
			date,
			users,
		}));
	}
}

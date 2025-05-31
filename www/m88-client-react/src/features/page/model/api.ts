import { z } from "zod";

import { rtkApi } from "@/shared/api";

import { IPage, TPageId } from "../types";

const PageDtoSchema = z.object({
	id: z.string(),
	title: z.string(),
	slug: z.string(),
	content: z.string(),

	thumbnail: z.string().nullable().optional(),

	isPublished: z.boolean(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

export const pagesApi = rtkApi.injectEndpoints({
	endpoints: (create) => ({
		getPages: create.query<IPage[], void>({
			query: () => "/pages",
			transformResponse: (res: unknown) => {
				const parsed = PageDtoSchema.array().parse(res);
				return parsed.map((page) => ({
					...page,
					thumbnail: page.thumbnail ?? undefined,
					createdAt: page.createdAt,
					updatedAt: page.updatedAt,
				}));
			},
		}),
		getPage: create.query<IPage, TPageId>({
			query: (pageId) => `/pages/${pageId}`,
			transformResponse: (res: unknown) => {
				const parsed = PageDtoSchema.parse(res);
				return {
					...parsed,
					thumbnail: parsed.thumbnail ?? undefined,
					createdAt: parsed.createdAt,
					updatedAt: parsed.updatedAt,
				};
			},
		}),
		deletePage: create.mutation<void, TPageId>({
			query: (pageId) => ({ method: "DELETE", url: `/pages/${pageId}` }),
		}),
	}),
	overrideExisting: true,
});

export type TPageId = string;

export interface IPage {
	id: TPageId;
	title: string;
	slug: string;
	content: string;

	thumbnail?: string;

	isPublished: boolean;

	createdAt: string;
	updatedAt: string;
}

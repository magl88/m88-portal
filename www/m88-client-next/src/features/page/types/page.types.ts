export interface IPage {
	id: string;
	title: string;
	slug: string;
	content: string;
	thumbnail: string;
	createdAt: string;
	updatedAt: string;
	// author: string;
	// authorId: string;
	// authorAvatar: string;
	// authorEmail: string;
	// authorName: string;
	// authorUsername: string;
}

export interface IPageDetailsSchema {
	isLoading: boolean;
	error?: string;
	data?: IPage;
}

import { apiAxiosClient } from "@/shared/api";

import type { IPage } from "../types";

/**
 * Сервис для работы с пользователями.
 */
class PageService {
	/**
	 * Получает профиль текущего пользователя.
	 *
	 * @returns {Promise<IUser>} - Профиль пользователя.
	 */
	public async findPageBySlug({ slug }: { slug: string }) {
		const response = await apiAxiosClient.get<IPage>(`pages/${slug}`);
		return response;
	}
}

export const pageService = new PageService();

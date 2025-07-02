import axios, { InternalAxiosRequestConfig } from "axios";
import { getCookies } from "cookies-next";

// import { cookies } from "next/headers";

import { ENV } from "@/shared/constants";

/**
 * Расширяем тип конфигурации для поддержки передачи cookies на сервере
 */
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
	cookies?: Record<string, string>;
}

export const apiAxiosClient = axios.create({
	baseURL: ENV.apiUrl,
	withCredentials: true,
});

apiAxiosClient.interceptors.request.use(
	(config: CustomAxiosRequestConfig) => {
		const isServer = typeof window === "undefined";

		if (isServer) {
			// Сервер: ожидаем, что cookies переданы через config.cookies
			if (config.cookies && Object.keys(config.cookies).length > 0) {
				const cookieString = Object.entries(config.cookies)
					.map(([key, value]) => `${key}=${value}`)
					.join("; ");
				config.headers = config.headers || {};
				config.headers["Cookie"] = cookieString;
			}
		} else {
			// Клиент: получаем cookies из браузера
			try {
				const cookies = getCookies() || {};
				if (Object.keys(cookies).length > 0) {
					const cookieString = Object.entries(cookies)
						.map(([key, value]) => `${key}=${value}`)
						.join("; ");
					config.headers = config.headers || {};
					config.headers["Cookie"] = cookieString;
				}
			} catch (error) {
				console.warn("Ошибка при получении cookies:", error);
			}
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// export const apiAxiosClient1 = (
// 	req?: NextApiRequest,
// 	res?: NextApiResponse,
// ): AxiosInstance => {

// 	if (typeof window === "undefined" && req && res) {
// 		// Сервер: добавить куки в заголовок вручную
// 		const cookies = getCookies({ req, res }) || {};
// 		const cookieHeader = Object.entries(cookies as Record<string, string | undefined>)
// 			.map(([key, value]) => `${key}=${value}`)
// 			.join("; ");

// 		instance.interceptors.request.use((config) => {
// 			config.headers = config.headers || {};
// 			config.headers["Cookie"] = cookieHeader;
// 			return config;
// 		});
// 	}

// 	// Клиент: cookies отправляются автоматически, можно дополнительно логировать
// 	if (typeof window !== "undefined") {
// 		instance.interceptors.request.use((config) => {
// 			// Можно добавить авторизацию или лог
// 			return config;
// 		});
// 	}

// 	return instance;
// };

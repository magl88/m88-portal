import axios from "axios";
import { getCookie } from "cookies-next/client";

// import { cookies } from "next/headers";

import { ENV } from "@/shared/constants";

import { getAllCookieServer } from "./getCookieServer";

export const apiAxiosClient = axios.create({
	baseURL: ENV.apiUrl,
	withCredentials: true,
});

apiAxiosClient.interceptors.request.use(
	async (config) => {
		try {
			const isServer = typeof window === "undefined";
			const local = isServer ? await getAllCookieServer() : getCookie("NEXT_LOCALE");
			console.log("Console: DDDDDDDDDDDDDDD", local);

			if (local) {
				config.headers["Cookie"] = local;
			}
			// const isServer = typeof window === "undefined";
			// if (isServer) {
			// 	const { cookies } = require("next/headers");
			// 	config.headers= { Cookie: cookies().toString() };
			// 	return config;
			// }
			// const cookiesList = await cookies();
			// console.log("Console:cookiesList ", cookiesList);
			// config.headers["Cookie"] = cookiesList.toString();
			// const headersList = await headers();
			// const incomingHeaders: Record<string, string> = {};
			// headersList.forEach((value, key) => {
			// Фильтруем заголовки, которые не нужно передавать
			// 	if (!["host", "connection", "content-length"].includes(key.toLowerCase())) {
			// 		incomingHeaders[key] = value;
			// 	}
			// });
			// console.log("Console:incomingHeaders ", incomingHeaders);
			// config.headers = {
			//   ...config.headers,
			//   ...incomingHeaders,
			//   'Cookie': cookiesList.toString(),
			// };
		} catch (error) {
			console.error("Ошибка в interceptor:", error);
		}

		return config;
	},
	async (error) => {
		return Promise.reject(error);
	},
);

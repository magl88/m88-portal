import axios from "axios";

import { USER_LOCALSTORAGE_KEY } from "@/shared/constants/localstorage";

export const $api = axios.create({
	baseURL: import.meta.env.VITE_API,
});

$api.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
	}
	return config;
});

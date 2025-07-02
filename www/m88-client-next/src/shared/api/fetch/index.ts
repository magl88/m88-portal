import { ENV } from "@/shared/constants";

import { FetchClient } from "./fetch-client";

export const apiFetchClient = new FetchClient({
	baseUrl: ENV.apiUrl as string,
	options: {
		credentials: "include",
	},
});

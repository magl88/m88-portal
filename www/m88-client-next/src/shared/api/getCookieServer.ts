"use server";

import { cookies } from "next/headers";

export const getCookieServer = async (cookieName: string) => {
	const cookieStore = await cookies();
	return cookieStore.get(cookieName)?.value;
};

export const getAllCookieServer = async () => {
	const cookieStore = await cookies();
	return cookieStore.toString();
};

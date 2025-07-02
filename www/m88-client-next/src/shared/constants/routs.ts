export interface IRoute {
	label: string;
	url: string;
	isPrivate: boolean;
	menus?: TMenus[];
}

export type TMenus = "header" | "footer";

export const ROUTES: IRoute[] = [
	{
		label: "home",
		url: "/",
		isPrivate: false,
		menus: ["header"],
	},
	{
		label: "about",
		url: "/about",
		isPrivate: false,
		menus: ["header"],
	},
	{
		label: "client",
		url: "/client",
		isPrivate: false,
		menus: ["header"],
	},
	{
		label: "server",
		url: "/server",
		isPrivate: false,
		menus: ["header"],
	},
	{
		label: "static",
		url: "/static",
		isPrivate: false,
		menus: ["header"],
	},
	{
		label: "terms",
		url: "/terms",
		isPrivate: false,
	},
	{
		label: "privacy",
		url: "/privacy",
		isPrivate: false,
	},
	{
		label: "login",
		url: "/auth/login",
		isPrivate: false,
	},
	{
		label: "register",
		url: "/auth/register",
		isPrivate: false,
	},
	{
		label: "forgot-password",
		url: "/auth/forgot-password",
		isPrivate: false,
	},
];

export const publicRoutes = ROUTES.filter((item) => !item.isPrivate);
export const authRoutes = ROUTES.filter((item) => item.url.includes("auth"));

export const HEADER_NAV_SCHEMA = ROUTES.filter((item) => item.menus?.includes("header"));

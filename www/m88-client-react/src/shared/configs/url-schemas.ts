export const HEADER_NAV_SCHEMA = [
	{
		name: "Articles",
		url: "/articles",
		order: 1,
	},
	{
		name: "About",
		url: "/about-us",
		order: 2,
	},
];

export const AUTH_URL = {
	REGISTER: {
		url: "/auth/register",
		order: 1,
		label: "Register",
	},
	REGISTER_SUCCESS: {
		url: "/auth/register/success",
		order: 2,
		label: "Register Success",
	},
	LOGIN: {
		url: "/auth/login",
		order: 3,
		label: "Login",
	},
};

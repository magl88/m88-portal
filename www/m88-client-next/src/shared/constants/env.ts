export const ENV = {
	mode: process.env["NODE_ENV"],
	appUrl: process.env["APPLICATION_URL"],
	apiUrl: process.env["API_URL"],
	googleRecaptchaSiteKey: process.env["GOOGLE_RECAPTCHA_SITE_KEY"],
} as const;

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ru"],
	localePrefix: "as-needed", // "always", "never", "as-needed",
	defaultLocale: "en",
});

import { MetadataRoute } from "next";
import { Locale } from "next-intl";

import { ENV } from "@/shared/constants";
import { getPathname } from "@/shared/libs/i18n/navigation";
import { routing } from "@/shared/libs/i18n/routing";

const host = ENV.baseUrl;

type Href = Parameters<typeof getPathname>[0]["href"];

const getUrl = (href: Href, locale: Locale): string => {
	const pathname = getPathname({ locale, href });
	return host + pathname;
};

const getEntries = (href: Href): MetadataRoute.Sitemap => {
	return routing.locales.map((locale) => ({
		url: getUrl(href, locale),
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map((cur) => [cur, getUrl(href, cur)]),
			),
		},
	}));
};

const sitemap = (): MetadataRoute.Sitemap => {
	return [...getEntries("/"), ...getEntries("/about")];
};

export default sitemap;

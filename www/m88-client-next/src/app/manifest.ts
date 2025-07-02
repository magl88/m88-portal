import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

import { routing } from "@/shared/libs/i18n/routing";

const manifest = async (): Promise<MetadataRoute.Manifest> => {
	const t = await getTranslations({
		locale: routing.defaultLocale,
		namespace: "Manifest",
	});

	return {
		name: t("name"),
		short_name: t("shortName"),
		description: t("description"),
		start_url: "/",
		display: "standalone",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
};

export default manifest;

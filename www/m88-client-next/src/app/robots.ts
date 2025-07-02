import type { MetadataRoute } from "next";

import { ENV } from "@/shared/constants";

const robots = (): MetadataRoute.Robots => ({
	rules: {
		userAgent: "*",
		disallow: ["/*?", "/*.html", "*?*=*", "*?*=*&*=*", "*?*=*=*"],
	},
	host: ENV.baseUrl,
	sitemap: `${ENV.baseUrl}/sitemap.xml`,
});

export default robots;

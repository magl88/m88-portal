import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	output: "standalone",
	allowedDevOrigins: process.env.ALLOWED_ORIGIN?.split(",") || undefined,
	experimental: {
		optimizePackageImports: ["tailwindcss"],
	},
	rewrites: async () => [
		{
			source: "/storage/:path*",
			destination: `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/:path*`,
		},
	],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
};

const withNextIntl = createNextIntlPlugin({
	requestConfig: "./src/shared/libs/i18n/request.ts",
	experimental: {
		// Provide the path to the messages that you're using in `AppConfig`
		createMessagesDeclaration: "./src/shared/locales/en.json",
	},
});
export default withNextIntl(nextConfig);

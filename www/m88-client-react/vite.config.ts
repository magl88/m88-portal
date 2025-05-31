import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dns from "node:dns";
import path from "path";
import { defineConfig, loadEnv } from "vite";

dns.setDefaultResultOrder("verbatim");
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the
	// `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), "");

	return {
		// vite config
		define: {
			__APP_ENV__: JSON.stringify(env.APP_ENV),
			TURNSTILE_SITE_KEY: JSON.stringify(env.TURNSTILE_SITE_KEY),
		},
		server: {
			host: "0.0.0.0",
			port: 5150,
			strictPort: true,
			allowedHosts: true,
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		plugins: [react(), tailwindcss()],
	};
});

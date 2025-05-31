import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/shared/configs/i18n";
import { ThemeProvider } from "@/shared/providers";

import { AppRouter } from "./app/Router/";
import { StoreProvider } from "./app/Store";
import "./app/styles/index.css";

const container = document.getElementById("root");

if (!container) {
	throw new Error("Container root not found. Failed to mount react app");
}

const rootContainer = createRoot(container);

rootContainer.render(
	<StrictMode>
		<StoreProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<AppRouter />
			</ThemeProvider>
		</StoreProvider>
	</StrictMode>,
);

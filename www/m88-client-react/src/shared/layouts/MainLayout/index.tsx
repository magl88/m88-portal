import { memo } from "react";
import { Outlet, ScrollRestoration } from "react-router";

import { Toaster } from "@/shared/ui";

import { Footer, Header } from "@/widgets";

export const MainLayout = memo(() => {
	return (
		<div className={"wrapper bg-background flex min-h-screen flex-col"}>
			<Header />
			<main className="container mx-auto flex-1 px-4">
				<Outlet />
			</main>
			<Footer />
			<Toaster />
			<ScrollRestoration />
		</div>
	);
});

import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

import { PageLoader } from "@/widgets/PageLoader";

import { MainLayout } from "@/shared/layouts/MainLayout";

import {
	AboutUsPage,
	AdminPage,
	DashboardPage,
	ErrorPage,
	ForbiddenPage,
	IndexPage,
	LoginPage,
	NotFoundPage,
	ProfilePage,
} from "@/pages";

export const routerConfig = createBrowserRouter([
	{
		element: (
			<Suspense fallback={<PageLoader />}>
				<MainLayout />
			</Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				path: "/",
				element: <IndexPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "profile",
				element: <ProfilePage />,
				// loader: profileLoader,
				// // Проверка авторизации с помощью функции-обертки
				// shouldRevalidate: () => true,
			},
			{
				path: "dashboard",
				element: <DashboardPage />,
				// loader: dashboardLoader,
				// // Проверка авторизации с помощью функции-обертки
				// shouldRevalidate: () => true,
			},
			{
				path: "admin",
				element: <AdminPage />,
				// loader: adminLoader,
				// // Проверка роли с помощью функции-обертки
				// shouldRevalidate: () => true,
			},
			{
				path: "about-us",
				element: <AboutUsPage />,
				// loader: adminLoader,
				// // Проверка роли с помощью функции-обертки
				// shouldRevalidate: () => true,
			},
			{
				path: "forbidden",
				element: <ForbiddenPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);

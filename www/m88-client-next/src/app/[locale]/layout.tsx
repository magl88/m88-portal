import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import { Footer, Header } from "@/widgets/components";

import { routing } from "@/shared/libs/i18n/routing";
import { TanstackQueryProvider } from "@/shared/providers/TanstackQueryProvider";
import { ToastProvider } from "@/shared/providers/ToastProvider";
import "@/shared/styles/globals.css";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export async function generateMetadata(props: Omit<Props, "children">) {
	const { locale } = await props.params;

	const t = await getTranslations({ locale, namespace: "LocaleLayout" });

	return {
		title: t("title"),
	};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

type Props = {
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
};

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	// Enable static rendering
	setRequestLocale(locale);

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${roboto.className} antialiased`}>
				<TanstackQueryProvider>
					<NextIntlClientProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							<div className="wrapper bg-background flex min-h-screen flex-col">
								<Header />
								<main className="container mx-auto flex flex-1 flex-col px-4">
									{children}
								</main>
								<Footer />
							</div>
							<ToastProvider />
						</ThemeProvider>
					</NextIntlClientProvider>
				</TanstackQueryProvider>
			</body>
		</html>
	);
}

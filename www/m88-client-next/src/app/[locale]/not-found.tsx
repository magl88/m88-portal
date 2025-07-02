import { useTranslations } from "next-intl";

import { Link } from "@/shared/libs/i18n/navigation";

const NotFoundPage = () => {
	const t = useTranslations("NotFoundPage");
	const p = useTranslations("Page");

	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<div className="px-4 py-10 text-center sm:px-6 lg:px-8">
				<h1 className="text-foreground block text-7xl font-bold sm:text-9xl">
					{t("title")}
				</h1>
				<p className="text-muted-foreground mt-3">{t("description")}</p>
				<Link
					href="/"
					className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
				>
					{p("home")}
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;

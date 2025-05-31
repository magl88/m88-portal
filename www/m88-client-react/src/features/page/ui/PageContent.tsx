import clsx from "clsx";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

import { Spinner } from "@/shared/ui/Spinner";

import { pagesApi } from "../model";

// import styles from "./styles.module.scss";

function PageContent({ slug }: { slug: string }) {
	const { t } = useTranslation();
	const { data, isLoading, isError, error } = pagesApi.useGetPageQuery(slug);

	if (isLoading) {
		return (
			<div className={clsx("flex min-h-[120px] items-center justify-center")}>
				<Spinner size={"large"} />
			</div>
		);
	}

	if (isError) {
		return (
			<div
				className={clsx(
					"flex min-h-[120px] items-center justify-center rounded border border-red-200 bg-red-50 p-4 text-lg text-red-600",
				)}
				role="alert"
			>
				{error && "error" in error
					? "Error: " + error.error
					: t("Failed to load data. Please try again later.")}
			</div>
		);
	}

	if (!data || !data.content) {
		return (
			<div
				className={clsx(
					"flex min-h-[120px] items-center justify-center text-lg text-gray-400",
				)}
			>
				{t("No content available for this page.")}
			</div>
		);
	}

	return (
		<div className={clsx("mt-1 mb-3 flex flex-col gap-2")}>{parse(data.content)}</div>
	);
}
export default PageContent;

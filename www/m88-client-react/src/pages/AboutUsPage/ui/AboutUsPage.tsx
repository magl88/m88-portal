import { useTranslation } from "react-i18next";

import PageContent from "@/features/page/ui/PageContent";

export const AboutUsPage = () => {
	const { t } = useTranslation();

	return (
		<div className={"flex flex-col gap-2"}>
			<h1 className="text-4xl tracking-tighter text-balance">{t("About us")}</h1>
			<PageContent slug="about-us" />
		</div>
	);
};

export default AboutUsPage;

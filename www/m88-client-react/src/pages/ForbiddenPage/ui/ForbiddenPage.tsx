import { useTranslation } from "react-i18next";

export const ForbiddenPage = () => {
	const { t } = useTranslation();

	return (
		<div className={"flex"}>
			<h1 className="text-4xl tracking-tighter text-balance">{t("Forbidden page")}</h1>
		</div>
	);
};

export default ForbiddenPage;

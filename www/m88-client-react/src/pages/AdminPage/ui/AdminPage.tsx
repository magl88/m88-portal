import { useTranslation } from "react-i18next";

export const AdminPage = () => {
	const { t } = useTranslation();

	return (
		<div className={"flex"}>
			<h1 className="m-auto text-center text-4xl tracking-tighter">{t("Admin page")}</h1>
		</div>
	);
};

export default AdminPage;

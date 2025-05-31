import { useTranslation } from "react-i18next";

import { LoginForm } from "@/features/auth/ui";

const LoginPage = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col gap-6">
			<h1 className="text-center text-4xl tracking-tighter text-balance">{t("Login")}</h1>
			<LoginForm />
		</div>
	);
};
export default LoginPage;

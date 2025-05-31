import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router";

interface RouteError {
	statusText?: string;
	message?: string;
}

const ErrorPage = () => {
	const error = useRouteError() as RouteError;
	const { t } = useTranslation();

	return (
		<div data-testid="IndexPage" className="Page flex flex-col">
			<h1>{t("Page Index Found")}</h1>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
		</div>
	);
};
export default ErrorPage;

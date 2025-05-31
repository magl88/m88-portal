import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";

// import { useLoaderData } from "react-router-dom";

// import { requireAuth } from "../auth/authUtils";
// import { dashboardApiSlice } from "../redux/api/dashboardApiSlice";

export const DashboardPage = () => {
	const data = useLoaderData();
	const { t } = useTranslation();

	if (data.error) {
		return (
			<div className={"flex"}>
				<h1 className="text-4xl tracking-tighter text-balance">{t("Dashboard page")}</h1>
				<div className="error-message">{data.error}</div>
			</div>
		);
	}

	return (
		<div className={"flex"}>
			<h1 className="text-4xl tracking-tighter text-balance">{t("Dashboard page")}</h1>

			<div className="dashboard-metrics">
				{/* 
        В реальном приложении здесь будут отображаться данные,
        полученные из loader функции
        */}
				<div className="metric-card">
					<h3>Статистика</h3>
					<p className="metric-value">123</p>
				</div>

				<div className="metric-card">
					<h3>Активные задачи</h3>
					<p className="metric-value">5</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;

// export async function loader({ request }) {
// 	// Проверяем авторизацию
// 	const redirectResult = await requireAuth(request);
// 	if (redirectResult) return redirectResult;

// 	// Если пользователь авторизован, загружаем данные для дашборда
// 	try {
// 		const { store } = await import("../redux/store");
// 		const result = await store.dispatch(
// 			dashboardApiSlice.endpoints.getDashboardData.initiate(null, { forceRefetch: true }),
// 		);

// 		if (result.error) {
// 			return { error: "Не удалось загрузить данные дашборда" };
// 		}

// 		return result.data;
// 	} catch (error) {
// 		return { error: "Не удалось загрузить данные дашборда" };
// 	}
// }

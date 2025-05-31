import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui";

const NotFoundPage = () => {
	const { t } = useTranslation();

	return (
		<div
			data-testid="NotFoundPage"
			className={
				"bg-background flex flex-col items-center justify-center gap-6 p-6 md:p-10"
			}
		>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-xl font-bold">{t("Page Not Found")}</h1>
				</div>
				<div className="flex flex-col gap-6">
					<Button onClick={() => (window.location.href = "/")} className="w-full">
						{t("Go Home")}
					</Button>
				</div>
			</div>
		</div>
	);
};
export default NotFoundPage;

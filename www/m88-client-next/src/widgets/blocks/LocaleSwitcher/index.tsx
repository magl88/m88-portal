import { useLocale, useTranslations } from "next-intl";

import { routing } from "@/shared/libs/i18n/routing";
import { LocaleSwitcherSelect } from "@/shared/ui";

const LocaleSwitcher = () => {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();
	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
			{routing.locales.map((cur) => (
				<option key={cur} value={cur}>
					{t("locale", { locale: cur }) || cur}
				</option>
			))}
		</LocaleSwitcherSelect>
	);
};

export { LocaleSwitcher };

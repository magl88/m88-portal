"use client";

import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { ReCAPTCHA } from "react-google-recaptcha";

import { ENV } from "@/shared/constants";

const Recaptcha = ({
	setRecaptchaValue,
}: {
	setRecaptchaValue: (value: string | null) => void;
}) => {
	const locale = useLocale();
	const { theme } = useTheme();
	console.log("Console:locale ", locale);
	console.log("Console:theme ", theme);
	return (
		<ReCAPTCHA
			hl={locale}
			sitekey={ENV.googleRecaptchaSiteKey as string}
			onChange={setRecaptchaValue}
			theme={theme === "light" ? "light" : "dark"}
		/>
	);
};

export { Recaptcha as default };

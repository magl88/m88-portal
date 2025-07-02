import { useTranslations } from "next-intl";

const Footer = () => {
	const t = useTranslations('Footer');
	return (
		<footer className="mt-8 border-t py-8">
			<div className="text-muted-foreground text-center text-sm">
				© {new Date().getFullYear()} {t("copyright")}
			</div>
		</footer>
	);
};

export { Footer };

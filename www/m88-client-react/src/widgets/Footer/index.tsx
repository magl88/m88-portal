import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Footer = () => {
	const { t } = useTranslation("footer");

	return (
		<footer className="mt-8 border-t py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
					<div>
						<h3 className="mb-4 text-lg font-semibold">{t("About")}</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/about-us"
									className="text-muted-foreground hover:text-foreground text-sm"
								>
									{t("About us")}
								</Link>
							</li>
							<li>
								<Link
									to="/contacts"
									className="text-muted-foreground hover:text-foreground text-sm"
								>
									{t("Contacts")}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">{t("Resources")}</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/docs"
									className="text-muted-foreground hover:text-foreground text-sm"
								>
									{t("Documentation")}
								</Link>
							</li>
							<li>
								<Link
									to="/articles"
									className="text-muted-foreground hover:text-foreground text-sm"
								>
									{t("Articles")}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">{t("Legal")}</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/privacy"
									className="text-muted-foreground hover:text-foreground text-sm"
								>
									{t("Privacy Policy")}
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-muted-foreground hover:text-foreground text-sm"
								>
									{t("Terms of Service")}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-semibold">{t("Connect")}</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="mailto:info@magl88.net"
									className="text-muted-foreground hover:text-foreground text-sm"
								>
									{"info@magl88.net"}
								</Link>
							</li>
							<li>
								<Link
									to="tel:+1234567890"
									className="text-muted-foreground hover:text-foreground text-sm"
								>
									{"+1-(234)-567-890"}
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="text-muted-foreground mt-10 border-t px-4 pt-8 text-center text-sm">
				© {new Date().getFullYear()} {t("M88 Portal. All rights reserved")}.
			</div>
		</footer>
	);
};

export { Footer };

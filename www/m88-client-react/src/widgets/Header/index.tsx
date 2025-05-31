import { LogIn, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { Button, Sheet, SheetContent, SheetTrigger, ThemeToggle } from "@/shared/ui";

import { HeaderNavs } from "../HeaderNavs";

const Header = () => {
	const { t } = useTranslation("header");

	return (
		<header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 mb-6 w-full border-b backdrop-blur">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center">
					<Link to="/" className="mr-6 flex items-center space-x-2">
						<span className="font-bold sm:inline-block">{t("M88 Portal")}</span>
					</Link>
				</div>
				<HeaderNavs className="hidden md:flex" />
				<div className="flex items-center space-x-4">
					<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" className="md:hidden">
									<Menu className="transition-all" />
									<span className="sr-only">{t("Toggle Menu")}</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="p-4">
								<div className="font-bold">{t("Menu")}:</div>
								<HeaderNavs className="flex-col items-start gap-2" />
							</SheetContent>
						</Sheet>
						<ThemeToggle />
						<Link
							to="/login"
							className="ring-offset-background border-input hover:bg-accent hover:text-accent-foreground flex h-9 items-center justify-center gap-2 rounded-lg border bg-transparent px-4 py-2 text-sm font-medium whitespace-nowrap transition-all will-change-transform select-none focus-visible:outline-none active:hover:scale-[0.98] active:hover:transform disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
						>
							<LogIn className="h-4 w-4" />
							<span className="hidden sm:inline-flex">{t("Log in")}</span>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export { Header };

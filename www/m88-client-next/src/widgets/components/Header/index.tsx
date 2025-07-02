import { LogIn, Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { HeaderNavs, ThemeToggle } from "@/widgets/blocks";
import { LocaleSwitcher } from "@/widgets/blocks/LocaleSwitcher";

import { authRoutes } from "@/shared/constants";
import { Link } from "@/shared/libs/i18n/navigation";
import { Button, Sheet, SheetContent, SheetTrigger } from "@/shared/ui";

export function Header() {
	const t = useTranslations("Header");

	const loginUrl = authRoutes.find((item) => item.label === "login");

	return (
		<header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 mb-6 w-full border-b backdrop-blur">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<span className="font-bold sm:inline-block">{t("logo")}</span>
					</Link>
					<HeaderNavs />
				</div>
				<div className="flex items-center space-x-4">
					<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" className="md:hidden">
									<Menu className="dark:-rotate-90absolute h-[1.2rem] w-[1.2rem] scale-0 scale-100 rotate-0 rotate-90 transition-all dark:scale-0 dark:scale-100 dark:rotate-0" />
									<span className="sr-only">{t("toggleMenu")}</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="pr-0">
								<HeaderNavs />
							</SheetContent>
						</Sheet>
						<LocaleSwitcher />
						<ThemeToggle />
						<Link
							href={loginUrl?.url || ""}
							className="ring-offset-background border-input hover:bg-accent hover:text-accent-foreground flex h-9 items-center justify-center gap-2 rounded-lg border bg-transparent px-4 py-2 text-sm font-medium whitespace-nowrap transition-all will-change-transform select-none focus-visible:outline-none active:hover:scale-[0.98] active:hover:transform disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
						>
							<LogIn className="mr-2 h-4 w-4" /> {t("login")}
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

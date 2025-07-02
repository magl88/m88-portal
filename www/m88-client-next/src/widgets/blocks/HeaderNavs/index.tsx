import { getTranslations } from "next-intl/server";

import { HEADER_NAV_SCHEMA } from "@/shared/constants";
import messages from "@/shared/locales/en.json";
import { NavigationLink } from "@/shared/ui";
import { cn } from "@/shared/utils";

const HeaderNavs = async ({ className }: { className?: string }) => {
	const t = await getTranslations("HeaderNavs");
	type HeaderNavLabelKey = `${keyof (typeof messages)["HeaderNavs"]}.label`;
	return (
		<nav className={cn("flex items-center space-x-6 text-sm font-medium", className)}>
			{HEADER_NAV_SCHEMA.map((item) => (
				<NavigationLink key={item.label} href={item.url}>
					{t(`${item.label}.label` as HeaderNavLabelKey)}
				</NavigationLink>
			))}
		</nav>
	);
};

export { HeaderNavs };

import { memo } from "react";
import { NavLink } from "react-router";

import { HEADER_NAV_SCHEMA } from "@/shared/configs/url-schemas";
import { cn } from "@/shared/utils";

const HeaderNavs = memo(({ className }: { className?: string }) => {
	return (
		<nav className={cn("flex items-center gap-6 text-sm font-medium", className)}>
			{HEADER_NAV_SCHEMA.sort((a, b) => a.order - b.order).map((item) => (
				<NavLink
					key={item.name}
					to={item.url}
					className={({ isActive }) =>
						cn(
							"hover:text-foreground/40 transition-colors",
							isActive ? "text-foreground" : "text-foreground/80",
						)
					}
				>
					{item.name}
				</NavLink>
			))}
		</nav>
	);
});

export { HeaderNavs };

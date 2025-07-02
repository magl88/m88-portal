"use client";

import { ComponentProps } from "react";

import { cn } from "@/shared/utils";

import { usePathname } from "../libs/i18n";
import { Link } from "../libs/i18n";

export function NavigationLink({ href, ...rest }: ComponentProps<typeof Link>) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			className={cn(
				"hover:text-foreground/40 transition-colors",
				isActive ? "text-foreground" : "text-foreground/80",
			)}
			aria-current={isActive ? "page" : undefined}
			href={href}
			style={{ fontWeight: isActive ? "bold" : "normal" }}
			{...rest}
		/>
	);
}

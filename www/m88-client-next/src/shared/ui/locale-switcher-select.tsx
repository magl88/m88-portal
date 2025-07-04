"use client";

import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

import { usePathname, useRouter } from "@/shared/libs/i18n/navigation";

import { cn } from "../utils";

type Props = {
	children: ReactNode;
	defaultValue: string;
	label: string;
};

export function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value as Locale;
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale },
			);
		});
	}

	return (
		<label
			className={cn(
				"relative text-gray-400",
				isPending && "transition-opacity [&:disabled]:opacity-30",
			)}
		>
			<p className="sr-only">{label}</p>
			<select
				className="inline-flex appearance-none bg-transparent py-3 pr-6 pl-2"
				defaultValue={defaultValue}
				disabled={isPending}
				onChange={onSelectChange}
			>
				{children}
			</select>
			<span className="pointer-events-none absolute top-[8px] right-2">⌄</span>
		</label>
	);
}

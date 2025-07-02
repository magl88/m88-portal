"use client";

import { Spinner } from "@/shared/ui";
import { cn } from "@/shared/utils";

const PageLoader = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn("flex h-svh w-full items-center justify-center", className)}
			role="alert"
		>
			<Spinner size={"large"} />
		</div>
	);
};

export { PageLoader };

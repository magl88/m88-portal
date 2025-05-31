import { memo } from "react";

import { Spinner } from "@/shared/ui/Spinner";
import { cn } from "@/shared/utils";

const PageLoader = memo(({ className }: { className?: string }) => {
	return (
		<div
			className={cn("flex h-svh w-full items-center justify-center", className)}
			role="alert"
		>
			<Spinner size={"large"} />
		</div>
	);
});

export { PageLoader };

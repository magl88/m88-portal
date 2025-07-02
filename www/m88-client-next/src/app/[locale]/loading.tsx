import { PageLoader } from "@/widgets/components";

export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center">
			<PageLoader />;
		</div>
	);
}

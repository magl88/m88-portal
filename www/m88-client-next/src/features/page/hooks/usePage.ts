import { useQuery } from "@tanstack/react-query";

import { pageService } from "@/features/page/services";

/**
 * Хук для получения профиля page.
 */
export function usePage({ slug }: { slug: string }) {
	const { data: page, isLoading } = useQuery({
		queryKey: ["page", slug],
		queryFn: () => pageService.findPageBySlug({ slug }),
	});

	return {
		page,
		isLoading,
	};
}

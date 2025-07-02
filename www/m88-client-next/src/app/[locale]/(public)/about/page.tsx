import DOMPurify from "isomorphic-dompurify";

import { pageService } from "@/features/page/services/page.service";

export default async function Page() {
	const page = await pageService.findPageBySlug({ slug: "about" });

	return (
		<div className="flex flex-col justify-items-center gap-1">
			<h1 className="text-3xl font-bold">About Page</h1>
			<h2 className="text-2xl font-bold">Title: {page?.data.title}</h2>
			<div
				className="content"
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(page?.data.content ?? ""),
				}}
			/>
		</div>
	);
}

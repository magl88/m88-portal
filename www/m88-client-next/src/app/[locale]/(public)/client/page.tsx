"use client";

import DOMPurify from "isomorphic-dompurify";

import { usePage } from "@/features/page/hooks/usePage";

export default function Page() {
	const { page, isLoading } = usePage({ slug: "about" });

	if (isLoading) return <p>Загрузка...</p>;
	console.log("Console:pagepagepage ", page);

	return (
		<div className="flex flex-col justify-items-center gap-1">
			<h1 className="text-3xl font-bold">Client Page</h1>
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

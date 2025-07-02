"use client";

import Error from "next/error";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
	return (
		<html lang="en">
			<body>
				<div className="flex h-full w-full flex-col items-center justify-center">
					<Error statusCode={404} />
				</div>
			</body>
		</html>
	);
}

"use client";

import { Button } from "@/shared/ui";

type ErrorProps = {
	message: string;
};

const Error = ({ message }: ErrorProps) => {
	return (
		<div className="flex flex-1 items-center justify-center">
			<div className="text-center">
				<div className="mb-4 text-xl text-red-500">❌ Error</div>
				{message && <p className="mb-4 text-gray-600">{message}</p>}
				<Button onClick={() => window.location.reload()} className="rounded px-4 py-2">
					Try Again
				</Button>
			</div>
		</div>
	);
};

export { Error };

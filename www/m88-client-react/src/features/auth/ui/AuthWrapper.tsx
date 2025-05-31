import { type PropsWithChildren } from "react";
import { Link } from "react-router";

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/ui";

interface AuthWrapperProps {
	heading: string;
	description?: string;
	backButtonLabel?: string;
	backButtonHref?: string;
	isShowSocial?: boolean;
}

export function AuthWrapper({
	children,
	heading,
	description,
	backButtonLabel,
	backButtonHref,
}: PropsWithChildren<AuthWrapperProps>) {
	return (
		<Card className="mx-auto w-[400px]">
			<CardHeader className="space-y-2">
				<CardTitle>{heading}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter>
				{backButtonLabel && backButtonHref && (
					<Button variant="link" className="w-full font-normal">
						<Link to={backButtonHref}>{backButtonLabel}</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}

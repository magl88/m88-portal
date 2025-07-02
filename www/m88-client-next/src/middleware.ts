import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "@/shared/libs/i18n";

const i18nMiddleware = createMiddleware(routing);
// ===================================================================
const authMiddleware = (request: NextRequest, response: NextResponse) => {
	// 	const { pathname } = request.nextUrl;
	// 	const [, locale, ...segments] = pathname.split("/");
	// 	const basePathname = `/${segments.join("/")}`;

	// 	const isPublicRoute = publicRoutes.includes(basePathname);
	// 	if (isPublicRoute) {
	// 		return response;
	// 	}

	// 	const isLoggedIn = !!request.cookies.get("session")?.value;

	// 	const isAuthRoute = authRoutes.some((route) =>
	// 		//to match sub-routes like /sign-in/reset-password
	// 		basePathname.startsWith(route),
	// 	);
	// 	if (isAuthRoute) {
	// 		if (isLoggedIn) {
	// 			//user logged in and accessing auth routes redirect to dashboard
	// 			return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
	// 		}
	// 		//user not logged in accessing auth route (just return it)
	// 		return response;
	// 	}

	// 	//By default every route is protected
	// 	if (!isLoggedIn) {
	// 		return NextResponse.redirect(new URL(`/${locale}/auth/login`, request.url));
	// 	}

	return response;
};
// ===================================================================
export default async function middleware(request: NextRequest) {
	const response = i18nMiddleware(request);
	if (response && !response.ok) {
		// response not in the range 200-299 (usually a redirect)
		// no need to execute the auth middleware
		return response;
	}
	return await authMiddleware(request, response);
}
// ===================================================================
export const config = {
	// Match all pathnames except for
	// - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
	// - … the ones containing a dot (e.g. `favicon.ico`)
	matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};

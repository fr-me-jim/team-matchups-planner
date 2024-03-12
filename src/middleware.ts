import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|.png|favicon.ico).*)",
		{ source: "/" },
	],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	if (
		!request.nextUrl.pathname.startsWith("/login") &&
		!request.nextUrl.pathname.startsWith("/signin") &&
		!request.cookies.has("session")
	) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (
		(request.nextUrl.pathname.startsWith("/login") ||
			request.nextUrl.pathname.startsWith("/signin")) &&
		request.cookies.has("session")
	) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

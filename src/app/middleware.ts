import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	console.log(request.cookies.has("session"));
	if (
		request.nextUrl.pathname !== "/login" &&
		!request.cookies.has("session")
	) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
}

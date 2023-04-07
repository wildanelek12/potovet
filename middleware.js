import { NextResponse } from "next/server"

export function middleware(request) {
    if (request.nextUrl.pathname === "/clientzone") {
        return NextResponse.redirect(new URL("/clientzone/dashboard", request.url))
    }
}

export const config = {
    matcher: ["/clientzone/:path*"],
}

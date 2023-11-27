import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isDashboardPath = path === "/admin/dashboard";
  const token = request.cookies.get("authToken")?.value;

  if (isDashboardPath && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard"],
};

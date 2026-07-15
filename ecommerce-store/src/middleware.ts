/**
 * ============================================================================
 * Middleware
 * ============================================================================
 *
 * Protects authenticated routes while allowing public access to the storefront.
 */

import { NextRequest, NextResponse } from "next/server";

/* -------------------------------------------------------------------------- */
/* Protected Routes                                                           */
/* -------------------------------------------------------------------------- */

const PROTECTED_ROUTES = [
  "/checkout",
  "/profile",
  "/orders",
];

/* -------------------------------------------------------------------------- */
/* Public Authentication Routes                                               */
/* -------------------------------------------------------------------------- */

const AUTH_ROUTES = [
  "/login",
  "/register",
];

/* -------------------------------------------------------------------------- */
/* Middleware                                                                 */
/* -------------------------------------------------------------------------- */

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  const isAuthRoute = AUTH_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  const session = request.cookies.get("ecommerce-session")?.value;

  /* ------------------------------------------------------------------------ */
  /* Redirect unauthenticated users                                           */
  /* ------------------------------------------------------------------------ */

  if (isProtectedRoute && !session) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  /* ------------------------------------------------------------------------ */
  /* Prevent authenticated users from accessing auth pages                    */
  /* ------------------------------------------------------------------------ */

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

/* -------------------------------------------------------------------------- */
/* Matcher                                                                    */
/* -------------------------------------------------------------------------- */

export const config = {
  matcher: [
    "/checkout/:path*",
    "/profile/:path*",
    "/orders/:path*",
    "/login",
    "/register",
  ],
};
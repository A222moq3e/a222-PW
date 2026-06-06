/**
 * Handles locale-aware redirects before requests reach the app router.
 */
import { NextResponse } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const pathnameHasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|imgs).*)"],
};

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const canonicalHostname = 'abdelhamid.co';

const legacyRoutes: Readonly<Record<string, string>> = {
  '/index.php': '/',
  '/index.html': '/',
  '/about': '/about.php',
  '/products': '/products.php',
  '/facilities': '/manufacturing.php',
  '/manufacturing': '/manufacturing.php',
  '/contact': '/contact.php',
  '/quote': '/quote.php',
};

function requestHostname(request: NextRequest): string {
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = forwardedHost?.split(',')[0]?.trim() || request.headers.get('host');

  return (host || request.nextUrl.host).split(':')[0].toLowerCase();
}

/**
 * Hostinger can terminate HTTPS before the Next.js process, so next.config host
 * conditions are not always given the public hostname. This runtime fallback
 * reads both the forwarded and direct Host headers and consolidates legacy URLs
 * before any page is rendered.
 */
export function middleware(request: NextRequest) {
  const hostname = requestHostname(request);
  const pathname = request.nextUrl.pathname;
  const normalizedPathname =
    pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const destinationPath = legacyRoutes[normalizedPathname] || pathname;
  const needsCanonicalHost = hostname === `www.${canonicalHostname}`;
  const needsLegacyRedirect = destinationPath !== pathname;

  if (!needsCanonicalHost && !needsLegacyRedirect) {
    return NextResponse.next();
  }

  const destination = new URL(request.url);
  destination.pathname = destinationPath;

  if (needsCanonicalHost) {
    destination.protocol = 'https:';
    destination.hostname = canonicalHostname;
    destination.port = '';
  }

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ['/((?!api/|_next/|assets/|favicon.ico).*)'],
};

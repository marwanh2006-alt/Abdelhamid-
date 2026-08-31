import type { Metadata } from 'next';
import { ClientChrome } from '@/components/ClientChrome';
import { ExtensionGuard } from '@/components/ExtensionGuard';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { absoluteUrl, organizationJsonLd, siteUrl, websiteJsonLd } from '@/lib/site';
import './globals.css';

const organizationJsonLdString = JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c');
const websiteJsonLdString = JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Wire Components Manufacturer in Egypt | Abdelhamid',
    template: '%s | Abdelhamid',
  },
  description:
    'Precision wire and metal components for household appliances, retail displays, and industrial applications. Egyptian manufacturing since 1988.',
  applicationName: 'Abdelhamid Engineering Industries',
  creator: 'Abdelhamid Engineering Industries',
  publisher: 'Abdelhamid Engineering Industries',
  category: 'Manufacturing',
  keywords: [
    'wire components manufacturer',
    'industrial wire products Egypt',
    'appliance wire components',
    'retail display systems',
    'wire mesh decking',
  ],
  alternates: { canonical: absoluteUrl('/') },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Abdelhamid Engineering Industries',
    locale: 'en_US',
    url: absoluteUrl('/'),
    title: 'Abdelhamid Engineering Industries | Wire Components',
    description:
      'Precision wire and metal components for household appliances, retail displays, and industrial applications. Egyptian manufacturing since 1988.',
    images: [{ url: absoluteUrl('/assets/images/hero.jpeg'), width: 1600, height: 944 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdelhamid Engineering Industries | Wire Components',
    description:
      'Precision wire and metal components manufactured in Egypt since 1988.',
    images: [absoluteUrl('/assets/images/hero.jpeg')],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logos/favicon.png" type="image/png" sizes="128x128" />
        <link rel="preload" href="/assets/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/poppins-600-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/poppins-700-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/cormorant-garamond-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/allura-400-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLdString }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteJsonLdString }}
        />
      </head>
      <body suppressHydrationWarning className="bg-ink-950 font-sans text-white antialiased">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <ExtensionGuard />
        <ClientChrome />
        <div id="motion-root" className="motion-page relative isolate min-h-screen overflow-x-clip">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

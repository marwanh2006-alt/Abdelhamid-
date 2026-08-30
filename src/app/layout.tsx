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
        <link rel="icon" href="/assets/logos/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Allura&family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
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

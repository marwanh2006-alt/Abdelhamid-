import type { Metadata } from 'next';

/**
 * The one authoritative public origin for search, social, and structured data.
 * Keep this independent from VERCEL_URL so preview deployments cannot become canonical.
 */
export const siteUrl = 'https://abdelhamid.co' as const;

export function absoluteUrl(path = '/'): string {
  return new URL(path, `${siteUrl}/`).toString();
}

export const company = {
  name: 'Abdelhamid Engineering Industries',
  alternateName: 'ABD-ELHAMID',
  description:
    'Egyptian manufacturer of precision wire and metal components for household appliances, retail displays and industrial applications.',
  email: 'info@abdelhamid.co',
  founded: '1988',
  mapsUrl: 'https://maps.app.goo.gl/em1TghayvmybhTAb7',
  address: {
    street: 'Industrial Zone C5, Plot #1 & 2',
    postOfficeBox: '167',
    locality: 'Tenth of Ramadan City',
    country: 'Egypt',
    countryCode: 'EG',
  },
  phones: {
    primary: { display: '+20 55 44 88 524', value: '+20554488524' },
    secondary: { display: '+20 55 44 88 525', value: '+20554488525' },
    mobile: { display: '+20 100 148 57 88', value: '+201001485788' },
  },
} as const;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: company.name,
  alternateName: company.alternateName,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/assets/logos/logo.png'),
  foundingDate: company.founded,
  description: company.description,
  email: company.email,
  telephone: company.phones.primary.value,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    postOfficeBoxNumber: company.address.postOfficeBox,
    addressLocality: company.address.locality,
    addressCountry: company.address.countryCode,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: company.phones.mobile.value,
    email: company.email,
  },
  areaServed: ['Egypt', 'Africa', 'Middle East'],
  knowsAbout: [
    'Precision wire components',
    'Household appliance components',
    'Retail display systems',
    'Wire mesh decking',
    'Custom industrial wire products',
  ],
} as const;

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: absoluteUrl('/'),
  name: company.name,
  alternateName: company.alternateName,
  inLanguage: 'en',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
};

/** Keep search and social metadata unique, aligned, and canonical per route. */
export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | Abdelhamid`;
  const canonicalUrl = absoluteUrl(path);
  const socialImageUrl = absoluteUrl(image);

  return {
    // Use an absolute title so the brand is present even on the home page,
    // where a layout title template does not apply to the page in the same segment.
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      siteName: company.name,
      locale: 'en_US',
      url: canonicalUrl,
      title: socialTitle,
      description,
      images: [{ url: socialImageUrl, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [socialImageUrl],
    },
  };
}

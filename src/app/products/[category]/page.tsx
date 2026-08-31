import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BackToTop } from '@/components/BackToTop';
import { PageShell } from '@/components/PageShell';
import { ProductCategoryContent } from '@/components/pages/ProductCategoryContent';
import {
  getProductCategoryBySlug,
  productCategories,
} from '@/lib/product-catalog';
import { absoluteUrl, createPageMetadata, siteUrl } from '@/lib/site';

type ProductCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productCategories.map(({ routeSlug }) => ({
    category: `${routeSlug}.php`,
  }));
}

function getCategoryFromRouteSegment(routeSegment: string) {
  if (!routeSegment.endsWith('.php')) {
    return undefined;
  }

  return getProductCategoryBySlug(routeSegment.slice(0, -4));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { category: routeSegment } = await params;
  const category = getCategoryFromRouteSegment(routeSegment);

  if (!category) {
    notFound();
  }

  const featuredProduct = category.products[0];

  return createPageMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: category.path,
    image: featuredProduct.image.src,
    imageAlt: featuredProduct.image.alt,
  });
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { category: routeSegment } = await params;
  const category = getCategoryFromRouteSegment(routeSegment);

  if (!category) {
    notFound();
  }

  const categoryUrl = absoluteUrl(category.path);
  const categoryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': categoryUrl + '#collection',
    url: categoryUrl,
    name: category.title,
    description: category.description,
    isPartOf: {
      '@id': siteUrl + '/#website',
    },
    about: {
      '@type': 'Thing',
      name: category.title,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: category.products.length,
      itemListElement: category.products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          '@id': categoryUrl + '#' + product.id,
          url: categoryUrl + '#' + product.id,
          name: product.name,
          category: category.title,
          image: absoluteUrl(product.image.src),
          manufacturer: {
            '@id': siteUrl + '/#organization',
          },
        },
      })),
    },
  };
  const categoryJsonLdString = JSON.stringify(categoryJsonLd).replace(
    /</g,
    '\u003c',
  );

  return (
    <PageShell scripts={['/assets/js/back-to-top.js']}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: categoryJsonLdString }}
      />
      <ProductCategoryContent category={category} />
      <BackToTop variant="products" />
    </PageShell>
  );
}

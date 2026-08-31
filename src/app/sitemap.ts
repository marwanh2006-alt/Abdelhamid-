import type { MetadataRoute } from 'next';
import { productCategories } from '@/lib/product-catalog';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

type SitemapEntry = {
  path: string;
  priority: number;
  images?: readonly string[];
};

const categoryRoutes: SitemapEntry[] = productCategories.map((category) => ({
  path: category.path,
  priority: 0.8,
  images: category.products.map((product) => product.image.src),
}));

const routes: SitemapEntry[] = [
  { path: '/', priority: 1 },
  { path: '/products.php', priority: 0.9 },
  ...categoryRoutes,
  { path: '/manufacturing.php', priority: 0.8 },
  { path: '/about.php', priority: 0.7 },
  { path: '/quote.php', priority: 0.7 },
  { path: '/contact.php', priority: 0.6 },
  { path: '/privacy.php', priority: 0.3 },
];

// The sitemap is generated during each production build, so this accurately
// signals the deployment that introduced the current canonical pages.
const sitemapLastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, images }) => ({
    url: absoluteUrl(path),
    lastModified: sitemapLastModified,
    changeFrequency: 'monthly',
    priority,
    ...(images
      ? { images: images.map((imagePath) => absoluteUrl(imagePath)) }
      : {}),
  }));
}

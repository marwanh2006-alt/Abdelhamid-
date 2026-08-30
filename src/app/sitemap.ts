import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

const routes: Array<{ path: string; priority: number }> = [
  { path: '/', priority: 1 },
  { path: '/products.php', priority: 0.9 },
  { path: '/manufacturing.php', priority: 0.8 },
  { path: '/about.php', priority: 0.7 },
  { path: '/quote.php', priority: 0.7 },
  { path: '/contact.php', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: 'monthly',
    priority,
  }));
}

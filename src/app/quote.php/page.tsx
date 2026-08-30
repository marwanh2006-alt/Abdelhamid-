import { QuoteContent } from '@/components/pages/QuoteContent';
import { createPageMetadata } from '@/lib/site';
import { preload } from 'react-dom';

export const metadata = createPageMetadata({
  title: 'Custom Wire Components Quote',
  description:
    'Request a quote for custom wire and metal components. Share your drawings, volumes and requirements, and our engineering team will price your project.',
  path: '/quote.php',
  image: '/assets/images/quote/quote-hero.png',
  imageAlt: 'Request custom wire component manufacturing from Abdelhamid',
});

export default function QuotePage() {
  preload('/assets/images/optimized/quote/quote-hero-desktop.webp', {
    as: 'image',
    fetchPriority: 'high',
  });

  return <QuoteContent />;
}

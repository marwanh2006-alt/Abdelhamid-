import { ManufacturingContent } from '@/components/pages/ManufacturingContent';
import { createPageMetadata } from '@/lib/site';
import { preload } from 'react-dom';

export const metadata = createPageMetadata({
  title: 'ISO-Certified Wire Manufacturing',
  description:
    'ISO 9001, ISO 14001 and ISO 45001 certified wire manufacturing. See the machinery, controlled processes and quality systems behind every Abdelhamid component.',
  path: '/manufacturing.php',
  image: '/assets/images/manufacturing/1.jpeg',
  imageAlt: 'Wire manufacturing machinery inside the Abdelhamid production facility',
});

export default function ManufacturingPage() {
  preload('/assets/images/optimized/manufacturing/hero-6.webp', { as: 'image', fetchPriority: 'high' });

  return <ManufacturingContent />;
}

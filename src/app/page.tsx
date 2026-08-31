import { HomeContent } from '@/components/pages/HomeContent';
import { createPageMetadata } from '@/lib/site';
import { preload } from 'react-dom';

export const metadata = createPageMetadata({
  title: 'Abdelhamid Engineering Industries | Wire Manufacturer',
  description:
    'Abdelhamid Engineering Industries manufactures precision wire and metal components for appliances, retail displays and industry. 38+ years, 18 countries served.',
  path: '/',
  image: '/assets/images/hero.jpeg',
  imageAlt: 'Abdelhamid Engineering Industries manufacturing facility in Egypt',
  appendBrand: false,
});

export default function HomePage() {
  preload('/assets/images/heroo.jpeg', { as: 'image', fetchPriority: 'high' });

  return <HomeContent />;
}

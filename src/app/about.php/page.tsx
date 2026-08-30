import { AboutContent } from '@/components/pages/AboutContent';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Egyptian Wire Manufacturer Since 1988',
  description:
    'Family-owned Egyptian wire manufacturer since 1988. Explore our 10,000 m² facilities, 4,000-ton annual capacity and the team of 200+ behind Abdelhamid.',
  path: '/about.php',
  image: '/assets/images/about/building.jpeg',
  imageAlt: 'Abdelhamid Engineering Industries facility in Tenth of Ramadan City',
});

export default function AboutPage() {
  return <AboutContent />;
}

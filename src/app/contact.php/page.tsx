import { ContactContent } from '@/components/pages/ContactContent';
import { createPageMetadata } from '@/lib/site';
import { preload } from 'react-dom';

export const metadata = createPageMetadata({
  title: 'Contact Our Wire Manufacturing Team',
  description:
    'Get in touch with Abdelhamid Engineering Industries. Send us your questions, discuss a project, or request technical details for wire and metal components.',
  path: '/contact.php',
  image: '/assets/images/contact/contact.jpg',
  imageAlt: 'Contact Abdelhamid Engineering Industries in Tenth of Ramadan City',
});

export default function ContactPage() {
  preload('/assets/images/optimized/contact/contact-hero-desktop.webp', {
    as: 'image',
    fetchPriority: 'high',
  });

  return <ContactContent />;
}

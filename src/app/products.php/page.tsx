import { BackToTop } from '@/components/BackToTop';
import { PageShell } from '@/components/PageShell';
import { ProductsContent } from '@/components/pages/ProductsContent';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Industrial Wire Products & Components',
  description:
    'Browse wire components for refrigerators, dishwashers and ovens, plus retail display systems, shopping baskets and wire mesh decking for storage racking.',
  path: '/products.php',
  image: '/assets/images/products/wire-components.png',
  imageAlt: 'Precision industrial wire components manufactured by Abdelhamid',
});

export default function ProductsPage() {
  return (
    <PageShell
      scripts={['/assets/js/back-to-top.js']}
    >
      <ProductsContent />
      <BackToTop variant="products" />
    </PageShell>
  );
}

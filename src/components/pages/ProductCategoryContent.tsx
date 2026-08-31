import type { ProductCategory } from '@/lib/product-catalog';

type ProductCategoryContentProps = {
  category: ProductCategory;
};

export function ProductCategoryContent({ category }: ProductCategoryContentProps) {
  const titleId = category.id + '-page-title';

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="product-category-page relative isolate overflow-x-clip"
    >
      <section
        className="product-showroom product-category-detail"
        aria-labelledby={titleId}
      >
        <div className="container">
          <div className="product-showroom-list">
            <article className="showroom-category" id={category.id}>
              <div className="showroom-category-header">
                <span className="showroom-category-number">{category.number}</span>

                <div>
                  <span className="showroom-category-label">{category.label}</span>
                  <h1 id={titleId} className="showroom-category-page-title">
                    {category.title}
                  </h1>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="showroom-products">
                {category.products.map((product, index) => (
                  <div className="showroom-product-card" id={product.id} key={product.id}>
                    <div className="showroom-product-image">
                      <img
                        src={product.image.src}
                        alt={product.image.alt}
                        width={product.image.width}
                        height={product.image.height}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={index === 0 ? 'high' : undefined}
                        srcSet={
                          product.image.mobileSrc +
                          ' 800w, ' +
                          product.image.src +
                          ' 1600w'
                        }
                        sizes="(max-width: 800px) 50vw, 320px"
                      />
                    </div>

                    <div className="showroom-product-info">
                      <h2 className="showroom-product-name">
                        <a
                          className="showroom-product-permalink"
                          href={'#' + product.id}
                        >
                          {product.name}
                        </a>
                      </h2>
                      <span className="showroom-product-category">
                        {product.categoryLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

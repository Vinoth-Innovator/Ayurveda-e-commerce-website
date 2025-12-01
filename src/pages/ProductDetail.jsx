import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products.filter(p => p.id !== parseInt(id)).slice(0, 4);

  return (
    <div className="px-4 lg:px-10 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div className="flex flex-col gap-4">
            {/* ... Image gallery ... */}
            <div className="relative group w-full cursor-pointer">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style={{ backgroundImage: `url("${product.imageUrl}")` }}></div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-brand-brown dark:text-background-light text-4xl font-black leading-tight tracking-[-0.033em]">{product.name}</h1>
            <p className="text-brand-brown/80 dark:text-background-light/80 text-base leading-relaxed">
              A soothing, organic herbal infusion to promote relaxation and restful sleep. Hand-picked chamomile flowers blended with hints of lavender and lemon balm.
            </p>
            {/* ... Rating, price, etc. ... */}
            <div className="flex items-baseline gap-3">
              <span className="text-brand-brown dark:text-background-light text-3xl font-bold">${product.price.toFixed(2)}</span>
            </div>
            <p className="text-gray-600">2 units in stock</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button className="flex-1 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-brand-orange text-brand-brown font-bold gap-2 text-base leading-normal tracking-[0.015em] px-6 shadow-md hover:shadow-lg transition-shadow">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* ... Details sections ... */}

        <div className="flex flex-col gap-6 px-4 py-10">
          <h2 className="text-3xl font-bold text-brand-brown dark:text-background-light">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

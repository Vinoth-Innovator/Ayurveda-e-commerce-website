import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-24 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-1/4 xl:w-1/5 shrink-0">
          <div className="flex flex-wrap gap-1.5 pb-6 border-b border-subtle-light dark:border-subtle-dark">
            <a className="text-sm font-medium leading-normal text-text-light/60 dark:text-text-dark/60 hover:text-primary" href="#">Home</a>
            <span className="text-sm font-medium leading-normal text-text-light/60 dark:text-text-dark/60">/</span>
            <span className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">Shop</span>
          </div>
          <div className="flex flex-col pt-6">
            {/* ... Filters ... */}
          </div>
        </aside>
        <div className="w-full lg:w-3/4 xl:w-4/5">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-tight">Shop All Products</h2>
              <p className="text-text-light/70 dark:text-text-dark/70 mt-1">Discover our curated collection of natural wellness products.</p>
            </div>
            <div className="relative">
              <select className="form-select appearance-none block w-full pl-4 pr-10 py-2 h-10 text-sm font-medium bg-transparent border border-subtle-light dark:border-subtle-dark rounded-lg hover:bg-subtle-light/50 dark:hover:bg-subtle-dark/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors">
                <option>Sort by: Popularity</option>
                <option>Sort by: Newest</option>
                <option>Sort by: Price: Low to High</option>
                <option>Sort by: Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-light/70 dark:text-text-dark/70">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            <button className="flex items-center justify-center rounded-lg h-11 w-40 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">Load More</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;

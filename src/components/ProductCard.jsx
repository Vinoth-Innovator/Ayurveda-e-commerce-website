import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl, alt, rating, reviews, bestseller } = product;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<span key={i} className="material-symbols-outlined !text-base text-yellow-500" style={{fontVariationSettings: "'FILL' 1"}}>star</span>);
      } else if (i < rating) {
        stars.push(<span key={i} className="material-symbols-outlined !text-base text-yellow-500" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>);
      } else {
        stars.push(<span key={i} className="material-symbols-outlined !text-base text-subtle-light dark:text-subtle-dark">star</span>);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden group border border-subtle-light/0 hover:border-subtle-light dark:hover:border-subtle-dark transition-all duration-300 bg-background-light dark:bg-background-dark shadow-sm hover:shadow-xl">
      <div className="relative overflow-hidden bg-subtle-light/50 dark:bg-subtle-dark/50 aspect-square">
        {bestseller && <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full z-10">Bestseller</div>}
        <img src={imageUrl} alt={alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 p-4">
          <button className="flex items-center justify-center rounded-lg h-10 w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark text-sm font-bold hover:bg-primary hover:text-white transition-colors">Add to Cart</button>
          <Link to={`/products/${id}`} className="flex items-center justify-center rounded-lg h-10 w-12 shrink-0 bg-background-light/80 dark:bg-background-dark/80 text-text-light dark:text-text-dark hover:bg-primary hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">visibility</span></Link>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center gap-1 mt-1">
          {renderStars()}
          <span className="text-xs text-text-light/60 dark:text-text-dark/60 ml-1">({reviews})</span>
        </div>
        <p className="font-bold text-lg mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

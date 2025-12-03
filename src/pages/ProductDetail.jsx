import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <p className="text-sm text-gray-600 mb-4">
            Availability: <span className="text-green-600 font-semibold">{product.stock} units in stock</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            Add to Cart
          </button>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Product Details</h3>
            <div className="prose">
              <p>
                <strong>Ingredients:</strong> This product contains a blend of all-natural, ethically sourced herbs and oils, including Ashwagandha, Brahmi, and other beneficial botanicals. Each ingredient is carefully selected for its purity and potency.
              </p>
              <p>
                <strong>Benefits:</strong> Supports stress relief, promotes mental clarity, and helps maintain a healthy immune system. Our formula is designed to rejuvenate the body and mind, bringing you into a state of natural balance.
              </p>
              <p>
                <strong>How to Use:</strong> Take one teaspoon with warm water twice a day, or as directed by your healthcare practitioner. For best results, maintain a consistent daily routine.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

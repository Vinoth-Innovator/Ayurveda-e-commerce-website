import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';

const Home = () => {
  return (
    <div className="bg-stone-50 text-stone-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/hD8pLN2/hero-banner-1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Embrace Your Natural Radiance</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">Discover the timeless wisdom of Ayurveda and unlock your body's innate potential for healing and vitality.</p>
          <Link to="/products" className="mt-8 px-8 py-3 bg-green-800 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Ayurveda Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Ayurveda?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Holistic Healing</h3>
              <p>Ayurveda treats the body, mind, and spirit as a whole, promoting balance and overall well-being.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
              <p>Our products are crafted from the finest natural ingredients, free from harmful chemicals.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Time-Tested Wisdom</h3>
              <p>With roots in ancient India, Ayurveda is a 5,000-year-old system of natural healing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

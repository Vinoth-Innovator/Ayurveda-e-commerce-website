import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`material-symbols-outlined text-amber-400 text-base ${i < rating ? 'font-bold' : 'font-normal'}`}>
          star
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const { avatarUrl, name, location, rating, quote } = testimonial;
  return (
    <div className="flex flex-col gap-4 text-left p-6 bg-stone-100 dark:bg-stone-800/50 rounded-xl">
      <div className="flex items-center gap-4">
        <img className="w-14 h-14 bg-center bg-no-repeat aspect-square bg-cover rounded-full" alt={`Portrait of ${name}`} src={avatarUrl} />
        <div>
          <p className="text-base font-bold leading-normal">{name}</p>
          <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">{location}</p>
        </div>
      </div>
      <StarRating rating={rating} />
      <p className="text-base font-normal italic leading-relaxed text-stone-700 dark:text-stone-300">"{quote}"</p>
      <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">Verified Buyer</p>
    </div>
  );
};


const Testimonials = () => {
  const testimonialsData = [
    {
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&fit=crop",
      name: "Anika Sharma",
      location: "Mumbai",
      rating: 5,
      quote: "The Ashwagandha tablets have completely transformed my energy levels. I feel more balanced and calm throughout the day. A truly authentic product!"
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop",
      name: "Rohan Mehta",
      location: "Delhi",
      rating: 5,
      quote: "I was skeptical at first, but the Triphala supplement has been a game-changer for my digestion. Highly recommend this brand for its purity."
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&fit=crop",
      name: "Priya Das",
      location: "Bangalore",
      rating: 5,
      quote: "The Brahmi oil is my new favorite for hair care. It's soothing and has visibly improved the texture of my hair. Love the natural fragrance."
    },
     {
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop",
      name: "Vikram Singh",
      location: "Pune",
      rating: 5,
      quote: "As a yoga instructor, I rely on these products to maintain my wellness. The Turmeric formula helps with post-practice recovery. Thank you!"
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop",
      name: "Sneha Gupta",
      location: "Kolkata",
      rating: 5,
      quote: "I've been using the organic teas for a month, and the difference in my sleep quality is amazing. The packaging is beautiful too."
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&fit=crop",
      name: "Arjun Reddy",
      location: "Chennai",
      rating: 5,
      quote: "Finally, an authentic source for Ayurvedic products online. The 'Verified Buyer' badge gave me confidence, and the results speak for themselves."
    }
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ];

  return (
    <div className="bg-stone-50 dark:bg-stone-950">
      <main className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[300px]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%), url("https://images.unsplash.com/photo-1549414218-de4f1b452250?q=80&w=2070&auto=format&fit=crop")' }}>
          <div className="p-8">
            <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold">Stories from Our Community</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-x-8 gap-y-6 p-4 md:p-8 my-8 md:my-12 items-center bg-stone-100 dark:bg-stone-800/50 rounded-xl">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-5xl font-black tracking-tighter">4.8</p>
            <div className="flex gap-0.5 justify-center md:justify-start">
              <span className="material-symbols-outlined text-amber-400">star</span>
              <span className="material-symbols-outlined text-amber-400">star</span>
              <span className="material-symbols-outlined text-amber-400">star</span>
              <span className="material-symbols-outlined text-amber-400">star</span>
              <span className="material-symbols-outlined text-amber-400">star_half</span>
            </div>
            <p className="text-base">Based on 521 reviews</p>
          </div>
          <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
            {ratingDistribution.map(item => (
              <React.Fragment key={item.stars}>
                <p className="text-sm">{item.stars}</p>
                <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
                  <div className="rounded-full bg-amber-400" style={{ width: `${item.percentage}%` }}></div>
                </div>
                <p className="text-stone-500 dark:text-stone-400 text-sm text-right">{item.percentage}%</p>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {testimonialsData.map(testimonial => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex flex-col justify-end gap-6 px-4 py-10 text-center items-center md:gap-8 md:px-10 md:py-20 my-12">
            <h2 className="tracking-tight text-3xl font-bold md:text-4xl md:font-black max-w-2xl">Ready to Start Your Wellness Journey?</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl">Explore our curated collection of authentic Ayurvedic products and find what's right for you.</p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center">
            <button className="flex items-center justify-center rounded-lg h-12 px-5 bg-amber-400 text-stone-900 text-base font-bold grow">
              Shop Our Best Sellers
            </button>
            <button className="flex items-center justify-center rounded-lg h-12 px-5 bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-base font-bold grow">
              Share Your Story
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;
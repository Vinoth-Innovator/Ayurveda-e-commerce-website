import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: 'Herbal Immunity Tea',
    price: '$15.00',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ElOGr3gSevOvzsgPObezxSY5vPuWM3yae7nG0ylo0wb4mdneylhjpnxsXMs3ytxxOEjXf3_oj4jz2Dw3XD8Iao5iv0zIWKPDFtKh7Kapmgm-WaK7Xur8OVb_MG3Bv8txuu2bH1-m93__0av5wBnGBGd8uyISCp6LZeZQXVNhLJ3Nx6g9rJ01YJBz9dSGchabsejz9tnLZ6BYqxeeq2-70nEQ8HsvHvtPGCdC73JTIm4Ty64hv0lvNPTQry9_iI5MkBmSlA9CZ9g',
    alt: 'A glass cup of herbal immunity tea with steam rising, surrounded by dried herbs and spices.',
  },
  {
    id: 2,
    name: 'Nourishing Hair Oil',
    price: '$22.00',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdcVBkRPZJ3S_HCcoFCuVUAU5o0mHjDGv4jiAPJ2PPTyuMXG3bbUEsyMTmOonvAMTWN4cRI-Iuk69nmyVDyL9NPDj6bR7I7u9osTbR5UNv4BqpJa96ZhuOMvR7jkOXOoiOOgg3g3mvb48E3-K-fXfpMsGJ1KPI31aU1O64ZAkgzMlSDVtfWlrVuPJyBPZERAzxgQ35xhSur6c6fSqylNP8J_fFx_j7KZ3HPo5KvO9o4MrSw0nAv1wPbJ8Fo3PW5ZkmrxZL_uc1-nU',
    alt: 'A bottle of nourishing hair oil with a dropper, placed next to green leaves and flowers.',
  },
  {
    id: 3,
    name: 'Calming Essential Oil',
    price: '$18.00',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL_A2IdY7WrgK9dnPtjWn5mmliN76oslhys8czElm-d_GihYDOetGxrJYZaBE26AUmdf2fHtGl6JuGL39ZDZ9Je98AcUsegm035TYdjWW8FXPI0mwLA7RQ6ESGEtmzjKF2coa1RgBts5QrbbdfrS29kS60SVoFdIF2ZOrBcmKEb-nevt_EOsetgbbDEbmwJBqvvq9TDvTd1S8-aYbSOsckf1O5ouW64WZvrrEl_a1oYbOAlKyT71-oCH7bQelocTvbV2jKe5nbfCk',
    alt: 'A small amber bottle of calming essential oil next to a lavender sprig on a wooden surface.',
  },
  {
    id: 4,
    name: 'Organic Turmeric Capsules',
    price: '$25.00',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq-l97eB0PNowexoZBPrxUBsbPL-qwN3yrr1pSpsTSUXNAkrrVGc92LE4W4EbM_rGOMLB7WbZdubgX37LDcQ1E7dMIdyH63mcuAWfThFwSwn0MW_4Mr5aqHqKtPYhOnIHS1uEG8h-a-GCVqWln6p1hjcZcWeLztuVDXU6_TsVE5h6b1OOtargidjIOJbjjViORidPeU28dbtfWm4Z97HUh07syJa2-zd_HxJn61Q7SZHdoRYLtQpQ-LBBq5SXyET4S74JfBDZC3OE',
    alt: 'A bottle of organic turmeric capsules with loose turmeric powder and roots nearby.',
  },
];


const Home = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
      <div className="@container mt-5">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4 relative">
            <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlzsL8S2j7v9SNhqQwMAavswBfLSTeeMxkTkrAtKUi5v5UirmUEGduchWS5w8vzHlYxeq_okkX97TcozrIlbMcBE69m0Yk6C0FayeUsd9TkV6A3kI3JcYwcqTzS921mMApk8rs9hEOvGCj0ry_YJJ0EGm9ICQvRHWCbTJ_h0YjUiVLO2ddr67rTsmk20dqWEK1QXu2ddoR71BwQlIVL38qnHZkzy-yVfJDbOsE22ts9aQzNc5hoowmvinp5meDW4vNE24miBymQS8")', filter: 'brightness(0.8)'}}></div>
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <div className="relative flex flex-col gap-4 text-center max-w-2xl z-10">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Holistic Health from Ancient Wisdom</h1>
              <h2 className="text-white text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">Discover authentic Ayurvedic products for a holistic and harmonious lifestyle.</h2>
            </div>
            <Link to="/products" className="relative z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-herbal-green text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
              <span className="truncate">Shop Now</span>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          {/* ... feature sections ... */}
        </div>
      </section>

      <section>
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Featured Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex flex-col gap-3 pb-3 group">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden">
                <img src={product.imageUrl} alt={product.alt} className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300 ease-in-out" />
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">{product.name}</p>
                <p className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-normal leading-normal">{product.price}</p>
                <Link to={`/products/${product.id}`} className="mt-2 text-sm text-herbal-green font-bold hover:underline">View Product</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ... other sections from home page ... */}

    </div>
  );
};

export default Home;

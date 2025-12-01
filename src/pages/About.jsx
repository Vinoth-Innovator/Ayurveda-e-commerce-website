import React from 'react';

const About = () => {
  return (
    <main className="flex-1">
      <div className="flex flex-col gap-16 py-16 sm:gap-20 sm:py-20">
        <section className="px-4 @container">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex flex-1 flex-col gap-4 text-center md:text-left">
              <h1 className="text-[#1c170d] dark:text-background-light text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Nurturing Balance, Naturally</h1>
              <p className="text-[#1c170d] dark:text-background-light/80 text-base font-normal leading-relaxed">Our journey began with a shared passion for Ayurveda's profound wisdom. Inspired by our ancestors' reliance on nature for healing, we set out to create a line of authentic, pure, and sustainable wellness products. We believe in holistic well-being, where the health of the individual is connected to the health of the planet.</p>
            </div>
            <div className="relative aspect-[4/3] flex-1">
              <img alt="Close up of green leaves with water droplets, signifying nature and purity." className="h-full w-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKQFDauhqyb7EuLrOzFEZk8lkB2PFrr3XnrMf8yVrBlXoy0Me-qu5DssunlNzHxAVg525wfGAHflj6nBnQGzM977SnxJwqeSN6w2L-RG2Habp2cCLxLQDhcizI2WulWLlk2jD77FGArIUussMZSDUZIVrM0X4ljaRAMw8vLh0SZrCNxcP6QS8Cc13SPpVkoyrOqvyRHwlQFlnzxRRVsSqKYx-3VY25SO8AmRP3NY5MB1lFzxMn72zZ-e5XCiaLG4bg67f0dNQTYYY" />
            </div>
          </div>
        </section>
        {/* ... Other sections from about page ... */}
      </div>
    </main>
  );
};

export default About;

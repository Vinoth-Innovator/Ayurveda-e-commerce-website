import React from 'react';

const Contact = () => {
  return (
    <main className="flex-grow">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 sm:py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap justify-between gap-4 py-4 mb-8">
            <div className="flex flex-col gap-3">
              <p className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100">Contact Us</p>
              <p className="text-base font-normal leading-normal text-gray-600 dark:text-gray-400">Have a question or feedback? We'd love to hear from you.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3 bg-white dark:bg-background-dark p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <form className="flex flex-col gap-6">
                {/* ... Form ... */}
              </form>
            </div>
            <div className="lg:col-span-2 space-y-8">
              {/* ... Contact info ... */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

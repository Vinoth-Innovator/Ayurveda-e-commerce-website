import React from 'react';
import { faqs } from '../data/faqs';

const FAQ = () => {
  return (
    <main className="flex-grow">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-stone-900 dark:text-white sm:text-5xl">Frequently Asked Questions</h1>
              <p className="max-w-2xl text-base font-normal leading-normal text-stone-600 dark:text-stone-400">
                Have questions? We’ve got answers to some common questions below. If you don’t see your question, feel free to contact us.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <details key={index} className="group flex flex-col border-t border-primary/20 py-2 dark:border-primary/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4">
                  <p className="text-base font-medium leading-normal text-stone-800 dark:text-stone-200">{faq.question}</p>
                  <div className="text-stone-600 transition-transform duration-300 group-open:rotate-180 dark:text-stone-400">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <div className="pb-2 pr-8">
                  <p className="text-sm font-normal leading-relaxed text-stone-600 dark:text-stone-400">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;

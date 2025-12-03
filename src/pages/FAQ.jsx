import React, { useState } from 'react';
import { faqs } from '../data/faqs';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-500">
            Can’t find the answer you’re looking for? Reach out to our customer support team.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 py-6">
              <dt>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="text-left w-full flex justify-between items-start text-gray-400"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className={`h-6 w-6 transform ${openFaq === faq.id ? '-rotate-180' : 'rotate-0'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className={`mt-2 pr-12 ${openFaq === faq.id ? 'block' : 'hidden'}`}>
                <p className="text-base text-gray-500">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

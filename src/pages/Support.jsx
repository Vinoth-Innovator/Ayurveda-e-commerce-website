import React from 'react';

const Support = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Customer Support
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? We are here to help.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How can I track my order?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Once your order has shipped, you will receive an email with a tracking number. You can use this number to track your order on the carrier's website.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What is your return policy?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, you can return it for a full refund. Please see our returns page for more details.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How do I contact customer support?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  You can contact us by email at support@ayurvedawellness.com or by phone at (123) 456-7890. Our support team is available Monday to Friday, 9am to 5pm EST.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

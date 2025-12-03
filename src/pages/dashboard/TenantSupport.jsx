import React from 'react';

const TenantSupport = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Support</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Open Tickets</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Order #ORD-123 Issue</h3>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <p className="text-gray-600 mt-2">
                Customer is reporting that their order has not arrived.
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Payment Problem</h3>
                <span className="text-sm text-gray-500">5 days ago</span>
              </div>
              <p className="text-gray-600 mt-2">
                A customer's credit card was declined, but they insist it's valid.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Create New Ticket</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Submit Ticket</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TenantSupport;

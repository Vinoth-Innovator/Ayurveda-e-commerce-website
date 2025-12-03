import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-white w-80 h-96 rounded-lg shadow-lg flex flex-col">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Ayurveda Assistant</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="mb-4">
              <p className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 inline-block">
                Namaste 🙏 I’m your Ayurveda Assistant. How can I help you today?
              </p>
            </div>
            <div className="flex justify-end mb-4">
               <button className="bg-green-500 text-white rounded-lg py-2 px-4">
                Find a product
              </button>
            </div>
             <div className="flex justify-end mb-4">
               <button className="bg-green-500 text-white rounded-lg py-2 px-4">
               Track my order
              </button>
            </div>
             <div className="flex justify-end mb-4">
               <button className="bg-green-500 text-white rounded-lg py-2 px-4">
                Learn about Ayurveda
              </button>
            </div>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default ChatWidget;

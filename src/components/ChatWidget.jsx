import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {isOpen && (
        <div className="w-[380px] h-[520px] bg-background-light dark:bg-background-dark shadow-2xl rounded-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-1 p-4 border-b border-primary/20 dark:border-primary/10">
            <div className="flex items-center justify-between">
              <p className="text-[#121b0e] dark:text-white tracking-light text-xl font-bold leading-tight">Ayurveda Assistant</p>
              <button onClick={() => setIsOpen(false)} className="text-[#67974e] dark:text-gray-300">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
              </button>
            </div>
            <p className="text-[#67974e] dark:text-gray-400 text-sm font-normal leading-normal">Ask me about products, orders, or Ayurveda tips</p>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <p className="text-base font-normal leading-normal flex max-w-[280px] rounded-lg rounded-bl-none px-4 py-2.5 bg-primary/20 dark:bg-primary/30 text-[#121b0e] dark:text-white">
              Namaste 🌿 I’m your Ayurveda Assistant. How can I help you today?
            </p>
            {/* ... quick replies ... */}
          </div>
          <div className="flex items-center p-3 gap-3 border-t border-primary/20 dark:border-primary/10">
            {/* ... input ... */}
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-16 h-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-[#121b0e] shadow-lg">
        <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>chat_bubble</span>
      </button>
    </div>
  );
};

export default ChatWidget;

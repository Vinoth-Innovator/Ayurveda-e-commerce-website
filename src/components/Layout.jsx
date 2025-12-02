import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

const Layout = ({ children }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex flex-col flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
};

export default Layout;

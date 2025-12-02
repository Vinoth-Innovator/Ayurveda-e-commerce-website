import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-subtle-light dark:border-subtle-dark px-4 sm:px-6 lg:px-10 py-3">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-4 text-text-light dark:text-text-dark">
          <div className="size-6 text-herbal-green">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4v2a2 2 0 002 2h12a2 2 0 002-2V4M8 8v12M16 8v12M4 20h16M7 4a4 4 0 014-2h2a4 4 0 014 2v0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Ayurveda Wellness</h2>
        </Link>
        <div className="hidden lg:flex items-center gap-9">
          <Link to="/" className="text-sm font-medium leading-normal hover:text-warm-orange transition-colors">Home</Link>
          <Link to="/products" className="text-sm font-medium leading-normal hover:text-warm-orange transition-colors">Shop</Link>
          <Link to="/about" className="text-sm font-medium leading-normal hover:text-warm-orange transition-colors">About</Link>
          <Link to="/blog" className="text-sm font-medium leading-normal hover:text-warm-orange transition-colors">Blog</Link>
          <Link to="/contact" className="text-sm font-medium leading-normal hover:text-warm-orange transition-colors">Contact</Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4">
        <div className="flex gap-2">
          <Link to="/cart" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 hover:bg-subtle-light dark:hover:bg-subtle-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
            <span className="material-symbols-outlined !text-xl">shopping_cart</span>
          </Link>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 hover:bg-subtle-light dark:hover:bg-subtle-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0">
            <span className="material-symbols-outlined !text-xl">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

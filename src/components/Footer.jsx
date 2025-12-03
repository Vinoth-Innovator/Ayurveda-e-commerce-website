import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-5 text-green-600">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4v2a2 2 0 002 2h12a2 2 0 002-2V4M8 8v12M16 8v12M4 20h16M7 4a4 4 0 014-2h2a4 4 0 014 2v0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
              <h2 className="text-base font-bold">Ayurveda Wellness</h2>
            </div>
            <p className="text-sm">Holistic products for a balanced life.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-green-600 transition-colors">
                  Skincare
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-600 transition-colors">
                  Haircare
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-600 transition-colors">
                  Supplements
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-600 transition-colors">
                  Teas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-green-600 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-green-600 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/support" className="hover:text-green-600 transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-green-600 transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-green-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-green-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-600 transition-colors">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.623c-2.387 0-2.691.01-3.638.056-.944.045-1.505.208-1.944.372a3.282 3.282 0 00-1.18 1.18c-.164.439-.327.999-.372 1.944-.046.947-.056 1.251-.056 3.638s.01 2.691.056 3.638c.045.944.208 1.505.372 1.944a3.282 3.282 0 001.18 1.18c.439.164.999.327 1.944.372.947.046 1.251.056 3.638.056s2.691-.01 3.638-.056c.944-.045 1.505-.208 1.944-.372a3.282 3.282 0 001.18-1.18c.164.439.327-.999.372-1.944.046-.947.056-1.251.056-3.638s-.01-2.691-.056-3.638c-.045-.944-.208-1.505-.372-1.944a3.282 3.282 0 00-1.18-1.18c-.439-.164-.999-.327-1.944-.372C15.006 3.633 14.702 3.623 12.315 3.623zM12 8.118c-2.147 0-3.882 1.735-3.882 3.882s1.735 3.882 3.882 3.882 3.882-1.735 3.882-3.882S14.147 8.118 12 8.118zm0 6.162c-1.258 0-2.28-1.022-2.28-2.28s1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28-1.022 2.28-2.28 2.28zm4.965-6.402a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm">
          <p>© 2024 Ayurveda Wellness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

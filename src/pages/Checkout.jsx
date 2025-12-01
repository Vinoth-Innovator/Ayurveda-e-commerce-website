import React from 'react';
import { useCart } from '../hooks/useCart';

const Checkout = () => {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00;
  const taxes = subtotal * 0.05;
  const total = subtotal + shipping + taxes;

  return (
    <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <p className="text-[#1c170d] dark:text-background-light text-3xl font-black leading-tight tracking-[-0.033em]">Checkout</p>
          <div className="flex flex-col gap-4">
            <details className="flex flex-col rounded-lg border border-[#e8e0ce] dark:border-background-dark/50 bg-background-light dark:bg-background-dark px-4 py-2 group" open>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-[#1c170d] dark:text-background-light text-base font-bold leading-normal">1. Shipping Information</p>
                <span className="material-symbols-outlined text-[#1c170d] dark:text-background-light group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="py-4 space-y-4">
                {/* ... Form fields ... */}
              </div>
            </details>
            <details className="flex flex-col rounded-lg border border-[#e8e0ce] dark:border-background-dark/50 bg-background-light dark:bg-background-dark px-4 py-2 group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-[#1c170d] dark:text-background-light text-base font-bold leading-normal">2. Payment Method</p>
                <span className="material-symbols-outlined text-[#1c170d] dark:text-background-light group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
            </details>
          </div>
        </div>
        <div className="flex flex-col bg-[#f4efe7] dark:bg-background-dark/50 p-6 lg:p-8 rounded-xl h-fit sticky top-10">
          <h3 className="text-xl font-bold text-[#1c170d] dark:text-background-light mb-6">Order Summary</h3>
          <div className="space-y-4 border-b border-[#e8e0ce] dark:border-background-dark/50 pb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('${item.imageUrl}')`}}></div>
                <div className="flex-1">
                  <p className="font-semibold text-[#1c170d] dark:text-background-light">{item.name}</p>
                  <p className="text-sm text-[#9c8149] dark:text-[#9c8149]/80">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold text-[#1c170d] dark:text-background-light">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="py-6 border-b border-[#e8e0ce] dark:border-background-dark/50 space-y-2">
            <div className="flex justify-between text-sm text-[#1c170d] dark:text-background-light/90">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-[#1c170d] dark:text-background-light/90">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-[#1c170d] dark:text-background-light/90">
              <span>Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg pt-6 text-[#1c170d] dark:text-background-light">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;

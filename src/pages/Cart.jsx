import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="px-4 sm:px-10 lg:px-20 py-8 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <h1 className="text-charcoal text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] min-w-72 font-heading">My Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="hidden sm:grid grid-cols-6 gap-4 border-b border-warm-beige pb-2 text-sm text-gray-500 font-bold uppercase tracking-wider">
              <div className="col-span-3">Product</div>
              <div className="col-span-1 text-right">Price</div>
              <div className="col-span-1 text-center">Quantity</div>
              <div className="col-span-1 text-right">Subtotal</div>
            </div>
            <div className="flex flex-col divide-y divide-warm-beige">
              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-1 sm:grid-cols-6 gap-4 py-6 items-center">
                  {/* ... product details ... */}
                  <div className="col-span-1 sm:col-span-3 flex items-start gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px] sm:size-[90px] flex-shrink-0" style={{ backgroundImage: `url("${item.imageUrl}")` }}></div>
                    <div className="flex flex-1 flex-col justify-center gap-1">
                      <a className="text-charcoal text-base font-bold leading-normal hover:text-primary" href="#">{item.name}</a>
                      <button onClick={() => removeFromCart(item.id)} className="text-terracotta text-xs font-medium hover:underline text-left mt-1">Remove</button>
                    </div>
                  </div>
                  <div className="hidden sm:flex col-span-1 justify-end items-center">
                    <p className="text-primary text-base font-medium leading-normal">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="col-span-1 flex justify-center items-center">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="text-base font-medium leading-normal w-full p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>
                  <div className="hidden sm:flex col-span-1 justify-end items-center">
                    <p className="text-charcoal text-base font-bold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-warm-beige/50 p-6 lg:p-8 rounded-lg flex flex-col gap-6 sticky top-8">
              <h3 className="text-2xl font-bold font-heading text-charcoal">Order Summary</h3>
              <div className="flex justify-between items-center text-charcoal">
                <span>Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="w-full bg-primary text-white font-bold py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Proceed to Checkout
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;

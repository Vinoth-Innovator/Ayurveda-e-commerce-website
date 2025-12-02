import React from 'react';

const SupportTopicCard = ({ icon, title, description }) => (
  <div className="flex flex-1 gap-3 rounded-lg border border-stone-200 bg-white p-4 flex-col dark:bg-stone-900 dark:border-stone-800">
    <span className="material-symbols-outlined text-2xl text-green-600">{icon}</span>
    <div className="flex flex-col gap-1">
      <h3 className="text-stone-900 dark:text-white text-base font-bold leading-tight">{title}</h3>
      <p className="text-stone-600 dark:text-stone-400 text-sm">{description}</p>
    </div>
  </div>
);

const Support = () => {
  const quickHelpTopics = [
    { icon: 'local_shipping', title: 'Orders & Shipping', description: 'Track your order, learn about shipping.' },
    { icon: 'credit_card', title: 'Payments & Refunds', description: 'Manage your payments and refunds.' },
    { icon: 'spa', title: 'Products & Ingredients', description: 'Details about our product ingredients.' },
    { icon: 'person', title: 'Account & Login', description: 'Manage your account details and login.' },
  ];

  return (
    <div className="bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <main className="flex flex-col gap-10">
          {/* Hero Section */}
          <div className="rounded-lg min-h-[380px] flex flex-col gap-8 items-center justify-center p-4 text-center bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1540555233036-93821b3337a7?q=80&w=2070&auto=format&fit=crop")'}}>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-4xl font-black tracking-tight sm:text-5xl">How Can We Help?</h1>
              <p className="text-white/90 text-base sm:text-lg">We’re here to support your Ayurvedic wellness journey.</p>
            </div>
            <div className="w-full max-w-xl">
              <label className="relative text-gray-400 focus-within:text-gray-600 block">
                <span className="material-symbols-outlined pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">search</span>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Type your question (e.g., 'order status')"
                  className="form-input w-full rounded-lg h-14 pl-14 pr-4 bg-white/90 placeholder:text-stone-500 text-base"
                />
              </label>
            </div>
          </div>

          {/* Quick Help Topics Section */}
          <section>
            <h2 className="text-stone-900 dark:text-white text-2xl font-bold tracking-tight px-4 pb-4">Quick Help Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
              {quickHelpTopics.map((topic) => (
                <SupportTopicCard key={topic.title} {...topic} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="p-4">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 border border-stone-200 dark:border-stone-800 rounded-lg p-6 md:p-8 bg-white dark:bg-stone-900">
              <div className="flex-1">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-stone-900 dark:text-white text-3xl font-black tracking-tight">Can't find what you’re looking for?</p>
                  <p className="text-stone-600 dark:text-stone-400">Send us a message and our team will get back to you.</p>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl text-green-600">mail</span>
                    <a className="text-stone-800 dark:text-stone-200 hover:text-green-600" href="mailto:support@ayurveda.com">support@ayurveda.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl text-green-600">call</span>
                    <span className="text-stone-800 dark:text-stone-200">+1 (555) 123-4567 (9am - 5pm EST)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl text-green-600">chat_bubble</span>
                    <span className="text-stone-800 dark:text-stone-200">Use our chatbot for instant help</span>
                  </div>
                </div>
              </div>
              <form className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1 text-stone-700 dark:text-stone-300" htmlFor="name">Name</label>
                    <input className="form-input w-full rounded border-stone-300 dark:border-stone-700 bg-transparent focus:border-green-500 focus:ring-green-500/50" id="name" type="text" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1 text-stone-700 dark:text-stone-300" htmlFor="email">Email</label>
                    <input className="form-input w-full rounded border-stone-300 dark:border-stone-700 bg-transparent focus:border-green-500 focus:ring-green-500/50" id="email" type="email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-stone-700 dark:text-stone-300" htmlFor="topic">Topic</label>
                  <select className="form-select w-full rounded border-stone-300 dark:border-stone-700 bg-transparent focus:border-green-500 focus:ring-green-500/50" id="topic">
                    <option>Order Inquiry</option>
                    <option>Product Question</option>
                    <option>Shipping & Returns</option>
                    <option>General Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-stone-700 dark:text-stone-300" htmlFor="message">Message</label>
                  <textarea className="form-textarea w-full rounded border-stone-300 dark:border-stone-700 bg-transparent focus:border-green-500 focus:ring-green-500/50" id="message" rows="4"></textarea>
                </div>
                <button className="flex w-full sm:w-auto sm:self-start min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-green-600 text-white text-base font-bold" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Support;
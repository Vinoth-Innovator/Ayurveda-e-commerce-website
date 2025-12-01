import React from 'react';

const LowStockAlert = ({ alerts }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white">Low Stock Alerts</h2>
      <div className="mt-4 flex flex-col gap-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-4">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-stone-900 dark:text-white">{alert.productName}</p>
              <p className="text-sm text-red-500">{alert.stock} units left</p>
            </div>
            <span className="material-symbols-outlined text-red-500">warning</span>
          </div>
        ))}
        <a href="#" className="mt-2 w-full rounded-lg bg-stone-100 dark:bg-stone-800 px-4 py-2 text-center text-sm font-semibold text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700">
          Manage Stock
        </a>
      </div>
    </div>
  );
};

export default LowStockAlert;
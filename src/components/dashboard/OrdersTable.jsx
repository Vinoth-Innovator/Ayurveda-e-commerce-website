import React from 'react';

const StatusBadge = ({ status }) => {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const statusClasses = {
    Delivered: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
    Shipped: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
    Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};


const OrdersTable = ({ orders }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white">Recent Orders</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
        <table className="min-w-full divide-y divide-stone-200 dark:divide-stone-800">
          <thead className="bg-stone-50 dark:bg-stone-800/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Order ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Customer Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Order Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Status</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Total Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-stone-900 dark:text-white">{order.id}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-stone-600 dark:text-stone-300">{order.customer}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-stone-600 dark:text-stone-300">{order.date}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <StatusBadge status={order.status} />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-stone-900 dark:text-white">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
import React from 'react';
import { products } from '../../data/products';

const LowStockAlert = () => {
    const lowStockProducts = products.filter(product => product.stock < 10);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Low Stock Alerts</h3>
      <ul>
        {lowStockProducts.map((product) => (
          <li key={product.id} className="flex justify-between items-center py-2 border-b">
            <span>{product.name}</span>
            <span className="text-red-500">{product.stock} in stock</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowStockAlert;

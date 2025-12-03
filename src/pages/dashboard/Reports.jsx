import React from 'react';
import { kpis } from '../../data/kpis';
import { products } from '../../data/products';
import KPIBox from '../../components/dashboard/KPIBox';

const productSales = products.slice(0, 5).map(product => ({
  ...product,
  sales: (product.price * (Math.floor(Math.random() * 20) + 5)).toFixed(2) // Simulate sales
}));


const Reports = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPIBox title="Total Revenue" value={`$${kpis.totalRevenue.toFixed(2)}`} />
        <KPIBox title="Total Orders" value={kpis.totalOrders} />
        <KPIBox title="New Customers" value={kpis.newCustomers} />
        <KPIBox title="Conversion Rate" value="12%" />
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Sales Over Time</h3>
          {/* Placeholder for chart */}
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart will be here</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Top Products</h3>
          <ul>
            {productSales.map((product) => (
              <li key={product.id} className="flex justify-between items-center py-2 border-b">
                <span>{product.name}</span>
                <span>${product.sales}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;

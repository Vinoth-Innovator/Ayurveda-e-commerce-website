import React from 'react';
import KPIBox from '../../components/dashboard/KPIBox';
import OrdersTable from '../../components/dashboard/OrdersTable';
import LowStockAlert from '../../components/dashboard/LowStockAlert';

const TenantDashboard = () => {
  const kpiData = [
    { title: "Today's Revenue", value: "$1,250.75", change: "+5.2%", isPositive: true },
    { title: "Today's Orders", value: "42", change: "+8.1%", isPositive: true },
    { title: "Products Low in Stock", value: "8", change: "-2.0%", isPositive: false },
    { title: "New Customers", value: "15", change: "+10.5%", isPositive: true },
  ];

  const recentOrders = [
    { id: '#1025', customer: 'Anika Sharma', date: 'Oct 26, 2023', status: 'Delivered', total: '$89.90' },
    { id: '#1024', customer: 'Rohan Desai', date: 'Oct 26, 2023', status: 'Shipped', total: '$45.50' },
    { id: '#1023', customer: 'Priya Patel', date: 'Oct 25, 2023', status: 'Pending', total: '$112.00' },
    { id: '#1022', customer: 'Vikram Singh', date: 'Oct 25, 2023', status: 'Delivered', total: '$34.75' },
    { id: '#1021', customer: 'Meera Iyer', date: 'Oct 24, 2023', status: 'Delivered', total: '$76.20' },
  ];

  const lowStockAlerts = [
    { productName: 'Ashwagandha Capsules', stock: 2 },
    { productName: 'Triphala Powder', stock: 3 },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black tracking-tight text-stone-900 dark:text-white">Welcome, Tenant</h1>
          <p className="text-base font-normal text-stone-500 dark:text-stone-400">Here’s an overview of your Ayurveda store today.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {kpiData.map(kpi => <KPIBox key={kpi.title} {...kpi} />)}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main column with Table */}
        <div className="lg:col-span-2">
          <OrdersTable orders={recentOrders} />
        </div>

        {/* Side column with Alerts and Actions */}
        <div className="space-y-8">
          <LowStockAlert alerts={lowStockAlerts} />
          {/* Quick Actions can be added here if needed */}
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
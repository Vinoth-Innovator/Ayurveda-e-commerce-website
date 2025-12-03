import React from 'react';
import KPIBox from '../../components/dashboard/KPIBox';
import OrdersTable from '../../components/dashboard/OrdersTable';
import LowStockAlert from '../../components/dashboard/LowStockAlert';
import { kpis } from '../../data/kpis';

const TenantDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPIBox title="Total Revenue" value={`$${kpis.totalRevenue.toFixed(2)}`} />
        <KPIBox title="Total Orders" value={kpis.totalOrders} />
        <KPIBox title="New Customers" value={kpis.newCustomers} />
        <KPIBox title="Pending Orders" value={kpis.pendingOrders} />
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrdersTable />
        </div>
        <div>
          <LowStockAlert />
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;

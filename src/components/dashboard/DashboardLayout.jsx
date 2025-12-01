import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
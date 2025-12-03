import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center text-2xl font-bold">
        Ayurveda Admin
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md ${
              isActive ? 'bg-gray-900' : ''
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md ${
              isActive ? 'bg-gray-900' : ''
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/reports"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md ${
              isActive ? 'bg-gray-900' : ''
            }`
          }
        >
          Reports
        </NavLink>
        <NavLink
          to="/dashboard/support"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md ${
              isActive ? 'bg-gray-900' : ''
            }`
          }
        >
          Support
        </NavLink>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

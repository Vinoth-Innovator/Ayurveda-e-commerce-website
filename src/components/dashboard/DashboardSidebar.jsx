import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 rounded-lg px-3 py-2 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors ${
        isActive ? 'bg-stone-200 dark:bg-stone-800 font-bold text-stone-900 dark:text-white' : ''
      }`
    }
  >
    <span className="material-symbols-outlined">{icon}</span>
    <span className="text-sm font-medium">{children}</span>
  </NavLink>
);

const DashboardSidebar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-4">
      <div className="flex items-center gap-3 p-3">
         <img src="/logo.svg" alt="VedaAdmin company logo" className="size-10" />
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-stone-900 dark:text-white">Ayurveda Admin</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">Store Panel</p>
        </div>
      </div>
      <nav className="mt-8 flex flex-col gap-2">
        <NavItem to="/dashboard" icon="dashboard">Dashboard</NavItem>
        <NavItem to="/dashboard/products" icon="spa">Products</NavItem>
        <NavItem to="/dashboard/orders" icon="inventory_2">Orders</NavItem>
        <NavItem to="/dashboard/reports" icon="analytics">Reports</NavItem>
        <NavItem to="/dashboard/support" icon="support_agent">Support</NavItem>
      </nav>
      <div className="mt-auto flex flex-col gap-2">
        <NavItem to="/dashboard/settings" icon="settings">Settings</NavItem>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
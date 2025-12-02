import React from 'react';
import KPIBox from '../../components/dashboard/KPIBox';

const Reports = () => {
    const reportKpis = [
        { title: "Total Revenue", value: "$10,540", change: "+12.5%", isPositive: true },
        { title: "Number of Orders", value: "215", change: "+8.2%", isPositive: true },
        { title: "Average Order Value", value: "$49.02", change: "-1.5%", isPositive: false },
        { title: "Returning Customers", value: "28%", change: "+5.0%", isPositive: true },
    ];

    const topProducts = [
        {
            imgSrc: 'https://images.unsplash.com/photo-1627308595186-e6bb3653373a?q=80&w=200&h=200&fit=crop',
            name: 'Ashwagandha Capsules',
            sold: 120,
            revenue: 1800,
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1581053804222-b0a623a4a9fd?q=80&w=200&h=200&fit=crop',
            name: 'Triphala Powder',
            sold: 95,
            revenue: 1140,
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1596547609337-37b1a95a4563?q=80&w=200&h=200&fit=crop',
            name: 'Brahmi Oil',
            sold: 82,
            revenue: 984,
        }
    ];

    const lowStockProducts = [
        { name: 'Neem & Aloe Vera Soap', stock: 4, status: 'Low Stock' },
        { name: 'Herbal Hair Oil', stock: 2, status: 'Low Stock' },
        { name: 'Chyawanprash', stock: 8, status: 'Needs Reorder' },
    ];


    const StockStatus = ({ status }) => {
        const isLow = status === 'Low Stock';
        const classes = isLow
            ? "bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300"
            : "bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400";
        const icon = isLow ? "warning" : "hourglass_empty";

        return (
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${classes}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{icon}</span>
                {status}
            </span>
        );
    };


    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-4xl font-black tracking-tight text-stone-900 dark:text-white">Reports & Analytics</h1>
                    <p className="text-base text-stone-500 dark:text-stone-400">Monitor your store's performance and growth.</p>
                </div>
                <button className="flex items-center justify-center rounded-lg h-10 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-sm font-bold px-4 gap-2">
                    <span className="material-symbols-outlined">download</span>
                    <span>Export Report</span>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {reportKpis.map(kpi => <KPIBox key={kpi.title} {...kpi} />)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                     <h3 className="text-lg font-bold text-stone-900 dark:text-white">Sales Overview</h3>
                     <div className="w-full h-80 bg-stone-100/50 dark:bg-stone-800/40 rounded-lg flex items-center justify-center mt-4">
                        <p className="text-stone-500 dark:text-stone-400">Chart Data Placeholder</p>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white">Top Products</h3>
                    <div className="flex flex-col gap-4 mt-4">
                        {topProducts.map(p => (
                            <div key={p.name} className="flex items-center gap-4">
                                <img className="size-12 rounded-lg object-cover" alt={p.name} src={p.imgSrc} />
                                <div className="flex-1">
                                    <p className="font-semibold text-stone-800 dark:text-stone-200">{p.name}</p>
                                    <p className="text-sm text-stone-500">{p.sold} units sold</p>
                                </div>
                                <p className="font-bold text-stone-800 dark:text-stone-200">${p.revenue.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                <div className="p-6">
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white">Low Stock / Inventory Alerts</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-stone-50 dark:bg-stone-800/50">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-stone-600 dark:text-stone-300">Product Name</th>
                                <th className="p-4 text-sm font-semibold text-stone-600 dark:text-stone-300 text-right">Units in Stock</th>
                                <th className="p-4 text-sm font-semibold text-stone-600 dark:text-stone-300 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                            {lowStockProducts.map(p => (
                                <tr key={p.name}>
                                    <td className="p-4 text-stone-800 dark:text-stone-200">{p.name}</td>
                                    <td className="p-4 text-stone-800 dark:text-stone-200 text-right">{p.stock}</td>
                                    <td className="p-4 text-right"><StockStatus status={p.status} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;
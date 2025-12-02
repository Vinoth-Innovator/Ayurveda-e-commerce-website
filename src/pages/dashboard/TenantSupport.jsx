import React, { useState } from 'react';

const TicketStatusBadge = ({ status }) => {
  const baseClasses = "inline-flex items-center rounded-full h-7 px-3 text-xs font-medium";
  const statusClasses = {
    'In Progress': "bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300",
    'Waiting for Reply': "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300",
    'Open': "bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200",
    'Closed': "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

const PriorityBadge = ({ priority }) => {
    const baseClasses = "inline-flex items-center rounded-full h-7 px-3 text-xs font-medium";
    const priorityClasses = {
      'High': "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300",
      'Medium': "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300",
      'Low': "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
    };
    return <span className={`${baseClasses} ${priorityClasses[priority]}`}>{priority}</span>;
};

const CreateTicketForm = () => (
    <div className="mt-6 p-6 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800">
        <h2 className="text-xl font-bold mb-4">Create New Ticket</h2>
        <form className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300" htmlFor="subject">Subject</label>
                <input className="mt-1 block w-full rounded-md border-stone-300 dark:border-stone-700 bg-transparent shadow-sm focus:border-green-500 focus:ring-green-500/50" id="subject" type="text" />
            </div>
            <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300" htmlFor="category">Category</label>
                <select className="mt-1 block w-full rounded-md border-stone-300 dark:border-stone-700 bg-transparent py-2 pl-3 pr-10 focus:border-green-500 focus:ring-green-500/50" id="category">
                    <option>Billing</option><option>Technical Issue</option><option>Feature Request</option><option>Other</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-stone-300" htmlFor="description">Description</label>
                <textarea className="mt-1 block w-full rounded-md border-stone-300 dark:border-stone-700 bg-transparent shadow-sm focus:border-green-500 focus:ring-green-500/50" id="description" rows="4"></textarea>
            </div>
            <div className="text-right">
                <button className="inline-flex justify-center rounded-lg border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700" type="submit">Submit Ticket</button>
            </div>
        </form>
    </div>
);


const TenantSupport = () => {
  const [activeTab, setActiveTab] = useState('open');

  const openTickets = [
    { id: 'TKT-87652', subject: 'Issue with payment gateway integration', priority: 'High', status: 'In Progress', updated: '2024-07-21' },
    { id: 'TKT-87611', subject: 'Question about product image uploads', priority: 'Medium', status: 'Waiting for Reply', updated: '2024-07-20' },
    { id: 'TKT-87598', subject: 'Minor CSS bug on homepage', priority: 'Low', status: 'Open', updated: '2024-07-18' },
  ];

  const closedTickets = [
    { id: 'TKT-87501', subject: 'Feature Request: Bulk product import', priority: 'Medium', status: 'Closed', updated: '2024-07-15' },
  ];

  const tickets = activeTab === 'open' ? openTickets : closedTickets;

  return (
    <div>
        <h1 className="text-4xl font-black tracking-tight text-stone-900 dark:text-white">Support Center</h1>
        <div className="mt-8">
             <div className="pb-3">
                <div className="flex border-b border-stone-200 dark:border-stone-800 gap-8">
                    <button onClick={() => setActiveTab('open')} className={`pb-3 border-b-2 ${activeTab === 'open' ? 'border-green-500 text-stone-900 dark:text-white' : 'border-transparent text-stone-500 hover:text-stone-700'}`}>
                        <span className="text-sm font-bold">Open Tickets</span>
                    </button>
                    <button onClick={() => setActiveTab('closed')} className={`pb-3 border-b-2 ${activeTab === 'closed' ? 'border-green-500 text-stone-900 dark:text-white' : 'border-transparent text-stone-500 hover:text-stone-700'}`}>
                         <span className="text-sm font-bold">Closed Tickets</span>
                    </button>
                    <button onClick={() => setActiveTab('new')} className={`pb-3 border-b-2 ${activeTab === 'new' ? 'border-green-500 text-stone-900 dark:text-white' : 'border-transparent text-stone-500 hover:text-stone-700'}`}>
                        <span className="text-sm font-bold">Create New Ticket</span>
                    </button>
                </div>
            </div>

            {activeTab !== 'new' && (
                <div className="mt-4 overflow-hidden rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-stone-50 dark:bg-stone-800/50">
                                <th className="px-4 py-3 text-left text-stone-600 dark:text-stone-300 w-[15%] text-sm font-medium">Ticket ID</th>
                                <th className="px-4 py-3 text-left text-stone-600 dark:text-stone-300 w-[35%] text-sm font-medium">Subject</th>
                                <th className="px-4 py-3 text-left text-stone-600 dark:text-stone-300 w-[15%] text-sm font-medium">Priority</th>
                                <th className="px-4 py-3 text-left text-stone-600 dark:text-stone-300 w-[15%] text-sm font-medium">Status</th>
                                <th className="px-4 py-3 text-left text-stone-600 dark:text-stone-300 w-[20%] text-sm font-medium">Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map(ticket => (
                                <tr key={ticket.id} className="border-t border-stone-200 dark:border-stone-800">
                                    <td className="h-[72px] px-4 py-2 text-stone-600 dark:text-stone-400 text-sm">{ticket.id}</td>
                                    <td className="h-[72px] px-4 py-2 text-stone-800 dark:text-white text-sm">{ticket.subject}</td>
                                    <td className="h-[72px] px-4 py-2 text-sm"><PriorityBadge priority={ticket.priority} /></td>
                                    <td className="h-[72px] px-4 py-2 text-sm"><TicketStatusBadge status={ticket.status} /></td>
                                    <td className="h-[72px] px-4 py-2 text-stone-600 dark:text-stone-400 text-sm">{ticket.updated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'new' && <CreateTicketForm />}
        </div>
    </div>
  );
};

export default TenantSupport;
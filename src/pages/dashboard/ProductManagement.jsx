import React from 'react';

const ProductStatusBadge = ({ status }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  const statusClasses = {
    Active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Inactive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};


const ProductManagement = () => {
  const products = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1627308595186-e6bb3653373a?q=80&w=200&h=200&fit=crop',
      name: 'Ashwagandha Capsules',
      category: 'Supplements',
      price: 19.99,
      stock: 120,
      status: 'Active',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1596547609337-37b1a95a4563?q=80&w=200&h=200&fit=crop',
      name: 'Brahmi Oil',
      category: 'Oils',
      price: 12.50,
      stock: 85,
      status: 'Active',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1581053804222-b0a623a4a9fd?q=80&w=200&h=200&fit=crop',
      name: 'Triphala Powder',
      category: 'Herbs',
      price: 25.00,
      stock: 0,
      status: 'Inactive',
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-4xl font-black tracking-tight text-stone-900 dark:text-white">Product Management</h1>
        <button className="flex items-center justify-center rounded-lg h-10 bg-green-600 text-white gap-2 text-sm font-bold px-4">
          <span className="material-symbols-outlined">add</span>
          <span>Add New Product</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-grow">
            <label className="relative text-gray-400 focus-within:text-gray-600 block">
                <span className="material-symbols-outlined pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">search</span>
                <input
                  type="search"
                  placeholder="Search by product name..."
                  className="form-input w-full rounded-lg h-12 pl-14 pr-4 bg-white dark:bg-stone-800/50 border-transparent placeholder:text-stone-500 text-base"
                />
              </label>
        </div>
        <div className="flex items-center gap-3 overflow-x-auto">
            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-stone-800/50 px-4 text-stone-900 dark:text-white">
                <span className="material-symbols-outlined">category</span>
                <p className="text-sm font-medium">Filter by Category</p>
                <span className="material-symbols-outlined">expand_more</span>
            </button>
            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-stone-800/50 px-4 text-stone-900 dark:text-white">
                <span className="material-symbols-outlined">toggle_on</span>
                <p className="text-sm font-medium">Filter by Status</p>
                <span className="material-symbols-outlined">expand_more</span>
            </button>
        </div>
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-stone-500 dark:text-stone-400">
            <thead className="text-xs text-stone-700 dark:text-stone-300 uppercase bg-stone-50 dark:bg-stone-800/50">
              <tr>
                <th className="px-6 py-3" scope="col">Thumbnail</th>
                <th className="px-6 py-3" scope="col">Product Name</th>
                <th className="px-6 py-3" scope="col">Category</th>
                <th className="px-6 py-3" scope="col">Price</th>
                <th className="px-6 py-3" scope="col">Units in Stock</th>
                <th className="px-6 py-3" scope="col">Status</th>
                <th className="px-6 py-3" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name} className="bg-white dark:bg-stone-900 border-b dark:border-stone-800">
                  <td className="p-4">
                    <img className="w-16 h-16 rounded-lg object-cover" src={product.thumbnail} alt={product.name} />
                  </td>
                  <th className="px-6 py-4 font-medium text-stone-900 dark:text-white whitespace-nowrap" scope="row">{product.name}</th>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <ProductStatusBadge status={product.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <button className="text-stone-500 hover:text-blue-600 dark:text-stone-400 dark:hover:text-blue-400"><span className="material-symbols-outlined">edit</span></button>
                      <button className="text-stone-500 hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
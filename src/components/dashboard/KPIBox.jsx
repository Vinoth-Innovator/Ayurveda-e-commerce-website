import React from 'react';

const KPIBox = ({ title, value, change, isPositive }) => {
  const changeColor = isPositive ? 'text-green-600' : 'text-red-500';

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6">
      <p className="text-base font-medium text-stone-600 dark:text-stone-400">{title}</p>
      <p className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">{value}</p>
      {change && (
        <p className={`text-sm font-medium ${changeColor}`}>{change}</p>
      )}
    </div>
  );
};

export default KPIBox;
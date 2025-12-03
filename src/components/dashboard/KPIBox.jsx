import React from 'react';

const KPIBox = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="text-3xl font-bold text-gray-900">{value}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default KPIBox;

import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gray-100 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left space-y-2 md:space-y-0 md:space-x-4">
          <span className="text-sm font-semibold text-gray-800 uppercase">LIMITED TIME</span>
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
            <span className="text-sm font-medium text-gray-700">
              <span className="font-bold text-blue-600">12% OFF</span> on orders over $499
            </span>
            <span className="hidden md:block text-gray-300">|</span>
            <span className="text-sm font-medium text-gray-700">
              <span className="font-bold text-blue-600">15% OFF</span> on orders over $2,999
            </span>
          </div>
          <span className="text-xs text-gray-500 mt-1 md:mt-0">
            Coupon code auto-applied at checkout
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

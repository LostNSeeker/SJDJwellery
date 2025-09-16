import React from 'react';

const DiscountBar: React.FC = () => {
  return (
    <div className="bg-black text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center text-sm font-medium">
          <span>Free Express Shipping | Free 60-Day Returns</span>
        </div>
      </div>
    </div>
  );
};

export default DiscountBar;

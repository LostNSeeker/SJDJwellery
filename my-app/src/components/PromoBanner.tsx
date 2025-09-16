import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gray-100 py-4 border-b border-gray-200 relative overflow-hidden">
      {/* Background jewelry images */}
      <div className="absolute inset-0 flex items-center justify-between opacity-20">
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=120&h=40&fit=crop&crop=center" 
            alt="Jewelry" 
            className="h-8 w-auto object-cover rounded"
          />
        </div>
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=120&h=40&fit=crop&crop=center" 
            alt="Jewelry" 
            className="h-8 w-auto object-cover rounded"
          />
        </div>
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=120&h=40&fit=crop&crop=center" 
            alt="Jewelry" 
            className="h-8 w-auto object-cover rounded"
          />
        </div>
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=120&h=40&fit=crop&crop=center" 
            alt="Jewelry" 
            className="h-8 w-auto object-cover rounded"
          />
        </div>
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=120&h=40&fit=crop&crop=center" 
            alt="Jewelry" 
            className="h-8 w-auto object-cover rounded"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

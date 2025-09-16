import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 py-4 border-b border-amber-200 relative overflow-hidden">
      {/* Decorative golden elements */}
      <div className="absolute inset-0 flex items-center justify-between opacity-20">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full blur-sm"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-sm"></div>
        <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-sm"></div>
        <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full blur-sm"></div>
        <div className="w-18 h-18 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full blur-sm"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left space-y-3 md:space-y-0 md:space-x-6">
          {/* Limited Time Badge */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-1.5 rounded-full shadow-lg">
              <span className="text-sm font-bold uppercase tracking-wide">✨ LIMITED TIME</span>
            </div>
          </div>
          
          {/* Discount Offers */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-gray-800">
                <span className="font-bold text-amber-600 text-lg">12% OFF</span> 
                <span className="text-gray-600 ml-1">on orders over $499</span>
              </span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-gradient-to-b from-amber-300 to-yellow-400"></div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-gray-800">
                <span className="font-bold text-amber-600 text-lg">15% OFF</span> 
                <span className="text-gray-600 ml-1">on orders over $2,999</span>
              </span>
            </div>
          </div>
          
          {/* Auto-apply notice */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Auto-applied at checkout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

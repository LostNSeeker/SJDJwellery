import React from 'react';
import { Sparkles } from 'lucide-react'; // If you use lucide icons

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-yellow-100 to-amber-50 border-b border-amber-200 relative overflow-hidden py-2">
      {/* Decorative golden sparkles */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <Sparkles className="text-amber-300 opacity-30 w-6 h-6 ml-2" />
        <Sparkles className="text-yellow-400 opacity-30 w-8 h-8 mr-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left space-y-2 md:space-y-0 md:space-x-6">
          {/* Limited Time Badge */}
          <div className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-3 py-1 rounded-full shadow font-semibold text-xs tracking-wide flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              LIMITED TIME
            </span>
          </div>

          {/* Discount Offers */}
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
            <span className="bg-white/80 border border-amber-200 rounded px-3 py-1 shadow text-xs text-gray-800 font-medium">
              <span className="font-bold text-amber-600">12% OFF</span>
              <span className="text-gray-600 ml-1">on $499+</span>
            </span>
            <span className="hidden md:block w-px h-6 bg-gradient-to-b from-amber-300 to-yellow-400" />
            <span className="bg-white/80 border border-amber-200 rounded px-3 py-1 shadow text-xs text-gray-800 font-medium">
              <span className="font-bold text-amber-600">15% OFF</span>
              <span className="text-gray-600 ml-1">on $2,999+</span>
            </span>
          </div>

          {/* Auto-apply notice */}
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
              Auto-applied at checkout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

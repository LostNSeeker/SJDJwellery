import React, { useState } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterSection {
  key: string;
  title: string;
  options: FilterOption[];
}

interface SelectedFilters {
  [key: string]: string[];
}

interface HorizontalFilterBarProps {
  selectedFilters: SelectedFilters;
  onFilterChange: (filters: SelectedFilters) => void;
  onClearFilters: () => void;
}

const HorizontalFilterBar: React.FC<HorizontalFilterBarProps> = ({
  selectedFilters,
  onFilterChange,
  onClearFilters
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const filterSections: FilterSection[] = [
    {
      key: 'category',
      title: 'Category',
      options: [
        { label: "Rings", value: "rings" },
        { label: "Earrings", value: "earrings" },
        { label: "Necklaces", value: "necklaces" },
        { label: "Pendants", value: "pendants" },
        { label: "Bangles/Bracelets", value: "bangles_bracelets" },
        { label: "Accessories", value: "accessories" },
      ]
    },
    {
      key: 'material',
      title: 'Material',
      options: [
        { label: "Gold", value: "gold" },
        { label: "Silver", value: "silver" },
        { label: "Diamond", value: "diamond" },
        { label: "Natural Diamond", value: "natural_diamond" },
        { label: "Lab Grown Diamond", value: "lab_grown_diamond" },
        { label: "Pearl", value: "pearl" },
      ]
    },
    {
      key: 'metalType',
      title: 'Metal Type',
      options: [
        { label: "10k", value: "10k" },
        { label: "14k", value: "14k" },
        { label: "18k", value: "18k" },
        { label: "Sterling Silver", value: "sterling_silver" },
        { label: "Platinum", value: "platinum" },
      ]
    },
    {
      key: 'priceRange',
      title: 'Price Range',
      options: [
        { label: "Under $100", value: "under-100" },
        { label: "$100 - $500", value: "100-500" },
        { label: "$500 - $1000", value: "500-1000" },
        { label: "$1000 - $2500", value: "1000-2500" },
        { label: "Over $2500", value: "over-2500" },
      ]
    }
  ];

  const handleOptionChange = (sectionKey: string, value: string, checked: boolean) => {
    const newFilters = {
      ...selectedFilters,
      [sectionKey]: checked 
        ? [...(selectedFilters[sectionKey] || []), value]
        : (selectedFilters[sectionKey] || []).filter(item => item !== value)
    };
    onFilterChange(newFilters);
  };

  const getTotalSelectedCount = (): number => {
    return Object.values(selectedFilters).reduce((total, section) => total + section.length, 0);
  };

  const toggleDropdown = (sectionKey: string) => {
    setOpenDropdown(openDropdown === sectionKey ? null : sectionKey);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Filter Dropdowns */}
          <div className="flex items-center space-x-1 overflow-x-auto">
            {filterSections.map((section) => {
              const selectedCount = selectedFilters[section.key]?.length || 0;
              const isOpen = openDropdown === section.key;
              
              return (
                <div key={section.key} className="relative flex-shrink-0">
                  <button
                    onClick={() => toggleDropdown(section.key)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCount > 0 
                        ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <span>{section.title}</span>
                    {selectedCount > 0 && (
                      <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {selectedCount}
                      </span>
                    )}
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="p-3">
                        <div className="space-y-2">
                          {section.options.map((option) => (
                            <label
                              key={option.value}
                              className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
                            >
                              <input
                                type="checkbox"
                                checked={selectedFilters[section.key]?.includes(option.value) || false}
                                onChange={(e) => handleOptionChange(section.key, option.value, e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Clear Filters Button */}
          {getTotalSelectedCount() > 0 && (
            <button
              onClick={onClearFilters}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <XMarkIcon className="h-4 w-4" />
              <span>Clear All ({getTotalSelectedCount()})</span>
            </button>
          )}
        </div>
      </div>

      {/* Backdrop to close dropdown */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeDropdown}
        />
      )}
    </div>
  );
};

export default HorizontalFilterBar;

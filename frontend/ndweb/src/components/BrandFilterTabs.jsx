import React from 'react';
import { brands } from '../data/products';

const BrandFilterTabs = ({ activeBrand, onBrandChange }) => {
  return (
    <div className="w-full mb-12 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Filter by Brand</h2>
      <div className="-mx-4 px-4 overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-3 sm:gap-4 items-stretch">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onBrandChange(brand.id)}
              className={`shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium transition-all duration-300 border-2 min-h-15 sm:min-h-2 ${
                activeBrand === brand.id
                  ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                  : 'border-neutral-700 text-neutral-300 hover:border-blue-400'
              }`}
            >
              {brand.image && (
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-cover rounded border border-neutral-600"
                />
              )}
              <span>{brand.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandFilterTabs;

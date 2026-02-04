import React, { useState } from 'react';
import { brands } from '../data/products';
import { Filter, X, Check, ChevronRight } from 'lucide-react';

const BrandFilterTabs = ({ activeBrand, onBrandChange }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const activeBrandData = brands.find((b) => b.id === activeBrand) || brands[0];

  const handleBrandSelect = (brandId) => {
    onBrandChange(brandId);
    setIsDrawerOpen(false);
  };

  return (
    <div className="w-full mb-12 px-">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Filter by Brand</h2>
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-700 text-sm font-medium hover:bg-neutral-700 transition"
        >
          <Filter size={16} />
          <span>{activeBrand === 'all' ? 'All Brands' : activeBrandData?.name}</span>
        </button>
      </div>

      {/* Desktop Tabs (Visible on Large Screens) */}
      <div className="hidden lg:flex -mx-4 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="inline-flex gap-4 items-stretch pb-2">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onBrandChange(brand.id)}
              className={`group shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 border hover:-translate-x-0.5 ${activeBrand === brand.id
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'border-neutral-800 bg-neutral-300/50 text-neutral-900 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-500/5 hover:text-blue-400'
                }`}
            >
              {brand.image && (
                <div className="w-8 h-8 rounded bg-white p-0.5 flex items-center justify-center overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <span>{brand.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Drawer / Bottom Sheet */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white  border-neutral-800 rounded-t-3xl p-6 shadow-2xl transition-transform duration-300 cubic-bezier(0.16, 1, 0.3, 1) ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
          style={{ maxHeight: '85vh' }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Select Brand</h3>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2  rounded-full hover:bg-neutral-700 transition"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-2 overflow-y-auto max-h-[60vh] pb-8">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => handleBrandSelect(brand.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${activeBrand === brand.id
                    ? 'border-blue-500 bg-blue-500/10 text-white'
                    : 'border-neutral-800 bg-neutral-800/30 text-neutral-400 hover:bg-neutral-800'
                  }`}
              >
                <div className="flex items-center gap-4">
                  {brand.image ? (
                    <div className="w-10 h-10 rounded bg-white p-1 flex items-center justify-center overflow-hidden">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center">
                      <span className="text-xs font-bold text-neutral-500">ALL</span>
                    </div>
                  )}
                  <span className="font-medium text-lg">{brand.name}</span>
                </div>
                {activeBrand === brand.id && <Check size={20} className="text-blue-500" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilterTabs;

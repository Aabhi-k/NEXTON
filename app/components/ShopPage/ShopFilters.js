'use client';

import { useState, useEffect } from 'react';

export default function ShopFilters({ closeFilters, isMobile }) {
  const [priceRange, setPriceRange] = useState({ min: 100, max: 500 });

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => ({
      ...prev,
      max: value
    }));
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value === '' ? '' : parseInt(e.target.value);
    if (value === '' || (value >= 0 && value <= priceRange.max)) {
      setPriceRange(prev => ({
        ...prev,
        min: value
      }));
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value === '' ? '' : parseInt(e.target.value);
    if (value === '' || (value >= priceRange.min && value <= 1000)) {
      setPriceRange(prev => ({
        ...prev,
        max: value
      }));
    }
  };

  const handleMinRangeChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < priceRange.max) {
      setPriceRange(prev => ({
        ...prev,
        min: value
      }));
    }
  };

  const handleMaxRangeChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > priceRange.min) {
      setPriceRange(prev => ({
        ...prev,
        max: value
      }));
    }
  };

  const categories = [
    "Men's fashion",
    "Women's fashion",
    "Kids & Toys",
    "Accessories",
    "Cosmetics",
    "Shoes",
    "Sports"
  ];

  const sortOptions = [
    "Most Popular",
    "Best Rating",
    "Newest",
    "Price Low → High",
    "Price High → Low"
  ];

  const handleMinMouseMove = (e) => {
    const container = document.querySelector('.range-slider-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const value = Math.min(Math.round(percent * 1000 / 10) * 10, priceRange.max - 10);
      setPriceRange(prev => ({ ...prev, min: value }));
    }
  };

  const handleMaxMouseMove = (e) => {
    const container = document.querySelector('.range-slider-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const value = Math.max(Math.round(percent * 1000 / 10) * 10, priceRange.min + 10);
      setPriceRange(prev => ({ ...prev, max: value }));
    }
  };

  const handleMinTouchMove = (e) => {
    const container = document.querySelector('.range-slider-container');
    if (container && e.touches[0]) {
      const rect = container.getBoundingClientRect();
      const percent = Math.min(Math.max((e.touches[0].clientX - rect.left) / rect.width, 0), 1);
      const value = Math.min(Math.round(percent * 1000 / 10) * 10, priceRange.max - 10);
      setPriceRange(prev => ({ ...prev, min: value }));
    }
  };

  const handleMaxTouchMove = (e) => {
    const container = document.querySelector('.range-slider-container');
    if (container && e.touches[0]) {
      const rect = container.getBoundingClientRect();
      const percent = Math.min(Math.max((e.touches[0].clientX - rect.left) / rect.width, 0), 1);
      const value = Math.max(Math.round(percent * 1000 / 10) * 10, priceRange.min + 10);
      setPriceRange(prev => ({ ...prev, max: value }));
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMinMouseMove);
    document.removeEventListener('mousemove', handleMaxMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleMinTouchMove);
    document.removeEventListener('touchmove', handleMaxTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="bg-white p-4 md:p-0">
      {isMobile && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl">Filters</h2>
          <button onClick={closeFilters} className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}

      <div className="mb-8">
        <h3 className="font-bold text-[18px] mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={category.toLowerCase().replace(/[' &]/g, '-')}
                className="w-4 h-4 border-gray-300 rounded text-[#0EA5E9]  focus:ring-[#0EA5E9]"
              />
              <label
                htmlFor={category.toLowerCase().replace(/[' &]/g, '-')}
                className="ml-2 text-[14px] text-gray-700"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 border-t border-b border-gray-100 py-6">
        <h3 className="font-bold text-[18px] mb-6">Price range</h3>

        <div className="relative mb-8 pt-3 pb-1 range-slider-container">
          <div className="h-1 bg-gray-200 rounded-full"></div>

          <div
            className="absolute h-1 bg-[#0EA5E9] rounded-full"
            style={{
              left: `${(priceRange.min / 1000) * 100}%`,
              width: `${((priceRange.max - priceRange.min) / 1000) * 100}%`,
              top: '12px'
            }}
          ></div>

          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange.min}
            onChange={handleMinRangeChange}
            style={{
              zIndex: 20,
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '24px',
              opacity: '0',
              margin: '0',
              pointerEvents: 'none',
              background: 'transparent'
            }}
            className="absolute pointer-events-none bg-transparent appearance-none"
            onPointerDown={(e) => {
              e.target.style.pointerEvents = 'auto';
            }}
            onPointerUp={(e) => {
              e.target.style.pointerEvents = 'none';
            }}
          />

          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange.max}
            onChange={handleMaxRangeChange}
            style={{
              zIndex: 10,
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '24px',
              opacity: '0',
              margin: '0',
              pointerEvents: 'none',
              background: 'transparent'
            }}
            className="absolute pointer-events-none bg-transparent appearance-none"
            onPointerDown={(e) => {
              e.target.style.pointerEvents = 'auto';
            }}
            onPointerUp={(e) => {
              e.target.style.pointerEvents = 'none';
            }}
          />

          <div
            className="absolute w-4 h-4 bg-[#0EA5E9] rounded-full border-2 border-white shadow-md"
            style={{
              left: `${(priceRange.min / 1000) * 100}%`,
              top: '8px',
              transform: 'translateX(-50%)',
              pointerEvents: 'none'
            }}
          ></div>

          <div
            className="absolute w-4 h-4 bg-[#0EA5E9] rounded-full border-2 border-white shadow-md"
            style={{
              left: `${(priceRange.max / 1000) * 100}%`,
              top: '8px',
              transform: 'translateX(-50%)',
              pointerEvents: 'none'
            }}
          ></div>

          <div
            className="absolute w-8 h-8 bg-transparent cursor-pointer"
            style={{
              left: `${(priceRange.min / 1000) * 100}%`,
              top: '0px',
              transform: 'translateX(-50%)',
              zIndex: 30
            }}
            onMouseDown={() => {
              document.addEventListener('mousemove', handleMinMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
            onTouchStart={() => {
              document.addEventListener('touchmove', handleMinTouchMove);
              document.addEventListener('touchend', handleTouchEnd);
            }}
          ></div>

          <div
            className="absolute w-8 h-8 bg-transparent cursor-pointer"
            style={{
              left: `${(priceRange.max / 1000) * 100}%`,
              top: '0px',
              transform: 'translateX(-50%)',
              zIndex: 25
            }}
            onMouseDown={() => {
              document.addEventListener('mousemove', handleMaxMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
            onTouchStart={() => {
              document.addEventListener('touchmove', handleMaxTouchMove);
              document.addEventListener('touchend', handleTouchEnd);
            }}
          ></div>
        </div>

               <div className="flex items-center justify-between">
          <div>
            <label className="block text-[16px] text-gray-500 mb-1">Min price</label>
            <div className="relative flex items-center border border-gray-300 rounded-full w-24">
              <input
                type="number"
                value={priceRange.min}
                onChange={handleMinPriceChange}
                className="w-full py-1 px-2 rounded text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <span className="absolute right-2 text-gray-400">$</span>
            </div>
          </div>
        
          <div>
            <label className="block text-[16px] text-gray-500 mb-1">Max price</label>
            <div className="relative flex items-center border border-gray-300 rounded-full w-24">
              <input
                type="number"
                value={priceRange.max}
                onChange={handleMaxPriceChange}
                className="w-full py-1 px-2 rounded text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <span className="absolute right-2 text-gray-400">$</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-[18px] mb-4">Sort order</h3>
        <div className="space-y-3">
          {sortOptions.map((option, index) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                id={option.toLowerCase().replace(/[→ ]/g, '-')}
                name="sort-order"
                defaultChecked={index === 0}
                className="w-4 h-4 border-gray-300 text-[#0EA5E9] focus:ring-[#0EA5E9]"
              />
              <label
                htmlFor={option.toLowerCase().replace(/[→ ]/g, '-')}
                className="ml-2 text-[14px] text-gray-700"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="flex gap-4">
            <button
              onClick={closeFilters}
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={closeFilters}
              className="w-1/2 py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#111827] hover:bg-gray-800"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
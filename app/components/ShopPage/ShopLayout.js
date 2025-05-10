'use client';

import { useState, useEffect } from 'react';
import ShopFilters from './ShopFilters';
import ShopProducts from './ShopProducts';
import Image from 'next/image';

export default function ShopLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">

      <div className="md:hidden flex justify-between items-center mb-4">
        <button
          onClick={toggleFilters}
          className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-full shadow-sm"
        >
          <Image
            src="/filter.svg"
            alt="Filter"
            width={20}
            height={20}
          />
          <span className="text-gray-700 text-[12px]">Filters</span>
        </button>

        <div className="relative">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-full shadow-sm">
            <span className="text-gray-700 text-[12px] ">Rows per page</span>
            <Image
              src="/dropdown-arrow.svg"
              alt="Arrow Down"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className={`${isMobile ? (filtersOpen ? 'fixed inset-0 z-50 bg-white p-4 overflow-y-auto' : 'hidden') : 'block'} md:w-1/4 lg:w-1/5`}>
          <ShopFilters closeFilters={() => setFiltersOpen(false)} isMobile={isMobile} />
        </div>

        <div className="flex-1">
          <ShopProducts />
        </div>
      </div>
    </div>
  );
}
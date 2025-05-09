'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [cartCount] = useState(3);

  return (
    <nav className="bg-[#111827] text-white px-16 py-4 flex items-center justify-between">
      <div className="font-bold">
        <Link href="/" className="flex items-center">
          <div className="invert brightness-0">
            <Image 
              src="/logo.svg" 
              alt="NEXTON eCommerce" 
              width={120} 
              height={40} 
              priority
            />
          </div>
        </Link>
      </div>

      <div className="flex-1 mx-8 max-w-md relative">
        <input
          type="text"
          placeholder="Search in products..."
          className="w-full px-4 py-2 pl-10 rounded-full text-black bg-white outline-none"
        />
        <Image 
            src="/search.svg" 
            alt="search" 
            width={28} 
            height={28} 
            className="absolute top-2.5 left-3 text-gray-500 w-5 h-5"
          />
      </div>

      <div className="flex items-center space-x-6 text-xl text-gray-400">
        {/* User Icon */}
        <div>
          <Image 
            src="/user-btn.svg" 
            alt="User Account" 
            width={28} 
            height={28} 
            className="text-gray-400"
          />
        </div>
        
        {/* Cart Icon with Count */}
        <div className="relative">
          <Image 
            src="/cart.svg" 
            alt="Shopping Cart" 
            width={28} 
            height={28}
            className="text-gray-400"
          />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [cartCount] = useState(3);

  return (
    <nav className="bg-[#0f172a] text-white px-8 py-4 flex items-center justify-between">
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

      <div className="flex-1 mx-8 max-w-md">
        <input
          type="text"
          placeholder="Search in products..."
          className="w-full px-4 py-2 rounded-full text-black outline-none"
        />
      </div>

      <div className="flex items-center space-x-6 text-xl">
        <div className="relative">
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 rounded-full">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}
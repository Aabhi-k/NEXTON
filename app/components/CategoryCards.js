'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CategoryCards() {
  // State to track active slide/page
  const [activePage, setActivePage] = useState(0);
  
  // Category data
  const categories = [
    {
      id: 1,
      title: "For Men's",
      subtitle: "Starting at $24",
      color: "bg-[#A1DDFF]",
      link: "/shop/men"
    },
    {
      id: 2,
      title: "For Women's",
      subtitle: "Starting at $19",
      color: "bg-[#E1A1FF]",
      link: "/shop/women"
    },
    {
      id: 3,
      title: "Accessories",
      subtitle: "Explore accessories",
      color: "bg-[#FFCEA1]",
      link: "/shop/accessories"
    },
    {
      id: 4,
      title: "Footwear",
      subtitle: "Starting at $39",
      color: "bg-green-200",
      link: "/shop/footwear"
    },
    {
      id: 5,
      title: "Watches",
      subtitle: "Starting at $99",
      color: "bg-red-200",
      link: "/shop/watches"
    },
    {
      id: 6,
      title: "Eyewear",
      subtitle: "Starting at $29",
      color: "bg-yellow-200",
      link: "/shop/eyewear"
    }
  ];
  
  const totalPages = Math.ceil(categories.length / 3);
  
  const currentCategories = categories.slice(activePage * 3, (activePage + 1) * 3);
  
  return (
    <section className="container mx-auto px-4 py-16">
          <div className="mb-8">
      <h2 className="text-[36px] font-bold text-[#111827]">
        Start exploring. <span className="text-gray-500 ">Good things are waiting for you</span>
      </h2>
    </div>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {currentCategories.map((category) => (
        <div 
          key={category.id}
          className={`rounded-2xl p-8 ${category.color} transition-transform hover:scale-[1.02] border-2 border-black`}
        >
          <div className="flex justify-between items-center h-full">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-700">{category.subtitle}</p>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-0.5 bg-black mr-4"></div>
              <Link href={category.link}>
                <button className="flex items-center font-medium text-sm">
                  SHOP NOW
                  <Image 
                    src="/arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
      
      {/* Pagination indicators */}
      <div className="flex justify-center gap-1.5">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setActivePage(index)}
            className={`h-2 rounded-full transition-all ${
              index === activePage ? 'w-2 bg-[#111827]' : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
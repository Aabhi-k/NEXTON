'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function CategoryCards() {
  const [activePage, setActivePage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

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

  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const scrollAmount = activePage * scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activePage, isMobile]);

  const handleScroll = (e) => {
    if (isMobile) {
      const scrollPosition = e.target.scrollLeft;
      const cardWidth = e.target.offsetWidth;
      const newActivePage = Math.round(scrollPosition / cardWidth);

      if (newActivePage !== activePage) {
        setActivePage(newActivePage);
      }
    }
  };

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
    }
  ];

  const totalPages = categories.length;

  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="mb-6 md:mb-8">
        <h2 className="text-[24px] md:text-[36px] font-bold text-[#111827]">
          Start exploring. <span className="hidden md:inline text-gray-500">Good things are waiting for you</span>
        </h2>
      </div>

      <div
        ref={scrollContainerRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory px-4 pb-4 scrollbar-none"
        onScroll={handleScroll}
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`snap-center flex-shrink-0 w-full ${index < categories.length - 1 ? 'mr-4' : ''} rounded-2xl p-6 ${category.color} transition-transform border-2 border-black`}
          >
            <div className="flex justify-between items-center h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
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

      <div className="hidden md:grid md:grid-cols-3 gap-8 mb-10">
        {categories.map((category) => (
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

      <div className="flex md:hidden justify-center gap-2 mt-6">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setActivePage(index)}
            className={`h-2 rounded-full transition-all ${index === activePage ? 'w-8 bg-[#111827]' : 'w-2 bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function ProductGrid({ title, subtitle, products }) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const scrollAmount = activeCard * scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeCard, isMobile]);

  const handleScroll = (e) => {
    if (isMobile) {
      const scrollPosition = e.target.scrollLeft;
      const cardWidth = e.target.offsetWidth;
      const newActiveCard = Math.round(scrollPosition / cardWidth);

      if (newActiveCard !== activeCard) {
        setActiveCard(newActiveCard);
      }
    }
  };

  return (
    <section className="w-full mx-auto px-4 py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-6 md:mb-8">
          <h2 className="text-[24px] md:text-[36px] font-bold text-[#111827]">
            {title} <span className="hidden md:inline text-gray-500">{subtitle}</span>
          </h2>
        </div>

        <div
          ref={scrollContainerRef}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full"
          onScroll={handleScroll}
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="snap-center flex-none w-[90%] mx-[5%] pb-4"
            >
              <Link href={`/product`} className="block">
                <div className="bg-white rounded-3xl overflow-hidden">
                  <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-white rounded-full py-2 px-4 flex items-center shadow-sm">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                          <path d="M10 2L12 7H17L13 10L15 15L10 12L5 15L7 10L3 7H8L10 2Z" fill="#111827" />
                        </svg>
                        <span className="text-sm font-medium">{product.discount}% Discount</span>
                      </div>
                    )}
                    <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11M5 9H19L20 21H4L5 9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">{product.category}</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm">{product.rating} ({product.reviews})</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-xl">${product.price}</p>
                      {product.originalPrice && (
                        <p className="text-gray-500 text-sm line-through">${product.originalPrice}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center gap-2 mt-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`h-2 rounded-full transition-all ${index === activeCard ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="block bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-white rounded-full py-2 px-4 flex items-center shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                      <path d="M10 2L12 7H17L13 10L15 15L10 12L5 15L7 10L3 7H8L10 2Z" fill="#111827" />
                    </svg>
                    <span className="text-sm font-medium">{product.discount}% Discount</span>
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11M5 9H19L20 21H4L5 9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">{product.category}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm">{product.rating} ({product.reviews})</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-xl">${product.price}</p>
                  {product.originalPrice && (
                    <p className="text-gray-500 text-sm line-through">${product.originalPrice}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
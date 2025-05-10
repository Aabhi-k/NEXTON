'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      id: 0,
      price: 'Starting from: $49.99',
      title: 'Exclusive collection for everyone',
      btnText: 'Explore now'
    },
    {
      id: 1,
      price: 'New arrivals: $59.99',
      title: 'Summer collection 2025',
      btnText: 'Shop now'
    },
    {
      id: 2,
      price: 'Special offer: $39.99',
      title: 'Limited edition items',
      btnText: 'View collection'
    }
  ];

  // Check if we're on mobile
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

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative h-screen flex flex-col">
      <div className="relative h-[70vh] overflow-hidden">
        {/* Desktop background (single image, no sliding) */}
        {!isMobile && (
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.png"
              alt="Hero background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={100}
              style={{
                objectPosition: 'center right'
              }}
            />
          </div>
        )}
        
        {/* Mobile background (sliding) */}
        {isMobile && (
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
              width: '300%',
            }}
          >
            <Image
              src="/hero-bg.png"
              alt="Hero background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={100}
              style={{
                objectPosition: 'center right'
              }}
            />
          </div>
        )}

        <div className="relative z-10 container p-6 md:p-50 h-full flex items-center">
          <div className="max-w-xl lg:max-w-3xl">
            <p className="text-gray-700 text-[14px] md:text-[20px] mb-2">
              {slides[activeSlide].price}
            </p>

            <h1 className="text-[30px] md:text-[48px] lg:text-[64px] font-bold text-[#111827] mb-4 md:mb-6 leading-tight">
              {slides[activeSlide].title}
            </h1>

            <Link href="/shop">
              <button className="bg-[#111827] text-white px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2 hover:bg-[#1e293b] transition-colors text-sm md:text-base">
                {slides[activeSlide].btnText}
                <Image
                  src="/search.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 md:left-1/2 md:transform md:-translate-x-1/2 flex gap-2">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`${activeSlide === index
                ? 'h-1 md:h-2 w-6 md:w-8 bg-[#111827]'
                : 'h-1 md:h-2 w-1 md:w-2 bg-[#111827] opacity-50'
                } rounded-full cursor-pointer transition-all duration-300`}
            ></span>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full bg-white">
        <div className="container-fluid px-4 py-6 md:py-8 shadow-sm border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Nexton® always with you</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-start gap-2">
                <div className="flex-shrink-0 mb-1">
                  <Image
                    src="/brand-1.svg"
                    alt="Free shipping"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base">Free shipping</h3>
                <p className="text-xs md:text-sm text-gray-500">On orders over $50.00</p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="flex-shrink-0 mb-1">
                  <Image
                    src="/brand-2.svg"
                    alt="Easy returns"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base">Very easy to return</h3>
                <p className="text-xs md:text-sm text-gray-500">Just phone number</p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="flex-shrink-0 mb-1">
                  <Image
                    src="/brand-3.svg"
                    alt="Worldwide delivery"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base">Worldwide delivery</h3>
                <p className="text-xs md:text-sm text-gray-500">Fast delivery worldwide</p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="flex-shrink-0 mb-1">
                  <Image
                    src="/brand-4.svg"
                    alt="Refunds policy"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base">Refunds policy</h3>
                <p className="text-xs md:text-sm text-gray-500">60 days return for any reason</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
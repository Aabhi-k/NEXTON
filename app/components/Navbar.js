'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [cartCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Check screen size on initial load and resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Add event listener to detect clicks outside the menu
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#111827] text-white px-4 md:px-16 py-3 flex items-center justify-between relative">
      
      <div className="font-bold flex items-center">
        <Link href="/" className="flex items-center">
          {isMobile ? (
            <div className="flex items-center justify-center bg-white rounded-full h-[48px] w-[48px]">
              <Image
                src="/mobile/favicon.svg"
                alt="NEXTON"
                width={24}
                height={24}
                priority
              />
            </div>
          ) : (
            <div className="invert brightness-0">
              <Image
                src="/logo.svg"
                alt="NEXTON eCommerce"
                width={120}
                height={40}
                priority
              />
            </div>
          )}
        </Link>
      </div>

      <div className="flex-1 mx-4 md:mx-8 max-w-md relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search in products..."
            className="w-full px-4 py-2 pl-10 rounded-full text-black bg-white outline-none"
          />
          <div className="absolute left-3 top-2.5">
            <Image
              src="/search.svg"
              alt="search"
              width={20}
              height={20}
              className="text-gray-500"
            />
          </div>
        </div>
      </div>

      {isMobile && (
        <button onClick={toggleMobileMenu} className="ml-2">
          <Image
            src="/mobile/hamburger-menu.svg"
            alt="Menu"
            width={28}
            height={28}
            className="text-gray-400"
          />
        </button>
      )}

      {!isMobile && (
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Image
              src="/user-btn.svg"
              alt="User Account"
              width={28}
              height={28}
              className="text-gray-400"
            />
          </div>
          <div className="relative">
            <Image
              src="/cart.svg"
              alt="Shopping Cart"
              width={28}
              height={28}
              className="text-gray-400"
            />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      )}

      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}>
          <div 
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-[70%] bg-[#111827] z-50 flex flex-col p-6 pt-16 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center bg-white rounded-full h-[36px] w-[36px]">
                <Image
                  src="/mobile/favicon.svg"
                  alt="NEXTON"
                  width={24}
                  height={24}
                  priority
                />
              </div>
              <span className="ml-3 text-xl font-bold">NEXTON</span>
            </div>
            
            <ul className="flex flex-col space-y-4 text-lg">
              <li><Link href="/" className="block py-2 hover:text-blue-400">Home</Link></li>
              <li><Link href="/shop" className="block py-2 hover:text-blue-400">Shop</Link></li>
              <li><Link href="/categories" className="block py-2 hover:text-blue-400">Categories</Link></li>
              <li><Link href="/account" className="block py-2 hover:text-blue-400">My Account</Link></li>
              <li><Link href="/cart" className="block py-2 hover:text-blue-400">Cart ({cartCount})</Link></li>
            </ul>
            
            <div className="mt-auto pt-6 border-t border-gray-700 flex items-center justify-between">
              <Link href="/account" className="flex items-center text-gray-400 hover:text-white">
                <Image src="/user-btn.svg" alt="Account" width={24} height={24} />
                <span className="ml-2">Account</span>
              </Link>
              <Link href="/cart" className="flex items-center text-gray-400 hover:text-white">
                <div className="relative">
                  <Image src="/cart.svg" alt="Cart" width={24} height={24} />
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                </div>
                <span className="ml-2">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
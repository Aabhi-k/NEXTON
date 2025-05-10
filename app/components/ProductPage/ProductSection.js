'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductSection({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const itemTotal = product.price * quantity;
  const taxEstimate = 0;
  const total = itemTotal + taxEstimate;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <div className="flex flex-col gap-4 lg:hidden">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-white px-2 py-1 rounded-full text-[12px] text-gray-500 font-semibold shadow-sm flex items-center gap-1">
                  <Image
                    src="/wishlist.svg"
                    alt="New"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  New in
                </div>
              )}

              <button className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md">
                <Image
                  src="/cart-add.svg"
                  alt="Wishlist"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>

              <Image
                src={product.images[activeImage]}
                alt={product.name}
                className="object-cover"
                fill
                priority
              />
            </div>

            <div className="flex overflow-x-auto gap-2 pb-1">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer border-2 min-w-[80px] overflow-hidden rounded-lg ${index === activeImage ? 'border-[#0EA5E9]' : 'border-transparent'
                    }`}
                  onClick={() => setActiveImage(index)}
                >
                  <div className="relative aspect-square w-[80px]">
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="object-cover"
                      fill
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-row gap-4">
            <div className="flex flex-col gap-2 w-1/5">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer border-2 overflow-hidden rounded-lg ${index === activeImage ? 'border-[#0EA5E9]' : 'border-transparent'
                    }`}
                  onClick={() => setActiveImage(index)}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="object-cover"
                      fill
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="w-4/5 relative aspect-square rounded-lg overflow-hidden">
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-white px-2 py-1 rounded-full text-[12px] text-gray-500 font-semibold shadow-sm flex items-center gap-1">
                  <Image
                    src="/wishlist.svg"
                    alt="New"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  New in
                </div>
              )}

              <button className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md">
                <Image
                  src="/cart-add.svg"
                  alt="Wishlist"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>

              <Image
                src={product.images[activeImage]}
                alt={product.name}
                className="object-cover"
                fill
                priority
              />
            </div>
          </div>
        </div>

        <div className="lg:w-2/5">
          <div className="lg:hidden">
            <h1 className="text-[28px] font-bold text-gray-900 mb-2">{product.name}</h1>

            <div className="mb-6">
              <div className="flex flex-col items-start mb-4">
                <div className="flex flex-col mb-2">
                  <span className="text-[24px] font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 text-[16px] line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-[16px] text-gray-900">{product.rating}</span>
                  <span className="ml-1 text-[16px] text-gray-500">({product.reviews})</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[16px] font-medium text-black-700 mb-2">
                Size: <span>{selectedSize}</span>
              </p>
              <div className="grid grid-cols-5 gap-2 w-full">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`py-3 flex items-center justify-center text-[16px] rounded-xl border ${selectedSize === size
                      ? 'bg-[#0EA5E9] text-white border-transparent'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center bg-gray-50 rounded-full px-1 py-1 w-[120px]">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity === 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${quantity === 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-white hover:shadow-sm transition-all'
                      }`}
                  >
                    <span className="text-xl">−</span>
                  </button>

                  <span className="w-10 h-10 text-center flex-1 flex items-center justify-center text-gray-800 text-[16px] font-medium">
                    {quantity}
                  </span>

                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <span className="text-xl">+</span>
                  </button>
                </div>

                <button className="bg-[#111827] text-white text-[16px] py-3 px-6 rounded-3xl flex items-center justify-center gap-2 hover:bg-[#1e293b] transition-colors">
                  <Image
                    src="/cart-add.svg"
                    alt="Add to cart"
                    width={16}
                    height={16}
                    className="invert brightness-0"
                  />
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex text-yellow-400 items-center">
                    <Image
                      src="/star.svg"
                      alt="Rating" u
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="ml-1 text-[16px] text-gray-900">{product.rating}</span>
                    <span className="mx-2 text-[16px] text-gray-500">·</span>
                    <Link href="#reviews" className="text-gray-600 text-[16px] underline">
                      {product.reviews} reviews
                    </Link>
                  </div>

                  <div className="text-right">
                    <span className="text-[24px] font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <div className="text-gray-500 text-[14px] line-through">${product.originalPrice.toFixed(2)}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[16px] font-medium text-black-700 mb-2">
                  Size: {selectedSize}
                </label>
                <div className="grid grid-cols-5 gap-2 w-full">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`py-2 flex items-center justify-center text-[16px] rounded-2xl border ${selectedSize === size
                        ? 'bg-[#0EA5E9] text-white border-transparent'
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex gap-12 items-center">
                  <div className="flex items-center bg-gray-50 rounded-full px-1 py-1 w-fit">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity === 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${quantity === 1
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-white hover:shadow-sm transition-all'
                        }`}
                    >
                      <span className="text-xl">−</span>
                    </button>
                    <span
                      className="w-10 h-10 text-center flex items-center justify-center text-gray-800 text-[16px] font-medium"
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <span className="text-xl">+</span>
                    </button>
                  </div>
                  <button className="ml-auto px-6 bg-[#111827] text-white text-[16px] py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#1e293b] transition-colors">
                    <Image
                      src="/cart-add.svg"
                      alt="Add to cart"
                      width={16}
                      height={16}
                      className="invert brightness-0"
                    />
                    Add to cart
                  </button>
                </div>
              </div>

              <div className="pt-4 space-y-2 text-[16px]">
                <div className="flex justify-between items-center ">
                  <span className="text-gray-600">${product.price.toFixed(2)} × {quantity}</span>
                  <span>${itemTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center ">
                  <span className="text-gray-600">Tax estimate</span>
                  <span>${taxEstimate.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center  font-medium pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="lg:text-[36px] text-[20px] font-bold text-gray-900 mb-6">
          <span className="lg:inline hidden">{product.name}</span>
          <span className="lg:hidden">About this product</span>
        </h2>

        <p className="text-gray-600 mb-10 lg:text-[16px] text-[14px]">{product.description}</p>

        <div className="mb-10">
          <h3 className="lg:text-[24px] text-[20px] font-semibold mb-4">Fabric + Care</h3>
          <p className="lg:text-[16px] text-[14px] text-gray-600 mb-1">Material: {product.fabric.material}</p>
          <p className="lg:text-[16px] text-[14px] text-gray-600">Color: {product.fabric.color}</p>
        </div>

        <div className="mb-10">
          <h3 className="lg:text-[24px] text-[20px] font-semibold mb-4">Sale performance</h3>
          <p className="lg:text-[16px] text-[14px] text-gray-600 mb-1">Sales: {product.performance.sales}</p>
          <p className="lg:text-[16px] text-[14px] text-gray-600 mb-1">Review Count: {product.performance.reviewCount}</p>
          <p className="lg:text-[16px] text-[14px] text-gray-600">Review Average: {product.performance.reviewAverage}</p>
        </div>

        <div className="mb-10">
          <h3 className="lg:text-[24px] text-[20px] font-semibold mb-4">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {product.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[12px] text-gray-800 flex items-center gap-1"
              >
                <Image
                  src="/wishlist.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
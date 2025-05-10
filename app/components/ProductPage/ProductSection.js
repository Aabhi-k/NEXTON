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

  // Calculate totals
  const itemTotal = product.price * quantity;
  const taxEstimate = 0; // Assuming tax is calculated elsewhere or is 0
  const total = itemTotal + taxEstimate;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product image gallery */}
        <div className="lg:w-3/5 flex gap-4">
          <div className="hidden sm:flex flex-col gap-2 w-1/5">
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

          <div className="w-full sm:w-4/5 relative aspect-square rounded-lg overflow-hidden">
            {product.isNew && (
              <div className="absolute top-4 left-4 z-10 bg-white px-2 py-1 rounded-full text-xs text-gray-800 font-semibold shadow-sm flex items-center gap-1">
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

        {/* Product details and purchase options */}
        <div className="lg:w-2/5">
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400 items-center">
                  <Image
                    src="/star.svg"
                    alt="Rating"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="ml-1 text-gray-900">{product.rating}</span>
                  <span className="mx-2 text-gray-500">·</span>
                  <Link href="#reviews" className="text-gray-600 hover:underline">
                    {product.reviews} reviews
                  </Link>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <div className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Size selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size: {selectedSize}
              </label>
              <div className="grid grid-cols-5 gap-2 w-full">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`py-3 flex items-center justify-center rounded-lg border ${selectedSize === size
                        ? 'bg-[#0EA5E9] text-white border-transparent'
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex gap-12 items-center">
                <div className="flex items-center bg-gray-50 rounded-full px-1 py-1 w-fit">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <span className="text-xl">−</span>
                  </button>
                  <span
                    className="w-10 h-10 text-center flex items-center justify-center text-gray-800 font-medium"
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

                <button className="ml-auto px-6 bg-[#111827] text-white py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#1e293b] transition-colors">
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

            {/* Order summary */}
            <div className="pt-4 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">${product.price.toFixed(2)} × {quantity}</span>
                <span>${itemTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Tax estimate</span>
                <span>${taxEstimate.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-base font-medium pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product description and details - Updated to vertical layout */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{product.name}</h2>
        <p className="text-gray-600 mb-10">{product.description}</p>

        {/* Fabric details - Vertical layout */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Fabric + Care</h3>
          <p className="text-gray-600 mb-1">Material: {product.fabric.material}</p>
          <p className="text-gray-600">Color: {product.fabric.color}</p>
        </div>

        {/* Sales performance - Vertical layout */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Sale performance</h3>
          <p className="text-gray-600 mb-1">Sales: {product.performance.sales}</p>
          <p className="text-gray-600 mb-1">Review Count: {product.performance.reviewCount}</p>
          <p className="text-gray-600">Review Average: {product.performance.reviewAverage}</p>
        </div>

        {/* Keywords - Vertical layout */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {product.keywords.map((keyword, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
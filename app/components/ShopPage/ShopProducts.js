'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ShopProducts() {
    const products = [
        {
            id: 1,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/1.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-1'
        },
        {
            id: 2,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/2.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-2'
        },
        {
            id: 3,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/3.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-3'
        },
        {
            id: 4,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/4.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-4'
        },
        {
            id: 5,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/1.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-5'
        },
        {
            id: 6,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/2.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-6'
        },
        {
            id: 7,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/3.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-7'
        },
        {
            id: 8,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/4.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-8'
        },
        {
            id: 9,
            name: 'Black Automatic Watch',
            category: 'Accessories',
            price: 169.99,
            originalPrice: 199.99,
            image: '/cards/1.png',
            rating: 4.9,
            reviews: 98,
            slug: 'black-automatic-watch-9'
        }
    ];

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {products.map((product) => (
                    <div key={product.id} className="bg-white overflow-hidden">
                        <div className="relative">
                            <Link href={`/product/${product.slug}`}>
                                <div className="relative h-[450px] sm:h-[350px] md:h-[400px] w-full cursor-pointer">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover rounded-2xl"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </Link>

                            <button
                                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                                aria-label="Add to cart"
                            >
                                <Image
                                    src="/cart-add.svg"
                                    alt="Add to cart"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-[14px] sm:text-[16px] text-gray-900">{product.name}</h3>
                                    <p className="text-[12px] sm:text-[14px] text-gray-500">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-[14px] sm:text-[16px]">${product.price.toFixed(2)}</p>
                                    <p className="text-[12px] sm:text-[14px] text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-2">
                                <Image
                                    src="/star.svg"
                                    alt="Star"
                                    width={16}
                                    height={16}
                                    className="text-yellow-500"
                                />
                                <p className="text-[12px] sm:text-[14px] ml-1">
                                    {product.rating} ({product.reviews})
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex justify-center sm:justify-end">
                <nav className="flex items-center space-x-2">
                    <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-black-200 font-medium text-sm">
                        1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-700 font-medium text-sm">
                        2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-700 font-medium text-sm">
                        3
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-700 font-medium text-sm">
                        4
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-700 font-medium text-sm">
                        5
                    </button>
                    <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    );
}
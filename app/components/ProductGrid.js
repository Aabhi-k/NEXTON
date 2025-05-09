'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductGrid({ title, subtitle, products }) {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="mb-8">
                <h2 className="text-[36px] font-bold text-[#111827]">
                    {title} <span className="text-gray-500 font-normal">{subtitle}</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                            <Link href={`/product/${product.slug}`}>
                                <div className="relative h-[400px] w-full cursor-pointer">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover rounded-xl"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                            </Link>

                            <button
                                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                                aria-label="Add to cart"
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log(`Added product ${product.id} to cart`);
                                }}
                            >
                                <Image
                                    src="/cart-add.svg"
                                    alt="Add to cart"
                                    width={20}
                                    height={20}
                                />
                            </button>

                            {product.discount && (
                                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm">
                                    <Image
                                        src="/discount.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
                                    <span>{product.discount}% Discount</span>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">${product.price.toFixed(2)}</p>
                                    <p className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="mt-2 flex items-center">
                                <div className="flex text-yellow-400">
                                    <Image
                                        src="/star.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <p className="text-sm ml-1">
                                    {product.rating} ({product.reviews})
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
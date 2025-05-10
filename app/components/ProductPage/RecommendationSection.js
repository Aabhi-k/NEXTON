'use client';

import ProductGrid from '../HomePage/ProductGrid';

export default function RecommendationSection() {
  const recommendedProducts = [
    {
      id: 1,
      name: 'Black Automatic Watch',
      slug: '',
      category: 'Accessories',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 98,
      image: '/product/recommended-1.png',
      discount: null
    },
    {
      id: 2,
      name: 'Black Automatic Watch',
      slug: '',
      category: 'Accessories',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 98,
      image: '/product/recommended-2.png',
      discount: null
    },
    {
      id: 3,
      name: 'Black Automatic Watch',
      slug: '',
      category: 'Accessories',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 98,
      image: '/product/recommended-3.png',
      discount: null
    },
    {
      id: 4,
      name: 'Black Automatic Watch',
      slug: '',
      category: 'Accessories',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 98,
      image: '/product/recommended-4.png',
      discount: null
    }
  ];

  return (
    <div className="border-t border-gray-200">
      <ProductGrid
        title="Recommended products"
        subtitle=""
        products={recommendedProducts}
      />
    </div>
  );
}
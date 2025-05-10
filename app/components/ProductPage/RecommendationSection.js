'use client';

import ProductGrid from '../HomePage/ProductGrid';

export default function RecommendationSection() {
  // Mock data for recommended products
  const recommendedProducts = [
    {
      id: 1,
      name: 'Black Automatic Watch',
      slug: 'black-automatic-watch',
      category: 'Accessories',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 98,
      image: '/product/recommended-1.jpg',
      discount: null
    },
    {
      id: 2,
      name: 'Black Automatic Watch',
      slug: 'black-automatic-watch',
      category: 'Accessories',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 98,
      image: '/product/recommended-2.jpg',
      discount: null
    },
    {
      id: 3,
      name: 'Black Automatic Watch',
      slug: 'black-automatic-watch',
      category: 'Accessories',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 98,
      image: '/product/recommended-3.jpg',
      discount: null
    },
    {
      id: 4,
      name: 'Black Automatic Watch',
      slug: 'black-automatic-watch',
      category: 'Accessories',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 98,
      image: '/product/recommended-4.jpg',
      discount: null
    }
  ];

  return (
    <div className="mt-20 pt-10 border-t border-gray-200">
      <ProductGrid
        title="Recommended products"
        subtitle=""
        products={recommendedProducts}
      />
    </div>
  );
}
'use client';

import ProductSection from '../components/ProductPage/ProductSection';
import RecommendationSection from '../components/ProductPage/RecommendationSection';

export default function ProductPage() {
  const product = {
    name: 'Black Automatic Watch',
    price: 169.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 142,
    description: 'The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.',
    images: [
      '/product/main-1.jpg',
      '/product/main-2.jpg',
      '/product/main-3.jpg',
      '/product/main-4.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    fabric: {
      material: 'Soft wool blend',
      color: 'Various'
    },
    performance: {
      sales: 0,
      reviewCount: '-',
      reviewAverage: '-'
    },
    keywords: ['men\'s fashion', 'winter hat', 'colorful accessory', 'warm headwear'],
    isNew: true
  };

  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <ProductSection product={product} />
      <RecommendationSection />
    </main>
  );
}
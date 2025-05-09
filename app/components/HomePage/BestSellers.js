'use client';

import ProductGrid from './ProductGrid';

export default function BestSellers() {
    const bestSellerProducts = [
        {
            id: 1,
            name: "Black Automatic Watch",
            price: 169.99,
            originalPrice: 199.99,
            category: "Accessories",
            rating: 4.9,
            reviews: 98,
            slug: "black-automatic-watch-bs1",
            image: "/cards/bs1.png"
        },
        {
            id: 2,
            name: "Black Automatic Watch",
            price: 169.99,
            originalPrice: 199.99,
            category: "Accessories",
            rating: 4.9,
            reviews: 98,
            slug: "black-automatic-watch-bs2",
            image: "/cards/bs2.png"
        },
        {
            id: 3,
            name: "Black Automatic Watch",
            price: 169.99,
            originalPrice: 199.99,
            category: "Accessories",
            rating: 4.9,
            reviews: 98,
            slug: "black-automatic-watch-bs3",
            image: "/cards/bs3.png"
        },
        {
            id: 4,
            name: "Black Automatic Watch",
            price: 169.99,
            originalPrice: 199.99,
            category: "Accessories",
            rating: 4.9,
            reviews: 98,
            slug: "black-automatic-watch-bs4",
            image: "/cards/bs4.png"
        }
    ];

    return (
        <ProductGrid
            title="Best Sellers."
            subtitle="Best selling of the month"
            products={bestSellerProducts}
        />
    );
}
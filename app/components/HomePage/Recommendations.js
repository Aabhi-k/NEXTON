'use client';

import ProductGrid from './ProductGrid';

export default function Recommendations() {
    const products = [
        {
            id: 1,
            name: "Black Automatic Watch",
            price: 169.99,
            originalPrice: 199.99,
            category: "Accessories",
            rating: 4.9,
            reviews: 98,
            discount: 50,
            slug: "",
            image: "/cards/1.png"
        },
        {
            id: 2,
            name: "Black Automatic Watch",
            price: 169.99,
            originalPrice: 199.99,
            category: "Accessories",
            rating: 4.9,
            reviews: 98,
            slug: "",
            image: "/cards/2.png"
        },
        {
            id: 3,
            name: "Black Automatic Watch",
            price: 169.99,
            originalPrice: 199.99,
            category: "Accessories",
            rating: 4.9,
            reviews: 98,
            slug: "",
            image: "/cards/3.png"
        },
        {
            id: 4,
            name: "Black Automatic Watch",
            price: 169.99,
            originalPrice: 199.99,
            category: "Accessories",
            rating: 4.9,
            reviews: 98,
            slug: "",
            image: "/cards/4.png"
        }
    ];

    return (
        <ProductGrid
            title="Recommendations."
            subtitle="Best matching products for you"
            products={products}
        />
    );
}
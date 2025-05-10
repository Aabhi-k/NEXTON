# Nexton E-commerce Frontend

A modern, responsive e-commerce frontend built with Next.js and Tailwind CSS.

## Live Demo
[https://nexton-three.vercel.app/](https://nexton-three.vercel.app/)


## Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/nexton.git
cd nexton
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React**: JavaScript library for building user interfaces
- **ESLint**: Code quality tool

## Design Decisions and Optimizations

### Mobile-First Approach
- Responsive design with mobile-first implementation
- Custom breakpoints for a seamless transition between device sizes

### Performance Optimizations
- Next.js Image component for automatic image optimization
- Component-based architecture for better code organization and reuse
- Lazy loading of images for better page load performance
- Use of Next.js's built-in optimizations for faster page loads

### UI/UX Improvements
- Interactive product cards with hover effects
- Smooth transitions and animations
- Consistent design language across all pages
- Responsive navigation with mobile menu
- Category-based filtering system


## Key Features

1. **Homepage**
   - Hero section with rotating featured products
   - Category cards for quick navigation
   - Recommendations and bestsellers sections

2. **Shop Page**
   - Product filtering by category, price range, and sort order
   - Responsive product grid layout
   - Pagination for product browsing

3. **Product Page**
   - Product image gallery with thumbnails
   - Size selection and quantity controls
   - Related products recommendations
   - Detailed product information


## Future Improvements

- Complete cart functionality with state management
- Implement user authentication with NextAuth
- Add checkout process with payment integration
- Implement wishlist functionality
- Connect to a backend API for dynamic data
- Add product reviews and ratings system
- Implement a full-text search functionality

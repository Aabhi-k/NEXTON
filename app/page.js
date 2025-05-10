import Banner from './components/HomePage/Banner';
import BestSellers from './components/HomePage/BestSellers';
import CategoryCards from './components/HomePage/CategoryCards';
import Hero from './components/HomePage/Hero';
import Recommendations from './components/HomePage/Recommendations';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryCards />
      <div className="flex justify-center w-full">
        <Recommendations />
      </div>
      <div className="flex justify-center w-full">
        <BestSellers />
      </div>
      <div className="hidden md:block">
        <Banner />
      </div>
    </main>
  );
}
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
      <Recommendations />
      <BestSellers />
      <div className="hidden md:block">
        <Banner />
      </div>
    </main>
  );
}
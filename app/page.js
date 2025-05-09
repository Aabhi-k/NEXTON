import Banner from './components/Banner';
import BestSellers from './components/BestSellers';
import CategoryCards from './components/CategoryCards';
import Hero from './components/Hero';
import Recommendations from './components/Recommendations';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryCards />
      <Recommendations />
      <BestSellers />
      <Banner />
    </main>
  );
}
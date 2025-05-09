import CategoryCards from './components/CategoryCards';
import Hero from './components/Hero';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryCards />
      <div className="container mx-auto p-4 mt-20">
      </div>
    </main>
  );
}
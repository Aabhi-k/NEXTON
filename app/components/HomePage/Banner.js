import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative w-full rounded-2xl overflow-hidden bg-[#f5f5f5]">
        <div className="relative flex flex-col md:flex-row h-[400px]">
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center md:w-1/2">
            <p className="text-gray-700 text-[20px] mb-2">100% Original Products</p>

            <h2 className="text-[36px] font-bold text-[#111827] mb-4">
              The All New Fashion<br />Collection Items
            </h2>

            <p className="text-gray-700 text-[20px] mb-6">Starting from: $59.99</p>

            <div>
              <Link href="/shop">
                <button className="bg-[#111827] text-white px-8 py-3 rounded-full hover:bg-[#1e293b] transition-colors">
                  Shop now
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute md:relative inset-0 md:inset-auto md:w-1/2">
            <Image
              src="/banner-bg.png"
              alt="Fashion collection"
              fill
              className="object-cover md:object-contain"
              style={{
                objectPosition: 'right center'
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
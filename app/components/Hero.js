import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col">
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Hero background"
            fill
            priority
            className="object-contain md:object-cover"
            sizes="100vw"
            quality={100}
            style={{
              objectPosition: 'center right'
            }}
          />
        </div>
        <div className="relative z-10 container p-50  h-full flex items-center">
          <div className="max-w-xl lg:max-w-3xl">
            <p className="text-gray-700 text-[20px] mb-2">Starting from: $49.99</p>
            
            <h1 className="text-[64px] font-bold text-[#111827] mb-6 leading-tight">
              Exclusive collection for everyone
            </h1>
            
            <Link href="/shop">
              <button className="bg-[#111827] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#1e293b] transition-colors">
                Explore now
                <Image 
                  src="/search.svg" 
                  alt="" 
                  width={20} 
                  height={20}
                  className="brightness-0 invert"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          <span className="h-2 w-8 bg-[#111827] rounded-full"></span>
          <span className="h-2 w-2 bg-[#111827] rounded-full"></span>
          <span className="h-2 w-2 bg-[#111827] rounded-full"></span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full bg-white">
        <div className="container-fluid px-4 py-8 shadow-sm border-t border-gray-200 rounded-3xl "> 
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex items-center gap-4 relative px-8 md:px-10">
              <div className="flex-shrink-0">
                <Image 
                  src="/brand-1.svg" 
                  alt="Free shipping" 
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold">Free shipping</h3>
                <p className="text-sm text-gray-500">On orders over $50.00</p>
              </div>
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10">
                <div className="h-full w-px bg-gray-200"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 relative px-8 md:px-10">
              <div className="flex-shrink-0">
                <Image 
                  src="/brand-2.svg" 
                  alt="Easy returns" 
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold">Very easy to return</h3>
                <p className="text-sm text-gray-500">Just phone number</p>
              </div>
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10">
                <div className="h-full w-px bg-gray-200"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 relative px-8 md:px-10">
              <div className="flex-shrink-0">
                <Image 
                  src="/brand-3.svg" 
                  alt="Worldwide delivery" 
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold">Worldwide delivery</h3>
                <p className="text-sm text-gray-500">Fast delivery worldwide</p>
              </div>
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10">
                <div className="h-full w-px bg-gray-200"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 px-8 md:px-10">
              <div className="flex-shrink-0">
                <Image 
                  src="/brand-4.svg" 
                  alt="Refunds policy" 
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold">Refunds policy</h3>
                <p className="text-sm text-gray-500">60 days return for any reason</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
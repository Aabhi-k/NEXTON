import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto max-w-10xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and social media */}
          <div>
            <Link href="/" className="block mb-6">
              <Image 
                src="/logo-white.svg" 
                alt="NEXTON"
                width={120}
                height={40}
                className="h-7 w-auto"
              />
            </Link>
            
            <div className="flex flex-col space-y-3">
              <Link href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Image src="/social/facebook.svg" alt="Facebook" width={20} height={20} />
                <span>Facebook</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Image src="/social/youtube.svg" alt="YouTube" width={20} height={20} />
                <span>Youtube</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Image src="/social/telegram.svg" alt="Telegram" width={20} height={20} />
                <span>Telegram</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Image src="/social/twitter.svg" alt="Twitter" width={20} height={20} />
                <span>Twitter</span>
              </Link>
            </div>
          </div>
          
          {/* Getting started */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Getting started</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition">Release Notes</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Upgrade Guide</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Browser Support</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Dark Mode</Link>
            </nav>
          </div>
          
          {/* Explore */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Explore</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition">Prototyping</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Design systems</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Pricing</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Security</Link>
            </nav>
          </div>
          
          {/* Community */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Community</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition">Discussion Forums</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Code of Conduct</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">Contributing</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">API Reference</Link>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Full-width border that spans the entire screen width */}
      <div className="border-t border-gray-700 mt-12"></div>
      
      <div className="container mx-auto max-w-10xl px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Nexton eCommerce. &copy; 2024
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Image src="/social/visa.svg" alt="Visa" width={40} height={24} />
            <Image src="/social/paypal.svg" alt="PayPal" width={60} height={24} />
            <Image src="/social/stripe.svg" alt="Stripe" width={60} height={24} />
            <Image src="/social/verisign.svg" alt="Klarna" width={60} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
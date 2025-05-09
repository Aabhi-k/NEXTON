import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Nexton",
  description: "Ecommerce frontend",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>       
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

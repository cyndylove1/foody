import Navbar from "./navbar";
import HeroImage from "./heroImage";
import Button from "../button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Text */}
        <div className="lg:col-span-6 space-y-8 text-center lg:text-left pt-4 lg:pt-0">
          <h1 className="text-4xl md:text-6xl max-w-2xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.15]">
            African Groceries <br />
            <span className="text-[#016738]">Delivered</span> to Your{" "}
            <span className="text-[#0B8B4B]">Doorstep.</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Shop authentic African ingredients from Motherland International
            Store including local spices, palm oil, stockfish, smoked fish,
            crayfish, beans, grains, and more—all in one convenient place.
          </p>

          <div className="flex flex-row items-center justify-center lg:justify-start gap-5 pt-2">
            <Link href="/category/seasonings">
              <Button variant="primary">Shop Groceries</Button>
            </Link>

            <Link href="/contact">
              <Button variant="secondary">Contact Us</Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <HeroImage />
      </main>
    </div>
  );
}

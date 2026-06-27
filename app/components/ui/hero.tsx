import Navbar from "./navbar";
import HeroImage from "./heroImage";
import Button from "../button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[#FCECD7] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#F9E4C9] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[15%] w-[120px] h-[120px] bg-[#F5A623] rounded-full blur-3xl opacity-50 pointer-events-none" />
      {/* NAVBAR */}
      <Navbar />
      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Text Content */}
        <div className="lg:col-span-6 space-y-8 text-center lg:text-left pt-10 lg:pt-0">
          <h1 className="text-4xl max-w-2xl md:text-6xl font-extrabold text-[#2C2C2C] tracking-tight leading-[1.15]">
            Fresh Groceries <br />
            <span className="text-(--main)">Delivered</span>&nbsp; to Your&nbsp;
            <span className="text-(--color)">Doorstep.</span>
          </h1>

          <p className="text-gray-900 text-bae md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
            Browse fresh fruits, vegetables, dairy products, snacks, beverages,
            and more. Save time and enjoy convenient grocery shopping from
            anywhere.
          </p>

          <div className="flex flex-row items-center justify-center lg:justify-start gap-5 pt-2">
            <Link href="/categories">
              <Button variant="primary">Shop Groceries</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">Contact Us</Button>
            </Link>
          </div>
        </div>
        {/*Hero Image*/}
        <HeroImage />
      </main>
    </div>
  );
}

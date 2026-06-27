import Image from "next/image";
import Button from "../button";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="relative w-full overflow-hidden my-20 h-[380px] sm:h-[450px] md:h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 z-0 mx-4 rounded-xl overflow-hidden">
        <Image
          src={"/assets/basket2.png"}
          alt="Fresh essentials and beauty background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50 mix-blend-multiply" />
      </div>
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h2 className="md:text-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-3xl text-white drop-shadow-sm max-w-3xl mx-auto">
          Elevate Your Daily Rituals With Fresh Flavors & Pure Beauty
          Essentials.
        </h2>
        {/* CTA Button */}
        <Link href="/categories">
          <Button variant="primary" className="mt-6">Shop Essentials</Button>
        </Link>
      </div>
    </div>
  );
}

import HeroImage from "./heroImage";
import Button from "../button";
import Link from "next/link";
import Navbar from "./navbar";
import { ArrowRight, ShoppingBag, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFFDF7]">
      <Navbar/>
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#F9C51C]/20 blur-3xl" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#00864A]/10 blur-3xl" />

      {/* Small decorative shapes */}
      <div className="absolute top-24 left-[48%] hidden lg:block">
        <div className="w-20 h-20 rounded-full bg-[#F9C51C]/20" />
      </div>

      <div className="absolute bottom-40 left-0 w-32 h-32 rounded-full bg-[#F47C20]/10 blur-2xl" />

      {/* Main Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-12 pt-[10rem] lg:pt-[10rem] pb-24">
        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-6 text-left">

            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00864A]/10 text-[#00864A] font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F9C51C]" />
              Authentic African Groceries
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#151515] tracking-tight leading-[1.05] max-w-3xl">

              African Groceries{" "}

              <span className="relative inline-block text-[#00864A]">
                Delivered
                <div className="relative mt-1 h-4 w-36">
                  <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                  <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/60" />
                </div>
                
              </span>

              <br />

              to Your{" "}

              <span className="text-[#00864A]">
                Doorstep.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 text-[#4B5563] text-base md:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Shop authentic African ingredients from Motherland International.
              Find local spices, seasonings, groceries, legumes, grains and
              more — all in one convenient place.
            </p>

            {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
                  <Link href="/wholesale">

                    <Button
                      variant="primary"
                      className="!bg-[#00864A] !text-white hover:!bg-[#006F3D] !rounded-full px-7 shadow-[0_12px_30px_rgba(0,134,74,0.22)] flex items-center gap-2"
                    >
                      Shop Wholesale

                      <ArrowRight className="w-4 h-4" />

                    </Button>

                  </Link>

                  <Link href="/retail">

                    <Button
                      variant="tertiary"
                      className="!bg-white !text-[#00864A] !border-2 !border-[#00864A] hover:!bg-[#EAF5EC] !rounded-full px-7"
                    >
                      Shop Retail
                    </Button>

                  </Link>

            </div>

            {/* ================= FEATURES ================= */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#00864A]/10 flex items-center justify-center text-xl">
                  🌿
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[#151515]">
                    Authentic
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    African Products
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F9C51C]/20 flex items-center justify-center text-xl">
                  🚚
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[#151515]">
                    Fast Delivery
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    To Your Doorstep
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F47C20]/10 flex items-center justify-center text-xl">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[#151515]">
                    Quality
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    Guaranteed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#00864A]/10 flex items-center justify-center text-xl">
                  ❤️
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[#151515]">
                    Shop African
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    From Anywhere
                  </p>
                </div>
              </div>

            </div> */}

          </div>


          {/* ================= RIGHT IMAGE ================= */}
      <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">

        {/* Yellow circular background */}
        <div
          className="
            absolute
            w-[310px]
            h-[310px]
            sm:w-[390px]
            sm:h-[390px]
            md:w-[500px]
            md:h-[500px]
            lg:w-[580px]
            lg:h-[580px]
            rounded-full
            bg-[#F9C51C]
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            lg:top-8
            lg:left-auto
            lg:right-0
            lg:translate-x-0
            lg:translate-y-0
            -z-10
          "
        />

        {/* Green decorative circle */}
        <div
          className="
            absolute
            w-[350px]
            h-[350px]
            sm:w-[440px]
            sm:h-[440px]
            md:w-[500px]
            md:h-[500px]
            lg:w-[500px]
            lg:h-[500px]
            rounded-full
            border-[16px]
            md:border-[20px]
            border-[#00864A]/10
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            lg:top-0
            lg:left-auto
            lg:right-[-64px]
            lg:translate-x-0
            lg:translate-y-0
            -z-20
          "
        />

        {/* Orange decorative shape */}
        <div
          className="
            absolute
            right-[8%]
            sm:right-[5%]
            lg:right-0
            bottom-8
            lg:bottom-12
            w-16
            h-16
            lg:w-24
            lg:h-24
            bg-[#F47C20]
            rounded-[40%]
            rotate-12
            opacity-90
            -z-10
          "
        />

        {/* Hero image */}
        <div
          className="
            relative
            z-10
            w-[300px]
            sm:w-[380px]
            md:w-[500px]
            lg:w-full
            max-w-[620px]
            flex
            justify-center
            mx-auto
          "
        >
          <HeroImage />
        </div>


      </div>
                

        </div>

      </main>


      {/* ================= BOTTOM AFRICAN PATTERN ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />
    </section>
  );
}
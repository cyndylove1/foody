"use client";

import Link from "next/link";
import Button from "../button";
import { ArrowRight, Boxes, Truck, BadgeCheck } from "lucide-react";
import ShopNavbar from "./shopNavbar";

export default function WholeSaleBanner() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#FFFDF7] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      
      <ShopNavbar />

      {/* ========================================================= */}
      {/* BACKGROUND DECORATIONS */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#F9C51C]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-20 w-[420px] h-[420px] rounded-full bg-[#00864A]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-[#F47C20]/10 blur-3xl" />

      <div className="pointer-events-none absolute top-24 right-[42%] w-20 h-20 rounded-full bg-[#F9C51C]/20 hidden md:block" />

      <div className="pointer-events-none absolute right-[-140px] top-[25%] w-[420px] h-[420px] rounded-full border-[35px] border-[#00864A]/5 hidden lg:block" />

      <div className="pointer-events-none absolute bottom-24 right-[8%] w-20 h-20 rounded-[40%] rotate-12 bg-[#F47C20]/20 hidden md:block" />


      {/* ========================================================= */}
      {/* MAX WIDTH CONTENT */}
      {/* ========================================================= */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 pt-[3rem]">

        {/* ===================================================== */}
        {/* MAIN HERO */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF5EC] text-[#00864A] border border-[#00864A]/10 text-sm font-semibold mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F9C51C]" />
              Wholesale Grocery Supply
            </div>

            {/* Heading */}
            <h1 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[68px] xl:text-[72px] font-black leading-[0.98] tracking-[-0.04em] text-[#151515]">
              Stock More.
              <br />

              <span className="text-[#00864A]">
                Save More.
              </span>

              <br />

              <span className="relative inline-block">
                Grow More.
                <span className="absolute left-0 -bottom-2 w-[75%] h-2 bg-[#F9C51C] rounded-full" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-[#52606D] text-base sm:text-lg leading-8">
              Shop authentic African groceries in bulk at competitive
              wholesale prices. From grains and spices to provisions and
              everyday essentials, stock your business or home with quality
              products you can count on.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">

              <Link href="/retail">
                <Button
                  variant="primary"
                  className="!bg-[#00864A] flex items-center gap-2 !text-white hover:!bg-[#006F3D] shadow-lg shadow-[#00864A]/20"
                >
                  Shop Retail
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="tertiary"
                  className="!border-2 !border-[#00864A] !text-[#00864A] !bg-transparent hover:!bg-[#00864A] hover:!text-white"
                >
                  Contact Us
                </Button>
              </Link>

            </div>

            {/* Trust information */}
            <div className="mt-8 flex flex-wrap items-center justify-start gap-5 text-sm text-[#59636D]">

              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#EAF5EC]">
                  <BadgeCheck className="w-4 h-4 text-[#00864A]" />
                </span>
                Quality Products
              </div>

              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#FFF4D0]">
                  <Boxes className="w-4 h-4 text-[#D69E00]" />
                </span>
                Bulk Orders
              </div>

              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#FFF0E6]">
                  <Truck className="w-4 h-4 text-[#F47C20]" />
                </span>
                Fast Delivery
              </div>

            </div>

          </div>


          {/* RIGHT WHOLESALE VISUAL */}
          <div className="lg:col-span-6 relative min-h-[470px] sm:min-h-[540px] lg:min-h-[560px]">

            {/* Yellow circle */}
            <div className="absolute w-[350px] h-[350px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#F9C51C] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Inner yellow */}
            <div className="absolute w-[285px] h-[285px] sm:w-[365px] sm:h-[365px] lg:w-[415px] lg:h-[415px] rounded-full bg-[#FFD84D]/60 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Green ring */}
            <div className="absolute w-[390px] h-[390px] sm:w-[490px] sm:h-[490px] lg:w-[550px] lg:h-[550px] rounded-full border-[16px] border-[#00864A]/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Central card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[330px] lg:w-[370px]">

              <div className="relative rounded-[38px] bg-white border border-white/80 shadow-[0_25px_70px_rgba(0,0,0,0.14)] p-7 sm:p-9">

                <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00864A]" />

                    <span className="text-xs font-bold tracking-[0.15em] text-[#52606D] uppercase">
                      Motherland
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#FFF4D0] flex items-center justify-center">
                    <Boxes className="w-5 h-5 text-[#D69E00]" />
                  </div>

                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00864A]">
                  Wholesale
                </p>

                <h2 className="mt-2 text-4xl sm:text-5xl font-black leading-none text-[#151515]">
                  Buy Bulk.
                  <br />
                  <span className="text-[#00864A]">
                    Pay Less.
                  </span>
                </h2>

                <div className="mt-6 relative w-28 h-2">
                  <div className="absolute left-0 top-0 w-20 h-2 rounded-full bg-[#F9C51C]" />
                  <div className="absolute left-8 top-3 w-16 h-1 rounded-full bg-[#F9C51C]/60" />
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="px-3 py-2 rounded-full bg-[#EAF5EC] text-[#00864A] text-xs font-semibold">
                    Grains
                  </span>

                  <span className="px-3 py-2 rounded-full bg-[#FFF4D0] text-[#946F00] text-xs font-semibold">
                    Spices
                  </span>

                  <span className="px-3 py-2 rounded-full bg-[#FFF0E6] text-[#D86114] text-xs font-semibold">
                    Provisions
                  </span>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">

                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                      Wholesale value
                    </p>

                    <p className="text-sm font-bold text-[#151515] mt-1">
                      Better prices on bulk orders
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#00864A] text-white flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </div>

                </div>

              </div>

            </div>


            {/* Discount badge */}
            <div className="absolute top-4 right-2 sm:right-8 lg:right-4">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#00864A] border-[8px] border-white shadow-xl flex items-center justify-center rotate-6">

                <div className="text-center text-white">
                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Wholesale
                  </p>

                  <p className="text-3xl sm:text-4xl font-black leading-none">
                    40%
                  </p>

                  <p className="text-[10px] font-bold uppercase">
                    Savings
                  </p>
                </div>

              </div>
            </div>


            {/* Left floating card */}
            <div className="absolute left-0 sm:left-2 lg:left-0 bottom-20 sm:bottom-16">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-4 sm:px-5 sm:py-5 flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] flex items-center justify-center">
                  <Boxes className="w-5 h-5 text-[#00864A]" />
                </div>

                <div>
                  <p className="font-bold text-sm text-[#151515]">
                    Bulk Orders
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    For shops & businesses
                  </p>
                </div>

              </div>
            </div>


            {/* Right floating card */}
            <div className="absolute right-0 sm:right-2 lg:right-0 bottom-4">

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-4 sm:px-5 sm:py-5 flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-[#FFF4D0] flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#D69E00]" />
                </div>

                <div>
                  <p className="font-bold text-sm text-[#151515]">
                    Fast Delivery
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Straight to your doorstep
                  </p>
                </div>

              </div>

            </div>


            {/* Orange shape */}
            <div className="absolute left-[12%] top-[15%] w-16 h-16 sm:w-20 sm:h-20 rounded-[35%] rotate-12 bg-[#F47C20]" />

            {/* Green leaf shapes */}
            <div className="absolute right-[18%] bottom-[18%]">
              <div className="w-12 h-20 rounded-full border-[7px] border-[#00864A]/30 rotate-[35deg]" />
              <div className="absolute top-7 left-6 w-10 h-16 rounded-full border-[7px] border-[#00864A]/20 -rotate-[35deg]" />
            </div>

          </div>

        </div>


        {/* Bottom wholesale strip */}
        <div className="relative z-20 mt-2 lg:mt-4 mx-auto max-w-4xl">

          <div className="bg-white rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-100 px-6 py-4">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">

              <div className="flex items-center justify-center gap-3 sm:border-r border-gray-200">
                <span className="w-3 h-3 rounded-full bg-[#00864A]" />
                <span className="text-sm font-medium text-gray-600">
                  Competitive Wholesale Prices
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 sm:border-r border-gray-200">
                <span className="w-3 h-3 rounded-full bg-[#F9C51C]" />
                <span className="text-sm font-medium text-gray-600">
                  Quality African Products
                </span>
              </div>

              <div className="flex items-center justify-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#F47C20]" />
                <span className="text-sm font-medium text-gray-600">
                  Reliable Delivery
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom yellow accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

    </section>
  );
}
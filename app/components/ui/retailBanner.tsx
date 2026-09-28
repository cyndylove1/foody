"use client";

import Link from "next/link";
import banner from "@/public/assets/ChatGPT Image Sep 27, 2026, 09_01_29 AM.png"
import Button from "../button";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

export default function RetailBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDF7] pt-28 pb-8 sm:pt-32 sm:pb-10 lg:pt-24 lg:pb-10">

      {/* ========================================================= */}
      {/* BACKGROUND DECORATIONS */}
      {/* ========================================================= */}

      {/* Top-left yellow glow */}
      <div className="absolute -top-32 -left-32 w-[430px] h-[430px] rounded-full bg-[#F9C51C]/10 blur-3xl" />

      {/* Top-right green glow */}
      <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-[#00864A]/10 blur-3xl" />

      {/* Bottom orange glow */}
      <div className="absolute -bottom-48 left-[-120px] w-[430px] h-[430px] rounded-full bg-[#F47C20]/10 blur-3xl" />

      {/* Small yellow circle */}
      <div className="absolute top-[8%] right-[16%] w-16 h-16 rounded-full bg-[#F9C51C]/20 hidden lg:block" />

      {/* Small green decorative circle */}
      <div className="absolute top-[30%] left-[47%] w-5 h-5 rounded-full bg-[#00864A]/20 hidden lg:block" />

      {/* ========================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 pt-[3rem]">

        {/* ======================================================= */}
        {/* HERO */}
        {/* ======================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-2">

          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <div className="lg:col-span-6 xl:col-span-5 relative z-20">

            {/* Store badge */}

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#EAF5EC] border border-[#00864A]/10">

              <div className="w-8 h-8 rounded-full bg-[#00864A] flex items-center justify-center">

                <ShoppingBag className="w-4 h-4 text-white" />

              </div>

              <span className="text-sm font-bold text-[#00864A]">
                African Grocery Store
              </span>

              <span className="w-2.5 h-2.5 rounded-full bg-[#F9C51C]" />

            </div>

            {/* ================================================= */}
            {/* MAIN HEADING */}
            {/* ================================================= */}

            <h1 className="mt-7 text-[48px] sm:text-[54px] md:text-[64px] lg:text-[68px] xl:text-[72px] font-black leading-[0.99] tracking-[-0.04em] text-[#151515]">

              Shop Fresh.

              <br />

              <span className="text-[#00864A]">
                Eat Better.
              </span>

              <br />

              <span className="relative inline-block">

                Live Better.

                {/* Yellow underline */}

                <span className="absolute left-0 -bottom-2 w-[92%] h-2 sm:h-2.5 rounded-full bg-[#F9C51C]" />

              </span>

            </h1>

            {/* ================================================= */}
            {/* DESCRIPTION */}
            {/* ================================================= */}

            <p className="mt-8 max-w-[590px] text-base sm:text-lg leading-7 sm:leading-8 text-[#52606D]">

              Find fresh African groceries, pantry essentials, snacks,
              drinks and everyday favorites all in one place. Shop what
              you need and have it conveniently delivered to your doorstep.

            </p>

            {/* ================================================= */}
            {/* BUTTONS */}
            {/* ================================================= */}

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">

              <Link href="/wholesale">

                <Button
                  variant="primary"
                  className="!bg-[#00864A] !text-white hover:!bg-[#006F3D] !rounded-full px-7 shadow-[0_12px_30px_rgba(0,134,74,0.22)] flex items-center gap-2"
                >
                  Shop Wholesale

                  <ArrowRight className="w-4 h-4" />

                </Button>

              </Link>

              <Link href="/contact">

                <Button
                  variant="tertiary"
                  className="!bg-white !text-[#00864A] !border-2 !border-[#00864A] hover:!bg-[#EAF5EC] !rounded-full px-7"
                >
                  Contact
                </Button>

              </Link>

            </div>

            {/* ================================================= */}
            {/* TRUST / BENEFITS */}
            {/* ================================================= */}

            <div className="mt-9 flex flex-wrap items-center gap-y-4">

              {/* Quality */}

              <div className="flex items-center gap-2 pr-5">

                <div className="w-9 h-9 rounded-full bg-[#00864A] flex items-center justify-center">

                  <BadgeCheck className="w-5 h-5 text-white" />

                </div>

                <div>

                  <p className="text-xs font-semibold text-[#52606D]">
                    Quality
                  </p>

                  <p className="text-xs font-semibold text-[#151515]">
                    Products
                  </p>

                </div>

              </div>

              {/* Divider */}

              <div className="hidden sm:block w-px h-9 bg-gray-300" />

              {/* Shopping */}

              <div className="flex items-center gap-2 px-5">

                <div className="w-9 h-9 rounded-full bg-[#F9C51C] flex items-center justify-center">

                  <ShoppingBag className="w-5 h-5 text-[#151515]" />

                </div>

                <div>

                  <p className="text-xs font-semibold text-[#52606D]">
                    Shop What
                  </p>

                  <p className="text-xs font-semibold text-[#151515]">
                    You Need
                  </p>

                </div>

              </div>

              {/* Divider */}

              <div className="hidden sm:block w-px h-9 bg-gray-300" />

              {/* Delivery */}

              <div className="flex items-center gap-2 pl-5">

                <div className="w-9 h-9 rounded-full bg-[#F47C20] flex items-center justify-center">

                  <Truck className="w-5 h-5 text-white" />

                </div>

                <div>

                  <p className="text-xs font-semibold text-[#52606D]">
                    Convenient
                  </p>

                  <p className="text-xs font-semibold text-[#151515]">
                    Delivery
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* RIGHT IMAGE AREA */}
          {/* ===================================================== */}

          <div className="lg:col-span-6 xl:col-span-7 relative min-h-[480px] sm:min-h-[560px] lg:min-h-[600px]">
          {/* GROCERY IMAGE */}
          {/* ================================================= */}

          <div className="absolute z-10 inset-0 flex items-center justify-end">

            <div
              className="
                relative
                w-[78%]
                sm:w-[72%]
                lg:w-[68%]
                h-[420px]
                sm:h-[500px]
                lg:h-[560px]
                mr-[2%]
                sm:mr-[3%]
                lg:mr-[4%]
                overflow-hidden
                rounded-full
              "
            >

              <Image
                src={banner}
                alt="Fresh African groceries including rice, garri, vegetables, spices and pantry essentials"
                fill
                priority
                sizes="(max-width: 1024px) 75vw, 45vw"
                className="object-cover object-center"
              />

            </div>

          </div>

            {/* ================================================= */}
            {/* FRESH AFRICAN GROCERIES BADGE */}
            {/* ================================================= */}

            <div className="absolute z-30 top-[7%] right-[3%] sm:right-[7%] lg:right-[4%]">

              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#00864A] border-[6px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.14)] flex items-center justify-center rotate-6">

                <div className="text-center text-white">

                  <p className="text-[9px] sm:text-[10px] font-black uppercase leading-3 tracking-wide">
                    Fresh
                  </p>

                  <p className="text-[13px] sm:text-sm font-black uppercase leading-4">
                    African
                  </p>

                  <p className="text-[10px] sm:text-[11px] font-bold uppercase leading-3">
                    Groceries
                  </p>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* ORANGE DECORATION */}
            {/* ================================================= */}

            <div className="absolute z-20 left-[8%] top-[20%] hidden sm:block">

              <div className="w-14 h-14 rounded-[22px] bg-[#F47C20] rotate-12 shadow-lg" />

            </div>

            {/* ================================================= */}
            {/* GREEN LEAF DECORATIONS */}
            {/* ================================================= */}

            <div className="absolute z-20 left-[10%] bottom-[18%] hidden lg:block">

              <div className="w-16 h-9 rounded-[100%] bg-[#00864A] rotate-[25deg]" />

              <div className="absolute top-8 left-10 w-12 h-7 rounded-[100%] bg-[#00864A]/80 rotate-[65deg]" />

            </div>

            {/* ================================================= */}
            {/* SMALL YELLOW DOTS */}
            {/* ================================================= */}

            <div className="absolute z-20 right-[1%] bottom-[15%] hidden lg:grid grid-cols-4 gap-2 opacity-60">

              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="w-2 h-2 rounded-full bg-[#00864A]/30"
                />
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* BOTTOM YELLOW ACCENT */}
      {/* ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

    </section>
  );
}
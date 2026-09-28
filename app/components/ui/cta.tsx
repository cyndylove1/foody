"use client";

import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import { ArrowRight, Check, Leaf, ShoppingBag, Truck } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9E8] py-16 sm:py-20 lg:py-28">
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* Soft green glow */}
      <div className="pointer-events-none absolute -right-40 top-[-120px] h-[500px] w-[500px] rounded-full bg-[#DDEEDB] opacity-70 blur-3xl" />

      {/* Soft yellow glow */}
      <div className="pointer-events-none absolute -left-32 bottom-[-100px] h-[380px] w-[380px] rounded-full bg-[#FFE68A] opacity-40 blur-3xl" />

      {/* Decorative yellow circle */}
      <div className="pointer-events-none absolute right-[8%] top-[12%] hidden h-28 w-28 rounded-full bg-[#F9C51C]/20 lg:block" />

      {/* Decorative green ring */}
      <div className="pointer-events-none absolute bottom-[8%] left-[-80px] hidden h-64 w-64 rounded-full border-[22px] border-[#00864A]/10 lg:block" />

      {/* Small orange circle */}
      <div className="pointer-events-none absolute bottom-[18%] right-[5%] h-16 w-16 rounded-full bg-[#F47C20]/20 sm:h-20 sm:w-20" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[36px] border border-[#E8E5D8] bg-white shadow-[0_25px_70px_rgba(30,80,50,0.12)]">
          {/* =====================================================
              MAIN GRID
          ===================================================== */}

          <div className="grid min-h-[500px] grid-cols-1 lg:grid-cols-2">

            {/* ===================================================
                LEFT CONTENT
            =================================================== */}

            <div className="relative flex items-center overflow-hidden bg-[#00864A] px-7 py-12 sm:px-10 md:px-14 lg:px-16 lg:py-16">

              {/* Decorative background shapes */}
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#006D3C]" />

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#009C55]/50" />

              {/* Yellow circle */}
              <div className="absolute right-[-45px] bottom-[25%] h-28 w-28 rounded-full bg-[#F9C51C]/15" />

              {/* Leaf decoration */}
              <div className="absolute right-[15%] top-10 rotate-[-15deg] text-[#F9C51C]/40">
                <Leaf size={55} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 w-full">

                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F9C51C]" />

                  <span className="text-xs font-bold uppercase tracking-[0.08em] text-white">
                    Shop With Us
                  </span>
                </div>

                {/* Heading */}
                <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[54px]">
                  Bring the Taste of{" "}
                  <span className="text-[#F9C51C]">
                    Africa
                  </span>{" "}
                  Home.
                </h2>

                {/* Underline */}
                <div className="relative mt-5 h-4 w-36">
                  <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                  <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/60" />
                </div>

                {/* Description */}
                <p className="mt-7 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                  Discover authentic African groceries, spices, provisions,
                  grains and everyday essentials — carefully selected and
                  delivered straight to your doorstep.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link href="/wholesale">
                    <Button
                      variant="primary"
                      className="!flex !w-full !items-center !justify-center !bg-[#F9C51C] !text-[#17352A] !px-6 !py-3 !font-bold shadow-lg shadow-black/10 hover:!bg-[#FFD84D] sm:!w-auto"
                    >
                      Shop Wholesale
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <Link href="/retail">
                    <Button
                      variant="tertiary"
                      className="!flex !w-full !items-center !justify-center !border-2 !border-white/80 !bg-transparent !px-6 !py-3 !font-bold !text-white hover:!bg-white hover:!text-[#00864A] sm:!w-auto"
                    >
                      Shop Retail
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                </div>

                {/* Trust points */}
                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">

                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                      <Check className="h-3 w-3 text-[#F9C51C]" />
                    </span>
                    Authentic Products
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                      <Check className="h-3 w-3 text-[#F9C51C]" />
                    </span>
                    Quality Guaranteed
                  </div>

                </div>
              </div>
            </div>

            {/* ===================================================
                RIGHT IMAGE
            =================================================== */}

            <div className="relative min-h-[380px] overflow-hidden lg:min-h-[500px]">

              {/* Main image */}
              <Image
                src="/assets/grocery7.jpg"
                alt="Authentic African groceries"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00864A]/20 via-transparent to-black/10" />

              {/* Warm image tint */}
              <div className="absolute inset-0 bg-[#F9C51C]/10 mix-blend-soft-light" />

              {/* =================================================
                  LARGE CIRCLE FRAME
              ================================================= */}

              <div className="absolute -right-24 top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full border-[18px] border-[#F9C51C]/35 sm:h-[470px] sm:w-[470px] sm:border-[22px]" />

              <div className="absolute -right-10 top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full border border-white/30 sm:h-[400px] sm:w-[400px]" />

              {/* =================================================
                  FLOATING OFFER BADGE
              ================================================= */}

              <div className="absolute right-5 top-5 sm:right-8 sm:top-8">

                <div className="flex h-24 w-24 rotate-3 flex-col items-center justify-center rounded-full border-4 border-white bg-[#00864A] text-white shadow-xl sm:h-28 sm:w-28">

                  <span className="text-2xl font-black sm:text-3xl">
                    20%
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Off
                  </span>

                </div>
              </div>

              {/* =================================================
                  DELIVERY CARD
              ================================================= */}

              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto">

                <div className="w-full max-w-[300px] rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-md">

                  {/* Fast Delivery */}
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4F3E7] text-[#00864A]">
                      <Truck className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#17352A]">
                        Fast Delivery
                      </p>

                      <p className="text-xs text-gray-500">
                        Fresh groceries to your doorstep
                      </p>
                    </div>

                  </div>

                  <div className="my-3 h-px bg-gray-100" />

                  {/* Shop */}
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4C4] text-[#B78A00]">
                      <ShoppingBag className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#17352A]">
                        Shop With Confidence
                      </p>

                      <p className="text-xs text-gray-500">
                        Authentic African products
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              {/* Orange floating decoration */}
              <div className="absolute bottom-8 right-8 hidden h-20 w-20 rotate-12 rounded-[35%] bg-[#F47C20] shadow-lg sm:block" />

              {/* Leaf */}
              <div className="absolute left-8 top-8 rotate-[-20deg] text-white/80">
                <Leaf size={45} strokeWidth={1.5} />
              </div>

            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BENEFITS BAR
        ======================================================= */}

        <div className="relative z-20 mx-auto -mt-6 w-[92%] sm:w-[80%] lg:w-[650px]">

          <div className="rounded-full border border-[#E5E5DC] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(30,80,50,0.12)]">

            <div className="flex flex-col items-center justify-center gap-3 text-xs text-gray-600 sm:flex-row sm:gap-6 sm:text-sm">

              {/* Authentic */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#00864A]" />
                <span>Authentic African Products</span>
              </div>

              <span className="hidden h-5 w-px bg-gray-200 sm:block" />

              {/* Quality */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#F9C51C]" />
                <span>Quality Guaranteed</span>
              </div>

              <span className="hidden h-5 w-px bg-gray-200 sm:block" />

              {/* Delivery */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#F47C20]" />
                <span>Fast Delivery</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM DECORATIVE STRIPE
      ========================================================= */}

      <div className="relative mt-16 h-3 overflow-hidden bg-[#00864A]">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-[#F9C51C]" />
        <div className="absolute inset-y-0 right-0 w-1/6 bg-[#F47C20]" />
      </div>
    </section>
  );
}
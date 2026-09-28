"use client";

import React, { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Sparkles,
  ShoppingBag,
  Truck,
  Store,
} from "lucide-react";
import Link from "next/link";
import { useWholesale } from "@/app/hooks/useWholesale";

export const ExploreRetail: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useWholesale({
    type: "retail",
  });

  const products = (
    data?.pages.flatMap((page) => page.products) || []
  ).slice(0, 10);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 330;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative my-20 overflow-hidden">

      {/* ========================================================= */}
      {/* MAIN CONTAINER — SAME WIDTH/SPACING AS CTA */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">

        <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-[#FFFDF7]">

          {/* ========================================================= */}
          {/* BACKGROUND DECORATIONS */}
          {/* ========================================================= */}

          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#F9C51C]/15 blur-3xl" />

          <div className="absolute -bottom-40 right-[-100px] h-[430px] w-[430px] rounded-full bg-[#00864A]/10 blur-3xl" />

          <div className="absolute right-[25%] top-[-80px] h-64 w-64 rounded-full bg-[#F47C20]/10 blur-3xl" />

          {/* Decorative circles */}
          <div className="absolute left-[7%] top-16 hidden h-5 w-5 rounded-full bg-[#F9C51C] md:block" />

          <div className="absolute left-[10%] top-24 hidden h-2.5 w-2.5 rounded-full bg-[#F47C20] md:block" />

          {/* Green ring */}
          <div className="absolute -right-32 top-[35%] hidden h-[380px] w-[380px] rounded-full border-[28px] border-[#00864A]/5 lg:block" />

          {/* ========================================================= */}
          {/* CONTENT */}
          {/* ========================================================= */}

          <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

            {/* ======================================================= */}
            {/* HEADER */}
            {/* ======================================================= */}

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

              {/* Heading */}
              <div className="max-w-3xl">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-sm font-bold text-[#00864A]">

                  <span className="h-2.5 w-2.5 rounded-full bg-[#F9C51C]" />

                  <Sparkles className="h-3.5 w-3.5" />

                  Retail Collection

                </div>

                {/* Heading */}
                <h2 className="mt-5 text-[40px] font-black leading-[0.98] tracking-[-0.045em] text-[#151515] sm:text-[50px] lg:text-[60px]">

                  Everything You Need,

                  <span className="block text-[#00864A]">
                    One Basket Away.
                  </span>

                </h2>

                {/* Yellow underline */}
                <div className="relative mt-6 h-3 w-40">

                  <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                  <div className="absolute left-12 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />

                </div>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#52606D] sm:text-lg">
                  Shop your favorite African groceries in convenient quantities.
                  From pantry staples to everyday essentials, get exactly what
                  you need for your home.
                </p>

              </div>

              {/* ===================================================== */}
              {/* RIGHT HEADER ACTION */}
              {/* ===================================================== */}

              <div className="flex items-center gap-3">

                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  aria-label="Scroll retail products left"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00864A]/10 bg-white text-[#00864A] shadow-sm transition-all hover:bg-[#EAF5EC] active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  aria-label="Scroll retail products right"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00864A] text-white shadow-lg shadow-[#00864A]/20 transition-all hover:bg-[#006F3D] active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <Link
                  href="/retail"
                  className="ml-2 hidden items-center gap-2 text-sm font-bold text-[#00864A] transition-colors hover:text-[#006F3D] sm:flex"
                >
                  View All

                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </div>

            {/* ======================================================= */}
            {/* FEATURED SHOPPING STRIP */}
            {/* ======================================================= */}

            <div className="relative mt-10 overflow-hidden rounded-[30px] bg-[#00864A]">

              {/* Yellow decoration */}
              <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#F9C51C]" />

              {/* Orange decoration */}
              <div className="absolute -bottom-14 left-[38%] h-32 w-32 rounded-full bg-[#F47C20]/70" />

              {/* Green/light ring */}
              <div className="absolute right-[10%] bottom-[-80px] h-48 w-48 rounded-full border-[18px] border-white/10" />

              <div className="relative z-10 flex flex-col gap-7 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

                {/* Left */}
                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F9C51C] shadow-lg">

                    <ShoppingBag className="h-6 w-6 text-[#151515]" />

                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFD84D]">
                      Shop Retail
                    </p>

                    <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                      Fresh groceries for everyday life.
                    </h3>

                  </div>

                </div>

                {/* Center benefits */}
                <div className="flex flex-wrap gap-3">

                  <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                    No minimum order
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                    Quality products
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                    Easy delivery
                  </div>

                </div>

              </div>

            </div>

            {/* ======================================================= */}
            {/* PRODUCTS */}
            {/* ======================================================= */}

            {isLoading ? (

              <div className="mt-10 rounded-[30px] border border-[#00864A]/10 bg-white py-20 shadow-sm">

                <div className="flex flex-col items-center justify-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF5EC]">

                    <Loader2 className="h-6 w-6 animate-spin text-[#00864A]" />

                  </div>

                  <p className="mt-4 text-sm font-semibold text-[#52606D]">
                    Loading retail products...
                  </p>

                </div>

              </div>

            ) : isError ? (

              <div className="mt-10 rounded-[30px] border border-red-100 bg-white py-16 text-center">

                <p className="font-semibold text-red-500">
                  Failed to load retail products.
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Please try again later.
                </p>

              </div>

            ) : products.length === 0 ? (

              <div className="mt-10 rounded-[30px] border border-[#00864A]/10 bg-white py-16 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF5EC]">

                  <Store className="h-6 w-6 text-[#00864A]" />

                </div>

                <p className="mt-4 font-bold text-[#151515]">
                  No retail products available yet.
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Check back soon for new products.
                </p>

              </div>

            ) : (

              <>

                {/* =================================================== */}
                {/* PRODUCT CAROUSEL */}
                {/* =================================================== */}

                <div
                  ref={scrollContainerRef}
                  className="mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-6 scrollbar-none"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >

                  {products.map((product, index) => (

                    <Link
                      href={`/product/${product.id}?type=retail`}
                      key={product.id}
                      className="
                        group relative flex
                        h-[425px]
                        w-[270px]
                        shrink-0
                        flex-col
                        overflow-hidden
                        rounded-[30px]
                        border border-[#00864A]/10
                        bg-white
                        shadow-[0_10px_30px_rgba(0,0,0,0.07)]
                        transition-all duration-500
                        hover:-translate-y-2
                        hover:shadow-[0_20px_45px_rgba(0,134,74,0.15)]
                        sm:w-[285px]
                      "
                    >

                      {/* ================================================= */}
                      {/* IMAGE */}
                      {/* ================================================= */}

                      <div className="relative h-[245px] shrink-0 overflow-hidden bg-[#F8F8F3]">

                        <img
                          src={product.image}
                          alt={product.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />

                        {/* Soft highlight */}
                        <div className="absolute inset-0 bg-white/5 transition-all duration-500 group-hover:bg-transparent" />

                        {/* Retail badge */}
                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-lg">

                          <span className="h-2 w-2 rounded-full bg-[#00864A]" />

                          <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#00864A]">
                            Retail
                          </span>

                        </div>

                        {/* Number */}
                        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F9C51C] text-xs font-black text-[#151515] shadow-lg">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                      </div>

                      {/* ================================================= */}
                      {/* INFORMATION */}
                      {/* ================================================= */}

                      <div className="flex min-h-0 flex-1 flex-col px-5 py-4">

                        {/* Price / availability */}
                        <div className="flex shrink-0 items-center justify-between gap-3">

                          <span className="rounded-full bg-[#FFF4D0] px-3 py-1.5 text-sm font-black text-[#151515]">

                            {isNaN(Number(product.price))
                              ? product.price
                              : `$${Number(product.price).toFixed(2)}`}

                          </span>

                          <span className="text-[11px] font-bold text-[#00864A]">
                            In stock
                          </span>

                        </div>

                        {/* Product name */}
                        <h3
                          className="
                            mt-3
                            line-clamp-2
                            min-h-[44px]
                            text-lg
                            font-black
                            leading-[1.2]
                            text-[#151515]
                            transition-colors
                            duration-300
                            group-hover:text-[#00864A]
                          "
                        >
                          {product.title}
                        </h3>

                        {/* View Product */}
                        <div className="mt-4 flex items-center justify-between">

                          <span className="text-sm font-bold text-[#52606D]">
                            View product
                          </span>

                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00864A] text-white transition-all duration-300 group-hover:bg-[#F9C51C] group-hover:text-[#151515]">

                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />

                          </span>

                        </div>

                      </div>

                    </Link>

                  ))}

                </div>

                {/* Mobile button */}
                <div className="mt-3 flex justify-center sm:hidden">

                  <Link
                    href="/retail"
                    className="inline-flex items-center gap-2 rounded-full bg-[#00864A] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#00864A]/20"
                  >
                    View All Retail Products

                    <ArrowRight className="h-4 w-4" />

                  </Link>

                </div>

              </>

            )}

            {/* ======================================================= */}
            {/* BOTTOM BENEFITS */}
            {/* ======================================================= */}

            <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#00864A]/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:grid-cols-3">

              {/* Benefit 1 */}
              <div className="flex items-center justify-center gap-3 px-5 py-5 sm:border-r border-gray-200">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF5EC]">

                  <ShoppingBag className="h-4 w-4 text-[#00864A]" />

                </div>

                <div>

                  <p className="text-sm font-black text-[#151515]">
                    Everyday Shopping
                  </p>

                  <p className="mt-0.5 text-[11px] text-gray-500">
                    Buy only what you need
                  </p>

                </div>

              </div>

              {/* Benefit 2 */}
              <div className="flex items-center justify-center gap-3 px-5 py-5 sm:border-r border-gray-200">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF4D0]">

                  <Store className="h-4 w-4 text-[#D69E00]" />

                </div>

                <div>

                  <p className="text-sm font-black text-[#151515]">
                    Quality Groceries
                  </p>

                  <p className="mt-0.5 text-[11px] text-gray-500">
                    Authentic African favorites
                  </p>

                </div>

              </div>

              {/* Benefit 3 */}
              <div className="flex items-center justify-center gap-3 px-5 py-5">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0E6]">

                  <Truck className="h-4 w-4 text-[#F47C20]" />

                </div>

                <div>

                  <p className="text-sm font-black text-[#151515]">
                    Easy Delivery
                  </p>

                  <p className="mt-0.5 text-[11px] text-gray-500">
                    Convenient doorstep delivery
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* YELLOW BOTTOM ACCENT */}
          {/* ========================================================= */}

          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

        </div>

      </div>

    </section>
  );
};

export default ExploreRetail;
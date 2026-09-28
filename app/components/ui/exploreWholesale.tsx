"use client";

import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Loader2,
  Sparkles,
  Boxes,
} from "lucide-react";
import Link from "next/link";
import { useWholesale } from "@/app/hooks/useWholesale";

export default function ExploreWholesale() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useWholesale({
    type: "wholesale",
  });

  const products = (
    data?.pages.flatMap((page) => page.products) || []
  ).slice(0, 10);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative my-20 overflow-hidden">
      {/* ========================================================= */}
      {/* SAME WIDTH STRUCTURE AS CTA */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
        {/* ========================================================= */}
        {/* MAIN EXPLORE WHOLESALE CARD */}
        {/* ========================================================= */}

        <div className="relative overflow-hidden rounded-[36px] border border-[#00864A]/10 bg-[#FFFDF7]">
          {/* ========================================================= */}
          {/* BACKGROUND DECORATIONS */}
          {/* ========================================================= */}

          {/* Yellow glow */}
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#F9C51C]/20 blur-3xl" />

          {/* Green glow */}
          <div className="absolute -right-40 top-20 h-[430px] w-[430px] rounded-full bg-[#00864A]/10 blur-3xl" />

          {/* Orange glow */}
          <div className="absolute -bottom-32 left-[35%] h-80 w-80 rounded-full bg-[#F47C20]/10 blur-3xl" />

          {/* Small yellow circle */}
          <div className="absolute right-[38%] top-12 hidden h-16 w-16 rounded-full bg-[#F9C51C]/20 md:block" />

          {/* Green ring */}
          <div className="absolute right-[-150px] top-[30%] hidden h-[420px] w-[420px] rounded-full border-[35px] border-[#00864A]/5 lg:block" />

          {/* Orange decorative shape */}
          <div className="absolute bottom-16 left-[5%] hidden h-16 w-16 rotate-12 rounded-[35%] bg-[#F47C20]/20 md:block" />

          {/* ========================================================= */}
          {/* MAIN CONTENT */}
          {/* ========================================================= */}

          <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            {/* ======================================================= */}
            {/* HEADER */}
            {/* ======================================================= */}

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              {/* Left header */}
              <div className="max-w-3xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC] px-4 py-2 text-sm font-semibold text-[#00864A]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F9C51C]" />

                  <Sparkles className="h-3.5 w-3.5" />

                  Wholesale Collection
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-[38px] font-black leading-[0.98] tracking-[-0.04em] text-[#151515] sm:text-[48px] lg:text-[58px]">
                  Explore Our
                  <br />

                  <span className="text-[#00864A]">
                    Wholesale Products.
                  </span>
                </h2>

                {/* Yellow underline */}
                <div className="relative mt-5 h-3 w-36">
                  <div className="absolute left-0 top-0 h-2 w-28 rounded-full bg-[#F9C51C]" />

                  <div className="absolute left-10 top-3 h-1 w-20 rounded-full bg-[#F9C51C]/50" />
                </div>

                {/* Description */}
                <p className="mt-7 max-w-2xl text-base leading-8 text-[#52606D] sm:text-lg">
                  Discover quality African groceries available in bulk. Shop
                  grains, spices, provisions, and everyday essentials at
                  competitive wholesale prices.
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  aria-label="Scroll products left"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00864A]/10 bg-white text-[#00864A] shadow-sm transition-all hover:bg-[#EAF5EC] active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  aria-label="Scroll products right"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00864A] text-white shadow-lg shadow-[#00864A]/20 transition-all hover:bg-[#006F3D] active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <Link
                  href="/wholesale"
                  className="ml-2 hidden items-center gap-2 text-sm font-bold text-[#00864A] transition-colors hover:text-[#006F3D] sm:flex"
                >
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ======================================================= */}
            {/* PRODUCT AREA */}
            {/* ======================================================= */}

            {isLoading ? (
              <div className="mt-12 flex flex-col items-center justify-center rounded-[28px] border border-[#00864A]/10 bg-white py-20 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF5EC]">
                  <Loader2 className="h-6 w-6 animate-spin text-[#00864A]" />
                </div>

                <p className="mt-4 text-sm font-medium text-[#52606D]">
                  Loading wholesale products...
                </p>
              </div>
            ) : isError ? (
              <div className="mt-12 rounded-[28px] border border-red-100 bg-white py-16 text-center">
                <p className="font-medium text-red-500">
                  Failed to load wholesale products.
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Please try again later.
                </p>
              </div>
            ) : products.length === 0 ? (
              <div className="mt-12 rounded-[28px] border border-[#00864A]/10 bg-white py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF5EC]">
                  <Boxes className="h-6 w-6 text-[#00864A]" />
                </div>

                <p className="mt-4 font-bold text-[#151515]">
                  No wholesale products available yet.
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Check back soon for new products.
                </p>
              </div>
            ) : (
              <>
                {/* Product scrolling area */}
                <div
                  ref={scrollContainerRef}
                  className="scrollbar-none mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-5"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {products.map((product, index) => (
                    <Link
                      href={`/product/${product.id}?type=wholesale`}
                      key={product.id}
                      className="group relative h-[390px] w-[270px] flex-shrink-0 overflow-hidden rounded-[28px] border border-[#00864A]/10 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,134,74,0.16)] sm:w-[290px]"
                    >
                      {/* Product Image */}
                      <div className="absolute inset-x-0 top-0 h-[245px] overflow-hidden bg-[#F8F8F3]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Soft image highlight */}
                        <div className="absolute inset-0 bg-white/5 transition-colors duration-500 group-hover:bg-transparent" />

                        {/* Wholesale Badge */}
                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md">
                          <span className="h-2 w-2 rounded-full bg-[#00864A]" />

                          <span className="text-[11px] font-black uppercase tracking-wider text-[#00864A]">
                            Wholesale
                          </span>
                        </div>

                        {/* Number Badge */}
                        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F9C51C] text-xs font-black text-[#151515] shadow-lg">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Product Information */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white px-5 py-5">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center rounded-full bg-[#FFF4D0] px-3 py-1.5 text-sm font-black text-[#151515]">
                            {isNaN(Number(product.price))
                              ? product.price
                              : `$${Number(product.price).toFixed(2)}`}
                          </span>

                          <span className="text-xs font-semibold text-[#00864A]">
                            In stock
                          </span>
                        </div>

                        <h3 className="line-clamp-2 text-lg font-black leading-tight text-[#151515] transition-colors duration-300 group-hover:text-[#00864A]">
                          {product.title}
                        </h3>

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

                {/* Mobile View All */}
                <div className="mt-5 flex justify-center sm:hidden">
                  <Link
                    href="/wholesale"
                    className="inline-flex items-center gap-2 rounded-full bg-[#00864A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#00864A]/20"
                  >
                    View All Wholesale Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </>
            )}

            {/* ======================================================= */}
            {/* BOTTOM INFORMATION STRIP */}
            {/* ======================================================= */}

            <div className="mt-8 rounded-[24px] border border-gray-100 bg-white px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
                {/* Item 1 */}
                <div className="flex items-center justify-center gap-3 sm:border-r border-gray-200">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF5EC]">
                    <Boxes className="h-4 w-4 text-[#00864A]" />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-[#151515]">
                      Bulk Shopping
                    </p>

                    <p className="text-[11px] text-gray-500">
                      Stock up with ease
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-center gap-3 sm:border-r border-gray-200">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4D0]">
                    <Sparkles className="h-4 w-4 text-[#D69E00]" />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-[#151515]">
                      Quality Products
                    </p>

                    <p className="text-[11px] text-gray-500">
                      Authentic African groceries
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF0E6]">
                    <ArrowRight className="h-4 w-4 text-[#F47C20]" />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-[#151515]">
                      Easy Ordering
                    </p>

                    <p className="text-[11px] text-gray-500">
                      Simple and convenient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* BOTTOM YELLOW ACCENT */}
          {/* ========================================================= */}

          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />
        </div>
      </div>
    </section>
  );
}
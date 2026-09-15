"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useWholesale } from "@/app/hooks/useWholesale";

export default function ExploreWholesale() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useWholesale({ type: "wholesale" });
  const products = (data?.pages.flatMap((page) => page.products) || []).slice(
    0,
    10,
  );

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      {/* Header with Title and Arrow Navigation */}

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#016738] text-white text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WholeSale Collection</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Explore Our WholeSales Stores
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-xl">
            Shop directly from our latest stock with instant delivery, exclusive
            Wholesale guarantees, and zero minimum order quantities.
          </p>
        </div>
        <div className="flex items-center gap-3 hidden md:flex">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-700 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Cards Scroll Container */}
      {isLoading ? (
        <div className="flex items-center justify-center gap-2 py-16 text-slate-500">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading wholesale products...</span>
        </div>
      ) : isError ? (
        <p className="py-16 text-center text-red-500">
          Failed to load wholesale products.
        </p>
      ) : products.length === 0 ? (
        <p className="py-16 text-center text-slate-500">
          No wholesale products available yet.
        </p>
      ) : (
        <div
          ref={scrollContainerRef}
          className="flex gap-6 pt-10 overflow-x-auto scrollbar-none scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <Link
              href={`/product/${product.id}?type=wholesale`}
              key={product.id}
              className="group relative h-80 w-[250px] sm:w-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6"
            >
              {/* Background Image with Zoom Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Card Content */}
              <div className="relative z-10 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-xs font-medium text-indigo-200 tracking-wider uppercase">
                  {isNaN(Number(product.price))
                    ? product.price
                    : `$${Number(product.price).toFixed(2)}`}
                </span>
                <h3 className="text-xl font-bold mt-1 text-white line-clamp-1">
                  {product.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-white/80 mt-3 group-hover:text-white">
                  <span>Shop now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

import Button from "../button";
import Title from "../title";
import { useProducts } from "@/app/hooks/useCollection";
import { useCart } from "../../context/cartContext";
import StarRating from "../StarRating";

export default function Category() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts();

  const { addItem } = useCart();

  const products =
    data?.pages.flatMap((page: any) => page?.data?.data || []) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white lg:px-12 md:px-6">
      {/* Header */}
      <div>
        <Title
          text="Authentic African Kitchen Staples"
          className="items-center"
        />

        <p className="pt-6 pb-10 max-w-xl mx-auto text-base md:text-lg text-center text-gray-600 leading-relaxed">
          Bring the genuine taste of home to your kitchen. Explore our
          handpicked category of premium pantry items, essential spices, and
          classic ingredients delivered fresh for your everyday cooking.
        </p>
      </div>

      {/* Loading */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-gray-500">Loading products...</p>
        </div>
      ) : isError ? (
        /* Error */
        <div className="flex justify-center items-center py-20">
          <p className="text-red-500">{(error as Error).message}</p>
        </div>
      ) : (
        <>
          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item: any) => {
              // Construct category path safely with fallbacks
              const categorySlug = item.category?.slug;
              const categoryUrl = categorySlug
                ? `/category/${categorySlug}`
                : "#";

              return (
                <div
                  key={item.id}
                  className="flex flex-col border border-gray-100 overflow-hidden p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Card Image Wrapper links directly to Category Page */}
                  <Link
                    href={categoryUrl}
                    className="relative w-full aspect-[4/3] rounded-2xl bg-[#f9f8f6] overflow-hidden mb-5 flex items-center justify-center group"
                  >
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                      {/* <Image
                        src={item.thumbnail || item.images?.[0] || "/poundo.jpg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      /> */}
                    </div>

                    {/* Category Badge - Clicking routes to category page */}
                    {item.category?.name && (
                      <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider text-stone-700 bg-white/90 hover:bg-white px-2.5 py-1 rounded-md transition-colors">
                        {item.category.name}
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-stone-900 mb-2 line-clamp-1 hover:text-orange-600">
                        {item.name}
                      </h3>

                      <button className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 bg-gray-50">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Clicking product title navigates to Category page */}
                    <Link href={categoryUrl}></Link>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 mb-2">
                        <StarRating />
                      </div>
                      <span className="text-2xl font-extrabold tracking-tight text-stone-900">
                        ${Number(item.effective_price || 0).toFixed(2)}
                      </span>
                    </div>

                    <p className="text-[13px] leading-relaxed text-stone-600 min-h-[56px] mb-6 line-clamp-3">
                      {item.short_description}
                    </p>
                    <div className="my-6">
                      <Button
                        variant="primary"
                        className="flex w-full items-center justify-center gap-3"
                      >
                        <span>
                          <ShoppingCart size={20} />
                        </span>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-14">
            {hasNextPage ? (
              <Button
                variant="secondary"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? "Loading..." : "See More Collections"}
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                No More Products
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

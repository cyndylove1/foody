import React from "react";
import { Heart, ShoppingCart, Loader2, PackageX } from "lucide-react";
import Button from "../button";
import StarRating from "../StarRating";
import { useWholesale } from "../../hooks/useWholesale";
import { useCart } from "@/app/context/cartContext";

interface DealsProps {
  type: "retail" | "wholesale";
  id?: number | string;
  title?: string;
}

export default function Deals({ type, id, title }: DealsProps) {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useWholesale({ type, id });

  const { addItem } = useCart();

  // Flatten array of paginated page results into a single list
  const products = data?.pages.flatMap((page) => page.products) ?? [];

  if (isLoading) {
    return (
      <section className="max-w-7xl lg:px-8 md:px-6 mx-auto px-4 py-16 flex items-center justify-center gap-2">
        <Loader2 className="w-6 h-6 animate-spin text-slate-600" />
        <p className="text-lg text-gray-500">Loading products...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="max-w-7xl lg:px-8 md:px-6 mx-auto px-4 py-8 mt-10">
        <p className="text-red-500 font-medium">
          Error loading products: {error.message}
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl lg:px-8 md:px-6 mx-auto px-4 py-8 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="md:text-4xl text-2xl font-bold text-slate-900 tracking-tight">
          {title ||
            (type === "wholesale"
              ? "Wholesale Deals"
              : "Todays Best Deals For You!")}
        </h2>
      </div>

      {!products || products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400 border border-dashed rounded-xl">
          <PackageX className="w-12 h-12 mb-2 stroke-1" />
          <p className="text-base font-medium">No products found</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex border border-gray-300 p-4 rounded-lg flex-col group cursor-pointer"
              >
                <div className="relative bg-[#f2f4f8] rounded-xl w-full h-52 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:-translate-y-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-cover mix-blend-multiply"
                  />
                </div>

                <div className="flex flex-col flex-1 justify-between px-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-slate-800 line-clamp-2 leading-relaxed">
                      {product.title}
                    </h3>
                    <button className="p-2 rounded-full text-gray-400 hover:text-(--main) hover:bg-(--main)/10 bg-gray-50">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 mb-2">
                      <StarRating />
                      <span className="text-[11px] text-slate-400 font-normal">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1.5 mt-auto">
                    <span className="text-sm font-bold text-slate-900">
                      {product.price}
                    </span>
                    <span className="text-[10px] font-bold text-slate-900">
                      {product.currency}
                    </span>

                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through ml-1">
                        {product.originalPrice}{" "}
                        <span className="text-[9px]">{product.currency}</span>
                      </span>
                    )}
                  </div>

                  <div className="mt-6">
                    <Button
                      variant="primary"
                      onClick={() => addItem(product.id)}
                      className="flex w-full items-center justify-center gap-3"
                    >
                      <ShoppingCart size={20} />
                      <span>Add to Cart</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasNextPage && (
            <div className="mt-10 flex justify-center">
              <Button
                variant="secondary"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? "Loading..." : "See More Collections"}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

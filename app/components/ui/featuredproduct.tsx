"use client";

import Image from "next/image";
import Link from "next/link";
import Title from "../title";
import { useFeaturedProducts } from "@/app/hooks/useFeaturedProduct";

export default function FeaturedProduct() {
  const { data, isLoading, isError, error } = useFeaturedProducts();

  const products = data?.data || [];

  return (
    <section className="w-full bg-gray-50 py-8">
      <Title text="Featured Products" className="items-center pt-10 pb-20" />

      {isLoading ? (
        <div className="flex justify-center items-center py-16">
          <p className="text-gray-500 text-lg">Loading featured products...</p>
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center py-16">
          <p className="text-red-500">{(error as Error).message}</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product: any) => {
              // Extract category slug or fallback to checking category_id
              const categorySlug =
                product.category?.slug || product.category_slug;

              return (
                <Link
                  key={product.id}
                  href={`/category/${categorySlug}`}
                  className="border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-md transition-all duration-300 group block"
                >
                  <div className="p-4">
                    <div className="relative w-full h-[260px]">
                      {/* Un-comment when you want the image back */}
                      {/* <Image
                        src={product.image || "/bonnet.jpg"}
                        alt={product.name}
                        fill
                        className="object-cover p-4"
                      /> */}
                    </div>

                    <h3 className="text-center text-gray-600 text-lg">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

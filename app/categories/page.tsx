"use client";

import Link from "next/link";
import MenuList from "@/app/components/ui/menuList";
import ProductCard from "@/app/components/ui/productCard";
import { LayoutGrid, List } from "lucide-react";
import { useProducts } from "@/app/hooks/useCollection";
import Footer from "../components/ui/footer";
import ShopNavbar from "../components/ui/shopNavbar";

export default function Category() {
  const { data, isLoading, isError, error } = useProducts();

  const products =
    data?.pages.flatMap((page: any) => page?.data?.data || []) || [];

  return (
    <>
      
      <main className="mx-auto px-4 py-8 bg-[#faf8f2] min-h-screen w-full">
        <div className="flex justify-end items-center gap-2 border-b border-gray-200/60 pb-3 mb-6">
          <button
            type="button"
            className="p-1.5 text-gray-800 bg-gray-100 rounded cursor-pointer"
            aria-label="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="p-1.5 text-gray-300 hover:text-gray-500 rounded cursor-pointer"
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 shrink-0 hidden md:flex">
            <MenuList />
          </div>

          <div className="w-full">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <p className="text-lg text-gray-500">Loading products...</p>
              </div>
            ) : isError ? (
              <div className="flex justify-center items-center py-20">
                <p className="text-red-500">{(error as Error).message}</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((prod: any) => (
                  <Link
                    href={`/product/${prod.id}`}
                    key={prod.id}
                    className="block transition-transform duration-200 hover:-translate-y-1"
                  >
                    <ProductCard
                      id={prod.id}
                      name={prod.name}
                      imageSrc={
                        prod.thumbnail || prod.images?.[0] || "/poundo.jpg"
                      }
                      currentPrice={Number(
                        prod.effective_price || prod.price || 0,
                      )}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

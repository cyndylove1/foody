"use client";

import { use } from "react";
import MenuList from "@/app/components/ui/menuList";
import ProductCard from "@/app/components/ui/productCard";
import { useProducts } from "@/app/hooks/useCollection";
import { categoriesData } from "@/app/constant";
import ShopNavbar from "@/app/components/ui/shopNavbar";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category_id: number;
  category?: {
    id: number;
    slug: string;
  };
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap Next.js dynamic params
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Match the slug to our subcategory to obtain its ID
  const subCategory = categoriesData
    .flatMap((cat) => cat.subCategories || [])
    .find((sub) => sub.slug === slug);

  const categoryId = subCategory?.id;

  // Pass categoryId or slug directly into the hook
  const { data, isLoading, isError } = useProducts(categoryId || slug);

  // Extract products directly returned from API
  const products: Product[] =
    data?.pages.flatMap((page) => page.data.data) || [];

  return (
    <>
      <ShopNavbar />
      <div className="bg-[#faf8f2] w-full px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="hidden md:flex">
          <MenuList />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 mt-[13rem] md:mt-0">
          <h1 className="md:text-3xl text-2xl font-bold capitalize mb-6">
            {subCategory ? subCategory.name : slug.replace(/-/g, " ")}
          </h1>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-80 animate-pulse bg-gray-200 rounded-xl"
                />
              ))}
            </div>
          ) : isError ? (
            <p className="text-red-500">
              Failed to load products. Please check connection.
            </p>
          ) : products.length === 0 ? (
            <p className="text-gray-500">No products found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  imageSrc={product.image}
                  currentPrice={product.price}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

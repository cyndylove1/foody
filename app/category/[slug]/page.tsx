"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";
import MenuList from "@/app/components/ui/menuList";
import ProductCard from "@/app/components/ui/productCard";
import { useProducts } from "@/app/hooks/useCollection";
import { useSearch } from "@/app/hooks/useSearchProduts";
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
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  // Match category details
  const subCategory = categoriesData
    .flatMap((cat) => cat.subCategories || [])
    .find((sub) => sub.slug === slug);

  const categoryId = subCategory?.id;

  // Regular collection fetch
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useProducts(categoryId || slug);

  // Search API fetch when keyword parameter exists
  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
  } = useSearch({ keyword, category: categoryId }, Boolean(keyword));

  const isSearchMode = Boolean(keyword);
  const isLoading = isSearchMode ? searchLoading : categoryLoading;
  const isError = isSearchMode ? searchError : categoryError;

  // Safe extraction with array checks
  const rawSearchList = Array.isArray(searchData?.data)
    ? searchData.data
    : Array.isArray((searchData as any)?.data?.data)
      ? (searchData as any).data.data
      : [];

  const rawCategoryList =
    categoryData?.pages?.flatMap((page: any) => {
      if (Array.isArray(page?.data?.data)) return page.data.data;
      if (Array.isArray(page?.data)) return page.data;
      if (Array.isArray(page)) return page;
      return [];
    }) || [];

  const products: Product[] = isSearchMode ? rawSearchList : rawCategoryList;

  return (
    <>
      <ShopNavbar />
      <div className="bg-white w-full px-4 pb-8 pt-20 flex flex-col md:flex-row gap-8">
        <div className="hidden md:flex">
          <MenuList />
        </div>

        <main className="flex-1">
          <h1 className="md:text-2xl text-xl font-bold capitalize mb-6">
            {isSearchMode
              ? `Search Results for "${keyword}"`
              : subCategory
                ? subCategory.name
                : slug.replace(/-/g, " ")}
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
          ) : !Array.isArray(products) || products.length === 0 ? (
            <p className="text-gray-500">
              {isSearchMode
                ? `No products found matching "${keyword}".`
                : "No products found in this category."}
            </p>
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

"use client";

import { useEffect, useState } from "react";
import { Loader2, Search } from "lucide-react";
import Button from "../button";
import ProductCard from "./productCard";
import CatalogSidebar, { CatalogFilterState } from "./catalogSidebar";
import { useProductCatalog } from "@/app/hooks/useProductCatalog";

interface ProductCatalogProps {
  productType: "retail" | "wholesale";
  title?: string;
}

const DEFAULT_FILTERS: CatalogFilterState = {
  categoryId: undefined,
  brand: "",
  minPrice: "",
  maxPrice: "",
  inStock: false,
  featured: false,
};

export default function ProductCatalog({
  productType,
  title,
}: ProductCatalogProps) {
  const [filters, setFilters] = useState<CatalogFilterState>(DEFAULT_FILTERS);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<{
    sortBy: "created_at" | "price" | "name" | "average_rating";
    sortDir: "asc" | "desc";
  }>({ sortBy: "created_at", sortDir: "desc" });

  useEffect(() => {
    const handler = setTimeout(() => setSearch(searchInput.trim()), 300);
    return () => clearTimeout(handler);
  }, [searchInput]);

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProductCatalog({
      productType,
      categoryId: filters.categoryId,
      brand: filters.brand || undefined,
      minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
      inStock: filters.inStock || undefined,
      featured: filters.featured || undefined,
      search: search || undefined,
      sortBy: sort.sortBy,
      sortDir: sort.sortDir,
      perPage: 12,
    });

  const products = data?.pages.flatMap((page) => page.products) ?? [];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h2 className="md:text-3xl text-2xl font-bold text-slate-900 tracking-tight mb-6">
        {title ??
          (productType === "wholesale"
            ? "Browse All Wholesale Products"
            : "Browse All Retail Products")}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <CatalogSidebar filters={filters} onChange={setFilters} productType={productType} />

        <div className="flex-1 min-w-0">
          {/* Search + Sort Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={`Search ${productType} products...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <select
              value={`${sort.sortBy}:${sort.sortDir}`}
              onChange={(e) => {
                const [sortBy, sortDir] = e.target.value.split(":") as [
                  typeof sort.sortBy,
                  typeof sort.sortDir,
                ];
                setSort({ sortBy, sortDir });
              }}
              className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white"
            >
              <option value="created_at:desc">Newest</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
              <option value="name:asc">Name: A-Z</option>
              <option value="average_rating:desc">Top Rated</option>
            </select>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-80 animate-pulse bg-gray-200 rounded-xl"
                />
              ))}
            </div>
          ) : isError ? (
            <p className="text-red-500">
              Failed to load {productType} products. Please try again.
            </p>
          ) : products.length === 0 ? (
            <p className="text-gray-500">
              No {productType} products found matching your filters.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageSrc={
                      product.image_url ||
                      product.image ||
                      product.thumbnail ||
                      "/poundo.jpg"
                    }
                    currentPrice={
                      product.unit_price ?? product.effective_price ?? product.price
                    }
                  />
                ))}
              </div>

              {hasNextPage && (
                <div className="flex justify-center mt-10">
                  <Button
                    variant="secondary"
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                  >
                    {isFetchingNextPage ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Loading...
                      </span>
                    ) : (
                      "Load More"
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

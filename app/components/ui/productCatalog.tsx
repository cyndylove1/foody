"use client";

import { useEffect, useState } from "react";
import {
  Loader2,
  Search,
  SlidersHorizontal,
  Sparkles,
  Package,
  ChevronDown,
  ArrowUpDown,
  Star,
  ShoppingBag,
  Leaf,
  ArrowRight,
} from "lucide-react";

import Button from "../button";
import CatalogSidebar, { CatalogFilterState } from "./catalogSidebar";
import { useProductCatalog } from "@/app/hooks/useProductCatalog";
import ProductCard from "./productCard";

interface ProductCatalogProps {
  productType: "retail" | "wholesale";
  title?: string;
}

const DEFAULT_FILTERS: CatalogFilterState = {
  categoryId: undefined,
  minPrice: "",
  maxPrice: "",
  inStock: false,
  featured: false,
};

export default function ProductCatalog({
  productType,
  title,
}: ProductCatalogProps) {
  const [filters, setFilters] =
    useState<CatalogFilterState>(DEFAULT_FILTERS);

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState<{
    sortBy: "created_at" | "price" | "name" | "average_rating";
    sortDir: "asc" | "desc";
  }>({
    sortBy: "created_at",
    sortDir: "desc",
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  /* ============================================================
     SEARCH DEBOUNCE
  ============================================================ */

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(searchInput.trim());
    }, 300);

    return () => clearTimeout(handler);
  }, [searchInput]);

  /* ============================================================
     PRODUCT DATA
  ============================================================ */

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductCatalog({
    productType,
    categoryId: filters.categoryId,
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

  const isWholesale = productType === "wholesale";

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDF7]">

      {/* ============================================================
          HERO BACKGROUND
      ============================================================ */}

      <div className="absolute inset-x-0 top-0 h-[430px] overflow-hidden">

        {/* Yellow glow - top left */}
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#F9C51C]/20 blur-3xl" />

        {/* Orange glow - top center/right */}
        <div className="absolute right-[25%] -top-24 h-[360px] w-[360px] rounded-full bg-[#F47C20]/25 blur-3xl" />

        {/* Yellow glow - lower hero */}
        <div className="absolute left-[45%] top-[180px] h-[300px] w-[300px] rounded-full bg-[#F9C51C]/15 blur-3xl" />

        {/* Green glow - right */}
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-[#00864A]/15 blur-3xl" />

        {/* ========================================================
            LARGE GREEN RINGS
        ======================================================== */}

        <div className="absolute -right-[210px] -top-[190px] hidden h-[620px] w-[620px] rounded-full border-[28px] border-[#00864A]/15 lg:block" />

        <div className="absolute -right-[135px] -top-[115px] hidden h-[470px] w-[470px] rounded-full border-[22px] border-[#00864A]/10 lg:block" />

        <div className="absolute right-[20px] top-[25px] hidden h-[320px] w-[320px] rounded-full border-[18px] border-[#00864A]/8 lg:block" />

        {/* ========================================================
            ORANGE DECORATION
        ======================================================== */}

        <div className="absolute right-[15%] top-[150px] hidden h-16 w-16 rotate-[18deg] rounded-[18px] bg-[#F47C20]/80 shadow-lg lg:block" />

        <div className="absolute right-[27%] top-[90px] hidden h-4 w-4 rounded-full bg-[#F47C20] lg:block" />

        {/* ========================================================
            YELLOW DECORATIONS
        ======================================================== */}

        <div className="absolute left-[46%] top-[55px] hidden h-12 w-12 rounded-full bg-[#F9C51C]/70 lg:block" />

        <div className="absolute left-[49%] top-[100px] hidden h-3 w-3 rounded-full bg-[#F47C20] lg:block" />

        {/* Small green dot */}
        <div className="absolute left-[8%] top-[80px] hidden h-3 w-3 rounded-full bg-[#00864A]/30 lg:block" />

      </div>

      {/* ============================================================
          HERO CONTENT
      ============================================================ */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">

        <div className="relative max-w-3xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#00864A]/10 bg-[#EAF5EC]/90 px-4 py-2 mt-14 text-sm font-bold text-[#00864A] shadow-sm backdrop-blur-sm">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9C51C]">

              <Sparkles className="h-3.5 w-3.5 text-[#151515]" />

            </span>

            <span>
              {isWholesale
                ? "Wholesale Collection"
                : "Retail Collection"}
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-6 max-w-3xl text-[44px] font-black leading-[0.94] tracking-[-0.055em] text-[#151515] sm:text-[58px] lg:text-[70px]">

            {title ? (
              title
            ) : (
              <>
                Browse Our
                <br />

                <span className="text-[#00864A]">
                  {isWholesale
                    ? "Wholesale Products."
                    : "Retail Products."}
                </span>
              </>
            )}

          </h2>

          {/* Yellow underline */}

          <div className="relative mt-7 h-5 w-44">

            <div className="absolute left-0 top-0 h-2.5 w-36 rounded-full bg-[#F9C51C]" />

            <div className="absolute left-[72px] top-4 h-1.5 w-20 rounded-full bg-[#F9C51C]/60" />

          </div>

          {/* Description */}

          <p className="mt-7 max-w-xl text-base leading-7 text-[#52606D] sm:text-lg sm:leading-8">

            Discover quality African groceries carefully selected for
            your everyday needs. Browse our collection, filter what you
            need, and find your favorites with ease.

          </p>

        </div>

      </div>

      {/* ============================================================
          CATALOG AREA
      ============================================================ */}

      <div className="relative z-10 border-t border-[#00864A]/5 bg-white/20">

        {/* Background decoration behind catalog */}

        <div className="pointer-events-none absolute left-[-150px] top-[30%] h-[420px] w-[420px] rounded-full bg-[#F9C51C]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[5%] right-[-150px] h-[450px] w-[450px] rounded-full bg-[#00864A]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[20%] left-[30%] h-72 w-72 rounded-full bg-[#F47C20]/12 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">

          {/* ========================================================
              MAIN LAYOUT
          ======================================================== */}

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">

            {/* ======================================================
                SIDEBAR
            ====================================================== */}

            <aside className="hidden lg:block">

              <div className="sticky top-28 overflow-hidden rounded-[24px] border border-[#00864A]/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)]">

                {/* Sidebar Header */}

                <div className="border-b border-gray-100 bg-white px-6 py-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00864A] text-white shadow-sm">

                      <ShoppingBag className="h-5 w-5" />

                    </div>

                    <div>

                      <h3 className="text-base font-black text-[#151515]">
                        Filter Products
                      </h3>

                      <p className="mt-0.5 text-xs text-[#52606D]">
                        Find exactly what you need
                      </p>

                    </div>

                  </div>

                </div>

                {/* Sidebar Content */}

                <div className="p-5">

                  <CatalogSidebar
                    filters={filters}
                    onChange={setFilters}
                    productType={productType}
                  />

                </div>

              </div>

            </aside>

            {/* ======================================================
                PRODUCTS AREA
            ====================================================== */}

            <div className="min-w-0">

              {/* ====================================================
                  TOOLBAR
              ==================================================== */}

              <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_220px]">

                {/* Search */}

                <div className="relative">

                  <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#151515]" />

                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder={`Search ${
                      isWholesale ? "wholesale" : "retail"
                    } products...`}
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-[#DDE4DF]
                      bg-white
                      pl-13
                      pr-5
                      text-sm
                      font-medium
                      text-[#151515]
                      shadow-sm
                      outline-none
                      transition-all
                      placeholder:text-[#84919A]
                      focus:border-[#00864A]
                      focus:ring-4
                      focus:ring-[#00864A]/10
                    "
                  />

                </div>

                {/* Sort */}

                <div className="relative">

                  <ArrowUpDown className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#151515]" />

                  <select
                    value={`${sort.sortBy}:${sort.sortDir}`}
                    onChange={(e) => {
                      const [sortBy, sortDir] =
                        e.target.value.split(":") as [
                          typeof sort.sortBy,
                          typeof sort.sortDir
                        ];

                      setSort({
                        sortBy,
                        sortDir,
                      });
                    }}
                    className="
                      h-14
                      w-full
                      appearance-none
                      rounded-2xl
                      border
                      border-[#DDE4DF]
                      bg-white
                      pl-11
                      pr-10
                      text-sm
                      font-bold
                      text-[#151515]
                      shadow-sm
                      outline-none
                      transition-all
                      focus:border-[#00864A]
                      focus:ring-4
                      focus:ring-[#00864A]/10
                    "
                  >

                    <option value="created_at:desc">
                      Newest First
                    </option>

                    <option value="price:asc">
                      Price: Low to High
                    </option>

                    <option value="price:desc">
                      Price: High to Low
                    </option>

                    <option value="name:asc">
                      Name: A-Z
                    </option>

                    <option value="average_rating:desc">
                      Top Rated
                    </option>

                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#52606D]" />

                </div>

              </div>

              {/* ====================================================
                  MOBILE FILTER
              ==================================================== */}

              <button
                type="button"
                onClick={() =>
                  setShowMobileFilters((prev) => !prev)
                }
                className="
                  mb-6
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-[#00864A]/15
                  bg-[#EAF5EC]
                  text-sm
                  font-bold
                  text-[#00864A]
                  lg:hidden
                "
              >

                <SlidersHorizontal className="h-4 w-4" />

                Filters

              </button>

              {/* Mobile Sidebar */}

              {showMobileFilters && (
                <div className="mb-6 rounded-2xl border border-[#00864A]/10 bg-white p-5 shadow-sm lg:hidden">

                  <CatalogSidebar
                    filters={filters}
                    onChange={setFilters}
                    productType={productType}
                  />

                </div>
              )}

              {/* ====================================================
                  RESULT INFO
              ==================================================== */}

              {!isLoading &&
                !isError &&
                products.length > 0 && (

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF5EC]">

                        <Leaf className="h-3.5 w-3.5 text-[#00864A]" />

                      </span>

                      <p className="text-xs font-bold text-[#52606D]">

                        Showing{" "}

                        <span className="text-[#151515]">
                          {products.length}
                        </span>{" "}

                        products

                      </p>

                    </div>

                    <div className="hidden items-center gap-2 sm:flex">

                      <span className="h-2 w-2 rounded-full bg-[#00864A]" />

                      <span className="text-xs font-semibold text-[#52606D]">
                        Fresh collection
                      </span>

                    </div>

                  </div>

                )}

              {/* ====================================================
                  LOADING
              ==================================================== */}

              {isLoading ? (

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                  {[...Array(8)].map((_, i) => (

                    <div
                      key={i}
                      className="overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm"
                    >

                      <div className="h-[205px] animate-pulse bg-[#EAF5EC]" />

                      <div className="space-y-3 p-4">

                        <div className="h-5 w-20 animate-pulse rounded-full bg-gray-200" />

                        <div className="h-5 w-4/5 animate-pulse rounded-lg bg-gray-200" />

                        <div className="h-10 w-full animate-pulse rounded-xl bg-gray-200" />

                      </div>

                    </div>

                  ))}

                </div>

              ) : isError ? (

                /* ==================================================
                   ERROR
                ================================================== */

                <div className="rounded-[24px] border border-red-100 bg-white p-12 text-center shadow-sm">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">

                    <Package className="h-7 w-7 text-red-400" />

                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#151515]">
                    Something went wrong
                  </h3>

                  <p className="mt-2 text-sm text-[#52606D]">
                    Failed to load {productType} products.
                    Please try again.
                  </p>

                </div>

              ) : products.length === 0 ? (

                /* ==================================================
                   EMPTY
                ================================================== */

                <div className="rounded-[24px] border border-[#00864A]/10 bg-white px-6 py-16 text-center shadow-sm">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF4D0]">

                    <Search className="h-8 w-8 text-[#F47C20]" />

                  </div>

                  <h3 className="mt-6 text-2xl font-black text-[#151515]">
                    No products found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-[#52606D]">

                    We couldn't find products matching your current
                    filters. Try changing your search or adjusting
                    your filters.

                  </p>

                </div>

              ) : (

                <>

                  {/* ==================================================
                      PRODUCT GRID
                  ================================================== */}

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {products.map((product, index) => (

                    <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageSrc={
                      product.image_url ||
                      product.image ||
                      product.thumbnail ||
                      "/assets/poundo.jpg"
                    }
                    currentPrice={
                      product.unit_price ?? product.effective_price ?? product.price
                    }
                  />

                    ))}

                  </div>

                  {/* ==================================================
                      LOAD MORE
                  ================================================== */}
                  <div className="flex justify-center mt-10 md:mt-12">
                  {hasNextPage ? (
                    <Button
                      variant="secondary"
                      onClick={() => fetchNextPage()}
                      disabled={isFetchingNextPage}
                      className="
                        group
                        rounded-full
                        border-2
                        border-[#00864A]
                        bg-white
                        text-[#00864A]
                        font-bold
                        hover:bg-[#00864A]
                        hover:text-white
                        transition-all
                        duration-300
                        shadow-sm
                      "
                    >
                      {isFetchingNextPage ? "Loading..." : "See More Collections"}

                      {!isFetchingNextPage && (
                        <span
                          className="
                            ml-2
                            inline-block
                            transition-transform
                            duration-300
                            group-hover:translate-y-1
                          "
                        >
                          ↓
                        </span>
                      )}
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      disabled
                      className="
                        rounded-full
                        border-2
                        border-[#00864A]/30
                        bg-white
                        text-[#00864A]
                        font-bold
                        opacity-60
                      "
                    >
                      No More Products
                    </Button>
                  )}
                </div>
                </>

              )}

            </div>

          </div>

        </div>

      </div>

      {/* ============================================================
          BOTTOM ACCENT
      ============================================================ */}

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F9C51C]" />

    </section>
  );
}



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Button from "../button";
import { useWholesale, Product } from "@/app/hooks/useWholesale"; // Adjust path as needed

export default function RetailWholesale() {
  const [type, setType] = useState<"retail" | "wholesale">("retail");
  const router = useRouter();

  // Fetch products from the active tab's API endpoint
  const { data, isLoading, isError, error } = useWholesale({ type });

  // Extract products from TanStack Query infinite pages and take only the first 4
  const allProducts: Product[] =
    data?.pages.flatMap((page) => page.products) || [];
  const products = allProducts.slice(0, 4);

  const handleViewProduct = () => {
    if (type === "retail") {
      router.push("/retail");
    } else {
      router.push("/wholesale");
    }
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-12 md:px-6">
        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Shop Your Way
          </h2>

          <p className="mt-3 text-xl font-semibold text-gray-900">
            Buy in Retail or Wholesale
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600 md:text-lg">
            Whether you're shopping for your home or buying in bulk for your
            business, MotherLand International Foods has got you covered. Switch
            between Retail and Wholesale to explore products tailored to your
            needs.
          </p>
        </div>

        {/* =========================
            RETAIL / WHOLESALE TOGGLE
        ========================== */}
        <div className="mt-12 flex justify-center">
          <div className="flex rounded-full border border-gray-300 bg-white p-1">
            {/* Retail */}
            <button
              type="button"
              onClick={() => setType("retail")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 md:px-8 md:py-3 ${
                type === "retail"
                  ? "bg-[var(--main)] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Retail Shopping
            </button>

            {/* Wholesale */}
            <button
              type="button"
              onClick={() => setType("wholesale")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 md:px-8 md:py-3 ${
                type === "wholesale"
                  ? "bg-[var(--main)] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Wholesale Shopping
            </button>
          </div>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="mt-14 md:mt-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* =========================
                LEFT INFORMATION
            ========================== */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {type === "retail"
                  ? "Everything You Need for Daily Living"
                  : "Bulk Shopping Made Easy"}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {type === "retail"
                  ? "Browse a wide range of quality groceries, fresh produce, household essentials, beverages, spices, and everyday food items. Buy only what you need and enjoy competitive prices, quick delivery, and a hassle-free shopping experience."
                  : "Purchase products in larger quantities at discounted wholesale prices. Perfect for supermarkets, restaurants, food vendors, caterers, hotels, and retailers looking to maximize profit while reducing purchasing costs."}
              </p>

              {/* =========================
                  INFORMATION CARDS
              ========================== */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* Card 1 */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h4 className="text-3xl font-bold text-[var(--main)]">
                    {type === "retail" ? "1+" : "10+"}
                  </h4>

                  <p className="mt-2 font-medium text-gray-900">
                    {type === "retail"
                      ? "Minimum Quantity"
                      : "Bulk Order Quantity"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {type === "retail"
                      ? "Purchase individual items without quantity restrictions."
                      : "Buy cartons, bags, and large packs at wholesale rates."}
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h4 className="text-3xl font-bold text-[var(--main)]">
                    {type === "retail" ? "Fast" : "Save More"}
                  </h4>

                  <p className="mt-2 font-medium text-gray-900">
                    {type === "retail" ? "Quick Delivery" : "Lower Unit Cost"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {type === "retail"
                      ? "Get your groceries delivered quickly to your doorstep."
                      : "The more you buy, the more you save on every product."}
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-xl border border-gray-300 bg-white p-5">
                  <h4 className="text-3xl font-bold text-[var(--main)]">
                    {type === "retail" ? "500+" : "1000+"}
                  </h4>

                  <p className="mt-2 font-medium text-gray-900">
                    Products Available
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {type === "retail"
                      ? "Fresh foods, pantry staples, beverages, snacks, and household essentials."
                      : "Wholesale groceries, beverages, cooking ingredients, and packaged foods."}
                  </p>
                </div>

                {/* Card 4 */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h4 className="text-3xl font-bold text-[var(--main)]">
                    {type === "retail" ? "100%" : "Best Deals"}
                  </h4>

                  <p className="mt-2 font-medium text-gray-900">
                    {type === "retail" ? "Fresh Products" : "Wholesale Pricing"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {type === "retail"
                      ? "Quality products sourced from trusted suppliers."
                      : "Enjoy exclusive pricing designed for businesses and resellers."}
                  </p>
                </div>
              </div>

              {/* =========================
                  TAGS
              ========================== */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  {type === "retail" ? "Daily Essentials" : "Bulk Discounts"}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  {type === "retail" ? "Fresh Groceries" : "Business Orders"}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  {type === "retail" ? "Doorstep Delivery" : "Reliable Supply"}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  {type === "retail"
                    ? "Affordable Prices"
                    : "Better Profit Margins"}
                </span>
              </div>
            </div>

            {/* =========================
                DYNAMIC PRODUCTS API DISPLAY
            ========================== */}
            <div>
              {isLoading ? (
                <div className="flex h-64 items-center justify-center rounded-2xl bg-gray-50">
                  <p className="text-gray-500 font-medium">
                    Loading products...
                  </p>
                </div>
              ) : isError ? (
                <div className="flex h-64 items-center justify-center rounded-2xl bg-red-50 p-4">
                  <p className="text-red-500 font-medium">
                    {(error as Error)?.message || "Failed to load products"}
                  </p>
                </div>
              ) : products.length === 0 ? (
                <div className="flex h-64 items-center justify-center rounded-2xl bg-gray-50">
                  <p className="text-gray-500 font-medium">
                    No products available.
                  </p>
                </div>
              ) : (
                <div key={type} className="grid gap-5 md:grid-cols-2">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col justify-between rounded-2xl bg-gray-100 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      {/* Product Image */}
                      <div className="relative h-36 w-full overflow-hidden rounded-xl bg-white flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="object-contain p-3"
                        />
                      </div>

                      {/* Details */}
                      <div className="mt-4 flex flex-col flex-1 justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 line-clamp-1">
                            {product.title}
                          </h4>

                          <p className="my-2 font-bold text-[var(--main)]">
                            {isNaN(Number(product.price))
                              ? product.price
                              : `$${Number(product.price).toFixed(2)}`}
                          </p>
                        </div>

                        {/* View Product Action */}
                        <Button
                          variant="primary"
                          className="w-full mt-2"
                          onClick={handleViewProduct}
                        >
                          View Product
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

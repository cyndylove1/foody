// components/MenuList.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { categoriesData } from "@/app/constant";

export default function MenuList() {
  const [openCategory, setOpenCategory] = useState<string []>([]);
  const [selectedSize, setSelectedSize] = useState<string>("None");

  const toggleCategory = (name: string) => {
    setOpenCategory((prev) => {
      if (prev.includes(name)) {
        // Close only the clicked category
        return prev.filter((category) => category !== name);
      }

      // Keep previously opened categories and add the new one
      return [...prev, name];
    });
  };
  return (
    <aside className="w-full h-full md:w-64 md:flex flex-col p-6 rounded-md bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black border-b border-gray-300 pb-3 mb-4">
          Categories
        </h2>
        <div className="space-y-4">
          {categoriesData.map((category) => {
            const hasSubs =
              category.subCategories && category.subCategories.length > 0;
            const isOpen = openCategory.includes(category.name);

            return (
              <div
                key={category.name}
                className="border-b border-gray-50 pb-2 last:border-0"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between text-left font-medium text-gray-900 hover:text-black transition-colors"
                >
                  <span className={isOpen ? "text-gray-900 font-semibold" : ""}>
                    {category.name}
                  </span>
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-gray-900" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-900" />
                  )}
                </button>

                {/* Subcategories Dropdown */}
                {hasSubs && isOpen && (
                  <div className="mt-3 ml-6 space-y-3 pl-2 border-l border-gray-100">
                    {category.subCategories?.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/category/${sub.slug}`}
                        className="block text-sm text-gray-500 hover:text-black font-medium transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter Section */}
      <div>
        <h2 className="text-2xl font-bold text-black mb-4">Filter</h2>
        <div className="space-y-3">
          <span className="text-sm font-semibold text-gray-400 block mb-2">
            Size
          </span>
          {["None", "8lb", "4LB", "6-Pack"].map((size) => (
            <label
              key={size}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <input
                type="radio"
                name="size-filter"
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size)}
                className="w-4 h-4 text-lime-600 border-gray-300 focus:ring-lime-500 rounded-full accent-lime-600"
              />
              <span className="text-sm text-gray-600 font-medium">{size}</span>
            </label>
          ))}
        </div>
        <div className="mt-6">
          <span className="text-sm font-semibold text-gray-400 block mb-2">
            Brands
          </span>
        </div>
      </div>
    </aside>
  );
}
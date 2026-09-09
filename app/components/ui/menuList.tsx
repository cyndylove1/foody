"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, Minus, Loader2 } from "lucide-react";
import { useMenuList, Category } from "@/app/hooks/useMenuList";

export default function MenuList() {
  const pathname = usePathname();
  const { data, isLoading, isError } = useMenuList();

  // Defensive check: fallback to an empty array if data isn't an array
  const categories: Category[] = Array.isArray(data) ? data : [];

  const [openCategory, setOpenCategory] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("None");

  // Automatically open parent category based on current subcategory slug
  useEffect(() => {
    if (categories.length > 0) {
      const currentSlug = pathname.replace("/category/", "");
      const matchedCategory = categories.find((cat) =>
        cat.subCategories?.some((sub) => sub.slug === currentSlug),
      );

      if (matchedCategory) {
        setOpenCategory((prev) =>
          prev.includes(matchedCategory.name)
            ? prev
            : [...prev, matchedCategory.name],
        );
      }
    }
  }, [pathname, categories]);

  // Only render on category pages
  if (!pathname.startsWith("/category/")) {
    return null;
  }

  const toggleCategory = (name: string) => {
    setOpenCategory((prev) =>
      prev.includes(name)
        ? prev.filter((cat) => cat !== name)
        : [...prev, name],
    );
  };

  return (
    <aside className="w-full h-full md:w-64 md:flex flex-col p-6 rounded-md border border-gray-300 overflow-hidden bg-[#f9f9f9]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black border-b border-gray-300 pb-3 mb-4">
          Categories
        </h2>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
          </div>
        )}

        {/* Error State */}
        {isError && (
          <p className="text-sm text-red-500 py-2">
            Failed to load categories.
          </p>
        )}

        {/* Category List */}
        {!isLoading && !isError && (
          <div className="space-y-4">
            {categories.map((category: Category) => {
              const hasSubs =
                category.subCategories && category.subCategories.length > 0;
              const isOpen = openCategory.includes(category.name);

              return (
                <div
                  key={category.id ?? category.name}
                  className="border-b border-gray-50 pb-2 last:border-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between text-left font-medium text-gray-900 hover:text-black transition-colors"
                  >
                    <span
                      className={isOpen ? "text-gray-900 font-semibold" : ""}
                    >
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
                      {category.subCategories.map((sub) => {
                        const href = `/category/${sub.slug}`;
                        const isActive = pathname === href;

                        return (
                          <Link
                            key={`${sub.category_id}-${sub.slug}`}
                            href={href}
                            className={`block text-sm font-medium transition-colors ${
                              isActive
                                ? "text-orange-600 font-semibold"
                                : "text-gray-500 hover:text-black"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Filters */}
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
      </div>
    </aside>
  );
}

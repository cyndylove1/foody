"use client";

import { useState } from "react";
import { Loader2, Minus, Plus } from "lucide-react";
import { useMenuList, Category } from "@/app/hooks/useMenuList";

export interface CatalogFilterState {
  categoryId?: number | string;
  brand: string;
  minPrice: string;
  maxPrice: string;
  inStock: boolean;
  featured: boolean;
}

interface CategoryGroupProps {
  category: Category;
  selectedCategoryId?: number | string;
  onSelect: (id?: number | string) => void;
}

// Products are only ever tagged with a subcategory's category_id, never the
// group's own id, so every group always expands into its subcategory list
// (even a single-item one) rather than being directly clickable itself.
function CategoryGroup({ category, selectedCategoryId, onSelect }: CategoryGroupProps) {
  const subs = category.subCategories ?? [];
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-left py-1.5 text-sm font-semibold text-gray-900"
      >
        <span>{category.name}</span>
        {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
      </button>

      {open && (
        <div className="mt-1 ml-2 pl-2 border-l border-gray-100 space-y-1">
          {subs.map((sub) => {
            const isActive = String(selectedCategoryId ?? "") === String(sub.category_id);
            return (
              <button
                key={sub.category_id}
                type="button"
                onClick={() => onSelect(isActive ? undefined : sub.category_id)}
                className={`block w-full text-left py-1 text-sm transition-colors ${
                  isActive
                    ? "text-orange-600 font-semibold"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {sub.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface CatalogSidebarProps {
  filters: CatalogFilterState;
  onChange: (filters: CatalogFilterState) => void;
}

export default function CatalogSidebar({ filters, onChange }: CatalogSidebarProps) {
  const { data, isLoading, isError } = useMenuList();
  const categories: Category[] = Array.isArray(data) ? data : [];

  const update = (patch: Partial<CatalogFilterState>) =>
    onChange({ ...filters, ...patch });

  return (
    <aside className="w-full h-fit md:w-64 shrink-0 flex flex-col p-6 rounded-md border border-gray-300 bg-[#f9f9f9]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black border-b border-gray-300 pb-3 mb-4">
          Categories
        </h2>

        {isLoading && (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
          </div>
        )}

        {isError && (
          <p className="text-sm text-red-500 py-2">Failed to load categories.</p>
        )}

        {!isLoading && !isError && (
          <div className="space-y-3">
            {categories.map((category) => (
              <CategoryGroup
                key={category.id ?? category.name}
                category={category}
                selectedCategoryId={filters.categoryId}
                onSelect={(id) => update({ categoryId: id })}
              />
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-black mb-4">Filter</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-500 block mb-1.5">
              Brand
            </label>
            <input
              type="text"
              value={filters.brand}
              onChange={(e) => update({ brand: e.target.value })}
              placeholder="e.g. Nike"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-500 block mb-1.5">
              Price Range
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                value={filters.minPrice}
                onChange={(e) => update({ minPrice: e.target.value })}
                placeholder="Min"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                min={0}
                value={filters.maxPrice}
                onChange={(e) => update({ maxPrice: e.target.value })}
                placeholder="Max"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) => update({ inStock: e.target.checked })}
              className="w-4 h-4 accent-lime-600"
            />
            <span className="text-sm text-gray-700 font-medium">In Stock Only</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.featured}
              onChange={(e) => update({ featured: e.target.checked })}
              className="w-4 h-4 accent-lime-600"
            />
            <span className="text-sm text-gray-700 font-medium">Featured Only</span>
          </label>

          <button
            type="button"
            onClick={() =>
              onChange({
                categoryId: undefined,
                brand: "",
                minPrice: "",
                maxPrice: "",
                inStock: false,
                featured: false,
              })
            }
            className="text-xs font-semibold text-gray-500 hover:text-black underline"
          >
            Clear all filters
          </button>
        </div>
      </div>
    </aside>
  );
}

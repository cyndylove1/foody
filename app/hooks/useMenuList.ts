// app/hooks/useMenuList.ts
import { useQuery } from "@tanstack/react-query";

export interface SubCategory {
  category_id: number;
  name: string;
  slug: string;
}

export interface Category {
  id?: number | string;
  name: string;
  subCategories: SubCategory[];
}

const fetchCategories = async (): Promise<Category[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables",
    );
  }

  const response = await fetch(`${baseUrl}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

    const json = await response.json();
    console.log("Raw Backend API Response:", json);
    console.log("Response data property:", json?.data);

  // Ensure an array is returned even if the API wraps it in an object
  if (Array.isArray(json)) {
    return json;
  }
  if (Array.isArray(json?.data)) {
    return json.data;
  }
  if (Array.isArray(json?.categories)) {
    return json.categories;
  }

  return [];
};

export function useMenuList() {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 10,
  });
}

const fetchCategoryProductCount = async (
  categoryId: number | string,
  productType?: "retail" | "wholesale",
): Promise<number> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const typeParam = productType ? `&product_type=${productType}` : "";
  const response = await fetch(
    `${baseUrl}/products?category_id=${categoryId}&per_page=1${typeParam}`,
  );

  if (!response.ok) return 0;

  const json = await response.json();
  return json?.data?.meta?.total ?? json?.meta?.total ?? 0;
};

// Categories are only ever browsable via their leaf subcategories (see
// catalogSidebar.tsx), so "does this category have products" means "does at
// least one of its subcategories have products". Pass productType to scope
// the check to a retail- or wholesale-only listing.
export function useNonEmptyMenuList(productType?: "retail" | "wholesale") {
  const { data, isLoading, isError } = useMenuList();
  const categories: Category[] = Array.isArray(data) ? data : [];

  const subCategoryIds = Array.from(
    new Set(categories.flatMap((cat) => cat.subCategories.map((sub) => sub.category_id))),
  );

  const countsQuery = useQuery<Record<string, number>, Error>({
    queryKey: ["category-product-counts", subCategoryIds, productType],
    queryFn: async () => {
      const entries = await Promise.all(
        subCategoryIds.map(
          async (id) =>
            [id, await fetchCategoryProductCount(id, productType)] as const,
        ),
      );
      return Object.fromEntries(entries);
    },
    enabled: subCategoryIds.length > 0,
    staleTime: 1000 * 60 * 10,
  });

  const counts = countsQuery.data;

  const filteredCategories = counts
    ? categories
        .map((cat) => ({
          ...cat,
          subCategories: cat.subCategories.filter(
            (sub) => (counts[sub.category_id] ?? 0) > 0,
          ),
        }))
        .filter((cat) => cat.subCategories.length > 0)
    : [];

  return {
    data: filteredCategories,
    isLoading: isLoading || (subCategoryIds.length > 0 && countsQuery.isLoading),
    isError: isError || countsQuery.isError,
  };
}

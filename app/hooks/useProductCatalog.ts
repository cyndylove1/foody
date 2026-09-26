import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../config/axiosConfig";

export interface CatalogProduct {
  id: number;
  category_id: number;
  product_type: "retail" | "wholesale" | "both";
  name: string;
  slug: string;
  price: number;
  sale_price?: number | null;
  effective_price: number;
  unit_price?: number;
  stock: number;
  in_stock: boolean;
  featured: boolean;
  thumbnail?: string;
  image?: string;
  image_url?: string;
  brand?: string;
  tags?: string[];
  average_rating?: number;
  reviews_count?: number;
}

export interface ProductFilters {
  productType: "retail" | "wholesale";
  categoryId?: number | string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string;
  featured?: boolean;
  inStock?: boolean;
  sortBy?: "price" | "name" | "created_at" | "average_rating";
  sortDir?: "asc" | "desc";
  perPage?: number;
}

interface CatalogMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

const buildParams = (filters: ProductFilters, page: number) => {
  const params: Record<string, string> = {
    page: String(page),
    product_type: filters.productType,
    sort_by: filters.sortBy ?? "created_at",
    sort_dir: filters.sortDir ?? "desc",
    per_page: String(filters.perPage ?? 12),
  };

  if (filters.categoryId !== undefined && filters.categoryId !== null) {
    params.category_id = String(filters.categoryId);
  }
  if (filters.search) params.search = filters.search;
  if (filters.minPrice !== undefined) params.min_price = String(filters.minPrice);
  if (filters.maxPrice !== undefined) params.max_price = String(filters.maxPrice);
  if (filters.tags) params.tags = filters.tags;
  if (filters.featured) params.featured = "true";
  if (filters.inStock) params.in_stock = "true";

  return params;
};

const fetchCatalog = async (
  filters: ProductFilters,
  page: number,
): Promise<{ products: CatalogProduct[]; meta?: CatalogMeta }> => {
  const response = await apiClient.get("/products", {
    params: buildParams(filters, page),
  });

  // The deployed API nests paginated collections one level deeper than its
  // own docs describe: { success, message, data: { data: [...], meta, links } }
  // rather than a flat { success, data: [...], meta, links }.
  const body = response.data;
  const rawList = body?.data;
  const products: CatalogProduct[] = Array.isArray(rawList)
    ? rawList
    : Array.isArray(rawList?.data)
      ? rawList.data
      : [];
  const meta: CatalogMeta | undefined = Array.isArray(rawList)
    ? body?.meta
    : rawList?.meta;

  return { products, meta };
};

export function useProductCatalog(filters: ProductFilters) {
  return useInfiniteQuery({
    queryKey: ["product-catalog", filters],
    queryFn: ({ pageParam = 1 }) => fetchCatalog(filters, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const meta = lastPage.meta;
      if (meta && meta.current_page < meta.last_page) {
        return meta.current_page + 1;
      }
      return undefined;
    },
  });
}

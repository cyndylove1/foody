import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviewCount: string;
  price: string;
  originalPrice?: string;
  currency: string;
  raw?: any; 
}

interface FetchProductsParams {
  type: "retail" | "wholesale";
  id?: number | string;
  pageParam?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const extractArray = (payload: any): any[] => {
  if (Array.isArray(payload)) return payload;
  if (payload && typeof payload === "object") {
    if (Array.isArray(payload.data)) return payload.data;
    if (payload.data && Array.isArray(payload.data.data))
      return payload.data.data;
    if (Array.isArray(payload.products)) return payload.products;
    if (Array.isArray(payload.items)) return payload.items;
    if (Array.isArray(payload.results)) return payload.results;
  }
  return [];
};

const mapItemToProduct = (item: any): Product => ({
  id: item.id,
  title: item.name || item.title || "Untitled Product",
  image:
    item.image_url ||
    item.image ||
    item.thumbnail ||
    item.images?.[0]?.url ||
    item.images?.[0] ||
    "/placeholder.png",
  rating: item.average_rating ?? item.rating ?? 4.5,
  reviewCount: String(item.reviews_count ?? item.reviewCount ?? 0),
  price:
    item.price && item.price !== 0
      ? String(item.price)
      : item.wholesale_price
        ? String(item.wholesale_price)
        : "Contact for price",
  originalPrice: item.sale_price ? String(item.sale_price) : undefined,
  currency: item.currency ?? "USD",
  raw: item,
});

const fetchWholesale = async ({
  type,
  id,
  pageParam = 1,
}: FetchProductsParams): Promise<{
  products: Product[];
  nextPage: number | undefined;
}> => {
  const baseEndpoint =
    type === "wholesale"
      ? id
        ? `/products/${id}/wholesale`
        : `/products/wholesale`
      : `/products/retail`;

  const fullUrl = `${BASE_URL}${baseEndpoint}?page=${pageParam}`;
  const response = await axios.get(fullUrl);
  const rawList = extractArray(response.data);

  const formattedProducts = rawList.map(mapItemToProduct);

  const lastPageMeta = response.data?.meta || response.data?.data;
  const hasMore =
    lastPageMeta?.current_page < lastPageMeta?.last_page || rawList.length > 0;

  return {
    products: formattedProducts,
    nextPage: hasMore ? pageParam + 1 : undefined,
  };
};

export const useWholesale = ({
  type,
  id,
}: Omit<FetchProductsParams, "pageParam">) => {
  return useInfiniteQuery({
    queryKey: ["products", type, id],
    queryFn: ({ pageParam = 1 }) => fetchWholesale({ type, id, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

// Fetch single wholesale or retail product
export const useSingleWholesaleOrRetail = (
  id: string | number,
  type?: "retail" | "wholesale",
) => {
  return useQuery({
    queryKey: ["single-product-type", type, id],
    queryFn: async () => {
      // 1. Try direct single endpoint standard
      try {
        const endpoint =
          type === "wholesale"
            ? `${BASE_URL}/products/wholesale/${id}`
            : `${BASE_URL}/products/retail/${id}`;
        const res = await axios.get(endpoint);
        return res.data?.data || res.data;
      } catch {
        // 2. Fallback: Fetch page list and find item matching ID
        const listEndpoint =
          type === "wholesale"
            ? `${BASE_URL}/products/wholesale`
            : `${BASE_URL}/products/retail`;
        const res = await axios.get(listEndpoint);
        const list = extractArray(res.data);
        const found = list.find((item: any) => String(item.id) === String(id));
        if (!found) throw new Error("Product not found");
        return found;
      }
    },
    enabled: !!id && !!type,
  });
};

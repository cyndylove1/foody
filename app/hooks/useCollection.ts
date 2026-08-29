import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface FetchProductsParams {
  pageParam?: number;
  categoryId?: number | string;
  slug?: string;
}

const fetchProducts = async ({
  pageParam = 1,
  categoryId,
  slug,
}: FetchProductsParams) => {
  // Construct query params dynamically
  const params = new URLSearchParams({
    page: String(pageParam),
  });

  if (categoryId) {
    params.append("category_id", String(categoryId));
  } else if (slug) {
    params.append("slug", slug);
  }

  const endpoint = `${BASE_URL}/products?${params.toString()}`;

  const response = await axios.get(endpoint);
  console.log("Products APIs:", response.data);
  return response.data;
};

export const useProducts = (
  filter?: { categoryId?: number | string; slug?: string } | number | string,
) => {
  // Standardize filter options whether a single ID/slug or an object is passed
  const categoryId = typeof filter === "object" ? filter?.categoryId : filter;
  const slug = typeof filter === "object" ? filter?.slug : undefined;

  return useInfiniteQuery({
    queryKey: ["products", categoryId ?? slug ?? "all"],
    queryFn: ({ pageParam }) => fetchProducts({ pageParam, categoryId, slug }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.data?.meta?.current_page;
      const lastPageNum = lastPage?.data?.meta?.last_page;

      if (
        currentPage !== undefined &&
        lastPageNum !== undefined &&
        currentPage < lastPageNum
      ) {
        return currentPage + 1;
      }

      return undefined;
    },
  });
};

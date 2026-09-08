import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface FetchProductsParams {
  pageParam?: number;
  categoryId?: number | string;
}

const fetchProducts = async ({
  pageParam = 1,
  categoryId,
}: FetchProductsParams) => {
  const params = new URLSearchParams({
    page: String(pageParam),
  });

  // Append category_id only if provided
  if (categoryId !== undefined && categoryId !== null) {
    params.append("category_id", String(categoryId));
  }

  const endpoint = `${BASE_URL}/products?${params.toString()}`;

  const response = await axios.get(endpoint);
  console.log("APIS", response.data)
  return response.data;
};

export const useProducts = (categoryId?: number | string) => {
  return useInfiniteQuery({
    queryKey: ["products", categoryId ?? "all"],
    queryFn: ({ pageParam }) => fetchProducts({ pageParam, categoryId }),
    // Enabled by default for "all", or when categoryId is truthy
    enabled: categoryId !== null,
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

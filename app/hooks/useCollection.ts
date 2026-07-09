import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchProducts = async ({ pageParam = 1 }) => {
  const response = await axios.get(`${BASE_URL}/products?page=${pageParam}`);
  console.log("Products API:", response.data);
  return response.data;
};

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
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

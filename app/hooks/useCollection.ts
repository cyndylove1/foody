import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchProducts = async ({ pageParam = 1 }) => {
  const response = await axios.get(`${BASE_URL}/products?page=${pageParam}`);

  return response.data;
};

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.meta.current_page < lastPage.meta.last_page) {
        return lastPage.meta.current_page + 1;
      }

      return undefined;
    },
  });
};

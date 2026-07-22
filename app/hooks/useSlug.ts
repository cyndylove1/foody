import { useQuery } from "@tanstack/react-query";
import apiClient from "../config/axiosConfig";

export const useProductsByCategory = (slug: string) => {
  return useQuery({
    queryKey: ["category-products", slug],

    queryFn: async () => {
      const res = await apiClient.get(`/products/category/${slug}`);

      return res.data.data;
    },

    enabled: !!slug,
  });
};

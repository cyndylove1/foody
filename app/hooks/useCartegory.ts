// app/hooks/useCategoryProducts.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface CategoryProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category_id: number;
}

export interface CategoryDetailResponse {
  id: number;
  name: string;
  slug: string;
  products: CategoryProduct[];
  parent?: any;
  children?: any[];
}

// Instantiate Axios with your BASE_URL environment variable
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchCategoryById = async (
  categoryId: number,
): Promise<CategoryDetailResponse> => {
  // Axios automatically throws on errors and parses JSON into `data`
  const response = await axios.get(`${BASE_URL}/categories/${categoryId}`);
  return response.data;
};

export function useCategoryProducts(categoryId: number | undefined) {
  return useQuery({
    queryKey: ["categoryProducts", categoryId],
    queryFn: () => fetchCategoryById(categoryId!),
    enabled: !!categoryId, // Only fetch when categoryId is valid
  });
}

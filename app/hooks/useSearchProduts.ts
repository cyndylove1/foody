// hooks/useSearch.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface SearchParams {
  keyword?: string;
  category?: number;
  min_price?: number;
  max_price?: number;
  brand?: string;
  tags?: string;
  sort_by?: "price" | "name" | "created_at" | "average_rating";
  sort_dir?: "asc" | "desc";
  per_page?: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category_id: number;
  category?: {
    id: number;
    slug: string;
  };
}

export interface SearchResponse {
  data: Product[];
  current_page: number;
  last_page: number;
  total: number;
}

interface SearchApiEnvelope {
  success: boolean;
  message: string;
  data: {
    data: Product[];
    meta: {
      current_page: number;
      last_page: number;
      total: number;
    };
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

async function fetchSearchResults(
  params: SearchParams,
): Promise<SearchResponse> {
  // Filter out undefined, null, or empty string params
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== null && value !== "",
    ),
  );

  const response = await axios.get<SearchApiEnvelope>(`${BASE_URL}/search`, {
    params: cleanParams,
  });

  const { data: paginated } = response.data;

  return {
    data: paginated.data,
    current_page: paginated.meta.current_page,
    last_page: paginated.meta.last_page,
    total: paginated.meta.total,
  };
}

export function useSearch(params: SearchParams, enabled = true) {
  return useQuery({
    queryKey: ["search", params],
    queryFn: () => fetchSearchResults(params),
    enabled: enabled && Boolean(params.keyword || params.category),
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}

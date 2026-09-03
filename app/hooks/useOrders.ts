import { useQuery } from "@tanstack/react-query";
import apiClient from "../config/axiosConfig";

export interface Order {
  id: string | number;
  order_number?: string;
  status: "pending" | "completed" | "cancelled" | "processing" | string;
  total_price?: number;
  created_at?: string;
  items_count?: number;
}

export const useOrders = () => {
  return useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await apiClient.get("/orders");
      // Fallback for whether data is direct array or nested in response.data.data
      return response.data?.data || response.data || [];
    },
  });
};

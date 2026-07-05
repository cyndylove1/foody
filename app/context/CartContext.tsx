"use client";

import { createContext, useContext, ReactNode } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export interface CartItem {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  effective_price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  loading: boolean;
  addToCart: (product: any) => void; // Widened type slightly to safely accept item maps from products API
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  // Fetch cart
  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/cart`);
      return res.data.data;
    },
  });

  // Safe Array Guard: Double-check that data is strictly an array before reducing
  const cart: CartItem[] = Array.isArray(data) ? data : [];

  // Add to cart
  const addMutation = useMutation({
    mutationFn: async (product: any) => {
      // 1. Force the product ID to be parsed safely as an integer number
      const targetId = Number(product.id);

      // 2. Check if the item already exists in the local state.
      // If it exists, call the PUT update endpoint instead of POST duplicate items.
      const existingItem = cart.find((i) => Number(i.id) === targetId);
      if (existingItem) {
        return axios.put(`${BASE_URL}/cart/${targetId}`, {
          quantity: existingItem.quantity + 1,
        });
      }

      // 3. Fallback payloads: Provide both standard variant namings to prevent route parameter issues
      return axios.post(`${BASE_URL}/cart`, {
        id: targetId,
        product_id: targetId,
        quantity: 1,
      });
    },
    onSuccess: () => {
      // Wipes stale local state queries immediately and pulls updated data arrays from database
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Remove
  const removeMutation = useMutation({
    mutationFn: async (id: number) => {
      return axios.delete(`${BASE_URL}/cart/${Number(id)}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Increase
  const increaseMutation = useMutation({
    mutationFn: async (id: number) => {
      const targetId = Number(id);
      const item = cart.find((i) => Number(i.id) === targetId);
      if (!item) return;

      return axios.put(`${BASE_URL}/cart/${targetId}`, {
        quantity: item.quantity + 1,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Decrease
  const decreaseMutation = useMutation({
    mutationFn: async (id: number) => {
      const targetId = Number(id);
      const item = cart.find((i) => Number(i.id) === targetId);
      if (!item) return;

      if (item.quantity === 1) {
        return axios.delete(`${BASE_URL}/cart/${targetId}`);
      }

      return axios.put(`${BASE_URL}/cart/${targetId}`, {
        quantity: item.quantity - 1,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Clear
  const clearMutation = useMutation({
    mutationFn: async () => {
      return axios.delete(`${BASE_URL}/cart`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Fallback calculations handles safely wrapped
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + (item.quantity || 0) * (Number(item.effective_price) || 0),
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        loading: isLoading,
        addToCart: addMutation.mutate,
        removeFromCart: removeMutation.mutate,
        increaseQuantity: increaseMutation.mutate,
        decreaseQuantity: decreaseMutation.mutate,
        clearCart: clearMutation.mutate,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export { CartContext };

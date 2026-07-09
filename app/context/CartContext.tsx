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
  cartItems: CartItem[];
  loading: boolean;
  addToCart: (product: any) => void;
  removeFromCart: (id: number | string) => void;
  removeItem: (id: number | string) => void;
  increaseQuantity: (id: number | string) => void;
  decreaseQuantity: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
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
      // If you store your token in localStorage, grab it dynamically here:
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      const res = await axios.get(`${BASE_URL}/cart`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      return res.data?.data?.items || [];
    },
  });

  // Safe Guard: Since the query function now always returns an array, this stays clean
  const cart: CartItem[] = Array.isArray(data) ? data : [];

  // Add to cart
  const addMutation = useMutation({
    mutationFn: async (product: any) => {
      const targetId = Number(product.id);
      const existingItem = cart.find((i) => Number(i.id) === targetId);

      if (existingItem) {
        return axios.put(`${BASE_URL}/cart/${targetId}`, {
          quantity: existingItem.quantity + 1,
        });
      }

      return axios.post(`${BASE_URL}/cart`, {
        id: targetId,
        product_id: targetId,
        quantity: 1,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Remove Mutation
  const removeMutation = useMutation({
    mutationFn: async (id: number | string) => {
      return axios.delete(`${BASE_URL}/cart/${Number(id)}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Direct Quantity Update Mutation
  const updateQuantityMutation = useMutation({
    mutationFn: async ({
      id,
      quantity,
    }: {
      id: number | string;
      quantity: number;
    }) => {
      const targetId = Number(id);

      if (quantity <= 0) {
        return axios.delete(`${BASE_URL}/cart/${targetId}`);
      }

      return axios.put(`${BASE_URL}/cart/${targetId}`, {
        quantity,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // Increase
  const increaseMutation = useMutation({
    mutationFn: async (id: number | string) => {
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
    mutationFn: async (id: number | string) => {
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

  // Calculations
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
        cartItems: cart,
        loading: isLoading,
        addToCart: addMutation.mutate,
        removeFromCart: removeMutation.mutate,
        removeItem: removeMutation.mutate,
        increaseQuantity: increaseMutation.mutate,
        decreaseQuantity: decreaseMutation.mutate,
        updateQuantity: (id, quantity) =>
          updateQuantityMutation.mutate({ id, quantity }),
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

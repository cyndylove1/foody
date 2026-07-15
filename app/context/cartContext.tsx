"use client";

import { createContext, useContext, useRef, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../config/axiosConfig";

export interface CartProduct {
  id: number;
  name: string;
  slug: string;
  thumbnail?: string;
  effective_price?: number;
  price?: number;
  [key: string]: unknown;
}

export interface CartItem {
  id: number;
  product_id: number;
  product: CartProduct;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface CartObject {
  id: number;
  items: CartItem[];
  items_count: number;
  coupon: unknown;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
}

interface CartContextValue {
  cart: CartObject | undefined;
  cartItems: CartItem[];
  itemCount: number;
  isLoading: boolean;
  isAdding: boolean;
  isUpdating: boolean;
  isRemoving: boolean;
  addItem: (productId: number, quantity?: number) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_QUERY_KEY = ["cart"];

export function CartProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useQuery<CartObject>({
    queryKey: CART_QUERY_KEY,
    queryFn: async () => {
      const response = await apiClient.get("/cart");
      return response.data.data;
    },
  });

  // Guards against two races that make cart items flicker in and out:
  // 1. A GET /cart in flight when a mutation resolves can land afterward and
  //    overwrite the cache with a stale pre-mutation snapshot.
  // 2. Two overlapping mutations (e.g. rapid quantity clicks) can resolve out
  //    of order, so the response for the *older* call can be applied last.
  // requestIdRef tracks the most recently *initiated* cart write; a
  // mutation's result is only written to the cache if no newer write has
  // started since.
  const requestIdRef = useRef(0);

  const beginRequest = async () => {
    await queryClient.cancelQueries({ queryKey: CART_QUERY_KEY });
    return { requestId: ++requestIdRef.current };
  };

  const setCartData = (
    data: CartObject,
    _variables: unknown,
    context?: { requestId: number },
  ) => {
    if (context && context.requestId !== requestIdRef.current) return;
    queryClient.setQueryData(CART_QUERY_KEY, data);
  };

  const addItemMutation = useMutation({
    onMutate: beginRequest,
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: number;
      quantity: number;
    }) => {
      const response = await apiClient.post(
        "/cart",
        { product_id: productId, quantity },
        { headers: { "x-show-toast": "true" } as any },
      );
      return response.data.data;
    },
    onSuccess: setCartData,
  });

  const updateQuantityMutation = useMutation({
    onMutate: beginRequest,
    mutationFn: async ({
      itemId,
      quantity,
    }: {
      itemId: number;
      quantity: number;
    }) => {
      const response = await apiClient.put(`/cart/${itemId}`, { quantity });
      return response.data.data;
    },
    onSuccess: setCartData,
  });

  const removeItemMutation = useMutation({
    onMutate: beginRequest,
    mutationFn: async (itemId: number) => {
      const response = await apiClient.delete(`/cart/${itemId}`, {
        headers: { "x-show-toast": "true" } as any,
      });
      return response.data.data;
    },
    onSuccess: setCartData,
  });

  const clearCartMutation = useMutation({
    onMutate: beginRequest,
    mutationFn: async () => {
      await apiClient.delete("/cart");
    },
    onSuccess: (_data, _variables, context) => {
      if (context.requestId !== requestIdRef.current) return;
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
  });

  const addItem = (productId: number, quantity = 1) => {
    addItemMutation.mutate({ productId, quantity });
  };

  const removeItem = (itemId: number) => {
    removeItemMutation.mutate(itemId);
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    updateQuantityMutation.mutate({ itemId, quantity: Math.max(1, quantity) });
  };

  const clearCart = () => {
    clearCartMutation.mutate();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems: cart?.items ?? [],
        itemCount: cart?.items_count ?? 0,
        isLoading,
        isAdding: addItemMutation.isPending,
        isUpdating: updateQuantityMutation.isPending,
        isRemoving: removeItemMutation.isPending,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

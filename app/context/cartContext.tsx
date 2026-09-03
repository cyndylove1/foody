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
  session_id?: string | null;
  items: CartItem[];
  items_count: number;
  coupon: unknown;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
}

// The cart_session cookie is httpOnly and cross-site (frontend/backend live on
// different origins), so browsers intermittently drop it (ITP, tracking
// protection, etc). When that happens the backend can't identify the guest
// cart and silently creates a new empty one. We persist the session_id the
// backend hands back and echo it as X-Cart-Session on every request (see
// axiosConfig.ts) so cart identity doesn't depend on the cookie surviving.
const persistCartSession = (data?: CartObject) => {
  if (typeof window === "undefined" || !data?.session_id) return;
  localStorage.setItem("cart_session", data.session_id);
};

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
      const data = response.data.data as CartObject;
      persistCartSession(data);
      return data;
    },
  });

  
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
    persistCartSession(data);
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
  onSuccess: (_data, _variables, context) => {
    if (context?.requestId !== requestIdRef.current) return;
    // Always refetch the source of truth GET /cart
    queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
  },
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
     console.log(response);
     return response.data;
   },
   onSuccess: (_data, _variables, context) => {
     if (context?.requestId !== requestIdRef.current) return;
     queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
   },
 });
 

 
  const removeItemMutation = useMutation({
    onMutate: beginRequest,
    mutationFn: async (itemId: number) => {
      const response = await apiClient.delete(`/cart/${itemId}`, {
        headers: { "x-show-toast": "true" } as any,
      });
      return response.data.data;
    },
    onSuccess: (_data, _variables, context) => {
      if (context?.requestId !== requestIdRef.current) return;
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
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

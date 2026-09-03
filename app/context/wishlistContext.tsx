"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../config/axiosConfig";

export interface Product {
  id: string | number;
  name: string;
  image_url?: string;
  images?: string[];
  effective_price?: number;
  category?: { name: string; slug: string };
  short_description?: string;
  product_id?: string | number; // Added to support nested API responses
}

interface WishlistContextType {
  wishlist: Product[];
  isLoading: boolean;
  isAdding: boolean;
  isRemoving: boolean;
  addToWishlist: (product: Product) => Promise<any>;
  removeFromWishlist: (productId: string | number) => Promise<any>;
  isInWishlist: (productId: string | number) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  // 1. Fetch Wishlist Data via React Query
  const { data: wishlist = [], isLoading } = useQuery<Product[]>({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await apiClient.get("/wishlist?per_page=15");
      const resData = response.data;

      let list: any[] = [];
      if (Array.isArray(resData)) list = resData;
      else if (Array.isArray(resData?.data)) list = resData.data;
      else if (Array.isArray(resData?.data?.data)) list = resData.data.data;

      // Map response items to ensure every item has a predictable `id` matching product_id
      return list.map((item) => {
        if (item.product && typeof item.product === "object") {
          return {
            ...item.product,
            wishlist_id: item.id,
            id: item.product.id || item.product_id || item.id,
          };
        }
        return {
          ...item,
          id: item.product_id || item.id,
        };
      });
    },
  });

  // 2. Add to Wishlist Mutation with Safe Optimistic Updates
  const addMutation = useMutation({
    mutationFn: async (product: Product) => {
      const response = await apiClient.post(
        "/wishlist",
        { product_id: product.id },
        { headers: { "x-show-toast": "true" } as any },
      );
      return response.data;
    },
    onMutate: async (newProduct: Product) => {
      await queryClient.cancelQueries({ queryKey: ["wishlist"] });

      const previousWishlist = queryClient.getQueryData<Product[]>([
        "wishlist",
      ]);

      queryClient.setQueryData<Product[]>(["wishlist"], (old = []) => {
        // Prevent duplicate items in local state cache
        const exists = old.some(
          (item) => String(item.id) === String(newProduct.id),
        );
        if (exists) return old;
        return [...old, newProduct];
      });

      return { previousWishlist };
    },
    onError: (_err, _newProduct, context) => {
      if (context?.previousWishlist) {
        queryClient.setQueryData(["wishlist"], context.previousWishlist);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  // 3. Remove from Wishlist Mutation with Safe Optimistic Updates
  const removeMutation = useMutation({
    mutationFn: async (productId: string | number) => {
      const response = await apiClient.delete(`/wishlist/${productId}`, {
        headers: { "x-show-toast": "true" } as any,
      });
      return response.data;
    },
    onMutate: async (productId: string | number) => {
      await queryClient.cancelQueries({ queryKey: ["wishlist"] });

      const previousWishlist = queryClient.getQueryData<Product[]>([
        "wishlist",
      ]);

      queryClient.setQueryData<Product[]>(["wishlist"], (old = []) =>
        old.filter(
          (item) =>
            String(item.id) !== String(productId) &&
            String(item.product_id) !== String(productId),
        ),
      );

      return { previousWishlist };
    },
    onError: (_err, _productId, context) => {
      if (context?.previousWishlist) {
        queryClient.setQueryData(["wishlist"], context.previousWishlist);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  const addToWishlist = async (product: Product) => {
    return await addMutation.mutateAsync(product);
  };

  const removeFromWishlist = async (productId: string | number) => {
    return await removeMutation.mutateAsync(productId);
  };

  const isInWishlist = (productId: string | number) => {
    if (!productId) return false;
    return wishlist.some(
      (item) =>
        String(item.id) === String(productId) ||
        String(item.product_id) === String(productId),
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isLoading,
        isAdding: addMutation.isPending,
        isRemoving: removeMutation.isPending,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};



export { WishlistContext };

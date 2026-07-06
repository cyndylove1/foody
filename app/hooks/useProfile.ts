"use client";

import { useQuery } from "@tanstack/react-query";
import apiClient from "../config/axiosConfig";

export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar: string | null;
}

const fetchProfile = async (): Promise<UserProfile> => {
  const response = await apiClient.get("/auth/me");

  return response.data.data || response.data;
};

export const useProfile = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;

  const cachedUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  return useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const user = await fetchProfile();

      // Keep localStorage in sync with the latest profile
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    },
    enabled: !!token,
    initialData: cachedUser ? JSON.parse(cachedUser) : undefined,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    retry: 1,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });
};

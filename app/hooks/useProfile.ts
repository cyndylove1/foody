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
  const token = localStorage.getItem("auth_token");

  console.log("Token:", token);

  const response = await apiClient.get("/auth/me", {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  console.log("Profile Response:", response);
  console.log("Profile Response Data:", response.data);
  console.log("User Details:", response.data.data);

  return response.data.data || response.data;
};

export const useProfile = () => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: fetchProfile,
    enabled:
      typeof window !== "undefined" && !!localStorage.getItem("auth_token"),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

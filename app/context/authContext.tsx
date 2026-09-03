"use client";

import { createContext, ReactNode, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import apiClient from "../config/axiosConfig";

interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
  customer_type: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ForgotPasswordData {
  email: string;
}

interface ResetPasswordData {
  email: string;
  otp?: string;
  password: string;
  password_confirmation: string;
  token?: string;
}

interface AuthContextType {
  token: string | null;
  isLoading: boolean;
  isRegistering: boolean;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isRequestingReset: boolean;
  isResettingPassword: boolean;
  register: (data: RegisterData) => Promise<any>;
  login: (data: LoginData) => Promise<any>;
  logout: () => Promise<void>;
  forgotPassword: (data: ForgotPasswordData) => Promise<any>;
  resetPassword: (data: ResetPasswordData) => Promise<any>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Sync token on mount & set default Axios header
  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    if (storedToken) {
      setToken(storedToken);
      apiClient.defaults.headers.common["Authorization"] =
        `Bearer ${storedToken}`;
    }
    setIsInitialLoading(false);
  }, []);

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await apiClient.post("/auth/register", data, {
        headers: { "x-show-toast": "true" } as any,
      });
      return response.data;
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await apiClient.post("/auth/login", data, {
        headers: { "x-show-toast": "true" } as any,
      });
      return response.data;
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return (
        await apiClient.post(
          "/auth/logout-all",
          {},
          { headers: { "x-show-toast": "true" } as any },
        )
      ).data;
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: async (data: ForgotPasswordData) => {
      return (
        await apiClient.post("/auth/forgot-password", data, {
          headers: { "x-show-toast": "true" } as any,
        })
      ).data;
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: async (data: ResetPasswordData) => {
      const { token: resetToken, ...bodyData } = data;
      const dynamicHeaders: Record<string, string> = { "x-show-toast": "true" };
      if (resetToken) dynamicHeaders["Authorization"] = `Bearer ${resetToken}`;

      return (
        await apiClient.post("/auth/reset-password", bodyData, {
          headers: dynamicHeaders as any,
        })
      ).data;
    },
  });

  const register = async (data: RegisterData) => {
    const result = await registerMutation.mutateAsync(data);
    router.push("/login");
    return result;
  };

  const login = async (data: LoginData) => {
    const result = await loginMutation.mutateAsync(data);
    const payload = result?.data || result;
    const receivedToken = payload?.token;

    if (receivedToken) {
      // 1. Store token in localStorage
      localStorage.setItem("auth_token", receivedToken);
      if (payload.user) {
        localStorage.setItem("user", JSON.stringify(payload.user));
      }

      // 2. Update memory state immediately
      setToken(receivedToken);

      // 3. CRITICAL: Directly set the default header on apiClient in-memory
      apiClient.defaults.headers.common["Authorization"] =
        `Bearer ${receivedToken}`;

      // 4. Update query cache and invalidate queries so protected routes refetch with token
      queryClient.setQueryData(["user-profile"], payload.user);
      await queryClient.invalidateQueries();

      // 5. Handle routing
      const savedVibe = localStorage.getItem("selected_vibe");
      if (savedVibe === "retail" || savedVibe === "wholesale") {
        localStorage.removeItem("selected_vibe");
        router.push(`/${savedVibe}`);
      } else {
        router.push("/");
      }
    }
    return result;
  };

  const logout = async () => {
    try {
      if (localStorage.getItem("auth_token")) {
        await logoutMutation.mutateAsync();
      }
    } catch (error) {
      console.error("Backend logout failed:", error);
    } finally {
      // Clear localStorage, memory state, and headers
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      setToken(null);
      delete apiClient.defaults.headers.common["Authorization"];
      queryClient.clear();
      router.replace("/login");
    }
  };

  const forgotPassword = async (data: ForgotPasswordData) => {
    return await forgotPasswordMutation.mutateAsync(data);
  };

  const resetPassword = async (data: ResetPasswordData) => {
    return await resetPasswordMutation.mutateAsync(data);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoading: isInitialLoading,
        isRegistering: registerMutation.isPending,
        isLoggingIn: loginMutation.isPending,
        isLoggingOut: logoutMutation.isPending,
        isRequestingReset: forgotPasswordMutation.isPending,
        isResettingPassword: resetPasswordMutation.isPending,
        register,
        login,
        logout,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };

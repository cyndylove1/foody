import { QueryClient, QueryFunctionContext } from '@tanstack/react-query';
import apiClient from '@/config/axiosConfig';

export const globalQueryFn = async <T>({ queryKey }: QueryFunctionContext): Promise<T> => {
  const [url, params] = queryKey as [string, Record<string, any>?];
  const response = await apiClient.get<T>(url, { params });
  return response.data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: globalQueryFn,
    },
  },
});

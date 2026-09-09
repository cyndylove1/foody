// app/hooks/useMenuList.ts
import { useQuery } from "@tanstack/react-query";

export interface SubCategory {
  category_id: number;
  name: string;
  slug: string;
}

export interface Category {
  id?: number | string;
  name: string;
  subCategories: SubCategory[];
}

const fetchCategories = async (): Promise<Category[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables",
    );
  }

  const response = await fetch(`${baseUrl}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

    const json = await response.json();
    console.log("Raw Backend API Response:", json);
    console.log("Response data property:", json?.data);

  // Ensure an array is returned even if the API wraps it in an object
  if (Array.isArray(json)) {
    return json;
  }
  if (Array.isArray(json?.data)) {
    return json.data;
  }
  if (Array.isArray(json?.categories)) {
    return json.categories;
  }

  return [];
};

export function useMenuList() {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 10,
  });
}

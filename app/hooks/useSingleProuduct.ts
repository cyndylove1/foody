import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchSingleProduct = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);

    // console.log("Single Product:", response.data);
    console.log(response.data)

  return response.data;
};

export const useSingleProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
  });
};

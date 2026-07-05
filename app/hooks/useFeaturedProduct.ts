import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getFeaturedProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products/featured`);

  // console.log(response.data);

  return response.data;
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProducts,
  });
};

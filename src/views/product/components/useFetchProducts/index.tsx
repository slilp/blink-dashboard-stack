import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { ProductListNextResponse } from "pages/api/product";

interface UseFetchProductsProps {
  status?: string;
  pageIndex: number;
  pageSize: number;
  order?: "asc" | "desc";
  isEnabled?: boolean;
  staleTime?: number;
}

const useFetchProducts = ({
  status,
  pageIndex = 0,
  pageSize = 5,
  order,
  isEnabled = true,
  staleTime = 0,
}: UseFetchProductsProps): UseQueryResult<ProductListNextResponse> => {
  return useQuery(
    order
      ? ["productList", status, pageIndex, pageSize, order]
      : ["productList", status, pageIndex, pageSize],
    async () => {
      const response = await axios.get<ProductListNextResponse>(
        `/api/product?status=${status}&page=${pageIndex}&limit=${pageSize}${
          order ? `&order=${order}` : ""
        }`
      );

      return response.data;
    },
    { staleTime, enabled: isEnabled }
  );
};

export default useFetchProducts;

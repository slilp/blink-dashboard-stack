import { NextApiRequest, NextApiResponse } from "next";
import { IProduct, mockProducts } from "pages/api/product/mockProducts";

export interface ProductListNextResponse {
  data?: {
    products: IProduct[];
    total: number;
  };
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductListNextResponse>
) {
  const { page, limit, status, order } = req.query;
  const pageIndex = +(page as string);
  const pageSize = +(limit as string);
  try {
    let result =
      status === "all" || !status
        ? mockProducts
        : mockProducts.filter((product) => product.status === status);
    const totalRecord = result.length;
    result = order
      ? (result = result
          .sort((prev, next) =>
            order === "desc"
              ? prev.code.localeCompare(next.code)
              : next.code.localeCompare(prev.code)
          )
          .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize))
      : result.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
    res.status(200).json({
      data: { products: result, total: totalRecord },
    });
  } catch (error) {
    res.status(500).json({ message: "something wrong" });
  }
}

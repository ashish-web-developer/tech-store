import { useState } from "react";
// types
import type { FC } from "react";

// styled theme
import { useTheme } from "styled-components";

// react query
import { useQuery } from "@tanstack/react-query";
type IProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
  onSale: boolean;
};

const ProductsGallery: FC = () => {
  const theme = useTheme();
  const [category_type, setCategoryType] = useState<string | null>(null);
  const { data: categoies_data = [] } = useQuery({
    queryKey: ["products-categories"],
    queryFn: async function (): Promise<{
      status: string;
      message: string;
      categories: Array<string>;
    }> {
      return fetch("https://fakestoreapi.in/api/products/category").then(
        (res) => res.json()
      );
    },
    select: function (data) {
      return data.categories;
    },
  });
  const { data: products = [] } = useQuery({
    queryKey: [
      "products",
      category_type == null ? "All categories" : category_type,
    ],
    queryFn: async function (): Promise<{
      status: string;
      message: string;
      products: IProduct[];
    }> {
      if (category_type == null) {
        return fetch(
          "https://fakestoreapi.in/api/products?page=1&limit=10"
        ).then((res) => res.json());
      }
      return fetch(
        `https://fakestoreapi.in/api/products/category?type=${category_type}&page=1&limit=10`
      ).then((res) => res.json());
    },
    select: function (data) {
      return data.products;
    },
  });

  return (
    <>
    </>
  );
};
export default ProductsGallery;

// types
import type { FC } from "react";

// component
import ProductCard from "@/components/product-card/product-card.component";

// react query
import { useQuery } from "@tanstack/react-query";
export type IProduct = {
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
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async function (): Promise<{
      status: string;
      message: string;
      products: IProduct[];
    }> {
      return fetch("https://fakestoreapi.in/api/products?page=1&limit=8").then(
        (res) => res.json()
      );
    },
    select: function (data) {
      return data.products;
    },
  });

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => {
            return <ProductCard {...product} />;
          })}
        </div>
      </div>
    </>
  );
};
export default ProductsGallery;

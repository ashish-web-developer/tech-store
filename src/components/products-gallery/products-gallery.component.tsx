// types
import type { FC } from "react";
import type { IProduct } from "@/types/product";

// component
import ProductCard from "@/components/products-gallery/product-card.component";

// react query
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(
    "https://fakestoreapi.in/api/products?page=1&limit=8"
  );
  const data = await res.json();
  return data.products;
};

const ProductsGallery: FC = () => {
  const { data: products = [] } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGallery;

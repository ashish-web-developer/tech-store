// types
import type { FC } from "react";
import type { LucideIcon } from "lucide-react";

// styled components
import {
  Section,
  Heading,
  SubHeading,
} from "@/styles/components/product-category/product-category.style";

// component
import ProductCategoryCard from "@/components/product-category/product-category-card.component";

type Category = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ProductCategoryProps = {
  categories: Category[];
};

const ProductCategory: FC<ProductCategoryProps> = ({ categories }) => {
  return (
    <Section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="mb-16">
          <Heading>Shop by Category</Heading>
          <SubHeading>
            Browse our extensive collection of premium tech products across all
            major categories.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {categories.map((category, index) => (
            <ProductCategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProductCategory;

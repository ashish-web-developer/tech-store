import type { FC } from "react";
import type { IProduct } from "@/types/product";

// components
import ProductImageSkeleton from "@/components/products-gallery/product-image-skeleton.component";

// styled components
import {
  Card,
  DiscountBadge,
  Content,
  BrandTag,
  Description,
  PriceWrapper,
  AddToCartBtn,
} from "@/styles/components/product-gallery/products-card.style";

const ProductCard: FC<IProduct> = ({
  title,
  price,
  discount,
  brand,
  category,
  description,
}) => {
  const discountedPrice = price - (price * discount) / 100;

  return (
    <Card>
      {/* Image */}
      <div className="relative">
        <ProductImageSkeleton />
        {discount > 0 && <DiscountBadge>-{discount}%</DiscountBadge>}
      </div>

      {/* Content */}
      <Content>
        <h3 className="text-lg font-semibold line-clamp-2 leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm mt-1">
          <BrandTag>{brand.charAt(0).toUpperCase() + brand.slice(1)}</BrandTag>
          <span>•</span>
          <span className="capitalize">{category}</span>
        </div>

        <Description>{description}</Description>

        {/* Price & Button */}
        <PriceWrapper>
          <div>
            {discount > 0 ? (
              <>
                <span className="text-lg font-bold text-green-600">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="block text-sm text-gray-400 line-through">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold">${price.toFixed(2)}</span>
            )}
          </div>
          <AddToCartBtn>Add to Cart</AddToCartBtn>
        </PriceWrapper>
      </Content>
    </Card>
  );
};

export default ProductCard;

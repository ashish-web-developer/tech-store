import type { FC } from "react";
import type { IProduct } from "../products-gallery/products-gallery.component";

// styled theme
import { useTheme } from "styled-components";

const ProductCard: FC<IProduct> = ({
  title,
  price,
  discount,
  brand,
  category,
  description,
}) => {
  const discountedPrice = price - (price * discount) / 100;
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
      className="h-full flex flex-col rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-gray-100"
    >
      {/* Image */}
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1728598786780-c051b9c78ccb?q=80&w=2070&auto=format&fit=crop"
          alt={title}
          className="w-full h-52 object-cover rounded-t-xl"
        />
        {discount > 0 && (
          <span
            style={{
              background: theme.palette.warning.main,
            }}
            className="absolute top-3 right-3  text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md"
          >
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          color: theme.palette.info.main,
        }}
        className="flex flex-col flex-1 p-4"
      >
        {/* Title */}
        <h3 className="text-lg font-semibold line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* Brand & Category */}
        <div className="flex items-center gap-2 text-sm mt-1">
          <span
            style={{
              background: theme.palette.info.main,
              color: theme.palette.primary.light,
            }}
            className="border border-gray-300 text-xs font-medium px-2 py-0.5 rounded-full"
          >
            {brand[0].toUpperCase() + brand.slice(1)}
          </span>
          <span>•</span>
          <span
            style={{
              color: theme.palette.info.main,
            }}
            className="capitalize"
          >
            {category}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            color: theme.palette.info.light,
          }}
          className="text-sm text-gray-600 mt-2 line-clamp-3"
        >
          {description}
        </p>

        {/* Price */}
        <div className="flex items-end justify-between mt-auto pt-4">
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
              <span className="text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            style={{
              backgroundColor: theme.palette.info.main,
              color: theme.palette.primary.main,
            }}
            className="px-3 py-1.5 text-sm rounded-lg transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// types
import type { FC } from "react";

// styled theme
import { useTheme } from "styled-components";

// icons
import { ShoppingBag, MoveRight } from "lucide-react";

const Hero: FC = () => {
  const theme = useTheme();
  return (
    <section
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1
          style={{
            color: theme.palette.info.main,
          }}
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
        >
          Premium Tech Collection
        </h1>
        <p
          style={{
            color: theme.palette.info.light,
          }}
          className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 "
        >
          Discover the latest in technology with exclusive discounts. From
          smartphones and laptops to headphones and gaming consoles - find
          everything you need with fast shipping and unbeatable prices. Shop Now
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            style={{
              backgroundColor: theme.palette.info.main,
              color: theme.palette.primary.main,
            }}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg"
          >
            <ShoppingBag className="mr-2 -ml-1 w-5 h-5" />
            Shop Now
          </button>
          <button
            style={{
              color: theme.palette.info.main,
              border: `1px solid ${theme.palette.info.light}`,
            }}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
          >
            View Categories
            <MoveRight className="ml-2 -mr-1 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;

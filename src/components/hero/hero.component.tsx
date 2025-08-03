import { useContext } from "react";
// types
import type { FC } from "react";

// styled components
import {
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  PrimaryButton,
  OutlineButton,
} from "@/styles/components/hero/hero.style";
import { ModeContext } from "@/context";

// icons
import { ShoppingBag, MoveRight } from "lucide-react";

// helpers
import clsx from "clsx";

const Hero: FC = () => {
  const { mode } = useContext(ModeContext);

  return (
    <HeroSection>
      <div
        className={clsx("py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12", {
          "text-center": mode === "light",
          "flex flex-col lg:flex-row items-center gap-10": mode === "dark",
          "grid grid-cols-1 md:grid-cols-2 gap-10 items-center":
            mode === "colorful",
        })}
      >
        {/* TEXT SECTION */}
        <div
          className={clsx({
            "flex-1 text-left": mode === "dark",
            "order-2 md:order-1 text-left": mode === "colorful",
          })}
        >
          <HeroTitle className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            Premium Tech Collection
          </HeroTitle>

          <HeroSubtitle
            className={clsx("mb-8 text-lg font-normal lg:text-xl", {
              "sm:px-16 xl:px-48": mode === "light",
              "max-w-lg": mode === "dark",
            })}
          >
            Discover the latest in technology with exclusive discounts. From
            smartphones and laptops to headphones and gaming consoles - find
            everything you need with fast shipping and unbeatable prices.
          </HeroSubtitle>

          <div
            className={clsx({
              "flex flex-col sm:flex-row sm:justify-center gap-4":
                mode === "light",
              "flex gap-4": mode === "dark",
              "flex flex-col sm:flex-row gap-4": mode === "colorful",
            })}
          >
            <PrimaryButton className="inline-flex justify-center items-center py-3 px-5 text-base font-medium rounded-lg">
              <ShoppingBag className="mr-2 -ml-1 w-5 h-5" />
              Shop Now
            </PrimaryButton>

            <OutlineButton className="inline-flex justify-center items-center py-3 px-5 text-base font-medium rounded-lg">
              View Categories
              <MoveRight className="ml-2 -mr-1 w-5 h-5" />
            </OutlineButton>
          </div>
        </div>

        {/* IMAGE / DECORATION FOR DARK & COLORFUL */}
        {(mode === "dark" || mode === "colorful") && (
          <div
            className={clsx({
              "flex-1 flex justify-center": mode === "dark",
              "order-1 md:order-2 flex justify-center": mode === "colorful",
            })}
          >
            <img
              src={`/${mode}-gadget.jpg`}
              alt="Tech collection"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </HeroSection>
  );
};

export default Hero;

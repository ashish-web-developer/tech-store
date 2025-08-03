// types
import type { FC } from "react";

// icons
import { ShoppingBag, MoveRight } from "lucide-react";

// styled component
import {
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  PrimaryButton,
  OutlineButton,
} from "@/styles/components/hero/hero.style";

const Hero: FC = () => {
  return (
    <HeroSection>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <HeroTitle className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Premium Tech Collection
        </HeroTitle>

        <HeroSubtitle className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
          Discover the latest in technology with exclusive discounts. From
          smartphones and laptops to headphones and gaming consoles - find
          everything you need with fast shipping and unbeatable prices. Shop Now
        </HeroSubtitle>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
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
    </HeroSection>
  );
};

export default Hero;

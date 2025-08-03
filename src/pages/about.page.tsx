// types
import type { FC } from "react";

// styled theme
import { useTheme } from "styled-components";

// styled components
import {
  Section,
  Heading,
  SubHeading,
  Paragraph,
  ThemedButton,
  ImageWrapper,
} from "@/styles/pages/about.style";

// component
import SuccessStory from "@/components/success-story/success-story.component";

// icons
import { MoveRight } from "lucide-react";

// image
import GadgetImage from  "@/assets/images/gadget.jpg"

const About: FC = () => {
  const theme = useTheme();
  return (
    <Section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 mx-auto grid lg:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="flex flex-col gap-10 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SubHeading>About Us</SubHeading>
              <Heading className="text-4xl font-bold leading-normal">
                Empowering Digital Experiences, One Product at a Time
              </Heading>
              <Paragraph>
                At TechStore, we’re passionate about delivering cutting-edge
                technology and exceptional customer experiences. From the latest
                gadgets to innovative accessories, our journey has been about
                making technology accessible, affordable, and exciting for
                everyone.
              </Paragraph>
            </div>
            <SuccessStory />
          </div>
          <ThemedButton>
            <span>Shop Now</span>
            <MoveRight color={theme.palette.primary.main} />
          </ThemedButton>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-start">
          <ImageWrapper className="sm:w-[564px] sm:h-[646px]">
            <img
              className="w-full h-full object-cover"
              src={GadgetImage}
              alt="About Us"
            />
          </ImageWrapper>
        </div>
      </div>
    </Section>
  );
};

export default About;

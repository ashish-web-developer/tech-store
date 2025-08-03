// types
import type { FC } from "react";
// icons
import { Zap, Shield, Heart } from "lucide-react";

// styled components
import {
  FooterSection,
  FooterHeading,
  FooterSubheading,
  PrimaryButton,
  OutlineButton,
  FeatureIconWrapper,
  FeatureTitle,
  FeatureText,
} from "@/styles/components/footer/footer.style";

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Shipping",
    text: "Free delivery on orders over $50",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Payment",
    text: "Protected transactions & data",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Easy Returns",
    text: "30-day hassle-free returns",
  },
];

const Footer: FC = () => {
  return (
    <FooterSection>
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <FooterHeading>Special Offers & Deals</FooterHeading>
        <FooterSubheading>
          Don't miss out on limited-time discounts and exclusive member
          benefits.
        </FooterSubheading>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton>View All Deals</PrimaryButton>
          <OutlineButton>Sign Up for Alerts</OutlineButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <FeatureIconWrapper>{feature.icon}</FeatureIconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.text}</FeatureText>
            </div>
          ))}
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;

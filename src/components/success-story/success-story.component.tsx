// types
import type { FC } from "react";

// styled components
import {
  Wrapper,
  Card,
  CardTitle,
  CardDescription,
} from "@/styles/components/success-story/success-story.style";

const success_story_items = [
  {
    title: "10+ Years",
    description: "Redefining the Digital Shopping Experience",
  },
  { title: "5000+ Products", description: "Curated from Top Global Brands" },
  {
    title: "200K+ Happy Customers",
    description: "Trusting Us for Their Tech Needs",
  },
  {
    title: "98% Satisfaction Rate",
    description: "Commitment to Quality & Service",
  },
];

const SuccessStory: FC = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {success_story_items.map(({ title, description }, i) => (
          <Card key={i}>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </Card>
        ))}
      </div>
    </Wrapper>
  );
};

export default SuccessStory;


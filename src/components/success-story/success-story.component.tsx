import type { FC } from "react";

// styled theme
import { useTheme } from "styled-components";

const success_story_items = [
  {
    title: "10+ Years",
    description: "Redefining the Digital Shopping Experience",
  },
  {
    title: "5000+ Products",
    description: "Curated from Top Global Brands",
  },
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
  const theme = useTheme();
  return (
    <div className="w-full flex-col justify-center items-start gap-6 flex">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8">
        {success_story_items.map((item, index) => (
          <div
            key={index}
            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
          >
            <h4
              style={{
                color: theme.palette.info.main,
              }}
              className="text-gray-900 text-2xl font-bold font-manrope leading-9"
            >
              {item.title}
            </h4>
            <p
              style={{
                color: theme.palette.info.light,
              }}
              className="text-gray-500 text-base font-normal leading-relaxed"
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;

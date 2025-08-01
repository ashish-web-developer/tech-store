// types
import type { FC } from "react";
import type { LucideIcon } from "lucide-react";

// styled theme
import { useTheme } from "styled-components";

type IProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};
const FeatureCard: FC<IProps> = ({ title, description, icon: Icon }) => {
  const theme = useTheme();
  return (
    <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={30} color={theme.palette.info.main} />
      </div>
      <a href="#">
        <h5
          style={{
            color: theme.palette.info.main,
          }}
          className="mb-2 text-2xl font-semibold tracking-tight"
        >
          {title}
        </h5>
      </a>
      <p
        style={{
          color: theme.palette.info.light,
        }}
        className="mb-3 font-normal text-gray-500 dark:text-gray-400"
      >
        {description}
      </p>
    </div>
  );
};
export default FeatureCard;

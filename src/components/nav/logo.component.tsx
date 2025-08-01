// types
import type { FC } from "react";

// styled theme
import { useTheme } from "styled-components";

const Logo: FC = () => {
  const theme = useTheme();
  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <div
        style={{
          backgroundColor: theme.palette.info.main,
        }}
        className="h-8 w-8 bg-red-50 rounded-lg flex items-center justify-center"
      >
        <span
          style={{
            color: theme.palette.primary.main,
          }}
          className="text-primary-foreground font-bold text-lg"
        >
          T
        </span>
      </div>
      <span className="font-bold text-xl">TechStore</span>
    </div>
  );
};

export default Logo;

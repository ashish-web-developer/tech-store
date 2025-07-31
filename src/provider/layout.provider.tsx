import { useState } from "react";
// types
import type { FC } from "react";

// layout
import LightLayout from "@/layout/light-layout.layout";

// context
import { ThemeContext } from "@/context";

const LayoutProvider: FC = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "colorful">("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeUpdater: (val) => setTheme(val),
      }}
    ></ThemeContext.Provider>
  );
};

export default LayoutProvider;

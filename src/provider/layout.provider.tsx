import { useState } from "react";
// types
import type { FC } from "react";

// layout
import LightLayout from "@/layout/light-layout.layout";
import DarkLayout from "@/layout/dark-layout.layout";

// context
import { ThemeContext } from "@/context";

const LayoutProvider: FC = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "colorful">("dark");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeUpdater: (val) => setTheme(val),
      }}
    >
      {theme == "light" ? (
        <LightLayout></LightLayout>
      ) : (
        <DarkLayout></DarkLayout>
      )}
    </ThemeContext.Provider>
  );
};

export default LayoutProvider;

import { useState } from "react";
// types
import type { FC } from "react";
import type { IThemeType } from "@/context";

import { createGlobalStyle } from "styled-components";

// layout
import LightLayout from "@/layout/light-layout.layout";
import DarkLayout from "@/layout/dark-layout.layout";

// context
import { ThemeContext } from "@/context";

const GlobalStyle = createGlobalStyle<{
  current_theme: IThemeType;
}>`
  body {
    background-color:${(props) =>
      props.current_theme == "dark" ? "#000000" : "#fffffa"};
  }
`;

const LayoutProvider: FC = () => {
  const [theme, setTheme] = useState<IThemeType>("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeUpdater: (val) => setTheme(val),
      }}
    >
      <GlobalStyle current_theme={theme} />
      {theme == "light" ? (
        <LightLayout></LightLayout>
      ) : (
        <DarkLayout></DarkLayout>
      )}
    </ThemeContext.Provider>
  );
};

export default LayoutProvider;

import { useState, useLayoutEffect } from "react";
// types
import type { FC, ReactElement } from "react";
import type { IMode } from "@/context";

import { createGlobalStyle } from "styled-components";

// layout
import LightLayout from "@/layout/light-theme.layout";
import DarkLayout from "@/layout/dark-theme.layout";
import ColorfulLayout from "@/layout/colorful-theme.layout";

// theme
import lightTheme from "@/theme/light.theme";
import darkTheme from "@/theme/dark.theme";
import colorfulTheme from "@/theme/colorful.theme";

// context
import { ModeContext } from "@/context";

const GlobalStyle = createGlobalStyle<{
  $current_mode: IMode;
}>`
  body {
    background-color:${(props) => {
      if (props.$current_mode == "dark") {
        return darkTheme.palette.primary.main;
      } else if (props.$current_mode == "light") {
        return lightTheme.palette.primary.main;
      } else {
        return colorfulTheme.palette.primary.main;
      }
    }}
  }
`;
const layouts: Record<IMode, ReactElement> = {
  light: <LightLayout />,
  dark: <DarkLayout />,
  colorful: <ColorfulLayout />,
};

const LayoutProvider: FC = () => {
  const [mode, setMode] = useState<IMode>("light");

  useLayoutEffect(() => {
    setMode(localStorage.getItem("theme") as IMode);
  }, []);

  return (
    <ModeContext.Provider
      value={{
        mode,
        modeUpdater: (val) => setMode(val),
      }}
    >
      <GlobalStyle $current_mode={mode} />
      {layouts[mode] ?? <LightLayout />}
    </ModeContext.Provider>
  );
};

export default LayoutProvider;

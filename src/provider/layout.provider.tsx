import type { ReactElement } from "react";
import { useState } from "react";
// types
import type { FC } from "react";
import type { IMode } from "@/context";

import { createGlobalStyle } from "styled-components";

// layout
import LightLayout from "@/layout/light-theme.layout";
import DarkLayout from "@/layout/dark-theme.layout";
import ColorfulLayout from "@/layout/colorful-theme.layout";

// theme
import lightTheme from "@/theme/light.theme";
import darkTheme from "@/theme/dark.theme";

// context
import { ModeContext } from "@/context";

const GlobalStyle = createGlobalStyle<{
  current_mode: IMode;
}>`
  body {
    background-color:${(props) =>
      props.current_mode == "dark"
        ? darkTheme.palette.primary.main
        : lightTheme.palette.primary.main};
  }
`;
const layouts: Record<IMode, ReactElement> = {
  light: <LightLayout />,
  dark: <DarkLayout />,
  colorful: <ColorfulLayout />,
};

const LayoutProvider: FC = () => {
  const [mode, setMode] = useState<IMode>("light");
  return (
    <ModeContext.Provider
      value={{
        mode,
        modeUpdater: (val) => setMode(val),
      }}
    >
      <GlobalStyle current_mode={mode} />
      {/* {mode == "light" ? (
        <LightLayout></LightLayout>
      ) : (
        <DarkLayout></DarkLayout>
      )} */}
      {layouts[mode] ?? <LightLayout />}
    </ModeContext.Provider>
  );
};

export default LayoutProvider;

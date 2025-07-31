import { createContext } from "react";

export type IThemeType = "light" | "dark" | "colorful";
const ThemeContext = createContext<{
  theme: IThemeType;
  themeUpdater?: (val: IThemeType) => void;
}>({
  theme: "light",
});
export { ThemeContext };

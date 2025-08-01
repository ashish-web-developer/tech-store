import { createContext } from "react";

export type IMode = "light" | "dark" | "colorful";
const ModeContext = createContext<{
  mode: IMode;
  modeUpdater?: (val: IMode) => void;
}>({
  mode: "light",
});
export { ModeContext };

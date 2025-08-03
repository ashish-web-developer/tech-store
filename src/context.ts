import { createContext } from "react";

export type IMode = "light" | "dark" | "colorful";
const ModeContext = createContext<{
  mode: IMode;
  modeUpdater?: (val: IMode) => void;
}>({
  mode: "light",
});

const SidebarContext = createContext<{
  is_sidebar_open: boolean;
  udpateIsSidebarOpen?: (val: boolean) => void;
}>({
  is_sidebar_open: false,
});
export { ModeContext, SidebarContext };

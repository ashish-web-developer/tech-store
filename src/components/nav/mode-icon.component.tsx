// types
import type { FC } from "react";
import type { IMode } from "@/context";

// icons
import { Moon, Sun, Rainbow } from "lucide-react";

const icons = {
  light: Sun,
  dark: Moon,
  colorful: Rainbow,
};

const ModeIcon: FC<{
  mode: IMode;
  color: string;
}> = ({ mode, ...props }) => {
  const Icon = icons[mode] || Sun;
  return <Icon {...props} />;
};

export default ModeIcon;

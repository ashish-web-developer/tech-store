import { useContext } from "react";
// types
import type { FC } from "react";
import type { IMode } from "@/context";

// styled components
import {
  DropdownWrapper,
  Header,
  MenuList,
  MenuItem,
} from "@/styles/components/nav/theme-dropdown.style";
// component
import Logo from "@/components/nav/logo.component";

// icons
import { Moon, Sun, Rainbow } from "lucide-react";

// context
import { ModeContext } from "@/context";

const mode_items = [
  { label: "Light", icon: <Sun />, value: "light" },
  { label: "Dark", icon: <Moon />, value: "dark" },
  { label: "Colorful", icon: <Rainbow />, value: "colorful" },
];

const ThemeDropdown: FC = () => {
  const { modeUpdater } = useContext(ModeContext);

  return (
    <DropdownWrapper>
      <Header>
        <Logo />
      </Header>
      <MenuList>
        {mode_items.map((item) => (
          <li key={item.value}>
            <MenuItem
              onClick={() => {
                modeUpdater?.(item.value as IMode);
                localStorage.setItem("theme", item.value);
              }}
            >
              {item.icon}
              {item.label}
            </MenuItem>
          </li>
        ))}
      </MenuList>
    </DropdownWrapper>
  );
};

export default ThemeDropdown;

import { useContext, useState } from "react";
// types
import type { FC } from "react";

// styled components
import {
  NavbarWrapper,
  ModeButton,
} from "@/styles/components/nav/nav-bar.style";
import { useTheme } from "styled-components";

// component
import Logo from "@/components/nav/logo.component";
import NavLinks from "@/components/nav/nav-links.component";
import ThemeDropdown from "@/components/nav/theme-dropdown.component";

// icons
import { Moon, Sun } from "lucide-react";

// context
import { ModeContext } from "@/context";

const Navbar: FC = () => {
  const [is_dropdown_open, setIsDropdownOpen] = useState(false);
  const theme = useTheme();
  const { mode } = useContext(ModeContext);

  return (
    <NavbarWrapper>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <NavLinks />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="relative group">
            <ModeButton onClick={() => setIsDropdownOpen((prev) => !prev)}>
              {mode === "light" ? (
                <Sun color={theme.palette.primary.main} />
              ) : (
                <Moon color={theme.palette.primary.main} />
              )}
            </ModeButton>

            {is_dropdown_open && <ThemeDropdown />}
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

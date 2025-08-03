import { useContext, useState } from "react";
import type { FC } from "react";
import { useTheme } from "styled-components";

// styled components
import {
  NavbarWrapper,
  ModeButton,
} from "@/styles/components/nav/nav-bar.style";

// component
import Logo from "@/components/nav/logo.component";
import NavLinks from "@/components/nav/nav-links.component";
import ThemeDropdown from "@/components/nav/theme-dropdown.component";

// icons
import { Moon, Sun, Menu } from "lucide-react";

// context
import { ModeContext } from "@/context";

const Navbar: FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
  const [is_dropdown_open, setIsDropdownOpen] = useState(false);
  const theme = useTheme();
  const { mode } = useContext(ModeContext);

  return (
    <NavbarWrapper>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-3 md:order-2">
          {/* Mobile Hamburger Icon */}
          <button
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <Menu size={24} color={theme.palette.info.main} />
          </button>

          {/* Theme Toggle */}
          <div className="relative">
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

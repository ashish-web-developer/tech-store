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
import { Moon, Sun, Menu, X } from "lucide-react";

// context
import { ModeContext } from "@/context";

const Navbar: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const { mode } = useContext(ModeContext);

  return (
    <>
      <NavbarWrapper>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />

          {/* Desktop NavLinks */}
          <div className="hidden sm:block">
            <NavLinks />
          </div>

          <div className="flex items-center gap-3 md:order-2">
            {/* Mobile Hamburger Icon */}
            <button
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} color={theme.palette.info.main} />
              ) : (
                <Menu size={24} color={theme.palette.info.main} />
              )}
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

              {isDropdownOpen && <ThemeDropdown />}
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dropdown from top) */}
        {isMobileMenuOpen && (
          <div className="sm:hidden w-full bg-white shadow-md border-t border-gray-200">
            <NavLinks isMobileMenuOpen = {isMobileMenuOpen} />
          </div>
        )}
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

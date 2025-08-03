import { useContext, useState, useEffect, useRef } from "react";
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
import { ModeContext, SidebarContext } from "@/context";

const Navbar: FC = () => {
  const theme = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { mode } = useContext(ModeContext);
  const { udpateIsSidebarOpen } = useContext(SidebarContext);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    isDropdownOpen &&
      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      isDropdownOpen &&
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
              onClick={() => {
                if (mode == "dark") {
                  udpateIsSidebarOpen?.(true);
                } else {
                  setIsMobileMenuOpen((prev) => !prev);
                }
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} color={theme.palette.info.main} />
              ) : (
                <Menu size={24} color={theme.palette.info.main} />
              )}
            </button>

            {/* Theme Toggle */}
            <div className="relative" ref={dropdownRef}>
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
            <NavLinks isMobileMenuOpen={isMobileMenuOpen} />
          </div>
        )}
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

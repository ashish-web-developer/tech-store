import { useContext, useState, useEffect, useRef } from "react";

// types
import type { FC } from "react";

// styled theme
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
import ModeIcon from "@/components/nav/mode-icon.component";

// icons
import { Menu, X } from "lucide-react";

// context
import { ModeContext, SidebarContext } from "@/context";

const Navbar: FC = () => {
  const theme = useTheme();
  const [is_drop_down_open, setIsDropdownOpen] = useState(false);
  const [is_mobile_menu_open, setIsMobileMenuOpen] = useState(false);
  const { mode } = useContext(ModeContext);
  const { udpateIsSidebarOpen } = useContext(SidebarContext);
  const drop_down_ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        drop_down_ref.current &&
        !drop_down_ref.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    is_drop_down_open &&
      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      is_drop_down_open &&
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [is_drop_down_open]);

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
              {is_mobile_menu_open ? (
                <X size={24} color={theme.palette.info.main} />
              ) : (
                <Menu size={24} color={theme.palette.info.main} />
              )}
            </button>

            {/* Theme Toggle */}
            <div className="relative" ref={drop_down_ref}>
              <ModeButton onClick={() => setIsDropdownOpen((prev) => !prev)}>
                <ModeIcon mode={mode} color={theme.palette.primary.main} />
              </ModeButton>

              {is_drop_down_open && <ThemeDropdown />}
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dropdown from top) */}
        {is_mobile_menu_open && (
          <div className="sm:hidden w-full bg-white shadow-md border-t border-gray-200">
            <NavLinks
              is_mobile_menu_open={is_mobile_menu_open}
              onClickHandler={() => setIsMobileMenuOpen(false)}
            />
          </div>
        )}
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

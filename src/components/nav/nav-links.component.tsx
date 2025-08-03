// types
import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { NavbarContainer, NavbarList, StyledLink } from "@/styles/components/nav/nav-links.style";

interface NavbarLinksProps {
  isMobileMenuOpen?: boolean;
}

const NavbarLinks: FC<NavbarLinksProps> = ({ isMobileMenuOpen }) => {
  const location = useLocation();

  const navbar_items = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <NavbarContainer $isMobileMenuOpen={isMobileMenuOpen}>
      <NavbarList>
        {navbar_items.map((item) => (
          <li key={item.path}>
            <StyledLink
              to={item.path}
              $active={location.pathname === item.path}
              aria-current="page"
            >
              {item.label}
            </StyledLink>
          </li>
        ))}
      </NavbarList>
    </NavbarContainer>
  );
};

export default NavbarLinks;

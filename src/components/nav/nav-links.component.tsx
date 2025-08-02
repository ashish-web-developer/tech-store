// types
import type { FC } from "react";

// styled components
import { NavWrapper, NavItem } from "@/styles/components/nav/nav-links.style";

const navbar_items = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const NavLinks: FC = () => {
  return (
    <div id="navbar-user">
      <NavWrapper>
        {navbar_items.map((item) => (
          <NavItem key={item.path} to={item.path} end>
            {item.label}
          </NavItem>
        ))}
      </NavWrapper>
    </div>
  );
};

export default NavLinks;

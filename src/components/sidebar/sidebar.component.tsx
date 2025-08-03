import { useContext } from "react";
// types
import type { FC } from "react";

// styled components
import {
  SidebarContainer,
  Overlay,
  SectionTitle,
  NavList,
  NavItem,
  CloseButton,
} from "@/styles/components/sidebar/sidebar.style";

// icons
import { Home, User, Mail, Layers, FileText, Settings, X } from "lucide-react";

// context
import { SidebarContext } from "@/context";

const sidebar_items = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "About", path: "/about" },
  { icon: Mail, label: "Contact", path: "/contact" },
  { icon: Layers, label: "Projects", path: "/projects" },
  { icon: FileText, label: "Blog", path: "/blog" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar: FC = () => {
  const { is_sidebar_open, udpateIsSidebarOpen } = useContext(SidebarContext);

  return (
    <>
      {/* Overlay */}
      <Overlay
        $open={is_sidebar_open}
        onClick={() => udpateIsSidebarOpen?.(false)}
      />

      {/* Sidebar */}
      <SidebarContainer $open={is_sidebar_open} aria-label="Sidebar">
        {/* Close Button inside sidebar */}
        <CloseButton onClick={() => udpateIsSidebarOpen?.(false)}>
          <X size={24} />
        </CloseButton>

        <SectionTitle>Main Navigation</SectionTitle>
        <NavList>
          {sidebar_items.map((item) => (
            <li key={item.path}>
              <NavItem
                to={item.path}
                onClick={() => udpateIsSidebarOpen?.(false)}
              >
                <item.icon size={18} />
                {item.label}
              </NavItem>
            </li>
          ))}
        </NavList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

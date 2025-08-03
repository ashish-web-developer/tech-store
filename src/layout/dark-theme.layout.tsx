import { useState } from "react";
import { Outlet } from "react-router-dom";
// styld
import { ThemeProvider } from "styled-components";

// styled components
import { StyledPageWrapper, StyledMain } from "@/styles/layout/layout.style";

// theme
import theme from "@/theme/dark.theme";

// components
import Sidebar from "@/components/sidebar/sidebar.component";
import Navbar from "@/components/nav/nav-bar.component";

// context
import { SidebarContext } from "@/context";

const DarkLayout = () => {
  const [is_sidebar_open, setIsSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <StyledPageWrapper>
        <StyledMain>
          <SidebarContext.Provider
            value={{
              is_sidebar_open,
              udpateIsSidebarOpen: (val) => setIsSidebarOpen(val),
            }}
          >
            <Sidebar />
            <div className="sm:ml-64">
              <Navbar />
              <Outlet />
            </div>
          </SidebarContext.Provider>
        </StyledMain>
      </StyledPageWrapper>
    </ThemeProvider>
  );
};
export default DarkLayout;

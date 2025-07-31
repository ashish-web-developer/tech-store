import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// styled components
import { StyledPageWrapper, StyledMain } from "@/styles/layout/layout.style";

// theme
import theme from "@/theme/dark.theme";

// components
import Sidebar from "@/components/sidebar/sidebar.component";

const DarkLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPageWrapper>
        <StyledMain>
          <Sidebar />
        </StyledMain>
        <Outlet />
      </StyledPageWrapper>
    </ThemeProvider>
  );
};
export default DarkLayout;

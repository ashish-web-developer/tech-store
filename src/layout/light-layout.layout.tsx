import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// styled components
import {
  StyledPageWrapper,
  StyledMain,
} from "@/styles/layout/dark-layout.style";

// theme
import theme from "@/theme/light.theme";

// components
import Header from "@/components/nav/nav.component";
import Sidebar from "@/components/sidebar/sidebar.component";

const LightLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPageWrapper>
        <StyledMain>
          <Header />
          <Sidebar />
        </StyledMain>
        <Outlet />
      </StyledPageWrapper>
    </ThemeProvider>
  );
};
export default LightLayout;

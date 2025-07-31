import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// styled components
import { StyledPageWrapper, StyledMain } from "@/styles/layout/layout.style";

// theme
import theme from "@/theme/light.theme";

// components
import Navbar from "@/components/nav/nav.component";

const LightLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPageWrapper>
        <StyledMain>
          <Navbar />
        </StyledMain>
        <Outlet />
      </StyledPageWrapper>
    </ThemeProvider>
  );
};
export default LightLayout;

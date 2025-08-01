import { Outlet } from "react-router-dom";

// styled
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
          <Outlet />
        </StyledMain>
      </StyledPageWrapper>
    </ThemeProvider>
  );
};
export default LightLayout;

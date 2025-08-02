import { Outlet } from "react-router-dom";

// styled
import { ThemeProvider } from "styled-components";

// styled components
import { StyledPageWrapper, StyledMain } from "@/styles/layout/layout.style";

// theme
import theme from "@/theme/colorful.theme";

// components
import Navbar from "@/components/nav/nav-bar.component";

const ColorfulLayout = () => {
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
export default ColorfulLayout;

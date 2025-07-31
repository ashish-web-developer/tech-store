import styled from "styled-components";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.dark};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export { StyledNav, StyledLink };

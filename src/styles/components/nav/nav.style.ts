import styled from "styled-components";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.info.main};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.palette.info.main};
`;

export { StyledNav, StyledLink };

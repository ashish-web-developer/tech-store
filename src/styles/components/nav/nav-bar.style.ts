import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.info.main};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.info.main};
`;

export { StyledNav, StyledLink };

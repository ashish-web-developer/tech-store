import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: none;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: flex;
    width: auto;
    order: 1;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    border: none;
    gap: 2rem;
    padding: 0;
  }
`;

const StyledLink = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.palette.info.light};
  border-radius: 4px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.palette.info.main};
  }

  ${({ $active, theme }) =>
    $active &&
    `
      color: ${theme.palette.info.main};
    `}

  @media (min-width: 768px) {
    background: transparent;
    padding: 0;
  }
`;

export {NavbarContainer,NavbarList,StyledLink};

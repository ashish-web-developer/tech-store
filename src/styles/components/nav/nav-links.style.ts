import styled from "styled-components";
import { NavLink } from "react-router-dom"; // Assuming React Router for navigation

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  padding: 1rem; /* p-4 */
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.palette.primary.light};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    border: none;
    background: transparent;
    padding: 0;
    gap: 2rem; /* space-x-8 */
  }
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.palette.info.main};
  text-decoration: none;
  transition: color 0.3s ease;

  &.active {
    color: ${({ theme }) => theme.palette.warning.main};
    font-weight: 600;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.warning.main};
  }

  @media (min-width: 768px) {
    padding: 0; /* md:p-0 */
  }
`;
export {NavWrapper,NavItem};

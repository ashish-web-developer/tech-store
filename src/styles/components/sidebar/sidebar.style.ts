import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 16rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: 1rem;
  overflow-y: auto;
  transition: transform 0.3s ease;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};

  @media (min-width: 640px) {
    transform: translateX(0);
  }
`;

const Overlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 40;

  @media (min-width: 640px) {
    display: none;
  }
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.palette.info.light};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.palette.info.main};
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;

  &.active {
    background-color: ${({ theme }) => theme.palette.info.main};
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.info.main}22;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.palette.info.main};
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 640px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.palette.info.main};
  cursor: pointer;

  @media (min-width: 640px) {
    display: none;
  }
`;

export {
    SidebarContainer,
    Overlay,
    SectionTitle,
    NavList,
    NavItem,
    CloseButton,
    MenuButton
}
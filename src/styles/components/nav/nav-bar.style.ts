import styled from "styled-components";

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  z-index: 50;

  /* Light shadow for dark backgrounds, dark shadow for light backgrounds */
  box-shadow: ${({ theme }) =>
    theme.palette.primary.main === "#000000"
      ? "0 2px 6px rgba(255, 255, 255, 0.1)" // visible on dark
      : "0 2px 6px rgba(0, 0, 0, 0.1)"}; // visible on light

  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
`;

const ModeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.primary.main};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  border-radius: 9999px;
  font-weight: 600;
  box-shadow: var(--shadow-xs);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export { NavbarWrapper, ModeButton };

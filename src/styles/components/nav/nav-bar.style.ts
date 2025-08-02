import styled from "styled-components";

const NavbarWrapper = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
`;

const ModeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.primary.main};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  padding: 0.75rem 1.5rem; /* py-3 px-6 */
  font-size: 0.875rem; /* text-sm */
  border-radius: 9999px; /* rounded-full */
  font-weight: 600;
  box-shadow: var(--shadow-xs);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
export { NavbarWrapper, ModeButton };

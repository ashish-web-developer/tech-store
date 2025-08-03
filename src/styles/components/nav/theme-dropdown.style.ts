import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 18rem;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 0.75rem;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 50;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.palette.info.light};
`;

const Header = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
`;

const MenuList = styled.ul`
  padding: 0.5rem 0;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.info.main};
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.palette.secondary.main};
  }
`;
const ActiveIndicator = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.info.main};
`;
export { DropdownWrapper, Header, MenuList, MenuItem, ActiveIndicator };

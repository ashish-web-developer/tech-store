import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.div`
  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.palette.info.main};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoLetter = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  font-size: 1.125rem;
`;

const LogoText = styled.span`
  color: ${({ theme }) => theme.palette.info.main};
  font-weight: 700;
  font-size: 1.25rem;
`;
export { LogoWrapper, LogoIcon, LogoLetter, LogoText };

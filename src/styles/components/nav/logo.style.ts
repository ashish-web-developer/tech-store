import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* space-x-3 */
`;

const LogoIcon = styled.div`
  height: 2rem; /* h-8 */
  width: 2rem; /* w-8 */
  background-color: ${({ theme }) => theme.palette.info.main};
  border-radius: 0.5rem; /* rounded-lg */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoLetter = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700; /* font-bold */
  font-size: 1.125rem; /* text-lg */
`;

const LogoText = styled.span`
  color: ${({ theme }) => theme.palette.info.main};
  font-weight: 700; /* font-bold */
  font-size: 1.25rem; /* text-xl */
`;
export { LogoWrapper, LogoIcon, LogoLetter, LogoText };

import styled from "styled-components";

const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.palette.info.main};
`;

const HeroSubtitle = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
`;

const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.primary.main};
`;

const OutlineButton = styled.button`
  color: ${({ theme }) => theme.palette.info.main};
  border: 1px solid ${({ theme }) => theme.palette.info.light};
`;

export {
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    PrimaryButton,
    OutlineButton
}

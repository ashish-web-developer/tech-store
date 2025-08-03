import styled from "styled-components";

const FooterSection = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.info.main};
  padding: 5rem 0;
`;

const FooterHeading = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const FooterSubheading = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.125rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
`;

const OutlineButton = styled.button`
  font-size: 1.125rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.info.main};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.info.light}1A;
  }
`;

const FeatureIconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.palette.info.light}1A;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
`;

export {
  FooterSection,
  FooterHeading,
  FooterSubheading,
  PrimaryButton,
  OutlineButton,
  FeatureIconWrapper,
  FeatureTitle,
  FeatureText,
};

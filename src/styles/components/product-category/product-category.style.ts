import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.palette.info.main};
  font-size: 1.875rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SubHeading = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto;
`;

export { Section, Heading, SubHeading };

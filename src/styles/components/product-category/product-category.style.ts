
import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.palette.info.main};
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */

  @media (min-width: 768px) {
    font-size: 2.25rem; /* md:text-4xl */
  }
`;

const SubHeading = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
  font-size: 1.25rem; /* text-xl */
  max-width: 42rem; /* max-w-2xl */
  margin: 0 auto;
`;

export {
    Section,
    Heading,
    SubHeading
}
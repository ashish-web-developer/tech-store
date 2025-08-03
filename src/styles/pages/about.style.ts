import styled from "styled-components";
const Section = styled.section`
  background: ${({ theme }) => theme.palette.primary.main};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.palette.info.main};
`;

const SubHeading = styled.h6`
  color: ${({ theme }) => theme.palette.info.light};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
`;

const ThemedButton = styled.button`
  background-color: ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateX(2px);
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(229, 231, 235, 0.5);
`;
export { Section, Heading, SubHeading, Paragraph, ThemedButton, ImageWrapper };

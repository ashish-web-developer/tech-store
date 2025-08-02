import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.info.main};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.palette.info.main};
  font-size: 2.25rem; /* text-4xl */
  font-weight: 800; /* font-extrabold */
  text-align: center;
`;

const SubHeading = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
  text-align: center;
  font-size: 1.125rem; /* sm:text-xl */
  font-weight: 300;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  color: ${({ theme }) => theme.palette.info.main};
`;

const Input = styled.input`
  background: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid #d1d5db; /* gray-300 */
  color: ${({ theme }) => theme.palette.info.main};
  border-radius: 0.5rem;
  padding: 0.625rem;
  width: 100%;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.secondary.light};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.secondary.light}; 
  }
`;

const Textarea = styled.textarea`
  background: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid #d1d5db;
  color: ${({ theme }) => theme.palette.info.main};
  border-radius: 0.5rem;
  padding: 0.625rem;
  width: 100%;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.secondary.dark};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.secondary.dark}33;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.warning.main};
  color: ${({ theme }) => theme.palette.primary.light};
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) =>
      theme.palette.warning.main}cc; /* 80% opacity */
  }
`;

export { Section, Heading, SubHeading, Label, Input, Textarea, Button };

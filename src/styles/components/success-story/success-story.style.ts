import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    border-color: #9ca3af;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  color: ${({ theme }) => theme.palette.info.main};
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.palette.info.light};
`;

export { Wrapper, Card, CardTitle, CardDescription };

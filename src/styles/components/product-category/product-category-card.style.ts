import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.palette.info.light};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.palette.primary.light};

  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) =>
    `${theme.palette.primary.main}1A`}; /* 10% opacity */
  border: 1px solid ${({ theme }) => theme.palette.info.light};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Title = styled.h5`
  color: ${({ theme }) => theme.palette.info.main};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.5;
`;

export { Card, IconWrapper, Title, Description };

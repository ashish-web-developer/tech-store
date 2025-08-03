
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 1.25rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 480px;
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: rgba(244, 44, 4, 0.1);
`;

const ErrorCode = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #f42c04;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #222;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: #f42c04;
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.25s;

  &:hover {
    background: #d22604;
  }
`;

const SecondaryButton = styled(Link)`
  border: 1px solid #ccc;
  color: #444;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    background: #f9f9f9;
  }
`;
export {
    Wrapper,
    Card,
    IconWrapper,
    ErrorCode,
    Title,
    Message,
    ButtonGroup,
    PrimaryButton,
    SecondaryButton,
}
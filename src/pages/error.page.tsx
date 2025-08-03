import { useRouteError } from "react-router-dom";
// types
import type { FC } from "react";
import type { ErrorResponse } from "react-router-dom";

// icons
import { AlertTriangle } from "lucide-react";

// styled components
import {
  Wrapper,
  Card,
  IconWrapper,
  ErrorCode,
  Title,
  Message,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "@/styles/pages/error.style";

const Error: FC = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <Wrapper>
      <Card>
        <IconWrapper>
          <AlertTriangle size={42} color="#f42c04" />
        </IconWrapper>
        <ErrorCode>{error.status}</ErrorCode>
        <Title>Page Not Found</Title>
        <Message>
          Sorry, we couldn’t find the page you’re looking for. Please check the
          URL or return to the homepage.
        </Message>
        <ButtonGroup>
          <PrimaryButton to="/">Go Home</PrimaryButton>
          <SecondaryButton to="/contact">Contact Support</SecondaryButton>
        </ButtonGroup>
      </Card>
    </Wrapper>
  );
};

export default Error;

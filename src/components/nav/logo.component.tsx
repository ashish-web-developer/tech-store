// types
import type { FC } from "react";

// styled components
import {
  LogoWrapper,
  LogoIcon,
  LogoLetter,
  LogoText,
} from "@/styles/components/nav/logo.style";

const Logo: FC = () => {
  return (
    <LogoWrapper>
      <LogoIcon>
        <LogoLetter>T</LogoLetter>
      </LogoIcon>
      <LogoText>TechStore</LogoText>
    </LogoWrapper>
  );
};

export default Logo;


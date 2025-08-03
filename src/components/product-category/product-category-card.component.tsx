// types
import type { FC } from "react";
import type { LucideIcon } from "lucide-react";

// styled components
import {
  Card,
  IconWrapper,
  Title,
  Description,
} from "@/styles/components/product-category/product-category-card.style";

// styled theme
import { useTheme } from "styled-components";

type IProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const ProductCategoryCard: FC<IProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  const theme = useTheme();

  return (
    <Card
      className="
        transform transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl 
        animate-fadeIn
      "
    >
      <IconWrapper>
        <Icon size={30} color={theme.palette.info.main} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ProductCategoryCard;

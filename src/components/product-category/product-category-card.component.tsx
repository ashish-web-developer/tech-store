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
    <Card>
      <IconWrapper>
        <Icon size={30} color={theme.palette.info.main} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ProductCategoryCard;

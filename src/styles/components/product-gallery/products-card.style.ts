import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    transform: translateY(-6px) scale(1.03);
  }
`;

const DiscountBadge = styled.span`
  background: ${({ theme }) => theme.palette.warning.main};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.palette.info.main};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const BrandTag = styled.span`
  background: ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.palette.info.light};
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceWrapper = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const AddToCartBtn = styled.button`
  background-color: ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

export {
  Card,
  DiscountBadge,
  Content,
  BrandTag,
  Description,
  PriceWrapper,
  AddToCartBtn,
};

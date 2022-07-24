import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.778vw;
  margin: 80px 15.278vw 72px 8.333vw;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 6.944vw;
`;

export const ProductImage = styled.img`
  width: 42.361vw;
  height: 35vw;
  object-fit: contain;
  margin: 0;
`;

export const ProductDetailsContainer = styled.div`
  width: 20.278vw;
`;

export const PriceLabel = styled.span`
  margin-top: 40px;
  display: block;
  width: 3.472vw;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const ProductPrice = styled.span`
  display: block;
  width: auto;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  margin: 10px 0 20px 0;
  height: 46px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const AddToCartButton = styled.button`
  height: 52px;
  width: 20.278vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  border: none;
  background-color: green;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  margin: 20px 0 40px 0;
  transition: all 0.2s ease;
  &:active {
    transform: ${(props) => props.inStock && "scale(0.95, 0.95)"};
  }
`;

export const ImageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.778vw;
`;

export const ListImage = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  object-fit: contain;
`;

export const ProductName = styled.h1`
  &::first-line {
    font-weight: 600;
  }
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 43px;
`;

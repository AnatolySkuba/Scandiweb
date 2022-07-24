import styled from "styled-components";

export const AttributesContainer = styled.div``;

export const AttributeGroupName = styled.span`
visibility:hidden;
`;

export const AttributeGroup = styled.div`
  display: flex;
  gap: 0.833vw;
  margin-bottom: 8px;
  font-family:Source Sans Pro
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttributeButton = styled.button`
  background-color: ${(props) =>
    !props.inStock || !props.active ? "#fff" : "#1D1F22"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  min-width: 63px;
  height: 45px;
  border: 0.13em solid ${(props) => (props.active ? "green" : "#1D1F22")};
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
  color: ${(props) =>
    !props.inStock ? "gray" : props.active ? "#fff" : "#292929"};
`;

export const Button = styled.button`
  height: 52px;
  width: 20.278vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  border: none;
  background-color: ${(props) =>
    props.inStock ? "#5ECE7B" : "var(--disabledAttr)"};
  color: ${(props) => (props.inStock ? "#fff" : "var(--black)")};
  cursor: ${(props) => (props.inStock ? "pointer" : "not-allowed")};
  text-transform: uppercase;
  margin: 20px 0 40px 0;
  transition: all 0.2s ease;
  &:active {
    transform: ${(props) => props.inStock && "scale(0.95, 0.95)"};
  }
`;

export const ProductName = styled.h1`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  font-family: Raleway;
  margin-bottom: 43px;
`;

export const ProductBrand = styled.h1`
  font-family: Raleway;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 43px;
`;

export const ProductPriceLabel = styled.span`
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

  margin: 10px 0 20px 0;
  height: 46px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 18px;
`;

export const ProductImage = styled.img`
  width: 42.361vw;
  height: 35vw;
  object-fit: contain;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.778vw;
  margin: 106px 15.278vw 72px 8.333vw;
  width: 100%;
`;

export const Description = styled.div`
  font-family: "Roboto";
`;

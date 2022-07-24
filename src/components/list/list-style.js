import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ProductsContainer = styled.div`
  display: relative;
  display: grid;
  margin-top: 90px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 80px 40px;
  justify-content: center;
  align-content: center;
  justify-items: end;
  align-items: end;
  margin-right: 80px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProductImageContainer = styled.div`
  width: 386px;
  height: 440px;
`;

export const ItemName = styled.span`
  position: static;
  height: 29px;
  left: 0px;
  right: 0px;
  top: 0px;
  color: #1d1f22;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  width: 354px;
  word-wrap: normal;
  font-weight: 300;
  min-height: 29px;
  text-decoration: none;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  align-items: center;
  margin-top: 30px;
`;

export const ItemContainer = styled.div`
  width: 386px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 4px 35px 0px #a8acb030;
  }
`;

export const ItemPrice = styled.span`
  font-family: Raleway;
  color: #1d1f22;
  display: block;
  font-weight: 500;
  margin-top: 5px;
  width: auto;
  height: 29px;
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px 1vw 32px 1vw;
  text-transform: uppercase;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  color: #1d1f22;
  font-style: normal;
  &:hover {
    color: #5ece7b;
  }
`;
export const ItemTop = styled.div`
  position: relative;
`;
export const OutOfStockOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  left: 0;
  top: -5px;
  background-color: #ffff;
  display: flex;
`;

export const OutOfStockText = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 38.4px;
  text-transform: uppercase;
  margin: auto;
  color: #a6a6a6;
`;

export const AddToCartButton = styled.div`
  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
  border-radius: 100%;
  padding: 10px;
  border: none;
  background-color: #5ece7b;
  position: absolute;
  top: calc(100% - 26px);
  left: 80%;

  &:hover {
    transform: scale(1.2, 1.2);
    transition: all 0.5s ease;
  }
  &:active {
    transform: scale(0.9, 0.9);
  }
  cursor: pointer;
`;

export const Title = styled.span`
  width: 299px;
  height: 68px;
  margin: 103px;
  bottom: 50px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  color: #1d1f22;
`;

export const Btn = styled.span`
background: "transparent",
border: "none !important",
fontSize: "0",`;

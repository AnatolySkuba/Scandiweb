import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const CartContainer = styled.div`
  width: 100%;
  padding: 80px 16vw 54px 7vw;
`;

export const CartItems = styled.div``;

export const CartItemContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  width: 76vw;
  min-height: 205px;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  &:hover #cart-item-name {
    text-decoration: underline;
  }
`;

export const CartItemDetailsContainer = styled.div`
  width: 100%;
`;

export const CartItemActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 20px 0.8vw 0 0;
  height: 100%;
`;

export const ProductBrand = styled.h1`
  font-family: Raleway;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 43px;
`;

export const CartItemName = styled.span`
  display: block;
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  &:hover {
    color: #5ece7b;
  }
`;

export const Title = styled.h1`
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CartLink = styled(NavLink)`
  position: relative;
`;
export const ItemNameLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const CartItemPrice = styled.span`
  display: block;
  font-weight: 700;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  font-size: 27px;
  height: 45px;
`;

export const CartCountButton = styled.button`
  background-color: #fff;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  font-size: 1.5rem;
  user-select: none;
  cursor: pointer;
`;

export const CartItemCount = styled.span`
  font-size: 500;
  font-size: 24px;
  line-height: 130%;
  color: #000000;
`;

export const CartItemCountShape = styled.div`
  display: block;
  padding: 2px;
  min-width: 20px;
  font-size: 14px;

  height: 20px;
  color: #1d1f22;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const CartItemCountContent = styled.span`
  color: #ffff;
  font-weight: 700;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  line-height: 16px;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2vw;
`;

export const LogoContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 41px;
  align-items: center;
  justify-content: center;
`;

export const CartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: relative;
  margin-left: 38px;
  svg {
    width: 20px;
  }
`;

export const CartItemImageContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: 9.792vw;
  height: 185px;
  z-index: 5;
  user-select: none;
  img {
    width: 9.792vw;
    height: 100%;
    object-fit: contain;
  }
`;

export const CartArrows = styled.div`
  position: absolute;
  z-index: 6;
  top: 40%;
  left: 40%;
  height: 20%;
  width: 1.5vw;
  display: flex;
  align-items: center;
  background-color: none;
  cursor: pointer;
  svg {
    filter: invert(7%) sepia(7%) saturate(1063%) hue-rotate(176deg)
      brightness(94%) contrast(88%);
  }
  svg:hover {
    filter: invert(77%) sepia(30%) saturate(732%) hue-rotate(80deg)
      brightness(90%) contrast(86%);
  }
`;

export const CartArrowPrevious = styled(CartArrows)`
  border-radius: 0 50% 50% 0;
  justify-content: flex-start;
  left: 0;
  padding-left: 5px;
`;

export const CartArrowNext = styled(CartArrows)`
  border-radius: 50% 0 0 50%;
  justify-content: flex-end;
  left: calc(100% - 1.5vw);
  padding-right: 5px;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-between;
  margin: 43px 0 35px 0;
`;

export const TotalPriceLabel = styled.span`
  margin-right: 15px;
  font-family: "Roboto", sans-serif;
`;

export const TotalPriceNumber = styled.span`
  font-family: "Raleway", sans-serif;
`;

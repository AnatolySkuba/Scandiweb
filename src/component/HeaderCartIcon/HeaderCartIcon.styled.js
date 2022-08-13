import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as svg } from "style/icons/cart.svg";

export const Container = styled.div`
	position: relative;
	cursor: pointer;
`;

export const CartSvg = styled(svg)`
	cursor: pointer;
`;

export const Counter = styled.p`
	position: absolute;
	bottom: 50%;
	left: 50%;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	text-align: center;
	color: white;
	font-family: "Roboto";
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	background-color: #000;
`;

export const Dropdown = styled.div`
	position: absolute;
	top: 100%;
	right: -25px;
	z-index: 1;
	background-color: #fff;
	width: 325px;
	height: 677px;
	margin-top: 29px;
	padding: 32px 16px;
	cursor: default;
`;

export const DropdownProducts = styled.div`
	width: 293px;
	height: 538px;
	margin-bottom: 32px;
`;

export const Name = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 160%;
`;

export const Products = styled.ul`
	margin-bottom: 32px;
	width: 293px;
	height: 420px;
	contain: content;
	display: block;
	list-style-type: none;
	overflow: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const Total = styled.p`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: "Roboto";
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
`;

export const TotalPrice = styled.span`
	font-weight: 700;
	line-height: 160%;
`;

export const Buttons = styled.div`
	display: flex;
	width: 292px;
	height: 43px;
	font-weight: 600;
`;

export const ViewBag = styled(Link)`
	display: block;
	margin-right: 12px;
	width: 140px;
	height: 43px;
	font-weight: 600;
	font-size: 14px;
	text-align: center;
	line-height: 43px;
	border: 1px solid var(--main-text-color);
	background-color: white;
	cursor: pointer;
`;

export const CheckOut = styled.button`
	width: 140px;
	height: 43px;
	font-weight: 600;
	font-size: 14px;
	line-height: 16.8px;
	color: white;
	background-color: var(--accent-color);
	border: none;
	cursor: pointer;
`;

export const BackDrop = styled.div`
	position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
	margin-top: 80px;
	background: rgba(57, 55, 72, 0.22);
	visibility: ${({ dropdown }) => (dropdown ? "" : "hidden")};
	cursor: default;
	z-index: 1;
	}
`;

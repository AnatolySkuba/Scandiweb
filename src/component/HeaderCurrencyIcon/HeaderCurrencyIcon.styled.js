import styled from "styled-components";
import { ReactComponent as Svg } from "style/icons/arrow.svg";

export const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin: 0 22px 0 auto;
	font-family: Raleway;
	font-weight: 500;
	font-size: 18px;
	cursor: pointer;
`;

export const Icon = styled.div`
	padding: 0 10px;
`;

export const ArrowSvg = styled(Svg)`
	transform: ${({ dropdown }) => (dropdown === "true" ? "rotate(180deg)" : "")};
	stroke: black;
`;

export const DropdownList = styled.ul`
	position: absolute;
	top: 100%;
	left: -12.5px;
	z-index: 2;
	background-color: #fff;
	width: 114px;
	margin-top: 7.5px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	list-style-type: none;
`;

export const DropdownItem = styled.li`
	width: 114px;
	height: 45px;
	font-weight: 500;
	font-size: 18px;
	text-align: center;
	line-height: 45px;
	&:hover {
		background-color: #eeeeee;
		cursor: pointer;
	}
`;

export const BackDrop = styled.div`
	position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
	visibility: ${({ dropdown }) => (dropdown ? "" : "hidden")};
	cursor: default;
	}
`;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	cursor: pointer;
`;

export const Link = styled(NavLink)`
	padding: 4px 1vw 32px 1vw;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0px;
	color: ${({ location, children }) => (location === "/" && children === "all" ? "#5ece7b" : "#1d1f22")};
	border-bottom: ${({ location, children }) => (location === "/" && children === "all" ? "2px solid #5ece7b" : "")};
	font-style: normal;
	&.active {
		color: #5ece7b;
		border-bottom: 2px solid #5ece7b;
	}
	&:hover {
		color: #5ece7b;
	}
`;

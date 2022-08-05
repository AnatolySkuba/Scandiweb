import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
	display: flex;
	cursor: pointer;
`;

export const Link = styled(NavLink)`
	padding: 4px 1vw 32px 1vw;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 0px;
	color: ${({ location, children }) =>
		location === "/Scandiweb/" && children === "all" ? "var(--accent-color)" : "var(--main-text-color)"};
	border-bottom: ${({ location, children }) =>
		location === "/Scandiweb/" && children === "all" ? "2px solid var(--accent-color)" : ""};

	&.active {
		color: var(--accent-color);
		border-bottom: 2px solid var(--accent-color);
	}

	&:hover {
		color: var(--accent-color);
	}
`;

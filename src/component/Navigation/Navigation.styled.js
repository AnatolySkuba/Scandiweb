import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Ul = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	list-style-type: none;
	padding: 0px;

	width: 234px;
	height: 56px;
	left: 101px;
	bottom: 0px;
	cursor: pointer;
`;

export const Link = styled(NavLink)`
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

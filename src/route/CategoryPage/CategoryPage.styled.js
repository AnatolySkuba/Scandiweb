import styled from "styled-components";

export const CategoryName = styled.h2`
	padding-top: 160px;
	margin: 0 0 103px 0;
	font-style: normal;
	font-weight: 400;
	font-size: 42px;
	line-height: 160%;
	color: #1d1f22;
`;

export const ProductList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, calc(386 / 1440 * 100vw));
	grid-gap: calc(40 / 1440 * 100vw);
	padding: 0;
	margin: 0;
	@media screen and (max-width: calc((270 / 386  * 242 + 386 * 2) * 1px )) {
		grid-template-columns: repeat(2, calc(386 / calc(270 / 386 * 242 + 386 * 2) * 100vw));
		grid-gap: calc(40 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
	}
	@media screen and (max-width: calc((270 / 386  * 202 + 386) * 1px )) {
		grid-template-columns: repeat(1, calc(386 / calc(270 / 386 * 202 + 386) * 100vw));
		grid-gap: calc(40 / calc(270 / 386 * 202 + 386) * 100vw);
	}
	@media screen and (min-width: 1440px) {
		grid-template-columns: repeat(3, 386px);
		grid-gap: 40px;
	}
`;

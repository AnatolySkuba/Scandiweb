import styled from "styled-components";

export const CategoryName = styled.h2`
	padding-top: calc(160 / 1440 * 100vw);
	margin-bottom: calc(103 / 1440 * 100vw);
	font-weight: 400;
	font-size: calc(42 / 1440 * 100vw);
	line-height: 160%;

	@media screen and (max-width: 1029px) {
		padding-top: 114px;
		font-size: 30px;
	}

	@media screen and (min-width: 1440px) {
		margin-bottom: 103px;
		padding-top: 160px;
		font-size: 42px;
	}
`;

export const CategoryList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, calc(386 / 1440 * 100vw));
	grid-gap: calc(40 / 1440 * 100vw);

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

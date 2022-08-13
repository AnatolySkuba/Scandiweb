import styled from "styled-components";

export const CategoryName = styled.h2`
	margin-bottom: calc(103 / 1440 * 100vw);
	padding-top: calc(160 / 1440 * 100vw);
	font-weight: 400;
	font-size: calc(42 / 1440 * 100vw);
	line-height: 160%;

	@media (max-width: 1029px) {
		padding-top: 114px;
		font-size: 30px;
	}

	@media (min-width: 1440px) {
		margin-bottom: 103px;
		padding-top: 160px;
		font-size: 42px;
	}
`;

export const ProductList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, calc(386 / 1440 * 100vw));
	grid-gap: calc(40 / 1440 * 100vw);
	list-style-type: none;

	@media (max-width: 941px) {
		grid-template-columns: repeat(2, calc(386 / 941 * 100vw));
		grid-gap: calc(40 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		grid-template-columns: repeat(1, calc(386 / 527 * 100vw));
		grid-gap: calc(40 / 527 * 100vw);
	}

	@media (min-width: 1440px) {
		grid-template-columns: repeat(3, 386px);
		grid-gap: 40px;
	}
`;

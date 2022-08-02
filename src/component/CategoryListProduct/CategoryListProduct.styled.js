import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductItem = styled.li`
	width: calc(386 / 1440 * 100vw);
	max-width: 386px;
	height: calc(444 / 1440 * 100vw);
	max-height: 444px;
	opacity: ${({ inStock }) => (inStock ? "1" : "0.5")};

	@media screen and (max-width: calc((270 / 386  * 242 + 386 * 2) * 1px )) {
		width: calc(386 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
		height: calc(444 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
	}

	@media screen and (max-width: calc((270 / 386  * 202 + 386) * 1px )) {
		width: calc(386 / calc(270 / 386 * 202 + 386) * 100vw);
		height: calc(444 / calc(270 / 386 * 202 + 386) * 100vw);
		margin: 0 calc(20 / calc(270 / 386 * 202 + 386) * 100vw);
	}

	&:hover {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`;

export const ProductLink = styled(Link)`
	position: relative;
	display: block;
	width: calc(386 / 1440 * 100vw);
	max-width: 386px;
	height: calc(444 / 1440 * 100vw);
	max-height: 444px;
	padding: calc(16 / 1440 * 100vw);

	@media screen and (max-width: calc((270 / 386  * 242 + 386 * 2) * 1px )) {
		width: calc(386 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
		height: calc(444 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
		padding: calc(16 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
	}

	@media screen and (max-width: calc((270 / 386  * 202 + 386) * 1px )) {
		width: calc(386 / calc(270 / 386 * 202 + 386) * 100vw);
		height: calc(444 / calc(270 / 386 * 202 + 386) * 100vw);
		padding: calc(16 / calc(270 / 386 * 202 + 386) * 100vw);
		margin: 0 calc(20 / calc(270 / 386 * 202 + 386) * 100vw);
	}

	@media screen and (min-width: 1440px) {
		padding: 16px;
	}
`;

export const ProductImage = styled.img`
	display: block;
	width: calc(354 / 1440 * 100vw);
	max-width: 354px;
	height: calc(330 / 1440 * 100vw);
	max-height: 330px;
	object-fit: contain;

	@media screen and (max-width: calc((270 / 386  * 242 + 386 * 2) * 1px )) {
		width: calc(354 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
		height: calc(330 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
	}

	@media screen and (max-width: calc((270 / 386  * 202 + 386) * 1px )) {
		width: calc(354 / calc(270 / 386 * 202 + 386) * 100vw);
		height: calc(330 / calc(270 / 386 * 202 + 386) * 100vw);
	}
`;

export const ProductName = styled.h3`
	margin-top: calc(24 / 1440 * 100vw);
	font-weight: 300;
	font-size: calc(18 / 1440 * 100vw);
	line-height: 160%;

	@media screen and (max-width: calc((270 / 386  * 242 + 386 * 2) * 1px )) {
		font-size: calc(18 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
		margin-top: calc(24 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
	}

	@media screen and (max-width: calc((270 / 386  * 202 + 386) * 1px )) {
		font-size: calc(18 / calc(270 / 386 * 202 + 386) * 100vw);
		margin-top: calc(24 / calc(270 / 386 * 202 + 386) * 100vw);
	}

	@media screen and (min-width: 1440px) {
		font-size: 18px;
		margin-top: 24px;
	}
`;

export const ProductPrice = styled.p`
	font-weight: 500;
	font-size: calc(18 / 1440 * 100vw);
	line-height: 160%;

	@media screen and (max-width: calc((270 / 386  * 242 + 386 * 2) * 1px )) {
		font-size: calc(18 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
	}

	@media screen and (max-width: calc((270 / 386  * 202 + 386) * 1px )) {
		font-size: calc(18 / calc(270 / 386 * 202 + 386) * 100vw);
	}

	@media screen and (min-width: 1440px) {
		font-size: 18px;
	}
`;

export const OutOfStock = styled.p`
	position: absolute;
	left: 50%;
	top: calc(338 / 444 * 50%);
	transform: translate(-50%, -50%);
	font-weight: 400;
	font-size: calc(24 / 1440 * 100vw);
	line-height: 38.4px;

	@media screen and (max-width: calc((270 / 386  * 242 + 386 * 2) * 1px )) {
		font-size: calc(24 / calc(270 / 386 * 242 + 386 * 2) * 100vw);
	}

	@media screen and (max-width: calc((270 / 386  * 202 + 386) * 1px )) {
		font-size: calc(24 / calc(270 / 386 * 202 + 386) * 100vw);
	}

	@media screen and (min-width: 1440px) {
		font-size: 24px;
	}
`;

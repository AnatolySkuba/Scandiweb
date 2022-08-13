import styled from "styled-components";

export const ProductItem = styled.li`
	width: calc(386 / 1440 * 100vw);
	max-width: 386px;
	height: calc(444 / 1440 * 100vw);
	max-height: 444px;
	opacity: ${({ inStock }) => (inStock ? "1" : "0.5")};

	@media (max-width: 941px) {
		width: calc(386 / 941 * 100vw);
		height: calc(444 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		width: calc(386 / 527 * 100vw);
		height: calc(444 / 527 * 100vw);
		margin: 0 calc(20 / 527 * 100vw);
	}

	&:hover {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`;

export const ProductLink = styled.a`
	position: relative;
	display: block;
	width: calc(386 / 1440 * 100vw);
	max-width: 386px;
	height: calc(444 / 1440 * 100vw);
	max-height: 444px;
	padding: calc(16 / 1440 * 100vw);
	cursor: pointer;

	@media (max-width: 941px) {
		width: calc(386 / 941 * 100vw);
		height: calc(444 / 941 * 100vw);
		padding: calc(16 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		width: calc(386 / 527 * 100vw);
		height: calc(444 / 527 * 100vw);
		padding: calc(16 / 527 * 100vw);
	}

	@media (min-width: 1440px) {
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

	@media (max-width: 941px) {
		width: calc(354 / 941 * 100vw);
		height: calc(330 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		width: calc(354 / 527 * 100vw);
		height: calc(330 / 527 * 100vw);
	}

	a:hover &,
	a:focus & {
		opacity: 0.1;
	}
`;

export const ProductThumb = styled.div`
	position: absolute;
	top: calc(16 / 1440 * 100vw);
	overflow: hidden;
	display: block;
	width: calc(354 / 1440 * 100vw);
	max-width: 354px;
	height: calc(330 / 1440 * 100vw);
	max-height: 330px;

	@media (max-width: 941px) {
		width: calc(354 / 941 * 100vw);
		height: calc(330 / 941 * 100vw);
		top: calc(16 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		width: calc(354 / 527 * 100vw);
		height: calc(330 / 527 * 100vw);
		top: calc(16 / 527 * 100vw);
	}
`;

export const ProductOrder = styled.div`
	position: absolute;
	top: calc(16 / 1440 * 100vw);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: calc(354 / 1440 * 100vw);
	max-width: 354px;
	height: calc(330 / 1440 * 100vw);
	max-height: 330px;
	transform: translateY(101%);
	transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

	@media (max-width: 941px) {
		width: calc(354 / 941 * 100vw);
		height: calc(330 / 941 * 100vw);
		top: calc(16 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		width: calc(354 / 527 * 100vw);
		height: calc(330 / 527 * 100vw);
		top: calc(16 / 527 * 100vw);
	}

	a:hover &,
	a:focus & {
		transform: translateY(-5%);
	}
`;

export const Button = styled.button`
	padding: calc(16 / 1440 * 100vw) 0;
	width: calc(354 / 1440 * 100vw);
	font-weight: 600;
	font-size: calc(16 / 1440 * 100vw);
	line-height: 120%;
	color: #fff;
	background-color: var(--accent-color);
	border: 0;
	cursor: pointer;
	display: ${({ inStock }) => (inStock ? "default" : "none")};

	@media (max-width: 941px) {
		font-size: calc(16 / 941 * 100vw);
		padding: calc(16 / 941 * 100vw) 0;
		width: calc(354 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		font-size: calc(16 / 527 * 100vw);
		padding: calc(16 / 527 * 100vw) 0;
		width: calc(354 / 527 * 100vw);
	}

	@media (min-width: 1440px) {
		font-size: 16px;
		padding: 16px 0;
		width: 354px;
	}
`;

export const ProductName = styled.h3`
	margin-top: calc(24 / 1440 * 100vw);
	font-weight: 300;
	font-size: calc(18 / 1440 * 100vw);
	line-height: 160%;

	@media (max-width: 941px) {
		font-size: calc(18 / 941 * 100vw);
		margin-top: calc(24 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		font-size: calc(18 / 527 * 100vw);
		margin-top: calc(24 / 527 * 100vw);
	}

	@media (min-width: 1440px) {
		font-size: 18px;
		margin-top: 24px;
	}
`;

export const ProductPrice = styled.p`
	font-weight: 500;
	font-size: calc(18 / 1440 * 100vw);
	line-height: 160%;

	@media (max-width: 941px) {
		font-size: calc(18 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		font-size: calc(18 / 527 * 100vw);
	}

	@media (min-width: 1440px) {
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

	@media (max-width: 941px) {
		font-size: calc(24 / 941 * 100vw);
	}

	@media (max-width: 527px) {
		font-size: calc(24 / 527 * 100vw);
	}

	@media (min-width: 1440px) {
		font-size: 24px;
	}

	a:hover &,
	a:focus & {
		opacity: 0.1;
	}
`;

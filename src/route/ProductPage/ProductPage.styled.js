import styled from "styled-components";

export const GalleryList = styled.ul`
	height: 511px;
	width: 79px;
	min-inline-size: max-content;
	display: block;
	list-style-type: none;
	overflow: auto;
	::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 1190px) {
		height: calc(511 / 1190 * 100vw);
	}

	@media (max-width: 720px) {
		margin: auto;
	}
`;

export const GalleryItem = styled.li`
	width: 79px;
	height: 80px;
	cursor: pointer;

	&: not(: last-child) {
		margin-bottom: 40px;
	} ;
`;

export const GalleryImages = styled.img`
	width: 79px;
	height: 80px;
	object-fit: contain;
`;

export const Box = styled.div`
	position: relative;
	height: 511px;

	@media (max-width: 1190px) {
		height: calc(511 / 1190 * 100vw);
	}
`;

export const ImageMain = styled.img`
	margin: 0 calc(100 / 1440 * 25vw) 0 calc(40 / 1190 * 50vw);
	width: 610px;
	height: 511px;
	object-fit: contain;

	@media (max-width: 1190px) {
		width: calc(610 / 1190 * 90vw);
		height: calc(511 / 1190 * 90vw);
	}

	@media (min-width: 1300px) {
		margin: 0 100px 0 40px;
	}
`;

export const ProductDescription = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 720px) {
		margin: auto;
	}
`;

export const Brand = styled.h3`
	margin-bottom: 16px;
	font-weight: 600;
	font-size: 30px;
	line-height: 27px;

	@media (max-width: 1024px) {
		font-size: calc(30 / 1024 * 100vw);
	}

	@media (max-width: 720px) {
		margin-top: 16px;
		font-size: 30px;
	}
`;

export const Name = styled.p`
	margin-bottom: 19px;
	font-weight: 400;
	font-size: 30px;
	line-height: 27px;

	@media (max-width: 1024px) {
		font-size: calc(30 / 1024 * 100vw);
	}

	@media (max-width: 720px) {
		margin-bottom: 10px;
		font-size: 30px;
	}
`;

export const Price = styled.p`
	margin: 38px 0 10px;
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;

	@media (max-width: 1024px) {
		font-size: calc(18 / 1024 * 100vw);
	}

	@media (max-width: 720px) {
		margin: 18px 0 10px;
		font-size: 18px;
	}
`;

export const PriceValue = styled.p`
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 24px;
	line-height: 18px;

	@media (max-width: 1024px) {
		font-size: calc(24 / 1024 * 100vw);
	}

	@media (max-width: 720px) {
		font-size: 24px;
	}
`;

export const Button = styled.button`
	margin-bottom: 40px;
	height: 52px;
	font-weight: 600;
	font-size: 16px;
	line-height: 120%;
	color: #fff;
	background-color: var(--accent-color);
	border: 0;

	@media (max-width: 720px) {
		margin-bottom: 20px;
	}
`;

export const Description = styled.p`
	position: absolute;
	top: 55vw;
	left: 0;
	font-weight: 400;
	font-size: 16px;
	line-height: 159.96%;

	@media (max-width: 1024px) {
		top: 591px;
	}

	@media (max-width: 720px) {
		position: static;
		width: 292px;
	}

	@media (min-width: 1440px) {
		position: static;
		width: 292px;
	}
`;

export const Container = styled.section`
	position: relative;
	display: flex;
	padding-top: calc(160 / 1440 * 100vw);
	opacity: ${({ inStock }) => (inStock ? "1" : "0.5")};

	@media (max-width: 1024px) {
		padding-top: 114px;
	}

	@media (max-width: 720px) {
		flex-wrap: wrap;
	}

	@media (min-width: 1440px) {
		padding-top: 160px;
	}

	${Button} {
		cursor: ${({ inStock }) => (inStock ? "pointer" : "default")};
	}
`;

export const OutOfStock = styled.p`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-weight: 400;
	font-size: calc(24 / 1440 * 100vw);
	line-height: 38.4px;

	@media (min-width: 1300px) {
		margin-left: -40px;
		font-size: 24px;
	}
`;

import styled from "styled-components";

export const Container = styled.section`
	padding-top: 80px;
`;

export const Cart = styled.h2`
	padding-top: 80px;
	margin-bottom: 55px;
	font-weight: 700;
	font-size: 32px;
	line-height: 40px;

	@media screen and (max-width: 1024px) {
		font-size: calc(32 / 1024 * 100vw);
		padding-top: calc(80 / 1024 * 100vw);
		margin-bottom: calc(55 / 1024 * 100vw);
	}

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export const Products = styled.ul`
	margin-bottom: 32px;
`;

export const TaxQuantity = styled.p`
	margin-bottom: 8px;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;

	@media screen and (max-width: 1024px) {
		font-size: calc(24 / 1024 * 100vw);
	}

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const Total = styled.p`
	margin-bottom: 16px;
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;

	@media screen and (max-width: 1024px) {
		font-size: calc(24 / 1024 * 100vw);
	}

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const TaxQuantityValue = styled.span`
	margin-bottom: 8px;
	font-weight: 700;
	font-size: 24px;
	line-height: 24px;

	@media screen and (max-width: 1024px) {
		font-size: calc(24 / 1024 * 100vw);
	}

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const Order = styled.button`
	width: 279px;
	height: 43px;
	font-weight: 600;
	font-size: 14px;
	line-height: 120%;
	color: white;
	background-color: var(--accent-color);
	border: none;
	cursor: pointer;
`;

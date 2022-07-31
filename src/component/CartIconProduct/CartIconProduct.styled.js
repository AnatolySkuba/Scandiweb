import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 293px;
	min-height: 190px;

	&: not(: last-child) {
		margin-bottom: 40px;
	}
`;

export const ContainerDescription = styled.div`
	width: 136px;
	min-height: 190px;
`;

export const BrandName = styled.h3`
	margin-bottom: 4px;
	font-weight: 300;
	font-size: 16px;
	line-height: 160%;
`;

export const PriceValue = styled.p`
	margin-bottom: 8px;
	font-weight: 500;
	font-size: 16px;
	line-height: 160%;
`;

export const ContainerCounter = styled.div`
	margin: 0 8px 0 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 24px;
	min-height: 190px;
`;

export const HandleButton = styled.div`
	width: 24px;
	height: 24px;
	font-weight: 500;
	font-size: 15px;
	line-height: 160%;
	text-align: center;
	border: 1px solid var(--main-text-color);
	cursor: pointer;
`;

export const Image = styled.img`
	width: 121px;
	height: 190px;
	object-fit: contain;
`;

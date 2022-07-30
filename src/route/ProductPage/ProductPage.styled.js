import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	padding-top: 160px;
`;

export const GalleryList = styled.ul`
	height: 511px;
	width: 79px;
	display: block;
	overflow: auto;
	::-webkit-scrollbar {
		display: none;
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

export const ImageMain = styled.img`
	margin: 0 100px 0 40px;
	width: 610px;
	height: 511px;
	object-fit: contain;
`;

export const ProductDescription = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Brand = styled.h3`
	margin-bottom: 16px;
	font-weight: 600;
	font-size: 30px;
	line-height: 27px;
`;

export const Name = styled.p`
	margin-bottom: 19px;
	font-weight: 400;
	font-size: 30px;
	line-height: 27px;
`;

export const Price = styled.p`
	margin: 38px 0 10px;
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;
`;

export const PriceValue = styled.p`
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 24px;
	line-height: 18px;
`;

export const Button = styled.button`
	margin-bottom: 40px;
	width: 292px;
	height: 52px;
	font-weight: 600;
	font-size: 16px;
	line-height: 120%;
	color: #fff;
	background-color: var(--accent-color);
	border: 0;
	cursor: pointer;
`;

export const Description = styled.p`
	width: 292px;
	font-weight: 400;
	font-size: 16px;
	line-height: 159.96%;
`;

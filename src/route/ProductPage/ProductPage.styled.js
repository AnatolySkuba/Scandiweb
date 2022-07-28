import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	padding-top: 160px;
`;

export const ProductGallery = styled.ul`
	height: 511px;
	width: 79px;
	padding: 0;
	display: block;
	overflow: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const ProductItem = styled.li`
	width: 79px;
	padding: 0;
	height: 80px;
	margin-bottom: 40px;
	cursor: pointer;
`;

export const ProductImages = styled.img`
	width: 79px;
	height: 80px;
	object-fit: contain;
`;

export const ProductImage = styled.img`
	margin: 0 100px 0 40px;
	width: 610px;
	height: 511px;
	object-fit: contain;
`;

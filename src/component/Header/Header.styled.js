import styled from "styled-components";

export const Container = styled.header`
	position: fixed;
	width: 100%;
	max-width: 1440px;
	padding: 0 calc(101 / 1440 * 100vw);
	margin: 0 0 0 calc(101 / 1440 * -100vw);
	height: 80px;
	display: flex;
	align-items: center;
	background-color: white;
	z-index: 111;
`;

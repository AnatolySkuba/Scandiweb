import styled from "styled-components";

export const Attributes = styled.ul``;

export const Attribute = styled.li``;

export const Name = styled.p`
	margin: 10px 0 8px;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
`;

export const Items = styled.ul`
	display: flex;
`;

export const Item = styled.li`
	min-width: 24px;
	height: 24px;
	font-weight: 400;
	font-size: 14px;
	line-height: 160%;
	text-align: center;
	border: 1px solid var(--main-text-color);
	background-color: ${({ name, value, currentAttributes }) =>
		currentAttributes.some(
			currentAttribute => Object.keys(currentAttribute)[0] === name && Object.values(currentAttribute)[0] === value,
		) && "var(--main-text-color)"};
	color: ${({ name, value, currentAttributes }) =>
		currentAttributes.some(
			currentAttribute => Object.keys(currentAttribute)[0] === name && Object.values(currentAttribute)[0] === value,
		) && "white"};

	&: not(: last-child) {
		margin-right: 12px;
	}
`;

export const ItemSwatch = styled.li`
	width: 16px;
	height: 16px;
	background-color: ${({ value }) => value};
	border: ${({ value }) => value === "#FFFFFF" && "1px solid var(--main-text-color)"};
	outline-offset: 1px;
	outline: ${({ name, value, currentAttributes }) =>
		currentAttributes.some(
			currentAttribute => Object.keys(currentAttribute)[0] === name && Object.values(currentAttribute)[0] === value,
		) && "1px solid var(--accent-color)"};

	&: not(: last-child) {
		margin-right: 12px;
	}

	&:hover::after {
		display: inline-block;
		margin-top: 16px;
		font-size: 14px;
		color: ${({ value }) => (value === "#FFFFFF" ? "var(--main-text-color)" : value)};
		content: "${({ displayValue }) => displayValue}";
	}
`;

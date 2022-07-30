import styled from "styled-components";

export const Attributes = styled.ul``;

export const Attribute = styled.li``;

export const Name = styled.p`
	margin: 24px 0 8px;
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;
`;

export const Items = styled.ul`
	display: flex;
`;

export const Item = styled.li`
	width: 63px;
	height: 45px;
	font-weight: 400;
	font-size: 16px;
	text-align: center;
	line-height: 45px;
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

	&:hover {
		cursor: pointer;
	}
`;

export const ItemSwatch = styled.li`
	width: 32px;
	height: 32px;
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

	&:hover {
		cursor: pointer;
	}

	&:hover::after {
		display: inline-block;
		margin-top: 32px;
		font-size: 15px;
		color: ${({ value }) => (value === "#FFFFFF" ? "var(--main-text-color)" : value)};
		content: "${({ displayValue }) => displayValue}";
	}
`;

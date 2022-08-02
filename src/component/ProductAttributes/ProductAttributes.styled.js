import styled from "styled-components";

export const Name = styled.p``;

export const Items = styled.ul`
	display: flex;
`;

export const Item = styled.li`
	font-weight: 400;
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

export const Attribute = styled.li`
	${Name} {
		margin: ${props => (props.origin === "page" ? "16px 0 10px" : "10px 0 8px")};
		font-weight: ${props => (props.origin === "page" ? "700" : "400")};
		font-size: ${props => (props.origin === "page" ? "18px" : "14px")};
		line-height: ${props => (props.origin === "page" ? "18px" : "16px")};

		@media screen and (max-width: 1024px) {
			margin: ${props =>
				props.origin === "page" ? "calc(16 / 1024 * 100vw) 0 calc(10 / 1024 * 100vw)" : "10px 0 8px"};
		}
	}

	${Item} {
		min-width: ${props => (props.origin === "page" ? "63px" : "24px")};
		height: ${props => (props.origin === "page" ? "45px" : "24px")};
		font-size: ${props => (props.origin === "page" ? "16px" : "14px")};
		line-height: ${props => (props.origin === "page" ? "45px" : "160%")};

		@media screen and (max-width: 1024px) {
			min-width: ${props => (props.origin === "page" ? "calc(63 / 1024 * 100vw)" : "24px")};
			height: ${props => (props.origin === "page" ? "calc(45 / 1024 * 100vw)" : "24px")};
			font-size: ${props => (props.origin === "page" ? "calc(16 / 1024 * 100vw)" : "14px")};
			line-height: ${props => (props.origin === "page" ? "calc(45 / 1024 * 100vw)" : "160%")};
		}
	}

	${ItemSwatch} {
		width: ${props => (props.origin === "page" ? "32px" : "16px")};
		height: ${props => (props.origin === "page" ? "32px" : "16px")};
		font-size: ${props => (props.origin === "page" ? "16px" : "14px")};

		&:hover::after {
			margin-top: ${props => (props.origin === "page" ? "32px" : "16px")};
		}

		@media screen and (max-width: 1024px) {
			width: ${props => (props.origin === "page" ? "calc(32 / 1024 * 100vw)" : "16px")};
			height: ${props => (props.origin === "page" ? "calc(32 / 1024 * 100vw)" : "16px")};
		}
	}
`;

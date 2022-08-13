import styled from "styled-components";

export const List = styled.ul`
	list-style-type: none;
`;

export const Name = styled.p``;

export const Items = styled.ul`
	display: flex;
	list-style-type: none;
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
		margin-top: calc(16 / 1440 * 100vw);
		font-size: calc(14 / 1440 * 100vw);
		color: ${({ value }) => (value === "#FFFFFF" ? "var(--main-text-color)" : value)};
		content: "${({ displayValue }) => displayValue}";

		@media (max-width: 941px) {
			margin-top: calc(16 / 941 * 100vw);
			font-size: calc(14 / 941 * 100vw);
		}

		@media (max-width: 527px) {
			margin-top: calc(16 / 527 * 100vw);
			font-size: calc(14 / 527 * 100vw);
		}

		@media (min-width: 1440px) {
			margin-top: 16px;
			font-size: 14px;
		}
	}
`;

export const Attribute = styled.li`
	${Name} {
		margin: ${props => (props.origin === "page" ? "calc(14 / 1440 * 100vw) 0 calc(6 / 1440 * 100vw)" : "10px 0 8px")};
		font-weight: ${props => (props.origin === "page" ? "700" : "400")};
		font-size: ${props => (props.origin === "page" ? "calc(18 / 1440 * 100vw)" : "14px")};
		line-height: ${props => (props.origin === "page" ? "18px" : "16px")};

		@media (max-width: 941px) {
			margin: ${props => (props.origin === "page" ? "calc(14 / 941 * 100vw) 0 calc(6 / 941 * 100vw)" : "10px 0 8px")};
			font-size: ${props => (props.origin === "page" ? "calc(18 / 941 * 100vw)" : "14px")};
		}

		@media (max-width: 527px) {
			margin: ${props => (props.origin === "page" ? "calc(14 / 527 * 100vw) 0 calc(6 / 527 * 100vw)" : "10px 0 8px")};
			font-size: ${props => (props.origin === "page" ? "calc(18 / 527 * 100vw)" : "14px")};
		}

		@media (min-width: 1440px) {
			margin: ${props => (props.origin === "page" ? "16px 0 10px" : "10px 0 8px")};
			font-size: ${props => (props.origin === "page" ? "18px" : "14px")};
		}
	}

	${Item} {
		min-width: ${props => (props.origin === "page" ? "calc(63 / 1440 * 100vw)" : "24px")};
		height: ${props => (props.origin === "page" ? "calc(35 / 1440 * 100vw)" : "24px")};
		font-size: ${props => (props.origin === "page" ? "calc(16 / 1440 * 100vw)" : "14px")};
		line-height: ${props => (props.origin === "page" ? "calc(35 / 1440 * 100vw)" : "160%")};
		cursor: ${props => (props.origin === "page" ? "pointer" : "default")};

		@media (max-width: 941px) {
			min-width: ${props => (props.origin === "page" ? "calc(63 / 941 * 100vw)" : "24px")};
			height: ${props => (props.origin === "page" ? "calc(35 / 941 * 100vw)" : "24px")};
			font-size: ${props => (props.origin === "page" ? "calc(16 / 941 * 100vw)" : "14px")};
			line-height: ${props => (props.origin === "page" ? "calc(35 / 941 * 100vw)" : "160%")};
		}

		@media (max-width: 527px) {
			min-width: ${props => (props.origin === "page" ? "calc(63 / 527 * 100vw)" : "24px")};
			height: ${props => (props.origin === "page" ? "calc(35 / 527 * 100vw)" : "24px")};
			font-size: ${props => (props.origin === "page" ? "calc(16 / 527 * 100vw)" : "14px")};
			line-height: ${props => (props.origin === "page" ? "calc(35 / 527 * 100vw)" : "160%")};
		}

		@media (min-width: 1440px) {
			min-width: ${props => (props.origin === "page" ? "63px" : "24px")};
			height: ${props => (props.origin === "page" ? "45px" : "24px")};
			font-size: ${props => (props.origin === "page" ? "16px" : "14px")};
			line-height: ${props => (props.origin === "page" ? "45px" : "160%")};
		}
	}

	${ItemSwatch} {
		width: ${props => (props.origin === "page" ? "calc(32 / 1440 * 100vw)" : "16px")};
		height: ${props => (props.origin === "page" ? "calc(32 / 1440 * 100vw)" : "16px")};
		font-size: ${props => (props.origin === "page" ? "calc(16 / 1440 * 100vw)" : "14px")};
		cursor: ${props => (props.origin === "page" ? "pointer" : "default")};

		&:hover::after {
			margin-top: ${props => (props.origin === "page" ? "32px" : "16px")};
		}

		@media (max-width: 941px) {
			width: ${props => (props.origin === "page" ? "calc(32 / 941 * 100vw)" : "16px")};
			height: ${props => (props.origin === "page" ? "calc(32 / 941 * 100vw)" : "16px")};
			font-size: ${props => (props.origin === "page" ? "calc(16 / 941 * 100vw)" : "14px")};
		}

		@media (max-width: 527px) {
			width: ${props => (props.origin === "page" ? "calc(32 / 527 * 100vw)" : "16px")};
			height: ${props => (props.origin === "page" ? "calc(32 / 527 * 100vw)" : "16px")};
			font-size: ${props => (props.origin === "page" ? "calc(16 / 527 * 100vw)" : "14px")};
		}

		@media (min-width: 1440px) {
			width: ${props => (props.origin === "page" ? "32px" : "16px")};
			height: ${props => (props.origin === "page" ? "32px" : "16px")};
			font-size: ${props => (props.origin === "page" ? "16px" : "14px")};
		}
	}
`;

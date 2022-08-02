import styled from "styled-components";
import { ReactComponent as Svg } from "style/icons/arrow.svg";

export const ContainerDescription = styled.div`
	margin-inline-end: auto;
`;

export const Brand = styled.h3``;

export const Name = styled.h3``;

export const PriceValue = styled.p``;

export const ContainerCounter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const HandleButton = styled.div`
	font-weight: 500;
	line-height: ${props => (props.children === "+" ? "160%" : "135%")};
	text-align: center;
	border: 1px solid var(--main-text-color);
	cursor: pointer;
`;

export const Box = styled.div`
	position: relative;
`;

export const Image = styled.img`
	object-fit: contain;
`;

export const ArrowLeft = styled(Svg)`
	transform: rotate(90deg);
	position: absolute;
	padding: 6px;
	width: 24px;
	height: 24px;
	bottom: 16px;
	right: 48px;
	stroke: white;
	background-color: rgba(0, 0, 0, 0.73);
	cursor: pointer;
`;

export const ArrowRight = styled(Svg)`
	transform: rotate(-90deg);
	position: absolute;
	padding: 6px;
	width: 24px;
	height: 24px;
	bottom: 16px;
	right: 16px;
	stroke: white;
	background-color: rgba(0, 0, 0, 0.73);
	cursor: pointer;
`;

export const Container = styled.li`
	display: flex;
	padding: ${props => (props.origin === "page" ? "24px 0" : "0")};
	width: ${props => (props.origin === "page" ? "100%" : "293px")};
	border-top: ${props => (props.origin === "page" ? "1px solid #e5e5e5" : "0")};
	min-height: ${props => (props.origin === "page" ? "100px" : "190px")};

	&: not(: last-child) {
		margin-bottom: ${props => (props.origin === "page" ? "0" : "40px")};
	}

	&: last-child {
		border-bottom: ${props => (props.origin === "page" ? "1px solid #e5e5e5" : "0")};
	}

	@media screen and (max-width: 1024px) {
		padding: ${props => (props.origin === "page" ? "calc(24 / 1024 * 100vw) 0" : "0")};
	}

	${ContainerDescription} {
		width: ${props => (props.origin === "page" ? "" : "136px")};
		min-height: ${props => (props.origin === "page" ? "100px" : "190px")};
	}

	${Brand} {
		font-weight: ${props => (props.origin === "page" ? "600" : "300")};
		font-size: ${props => (props.origin === "page" ? "30px" : "16px")};
		line-height: ${props => (props.origin === "page" ? "27px" : "160%")};

		@media screen and (max-width: 1024px) {
			font-size: ${props => (props.origin === "page" ? "calc(30 / 1024 * 100vw)" : "16px")};
		}
	}

	${Name} {
		margin: ${props => (props.origin === "page" ? "calc(16 / 1440 * 100vw) 0 calc(20 / 1440 * 100vw)" : "0 0 4px")};
		font-weight: ${props => (props.origin === "page" ? "400" : "300")};
		font-size: ${props => (props.origin === "page" ? "30px" : "16px")};
		line-height: ${props => (props.origin === "page" ? "27px" : "160%")};

		@media screen and (max-width: 1024px) {
			font-size: ${props => (props.origin === "page" ? "calc(30 / 1024 * 100vw)" : "16px")};
		}

		@media screen and (min-width: 1440px) {
			margin: ${props => (props.origin === "page" ? "16px 0 20px" : "0 0 4px")};
		}
	}

	${PriceValue} {
		margin-bottom: ${props => (props.origin === "page" ? "calc(20 / 1440 * 100vw)" : "8px")};
		font-weight: ${props => (props.origin === "page" ? "700" : "500")};
		font-size: ${props => (props.origin === "page" ? "24px" : "16px")};
		line-height: ${props => (props.origin === "page" ? "24px" : "160%")};

		@media screen and (max-width: 1024px) {
			font-size: ${props => (props.origin === "page" ? "calc(24 / 1024 * 100vw)" : "16px")};
		}

		@media screen and (min-width: 1440px) {
			margin: ${props => (props.origin === "page" ? "16px 0 20px" : "0 0 4px")};
		}
	}

	${ContainerCounter} {
		margin: ${props => (props.origin === "page" ? "0 24px 0 0" : "0 8px 0 4px")};
		width: ${props => (props.origin === "page" ? "45px" : "24px")};
		min-height: ${props => (props.origin === "page" ? "100px" : "190px")};
	}

	${HandleButton} {
		width: ${props => (props.origin === "page" ? "45px" : "24px")};
		height: ${props => (props.origin === "page" ? "45px" : "24px")};
		font-size: ${props => (props.origin === "page" ? "20px" : "15px")};
		line-height: ${props => (props.origin === "page" ? "43px" : "")};

		@media screen and (max-width: 1024px) {
			width: ${props => (props.origin === "page" ? "calc(45 / 1024 * 100vw)" : "24px")};
			height: ${props => (props.origin === "page" ? "calc(45 / 1024 * 100vw)" : "24px")};
			line-height: ${props => (props.origin === "page" ? "calc(43 / 1024 * 100vw)" : "")};
		}
	}

	${Image} {
		width: ${props => (props.origin === "page" ? "200px" : "121px")};
		height: ${props => (props.origin === "page" ? "288px" : "190px")};
		align-self: center;

		@media screen and (max-width: 1024px) {
			width: ${props => (props.origin === "page" ? "calc(200 / 1024 * 100vw)" : "121px")};
			height: ${props => (props.origin === "page" ? "calc(288 / 1024 * 100vw)" : "190px")};
		}
	}
`;

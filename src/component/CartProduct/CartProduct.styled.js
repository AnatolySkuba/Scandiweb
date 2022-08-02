import styled from "styled-components";

export const ContainerDescription = styled.div`
	min-height: 190px;
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
	min-height: 190px;
`;

export const HandleButton = styled.div`
	font-weight: 500;
	line-height: ${props => (props.children === "+" ? "160%" : "135%")};
	text-align: center;
	border: 1px solid var(--main-text-color);
	cursor: pointer;
`;

export const Image = styled.img`
	object-fit: contain;
`;

export const Container = styled.li`
	display: flex;
	padding: ${props => (props.origin === "page" ? "24px 0" : "0")};
	width: ${props => (props.origin === "page" ? "100%" : "293px")};
	min-height: 190px;
	border-top: ${props => (props.origin === "page" ? "1px solid #e5e5e5" : "0")};

	&: not(: last-child) {
		margin-bottom: ${props => (props.origin === "page" ? "0" : "40px")};
	}

	&: last-child {
		border-bottom: ${props => (props.origin === "page" ? "1px solid #e5e5e5" : "0")};
	}

	${ContainerDescription} {
		width: ${props => (props.origin === "page" ? "" : "136px")};
	}

	${Brand} {
		font-weight: ${props => (props.origin === "page" ? "600" : "300")};
		font-size: ${props => (props.origin === "page" ? "30px" : "16px")};
		line-height: ${props => (props.origin === "page" ? "27px" : "160%")};
	}

	${Name} {
		margin: ${props => (props.origin === "page" ? "16px 0 20px" : "0 0 4px")};
		font-weight: ${props => (props.origin === "page" ? "400" : "300")};
		font-size: ${props => (props.origin === "page" ? "30px" : "16px")};
		line-height: ${props => (props.origin === "page" ? "27px" : "160%")};
	}

	${PriceValue} {
		margin-bottom: ${props => (props.origin === "page" ? "20px" : "8px")};
		font-weight: ${props => (props.origin === "page" ? "700" : "500")};
		font-size: ${props => (props.origin === "page" ? "24px" : "16px")};
		line-height: ${props => (props.origin === "page" ? "24px" : "160%")};
	}

	${ContainerCounter} {
		margin: ${props => (props.origin === "page" ? "0 24px 0 0" : "0 8px 0 4px")};
		width: ${props => (props.origin === "page" ? "45px" : "24px")};
	}

	${HandleButton} {
		width: ${props => (props.origin === "page" ? "45px" : "24px")};
		height: ${props => (props.origin === "page" ? "45px" : "24px")};
		font-size: ${props => (props.origin === "page" ? "20px" : "15px")};
		line-height: ${props => (props.origin === "page" ? "43px" : "")};
	}

	${Image} {
		width: ${props => (props.origin === "page" ? "200px" : "121px")};
		height: ${props => (props.origin === "page" ? "288px" : "190")};
	}
`;

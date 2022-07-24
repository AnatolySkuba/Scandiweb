import styled from "styled-components";

export const NavContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100vw;
	justify-content: flex-start;
	align-items: center;
	flex: 0;
	padding-top: 24px;
`;

export const HeaderContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 80px;
	left: 0px;
	top: 0px;
	margin-bottom: 80px;
`;

export const CurrencySelect = styled.div`
	border: none;
	outline: none;
	font-family: Raleway;
	font-weight: 500;
	font-size: 18px;
	position: relative;
	background-color: #ffffff;
	cursor: pointer;
	user-select: none;
	margin: 10px;
	cursor: pointer;
	user-select: none;

	#options {
		display: flex;
		flex-direction: column;
		width: 8vw;
		padding: 20px 2vw 20px 1vw;
		gap: 10px;
		position: absolute;
		left: -2vw;
		top: 50px;
		margin-right: 10px;

		box-shadow: ${props => (props.active ? "0px 4px 35px 0px #A8ACB030" : "")};

		span {
			display: block;
		}

		span:hover {
			color: #5ece7b;
		}
	}
	svg {
		width: 10px;
		height: 10px;
		margin-left: 10px;
	}
`;

export const CurrencyIn = styled.span`
	font-size: 18px;
	font-family: Raleway;
	margin-left: 10px;
	display: inline;
	height: 38px;
	width: 59px;
	svg {
		height: 14px;
		width: 10px;
		display: inline;
		display: inline;
		margin-left: 10px;
	}
`;
export const CartAndCurrency = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 30px;
	position: absolute;
	width: 204px;
	height: 40px;
	right: 101px;
	top: 23px;
`;

export const LogoContainer = styled.div`
	margin: 0 auto;
	display: flex;
	width: 41px;
	align-items: center;
	justify-content: center;
`;

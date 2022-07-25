import React from "react";
import { Link } from "react-router-dom";
import { LogoContainer } from "./styles/style-nav";
import { ReactComponent as LogoSvg } from "./svg/logo.svg";

class Logo extends React.PureComponent {
	render() {
		return (
			<LogoContainer id="logo-container">
				<Link to="/">
					<LogoSvg />
				</Link>
			</LogoContainer>
		);
	}
}

export default Logo;

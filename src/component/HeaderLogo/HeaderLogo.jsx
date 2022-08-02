import { PureComponent } from "react";

import { ReactComponent as LogoSvg } from "style/icons/logo.svg";
import { StyledLink } from "./HeaderLogo.styled";

class HeaderLogo extends PureComponent {
	render() {
		return (
			<StyledLink to="/">
				<LogoSvg />
			</StyledLink>
		);
	}
}

export default HeaderLogo;

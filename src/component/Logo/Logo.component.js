import { PureComponent } from "react";

import { ReactComponent as LogoSvg } from "style/icons/logo.svg";
import { StyledLink } from "./Logo.styled";

class Logo extends PureComponent {
	render() {
		return (
			<StyledLink to="/">
				<LogoSvg />
			</StyledLink>
		);
	}
}

export default Logo;

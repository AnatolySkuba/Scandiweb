import { PureComponent } from "react";
import { Outlet } from "react-router-dom";

import HeaderNavigation from "component/HeaderNavigation";
import HeaderLogo from "component/HeaderLogo";
import HeaderCurrencyIcon from "component/HeaderCurrencyIcon";
import HeaderCartIcon from "component/HeaderCartIcon";
import { Container } from "./Header.styled";

export class Header extends PureComponent {
	render() {
		return (
			<>
				<Container>
					<HeaderNavigation />
					<HeaderLogo />
					<HeaderCurrencyIcon />
					<HeaderCartIcon />
				</Container>

				<Outlet />
			</>
		);
	}
}

export default Header;

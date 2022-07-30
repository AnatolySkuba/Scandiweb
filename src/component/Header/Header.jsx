import { PureComponent } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "component/Navigation";
import Logo from "component/Logo";
import CurrencyIcon from "component/CurrencyIcon";
import CartIcon from "component/CartIcon";
import { Container } from "./Header.styled";

export class Header extends PureComponent {
	render() {
		return (
			<>
				<Container>
					<Navigation />
					<Logo />
					<CurrencyIcon />
					<CartIcon />
				</Container>

				<Outlet />
			</>
		);
	}
}

export default Header;

import { PureComponent } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "component/Navigation";
import Logo from "component/Logo";
import Currency from "component/Currency";
import Cart from "component/Cart";
import { Container } from "./Header.styled";

export class Header extends PureComponent {
	render() {
		return (
			<>
				<Container>
					<Navigation />
					<Logo />
					<Currency />
					<Cart />
				</Container>

				<Outlet />
			</>
		);
	}
}

export default Header;

import React, { Component } from "react";
import CartCurr from "./CartCurr";
import Categories from "./Categories";
import Logo from "./Logo";
import { HeaderContainer, NavContainer } from "./styles/style-nav";

export default class Navbar extends Component {
	render() {
		return (
			<HeaderContainer>
				<NavContainer>
					<Categories />
					<Logo />
					<CartCurr />
				</NavContainer>
			</HeaderContainer>
		);
	}
}

import React, { Component } from "react";
import Currency from "./Currency";
import { CartAndCurrency } from "./styles/style-nav";
import CartModal from "../cart/cart-overlay";

export default class CartCurr extends Component {
	render() {
		return (
			<>
				<CartAndCurrency>
					<Currency />
					<CartModal />
				</CartAndCurrency>
			</>
		);
	}
}

import { PureComponent } from "react";

import { ReactComponent as CartSvg } from "style/icons/cart.svg";
import { Container } from "./Cart.styled";

export class Cart extends PureComponent {
	render() {
		return (
			<Container>
				<CartSvg />
			</Container>
		);
	}
}

export default Cart;

import { PureComponent } from "react";

import { Container, Cart } from "./CartPage.styled";

export class CartPageContainer extends PureComponent {
	render() {
		return (
			<Container>
				<Cart>CART</Cart>
			</Container>
		);
	}
}

export default CartPageContainer;

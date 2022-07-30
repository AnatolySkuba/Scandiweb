import { PureComponent } from "react";
import { connect } from "react-redux";

import client from "query/apolloClient";
import GET_PRODUCT from "query/Product.query";
import {
	Container,
	CartSvg,
	Counter,
	BackDrop,
	Dropdown,
	DropdownProducts,
	Name,
	Products,
	Product,
	Total,
	TotalPrice,
	ViewBag,
	CheckOut,
} from "./CartIcon.styled";

const mapStateToProps = state => ({
	currentCurrency: state.cart.currentCurrency,
	products: state.cart.products,
});

export class CartIcon extends PureComponent {
	state = { dropdown: false };

	toggleDropdown() {
		this.setState(state => ({ dropdown: !state.dropdown }));
	}

	render() {
		const { currentCurrency, products } = this.props;
		const { dropdown } = this.state;
		console.log(this.props);

		return (
			<Container onClick={() => this.toggleDropdown()}>
				<CartSvg />
				<Counter>{products.length}</Counter>
				{dropdown && (
					<>
						<BackDrop dropdown={dropdown} />
						<Dropdown>
							<DropdownProducts>
								<Name>My Bag, {products.length} items</Name>
								<Products>
									<Product></Product>
								</Products>
								<Total>
									Total<TotalPrice>{currentCurrency}200.00</TotalPrice>
								</Total>
							</DropdownProducts>
							<ViewBag>VIEW BAG</ViewBag>
							<CheckOut>CHECK OUT</CheckOut>
						</Dropdown>
					</>
				)}
			</Container>
		);
	}
}

export default connect(mapStateToProps)(CartIcon);

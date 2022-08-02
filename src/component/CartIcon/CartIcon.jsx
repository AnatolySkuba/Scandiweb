import { PureComponent } from "react";
import { connect } from "react-redux";

import CartProduct from "component/CartProduct";
import {
	Container,
	CartSvg,
	Counter,
	BackDrop,
	Dropdown,
	DropdownProducts,
	Name,
	Products,
	Total,
	TotalPrice,
	Buttons,
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

		const totalAmount = products.reduce((total, product) => {
			product.prices.forEach(({ currency, amount }) => {
				if (currency.symbol === currentCurrency) {
					total = total + amount * product.quantity;
				}
			});
			return total;
		}, 0);

		const totalProducts = products.reduce((total, product) => {
			return total + product.quantity;
		}, 0);

		return (
			<Container onClick={() => this.toggleDropdown()}>
				<CartSvg />
				<Counter>{totalProducts}</Counter>
				{dropdown && (
					<>
						<BackDrop dropdown={dropdown} />
						<Dropdown onClick={() => this.toggleDropdown()}>
							<DropdownProducts>
								<Name>My Bag, {totalProducts} items</Name>
								<Products>
									{products.map(
										({ id, brand, name, prices, attributes, currentAttributes, image, quantity }, index) => (
											<CartProduct
												key={index}
												id={id}
												brand={brand}
												name={name}
												currentCurrency={currentCurrency}
												prices={prices}
												attributes={attributes}
												currentAttributes={currentAttributes}
												image={image}
												quantity={quantity}
											></CartProduct>
										),
									)}
								</Products>
								<Total>
									Total
									<TotalPrice>
										{currentCurrency}
										{totalAmount.toFixed(2)}
									</TotalPrice>
								</Total>
							</DropdownProducts>
							<Buttons>
								<ViewBag to={`/cart`} onClick={() => this.toggleDropdown()}>
									VIEW BAG
								</ViewBag>
								<CheckOut>CHECK OUT</CheckOut>
							</Buttons>
						</Dropdown>
					</>
				)}
			</Container>
		);
	}
}

export default connect(mapStateToProps)(CartIcon);

import { PureComponent } from "react";
import { connect } from "react-redux";

import CartIconProduct from "component/CartProduct";
import { Container, Cart, Products, TaxQuantity, Total, TaxQuantityValue, Order } from "./CartPage.styled";

const mapStateToProps = state => ({
	currentCurrency: state.cart.currentCurrency,
	products: state.cart.products,
});

export class CartPage extends PureComponent {
	render() {
		const { currentCurrency, products } = this.props;

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
			<Container>
				<Cart>CART</Cart>
				<Products>
					{products.map(({ id, brand, name, prices, attributes, currentAttributes, image, quantity }, index) => (
						<CartIconProduct
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
							origin={"page"}
						></CartIconProduct>
					))}
				</Products>
				<TaxQuantity>
					Tax 21%:{" "}
					<TaxQuantityValue>
						{currentCurrency}
						{(totalAmount * 0.21).toFixed(2)}
					</TaxQuantityValue>
				</TaxQuantity>
				<TaxQuantity>
					Quantity: <TaxQuantityValue>{totalProducts}</TaxQuantityValue>
				</TaxQuantity>
				<Total>
					Total:&ensp;&ensp;&ensp;&ensp;
					<TaxQuantityValue>
						{currentCurrency}
						{totalAmount.toFixed(2)}
					</TaxQuantityValue>
				</Total>
				<Order>ORDER</Order>
			</Container>
		);
	}
}

export default connect(mapStateToProps)(CartPage);

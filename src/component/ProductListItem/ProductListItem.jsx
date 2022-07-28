import { PureComponent } from "react";
import { connect } from "react-redux";

import {
	ProductItem,
	ProductLink,
	ProductImage,
	ProductName,
	ProductPrice,
	OutOfStock,
} from "./ProductListItem.styled";

const mapStateToProps = state => ({
	currentCurrency: state.cart.currentCurrency,
});

export class ProductListItem extends PureComponent {
	render() {
		const { id, gallery, brand, name, prices, inStock, currentCurrency } = this.props;
		const price = { symbol: "", amount: 0 };
		prices.forEach(({ currency, amount }) => {
			if (currency.symbol === currentCurrency) {
				price.symbol = currentCurrency;
				price.amount = amount;
			}
		});

		return (
			<ProductItem inStock={inStock}>
				<ProductLink to={`/product/${id}`}>
					<ProductImage src={gallery} />
					{!inStock && <OutOfStock>OUT OF STOCK</OutOfStock>}
					<ProductName>
						{brand} {name}
					</ProductName>
					<ProductPrice>
						{price.symbol}
						{price.amount}
					</ProductPrice>
				</ProductLink>
			</ProductItem>
		);
	}
}

export default connect(mapStateToProps)(ProductListItem);

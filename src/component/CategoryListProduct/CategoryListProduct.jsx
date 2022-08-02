import { PureComponent } from "react";
import { connect } from "react-redux";

import {
	ProductItem,
	ProductLink,
	ProductImage,
	ProductName,
	ProductPrice,
	OutOfStock,
} from "./CategoryListProduct.styled";

const mapStateToProps = state => ({
	currentCurrency: state.cart.currentCurrency,
});

export class CategoryListProduct extends PureComponent {
	render() {
		const { id, gallery, brand, name, prices, inStock, currentCurrency } = this.props;
		let currentAmount;
		prices.forEach(({ currency, amount }) => {
			if (currency.symbol === currentCurrency) {
				currentAmount = amount;
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
						{currentCurrency}
						{currentAmount}
					</ProductPrice>
				</ProductLink>
			</ProductItem>
		);
	}
}

export default connect(mapStateToProps)(CategoryListProduct);

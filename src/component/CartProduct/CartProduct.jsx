import { PureComponent } from "react";
import { connect } from "react-redux";

import { addToCart } from "store/cartSlice";
import ProductAttributes from "component/ProductAttributes";
import {
	Container,
	ContainerDescription,
	Brand,
	Name,
	PriceValue,
	ContainerCounter,
	HandleButton,
	Image,
} from "./CartProduct.styled";

const mapStateToProps = state => ({
	products: state.cart.products,
});

export class CartProduct extends PureComponent {
	state = { quantity: 0 };

	componentDidMount() {
		this.setState({ quantity: this.props.quantity });
	}

	componentDidUpdate() {
		this.setState({ quantity: this.props.quantity });
	}

	handleClickAttribute = () => {};

	handleQuantity(operator) {
		operator === "increment"
			? this.setState({ quantity: this.state.quantity + 1 })
			: this.setState({ quantity: this.state.quantity - 1 });

		const { id, attributes, currentAttributes } = this.props;
		let currentProducts = [...this.props.products];

		if (attributes.length === currentAttributes.length) {
			if (currentProducts.some(currentProduct => currentProduct.id === id)) {
				currentProducts.forEach((currentProduct, index) => {
					if (currentProduct.id === id) {
						if (
							JSON.stringify(
								[...currentProduct.currentAttributes].sort((a, b) =>
									Object.keys(a)[0].localeCompare(Object.keys(b)[0]),
								),
							).slice(0, -3) ===
							JSON.stringify(
								[...currentAttributes].sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0])),
							).slice(0, -3)
						) {
							operator === "increment"
								? currentProducts.splice(index, 1, {
										...currentProducts[index],
										quantity: currentProducts[index].quantity + 1,
								  })
								: currentProducts[index].quantity > 1
								? currentProducts.splice(index, 1, {
										...currentProducts[index],
										quantity: currentProducts[index].quantity - 1,
								  })
								: currentProducts.splice(index, 1);
						}
					}
				});
			}

			this.props.addToCart(currentProducts);
		}
	}

	render() {
		const { brand, name, prices, attributes, currentAttributes, currentCurrency, image, origin } = this.props;
		const amount = prices?.find(({ currency }) => currency.symbol === currentCurrency);
		const currentAmount = (amount?.amount * this.state.quantity).toFixed(2);

		return (
			<Container origin={origin}>
				<ContainerDescription>
					<Brand>{brand}</Brand>
					<Name>{name}</Name>
					<PriceValue>
						{currentCurrency}
						{currentAmount}
					</PriceValue>
					<ProductAttributes
						attributes={attributes}
						currentAttributes={currentAttributes}
						handleClickAttribute={this.handleClickAttribute}
						origin={origin}
					/>
				</ContainerDescription>
				<ContainerCounter>
					<HandleButton onClick={() => this.handleQuantity("increment")} origin={origin}>
						+
					</HandleButton>
					{this.state.quantity}
					<HandleButton onClick={() => this.handleQuantity("decrement")} origin={origin}>
						&ndash;
					</HandleButton>
				</ContainerCounter>
				<Image src={image} />
			</Container>
		);
	}
}

export default connect(mapStateToProps, { addToCart })(CartProduct);

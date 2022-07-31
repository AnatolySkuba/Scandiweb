import { PureComponent } from "react";
import { connect } from "react-redux";

import { addToCart } from "store/cartSlice";
import CartIconProductAttributes from "component/CartIconProductAttributes";
import {
	Container,
	ContainerDescription,
	BrandName,
	PriceValue,
	ContainerCounter,
	HandleButton,
	Image,
} from "./CartIconProduct.styled";

const mapStateToProps = state => ({
	products: state.cart.products,
});

export class CartIconProduct extends PureComponent {
	state = { quantity: 0 };

	componentDidMount() {
		this.setState({ quantity: this.props.quantity });
	}

	componentDidUpdate() {
		this.setState({ quantity: this.props.quantity });
	}

	handleClickAttribute = (name, value) => {
		const currentAttributes = [...this.state.currentAttributes];
		currentAttributes?.some(currentAttribute => Object.keys(currentAttribute)[0] === name)
			? currentAttributes.forEach((currentAttribute, index) => {
					Object.keys(currentAttribute)[0] === name && currentAttribute[name] === value
						? currentAttributes.splice(index, 1)
						: Object.keys(currentAttributes[index])[0] === name &&
						  currentAttributes.splice(index, 1, { ...currentAttributes[index], [name]: value });
			  })
			: currentAttributes.push({ [name]: value });

		this.setState({ currentAttributes: currentAttributes });
	};

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
		const { brand, name, prices, attributes, currentAttributes, currentCurrency, image } = this.props;
		const amount = prices?.find(({ currency }) => currency.symbol === currentCurrency);
		const currentAmount = (amount?.amount * this.state.quantity).toFixed(2);
		// console.log(this.props);

		return (
			<Container>
				<ContainerDescription>
					<BrandName>
						{brand}
						<br />
						{name}
					</BrandName>
					<PriceValue>
						{currentCurrency}
						{currentAmount}
					</PriceValue>
					<CartIconProductAttributes
						attributes={attributes}
						currentAttributes={currentAttributes}
						handleClickAttribute={this.handleClickAttribute}
					/>
				</ContainerDescription>
				<ContainerCounter>
					<HandleButton onClick={() => this.handleQuantity("increment")}>&#43;</HandleButton>
					{this.state.quantity}
					<HandleButton onClick={() => this.handleQuantity("decrement")}>&minus;</HandleButton>
				</ContainerCounter>
				<Image src={image} />
			</Container>
		);
	}
}

export default connect(mapStateToProps, { addToCart })(CartIconProduct);

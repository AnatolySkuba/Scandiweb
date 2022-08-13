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
	Box,
	Image,
	ArrowLeft,
	ArrowRight,
} from "./CartProduct.styled";

const mapStateToProps = state => ({
	products: state.cart.products,
});

export class CartProduct extends PureComponent {
	state = { quantity: 0, GalleryIndex: 0 };

	componentDidMount() {
		this.setState({ quantity: this.props.quantity, image: this.props.gallery[0] });
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

	handleClickImage = event => {
		const { GalleryIndex } = this.state;
		const { gallery } = this.props;
		event === "left"
			? this.setState({ GalleryIndex: GalleryIndex === 0 ? gallery.length - 1 : GalleryIndex - 1 })
			: this.setState({ GalleryIndex: gallery.length > GalleryIndex + 1 ? GalleryIndex + 1 : 0 });
	};

	render() {
		const { brand, name, prices, attributes, currentAttributes, currentCurrency, gallery, origin } = this.props;
		const amount = prices?.find(({ currency }) => currency.symbol === currentCurrency);

		return (
			<Container origin={origin}>
				<ContainerDescription>
					<Brand>{brand}</Brand>
					<Name>{name}</Name>
					<PriceValue>
						{currentCurrency}
						{amount.amount}
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
				<Box>
					<Image src={gallery[this.state.GalleryIndex]} />
					{origin === "page" && gallery.length > 1 && (
						<>
							<ArrowLeft onClick={() => this.handleClickImage("left")} />
							<ArrowRight onClick={() => this.handleClickImage("right")} />
						</>
					)}
				</Box>
			</Container>
		);
	}
}

export default connect(mapStateToProps, { addToCart })(CartProduct);

import { PureComponent } from "react";
import { connect } from "react-redux";

import withRouter from "route/withRouter";
import { addToCart } from "store/cartSlice";
import ProductAttributes from "component/ProductAttributes";
import {
	ProductItem,
	ProductLink,
	ProductImage,
	ProductThumb,
	ProductOrder,
	Button,
	ProductName,
	ProductPrice,
	OutOfStock,
} from "./ProductListCard.styled";

const mapStateToProps = state => ({
	currentCurrency: state.cart.currentCurrency,
	products: state.cart.products,
});

export class ProductListCard extends PureComponent {
	state = { currentAttributes: [] };

	componentDidMount() {
		this.defaultCurrentAttributes();
	}

	defaultCurrentAttributes = () => {
		const currentAttributes = this.props.inStock
			? this.props.attributes.reduce((currentAttributes, { name, items }) => {
					currentAttributes.push({ [name]: items[0].value });
					return currentAttributes;
			  }, [])
			: [];

		this.setState({
			currentAttributes: currentAttributes,
		});
	};

	navigate = (event, id) => {
		if (event.target.localName !== "li" && event.target.localName !== "button") {
			this.props.router.navigate(`/Scandiweb/product/${id}`);
		}
	};

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

	addToCart(id, gallery, brand, name, prices, attributes) {
		const { currentAttributes } = this.state;
		const currentProducts = [...this.props.products];
		let counter = 0;

		if (attributes.length === currentAttributes.length) {
			currentProducts.some(currentProduct => currentProduct.id === id)
				? currentProducts.forEach((currentProduct, index) => {
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
								currentProducts.splice(index, 1, {
									...currentProducts[index],
									quantity: currentProducts[index].quantity + 1,
								});
							} else {
								counter++;
							}
						}
				  })
				: currentProducts.push({
						id: id,
						brand: brand,
						name: name,
						attributes: attributes,
						currentAttributes: currentAttributes,
						prices: prices,
						gallery: gallery,
						quantity: 1,
				  });

			const productsIdUnique = [];
			currentProducts.forEach(currentProduct => currentProduct.id === id && productsIdUnique.push(currentProduct.id));

			counter === productsIdUnique.length &&
				currentProducts.push({
					id: id,
					brand: brand,
					name: name,
					attributes: attributes,
					currentAttributes: currentAttributes,
					prices: prices,
					gallery: gallery,
					quantity: 1,
				});

			this.props.addToCart(currentProducts);
		}
	}

	render() {
		const { id, gallery, brand, name, prices, attributes, inStock, currentCurrency } = this.props;
		const { currentAttributes } = this.state;
		const currentAmount = prices.reduce((currentAmount, { currency, amount }) => {
			if (currency?.symbol === currentCurrency) {
				currentAmount = amount;
			}
			return currentAmount;
		}, "");

		return (
			<ProductItem inStock={inStock}>
				<ProductLink onClick={event => this.navigate(event, id)}>
					<ProductImage src={gallery[0]} />
					<ProductThumb>
						<ProductOrder>
							<ProductAttributes
								attributes={attributes}
								currentAttributes={currentAttributes}
								handleClickAttribute={this.handleClickAttribute}
								origin={"page"}
								inStock={inStock}
							/>
							<Button
								onClick={() => inStock && this.addToCart(id, gallery, brand, name, prices, attributes)}
								inStock={inStock}
							>
								ADD TO CART
							</Button>
						</ProductOrder>
					</ProductThumb>
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

export default connect(mapStateToProps, { addToCart })(withRouter(ProductListCard));

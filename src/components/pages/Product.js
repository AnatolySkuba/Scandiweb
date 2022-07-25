import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Attributes from "../attributes/Attributes";
import Navbar from "../../components/header/Navbar";
import getSymbolFromCurrency from "currency-symbol-map";
import {
	AttributeGroup,
	AttributeGroupName,
	AttributesContainer,
	AttributeButton,
	Button,
	ProductName,
	ProductBrand,
	ProductPriceLabel,
	ProductPrice,
	ProductImage,
	ProductContainer,
	DetailsContainer,
	Description,
} from "../general-styles/styles";
import { addToCart } from "../../actions";
import Gallery from "../attributes/Gallery";
import DOMPurify from "dompurify";
import client from "../../Graphql/apolloClient";
import { getItemsById } from "../../Graphql/queries";

class Product extends PureComponent {
	constructor(props) {
		super(props);
		this.getProduct = this.getProduct.bind(this);
		this.saveAttribute = this.saveAttribute.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.makeActive = this.makeActive.bind(this);
		this.mapProduct = this.mapProduct.bind(this);
		this.state = {
			item: {},
			chosenImage: [],
			savedAttributes: [],
			prices: [],
		};
	}

	componentDidMount() {
		this.getProduct();
	}

	mapProduct() {
		if (this.state.item) {
			this.setState(prevState => {
				const emptyAttrs = this.state.item.attributes.map(i => {
					return {
						id: i.id,
						name: i.name,
						type: i.type,
						item: null,
					};
				});
				return { ...prevState, savedAttributes: emptyAttrs };
			});
			this.setState({ chosenImage: this.state.item.gallery[0] });
		}
	}

	handleAddToCart() {
		const { send } = this.props;
		const { savedAttributes, item: prod } = this.state;
		const notNull = this.state.savedAttributes.every(i => i.item !== null);
		if (notNull) {
			let cu = {};
			cu.savedAttribute = savedAttributes;
			cu.item = prod;
			send(cu);
		} else {
			alert("Please select the attributes of your item =)");
		}
	}

	saveAttribute({ attr }) {
		const attributes = this.state.savedAttributes.map(i => {
			if (i.id === attr.id) {
				return {
					...i,
					item: attr.item,
				};
			}
			return { ...i };
		});
		this.setState({ savedAttributes: attributes });
	}

	async getProduct() {
		const {
			match: {
				params: { id },
			},
		} = this.props;
		const response = await client.query({
			query: getItemsById,
			variables: {
				id: id,
			},
		});
		this.setState({ item: response.data.product });
		this.mapProduct();
	}

	makeActive(img) {
		if (this.state.chosenImage !== img) {
			this.setState({ chosenImage: img });
		}
	}

	render() {
		const { savedAttributes, item } = this.state;
		const { currency } = this.props;
		return (
			<>
				<Navbar />
				<ProductContainer>
					{item && item.gallery && (
						<>
							<Gallery images={item.gallery} change={this.makeActive} />
							<ProductImage src={this.state.chosenImage} />
							<DetailsContainer>
								<ProductBrand>{item.brand}</ProductBrand>
								<ProductName>{item.name}</ProductName>
								<Attributes
									item={item}
									Container={AttributesContainer}
									AttLabel={AttributeGroupName}
									LabelGroup={AttributeGroup}
									chosenAttributes={savedAttributes}
									Button={AttributeButton}
									handleClick={this.saveAttribute}
								/>
								<ProductPriceLabel>PRICE:</ProductPriceLabel>
								<ProductPrice>
									{item.prices && (
										<>{`${getSymbolFromCurrency(item.prices[currency].currency)}${item.prices[currency].amount}`}</>
									)}
								</ProductPrice>
								<Button onClick={() => this.handleAddToCart()} inStock={item.inStock}>
									{item.inStock ? "add to cart" : "out of stock"}
								</Button>
								<Description
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(item.description),
									}}
								></Description>
							</DetailsContainer>
						</>
					)}
				</ProductContainer>
			</>
		);
	}
}

const mapStateToProps = state => ({
	currency: state.cart.currency,
	cart: state.cart.cart,
});

const mapDispatchToProps = dispatch => ({
	send: state => dispatch(addToCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

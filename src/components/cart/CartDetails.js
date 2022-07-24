import React, { PureComponent } from "react";
import Navbar from "../header/Navbar";
import { connect } from "react-redux";
import Attributes from "../attributes/Attributes.js";
import getSymbolFromCurrency from "currency-symbol-map";
import { removeFromCart, addToCart, changeAttribute } from "../../actions";
import {
  AttributeGroup,
  AttributeGroupName,
  AttributesContainer,
  AttributeButton,
  ProductPrice,
  ProductBrand

} from "../general-styles/styles";
import {
  CartItemActionsContainer,
  CartItemContainer,
  CartItemName,
  ItemNameLink,
  CartCountButton,
  Title,
  CartContainer,
  CartItemDetailsContainer,
} from "./cart-styles";
import CartGallery from "./CartGallery";

class CartDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
  }

  componentDidMount() {
    this.setState({ item: this.props.cart });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart !== this.props.cart) {
      this.setState({ item: this.props.cart });
    }
  }

  handleRemove({ item }) {
    const { remove } = this.props;
    remove(item);
  }

  handleIncrease({ item }) {
    const { send } = this.props;
    send(item);
  }

  saveAttribute(attr) {
    const { attr: attribute, itemID } = attr;
    const { item } = this.state;
    this.props.change(attribute, item[itemID]);
  }

  render() {
    const { currency } = this.props;
    return (
      <>
        <Navbar />
        <CartContainer>
          <Title>CART</Title>
          {this.props.cart &&
            this.props.cart.map((item, id) => (
              <>
                <div key={id}>
                  <CartItemContainer >
                    <CartItemDetailsContainer>
                      <ItemNameLink to={`/product/${item.item.id}`}>
                      <ProductBrand>{item.item.brand}</ProductBrand>
                        <CartItemName>{item.item.name}</CartItemName>
                      </ItemNameLink>
                      <ProductPrice>{`${getSymbolFromCurrency(
                        item.item.prices[currency].currency
                      )} ${item.item.prices[currency].amount}`}</ProductPrice>
                      <Attributes
                        item={item.item}
                        Container={AttributesContainer}
                        AttLabel={AttributeGroupName}
                        LabelGroup={AttributeGroup}
                        chosenAttributes={item.savedAttribute}
                        Button={AttributeButton}
                        handleClick={this.saveAttribute}
                        itemID={id}
                      />
                    </CartItemDetailsContainer>
                    <CartItemActionsContainer>
                      <CartCountButton
                        value={item}
                        onClick={() => this.handleIncrease({ item })}
                      >
                        +
                      </CartCountButton>
                      <h3>{item.quantity}</h3>
                      <CartCountButton
                        value={item}
                        onClick={() => this.handleRemove({ item })}
                      >
                        -
                      </CartCountButton>
                    </CartItemActionsContainer>

                    <CartGallery images={item.item.gallery} />
                  </CartItemContainer>
                </div>
              </>
            ))}
        </CartContainer>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (state) => dispatch(removeFromCart(state)),
  send: (state) => dispatch(addToCart(state)),
  change: (attr, id) => dispatch(changeAttribute(attr, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);

import React, { Component } from "react";
import { connect } from "react-redux";
import BtnCart from "./BtnCart";
import {
  ProductImage,
  ProductImageContainer,
  ItemName,
  ItemPrice,
  StyledLink,
  ItemContainer,
  OutOfStockOverlay,
  OutOfStockText,
  ItemTop,
  Btn,
} from "./list-style";

import getSymbolFromCurrency from "currency-symbol-map";
import { loadCurrentItem, addToCart } from "../../actions";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.mouseOn = this.mouseOn.bind(this);
    this.mouseOff = this.mouseOff.bind(this);
  }

  mouseOn() {
    this.setState({ hover: true });
  }

  mouseOff() {
    this.setState({ hover: false });
  }

  addToCart(item) {
    const { add } = this.props;
    const { attributes } = item;
    if (attributes.length > 0) {
      const format = attributes.map((attr) => {
        const { items, type, id, name } = attr;
        const item = items.find((attr) => ({ item: attr }));
        return (attr = { item, type, id, name });
      });
      const newItem = Object.assign({}, { item }, { savedAttribute: format });
      add(newItem);
    } else {
      const newItem = Object.assign({}, { item: item });
      add(newItem);
    }
  }

  render() {
    const { item } = this.props;
    const { prices, amount, id, sendItem } = this.props;
    return (
      <>
        <ItemContainer
          onMouseOver={this.mouseOn}
          onMouseLeave={this.mouseOff}
          key={item.id}
        >
          <ItemTop>
            <StyledLink to={`/product/${id}`}>
              <Btn
                style={{
                  background: "transparent",
                  border: "none !important",
                  fontSize: "0",
                }}
                onClick={() => sendItem(item)}
              >
                <ProductImageContainer>
                  <ProductImage
                    width="150px"
                    src={item.gallery[0]}
                  ></ProductImage>
                </ProductImageContainer>
              </Btn>
              {!item.inStock && (
                <OutOfStockOverlay>
                  <OutOfStockText>out of stock</OutOfStockText>
                </OutOfStockOverlay>
              )}
            </StyledLink>

            {this.state.hover && item.inStock && (
              <BtnCart onClick={() => this.addToCart(item)} />
            )}
          </ItemTop>
          <ItemName>{item.brand} {item.name}</ItemName>
          <ItemPrice>{`${getSymbolFromCurrency(prices)} ${amount}`}</ItemPrice>
        </ItemContainer>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendItem: (item) => dispatch(loadCurrentItem(item)),
  add: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductCard);

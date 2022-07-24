import React, { PureComponent } from "react";
import { AddToCartButton } from "./list-style";

import { ReactComponent as CartIcon } from "./cart.svg";

export default class AddToCart extends PureComponent {
  render() {
    return (
      <AddToCartButton onClick={this.props.onClick}>
        <CartIcon />
      </AddToCartButton>
    );
  }
}

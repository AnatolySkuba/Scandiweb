import React, { PureComponent } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { connect } from "react-redux";
import { TotalPriceContainer, TotalPriceCost, TotalPriceTotal } from "./modal.styles";

class TotalPrice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }
  componentDidMount() {
    const { cart } = this.props;
    const item = cart.find((item) => item);
    this.setState({ item });
  }
  render() {
    const { totalPrice, currency } = this.props;
    const { item } = this.state;
    return (
      <TotalPriceContainer>
        {item !== undefined && item.item && (
          <>
          <TotalPriceTotal>
            Total:{" "}
          </TotalPriceTotal>
          <TotalPriceCost>
          {`${getSymbolFromCurrency(
              item.item.prices[currency].currency
            )}${totalPrice}`}
          </TotalPriceCost>
        </>
        )}
      </TotalPriceContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.cart.currency,
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(TotalPrice);

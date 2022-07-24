import React, { Component } from "react";
import {
  CartArrowPrevious,
  CartItemImageContainer,
  CartArrowNext,
} from "./cart-styles";
import { ReactComponent as Before } from "./cart-svg/before.svg";
import { ReactComponent as After } from "./cart-svg/after.svg";

class CartGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  nextImage() {
    const len = this.props.images.length;
    const { imageIndex } = this.state;
    if (imageIndex !== len - 1) {
      this.setState({ imageIndex: imageIndex + 1 });
    } else {
      this.setState({ imageIndex: 0 });
    }
  }

  previousImage() {
    const len = this.props.images.length;
    const { imageIndex } = this.state;
    if (imageIndex !== 0) {
      this.setState({ imageIndex: imageIndex - 1 });
    } else {
      this.setState({ imageIndex: len - 1 });
    }
  }

  render() {
    const { images } = this.props;
    const { imageIndex } = this.state;
    return (
      <CartItemImageContainer>
      {images.length > 1 &&
        <CartArrowPrevious onClick={this.previousImage}>
          <Before />
        </CartArrowPrevious>
        }
        <img src={images[imageIndex]} alt="item" />
        {images.length > 1 &&
        <CartArrowNext onClick={this.nextImage}>
          <After />
        </CartArrowNext>
      }
      </CartItemImageContainer>
    );
  }
}

export default CartGallery;

import React, { PureComponent } from "react";
import {
  ModalFooterContainer,
  ViewBagButton,
  CheckOutButton,
} from "./modal.styles";
import { Link } from "react-router-dom";

export default class FooterButtons extends PureComponent {
  render() {
    return (
      <ModalFooterContainer>
        <Link to="/cart">
          <ViewBagButton onClick={this.props.closeModal}>view bag</ViewBagButton>
        </Link>
        <CheckOutButton>check out</CheckOutButton>
      </ModalFooterContainer>
    );
  }
}

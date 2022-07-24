import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Attributes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.isAttrActive = this.isAttrActive.bind(this);
  }

  isAttrActive(selectAttribute, chosenAttributes) {
    return Boolean(
      chosenAttributes.find(
        (i) =>
          i.id === selectAttribute.id && i.item?.id === selectAttribute.item.id
      )
    );
  }

  render() {
    const {
      Container,
      AttLabel,
      LabelGroup,
      item,
      handleClick,
      Button,
      itemID,
    } = this.props;
    return (
      <Container>
        {item.attributes &&
          item.attributes.map((typeAtt, index) => {
            const { items, type, id, name } = typeAtt;
            return (
              <div key={index}>
                <AttLabel>{`${name}:`}</AttLabel>
                <LabelGroup key={id}>
                  {items.map((attr) => {
                    const selectAttribute = {
                      id,
                      name,
                      type,
                      item: attr,
                    };
                    return (
                      <Button
                        key={attr.id}
                        inStock={item.inStock}
                        onClick={() =>
                          handleClick({ itemID, attr: selectAttribute })
                        }
                        active={this.isAttrActive(
                          selectAttribute,
                          this.props.chosenAttributes
                        )}
                        backgroundColor={type === "swatch" && attr.value}
                      >
                        {type !== "swatch" && attr.value}
                      </Button>
                    );
                  })}
                </LabelGroup>
              </div>
            );
          })}
      </Container>
    );
  }
}

Attributes.propTypes = {
  Container: PropTypes.object.isRequired,
  Button: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
  chosenAttributes: PropTypes.array,
};

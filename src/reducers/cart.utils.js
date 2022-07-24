export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (cartItemToAdd.savedAttributes) {
    const match = cartItems.find(
      (item) => item.item.name === cartItemToAdd.item.name
    );
    const other = cartItems.find((item) =>
      item.savedAttribute.every(
        (e, i) => e.item.value === cartItemToAdd.savedAttribute[i].item.value
      )
    );

    if (other && match) {
      return cartItems.map((cartItem) =>
        cartItem.savedAttribute.every(
          (e, i) => e.item.value === cartItemToAdd.savedAttribute[i].item.value
        )
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  } else {
    const match = cartItems.find(
      (item) => item.item.name === cartItemToAdd.item.name
    );

    if (match) {
      return cartItems.map((cartItem) =>
        cartItem.item.name === cartItemToAdd.item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.savedAttributes !== undefined) {
    const cartCheck = cartItems.find(
      (cartItem) =>
        cartItem.item.name === cartItemToRemove.item.name &&
        cartItem.savedAttribute.every(
          (e, i) => e.value === cartItemToRemove.savedAttribute[i].value
        )
    );
    if (cartCheck.quantity === 1) {
      return cartItems.filter((cartItem) =>
        cartItem.savedAttribute.every(
          (e, i) =>
            e.item.value !== cartItemToRemove.savedAttribute[i].item.value
        )
      );
    }
    return cartItems.map((cartItem) =>
      cartItem.savedAttribute.every(
        (e, i) => e.item.value === cartItemToRemove.savedAttribute[i].item.value
      )
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem
    );
  } else {
    const match = cartItems.find(
      (item) => item.item.name === cartItemToRemove.item.name
    );
    if (match.quantity === 1) {
      return cartItems.filter(
        (item) => item.item.name !== cartItemToRemove.item.name
      );
    }
    return cartItems.map((item) =>
      item.item.name === cartItemToRemove.item.name
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );
  }
};

export const changeAttribute = (cartItems, attributeToChange) => {
  const { attr, itemID } = attributeToChange;

  return cartItems.map((item) =>
    item === itemID
      ? {
          ...item,
          savedAttribute: item.savedAttribute.map((item) =>
            item.id === attr.id ? attr : item
          ),
        }
      : item
  );
};

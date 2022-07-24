export const SEARCH_INPUT = " SEARCH_INPUT";
export const CATEGORIES = "CATEGORIES";
export const PRODUCTS = "PRODUCTS";
export const SELECTED_CATEGORY = "SELECTED_CATEGORY";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT = "INCREMENT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";
export const SEND_CATEGORY = "SEND_CATEGORY";
export const SEND_CURRENCY = "SEND_CURRENCY";
export const CHANGE_ATTRIBUTE = "CHANGE_ATTRIBUTE";

export const sendProducts = (state) => ({
  type: PRODUCTS,
  state,
});

export const sendCurrency = (state) => ({
  type: SEND_CURRENCY,
  state,
});

export const sendCategory = (state) => ({
  type: SEND_CATEGORY,
  state,
});

export const searchInput = (state) => ({
  type: SEARCH_INPUT,
  state,
});

export const addToCart = (state) => {
  return {
    type: ADD_TO_CART,
    state,
  };
};

export const removeFromCart = (state) => {
  return {
    type: REMOVE_FROM_CART,
    state,
  };
};

export const adjustItemQty = (itemID, amount) => {
  return {
    type: ADJUST_ITEM_QTY,
    payload: {
      productId: itemID,
      amount,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const changeAttribute = (attr, itemID) => {
  return {
    type: CHANGE_ATTRIBUTE,
    payload: {
      attr,
      itemID,
    },
  };
};

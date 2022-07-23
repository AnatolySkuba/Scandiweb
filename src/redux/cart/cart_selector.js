export const getProducts = state => [...new Set(state.cart.products)];

export const getTotalPrice = state =>
  state.cart.products.reduce((acc, product) => {
    acc += product.prices[0].amount;
    return acc;
  }, 0);

import { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../redux/cart/cart_selector';

import styles from './CartProduct.module.css';

class CartProduct extends Component {
  state = {
    quantity: 1,
  };

  handleAttributes = () => {
    alert('Selected');
  };

  increment = () => {
    this.setState(state => {
      return {
        quantity: (state.quantity += 1),
      };
    });
  };

  decrement = () => {
    this.setState(state => {
      if (state.quantity > 1) {
        return {
          quantity: (state.quantity -= 1),
        };
      }
    });
  };

  render() {
    const products = this.props.products;

    return (
      <ul>
        {products.map(product => {
          return (
            <li className={styles.item} key={product.id}>
              <div className={styles.product}>
                <p className={styles.product__name}>{product.name}</p>
                <p className={styles.product__brand}>{product.brand}</p>
                <p className={styles.product__price}>
                  ${product.prices[0].amount}
                </p>

                <button
                  type="button"
                  className={styles.product__attr}
                  onClick={this.handleAttributes}
                >
                  S
                </button>
                <button
                  type="button"
                  className={`${styles.product__attr} ${styles['product__attr--active']}`}
                >
                  M
                </button>
              </div>

              <div className={styles.wrapper}>
                <div className={styles.counters}>
                  <button
                    type="button"
                    className={styles.counters__button}
                    onClick={this.increment}
                  >
                    +
                  </button>
                  <span className={styles.counters__value}>
                    {this.state.quantity}
                  </span>
                  <button
                    type="button"
                    className={styles.counters__button}
                    onClick={this.decrement}
                  >
                    -
                  </button>
                </div>

                <div className={styles.gallery}>
                  <img
                    src={product.gallery[0]}
                    className={styles.gallery__image}
                    alt={product.name}
                    title={product.name}
                    width="141"
                    height="185"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: getProducts(state),
});

export default connect(mapStateToProps, null)(CartProduct);

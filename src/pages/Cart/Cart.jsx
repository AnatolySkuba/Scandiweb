import { Component } from 'react';
import CartProduct from '../../components/CartProduct';

import styles from './Cart.module.css';

class Cart extends Component {
  componentDidMount() {
    document.title = 'Cart | Scandiweb Dev Test';
  }

  render() {
    return (
      <main>
        <section className={styles.section}>
          <h1 className={styles.title}>Cart</h1>

          <CartProduct />
        </section>
      </main>
    );
  }
}

export default Cart;

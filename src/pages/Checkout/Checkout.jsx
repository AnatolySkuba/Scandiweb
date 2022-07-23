import { Component } from 'react';

import styles from './Checkout.module.css';

class Checkout extends Component {
  componentDidMount() {
    document.title = 'Checkout | Scandiweb Dev Test';
  }

  render() {
    return (
      <main>
        <section className={styles.section}>
          <h1 className={styles.title}>Checkout</h1>
        </section>
      </main>
    );
  }
}

export default Checkout;

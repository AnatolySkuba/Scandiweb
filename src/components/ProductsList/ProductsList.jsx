import { Component } from 'react';
import ProductsItem from '../ProductsItem';

import styles from './ProductsList.module.css';

class ProductsList extends Component {
  render() {
    const products = this.props.products;
    const categoryName = this.props.category;

    return (
      <ul className={styles.list}>
        {products.map(product => (
          <ProductsItem
            key={product.id}
            product={product}
            category={categoryName || product.category}
          />
        ))}
      </ul>
    );
  }
}

export default ProductsList;

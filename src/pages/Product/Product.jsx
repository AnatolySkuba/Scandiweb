import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from '@apollo/client/react/hoc';
import { gql } from '@apollo/client';

import SingleProduct from '../../components/SingleProduct';
import Loader from '../../components/Loader';

import styles from './Product.module.css';

class Product extends Component {
  componentDidMount() {
    document.title = 'Product | Scandiweb Dev Test';
  }

  render() {
    const { data } = this.props;
    const { loading, error } = data;

    return (
      <main className={styles.main}>
        {data.product && <SingleProduct product={data.product} />}

        {error && <p>{JSON.stringify(data?.error?.message)}</p>}

        {loading && <Loader />}
      </main>
    );
  }
}

export default withRouter(
  graphql(
    gql`
      query GET_PRODUCT($productId: String!) {
        product(id: $productId) {
          id
          name
          inStock
          gallery
          description
          category
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          brand
        }
      }
    `,
    {
      options: props => ({
        variables: {
          productId: props.match.params.productId,
        },
      }),
    },
  )(Product),
);

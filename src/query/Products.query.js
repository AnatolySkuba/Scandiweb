import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
	query getProductsByCategory($category: String!) {
		category(input: { title: $category }) {
			products {
				id
				name
				brand
				gallery
				inStock
				prices {
					currency {
						symbol
					}
					amount
				}
			}
		}
	}
`;

export default GET_PRODUCTS;

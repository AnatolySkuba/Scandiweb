import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query getItemsByCategory($category: String!) {
		category(input: { title: $category }) {
			products {
				id
				name
				gallery
				prices {
					currency {
						label
						symbol
					}
					amount
				}
			}
		}
	}
`;

export default GET_PRODUCTS;

import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
	query getProductById($productId: String!) {
		product(id: $productId) {
			id
			brand
			name
			gallery
			inStock
			prices {
				currency {
					symbol
				}
				amount
			}
			category
			description
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
		}
	}
`;

export default GET_PRODUCT;

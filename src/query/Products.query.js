import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
	query {
		category {
			name
			products {
				id
				name
				gallery
				inStock
				description
				prices {
					currency {
						label
						symbol
					}
					amount
				}
				attributes {
					id
					name
					type
					items {
						value
						displayValue
						id
					}
					items {
						displayValue
						value
						id
					}
				}
				brand
			}
		}
	}
`;

export default GET_PRODUCTS;

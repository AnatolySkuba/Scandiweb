import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
	query {
		categories {
			name
		}
	}
`;

export default GET_CATEGORIES;

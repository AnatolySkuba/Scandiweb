import { PureComponent } from "react";

import client from "query/apolloClient";
import GET_PRODUCTS from "query/Products.query";
import { Container } from "./CategoryPage.styled";

export class CategoryPageContainer extends PureComponent {
	componentDidMount() {
		this.fetchProducts();
	}

	async fetchProducts() {
		const result = await client.query({
			query: GET_PRODUCTS,
		});
		console.log(result);
		// this.setState({ products: cu.data.category.products });
	}

	render() {
		return (
			<Container>
				<h1>CategoryPage</h1>
			</Container>
		);
	}
}

export default CategoryPageContainer;

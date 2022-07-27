import { PureComponent } from "react";

import withRouter from "route/withRouter";
import client from "query/apolloClient";
import GET_PRODUCTS from "query/Products.query";
import ProductListItem from "component/ProductListItem";
import { CategoryName, ProductList } from "./CategoryPage.styled";

export class CategoryPageContainer extends PureComponent {
	state = { products: [] };

	componentDidMount() {
		this.fetchProducts();
	}

	componentDidUpdate() {
		this.fetchProducts();
	}

	async fetchProducts() {
		const result = await client.query({
			query: GET_PRODUCTS,
			variables: {
				category: this.props.router.params.category || "all",
			},
		});

		this.setState({ products: result.data.category.products });
	}

	categoryName() {
		const categoryName = this.props.router.params.category || "all";
		const categoryNameCapitalized = categoryName[0].toUpperCase() + categoryName.substring(1);
		return categoryNameCapitalized;
	}

	render() {
		const { products } = this.state;
		// console.log(products);
		return (
			<>
				<CategoryName>{this.categoryName()}</CategoryName>
				<ProductList>
					{products?.map(({ id, gallery, name, prices }) => (
						<ProductListItem key={id} gallery={gallery[0]} name={name} prices={prices} />
					))}
				</ProductList>
			</>
		);
	}
}

export default withRouter(CategoryPageContainer);

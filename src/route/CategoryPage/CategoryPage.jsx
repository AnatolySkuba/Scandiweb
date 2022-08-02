import { PureComponent } from "react";

import withRouter from "route/withRouter";
import client from "query/apolloClient";
import GET_PRODUCTS from "query/Products.query";
import CategoryListProduct from "component/CategoryListProduct";
import { CategoryName, CategoryList } from "./CategoryPage.styled";

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

		return (
			<>
				<CategoryName>{this.categoryName()}</CategoryName>
				<CategoryList>
					{products?.map(({ id, gallery, name, brand, prices, inStock }) => (
						<CategoryListProduct
							key={id}
							id={id}
							gallery={gallery[0]}
							brand={brand}
							name={name}
							prices={prices}
							inStock={inStock}
						/>
					))}
				</CategoryList>
			</>
		);
	}
}

export default withRouter(CategoryPageContainer);

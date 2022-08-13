import { PureComponent } from "react";

import withRouter from "route/withRouter";
import client from "query/apolloClient";
import GET_PRODUCTS from "query/Products.query";
import ProductListCard from "component/ProductListCard";
import { CategoryName, ProductList } from "./ProductListPage.styled";

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
				<ProductList>
					{products?.map(({ id, gallery, name, brand, prices, attributes, inStock }) => (
						<ProductListCard
							key={id}
							id={id}
							gallery={gallery}
							brand={brand}
							name={name}
							prices={prices}
							attributes={attributes}
							inStock={inStock}
						/>
					))}
				</ProductList>
			</>
		);
	}
}

export default withRouter(CategoryPageContainer);

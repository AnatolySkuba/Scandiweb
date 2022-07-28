import { PureComponent } from "react";
import withRouter from "route/withRouter";

import client from "query/apolloClient";
import GET_PRODUCT from "query/Product.query";
import { Container, ProductGallery, ProductItem, ProductImages, ProductImage } from "./ProductPage.styled";

export class ProductPage extends PureComponent {
	state = { product: {}, currentImage: "" };

	componentDidMount() {
		this.fetchProduct();
	}

	async fetchProduct() {
		const result = await client.query({
			query: GET_PRODUCT,
			variables: {
				productId: this.props.router.params.productId,
			},
		});

		this.setState({ product: result.data.product });
	}

	currentImageClick = event => {
		this.setState({ currentImage: event.target.currentSrc });
	};

	render() {
		const { name, gallery } = this.state.product;
		const { currentImage } = this.state;
		console.log(this.state.product, name);
		return (
			<Container>
				<ProductGallery>
					{gallery?.map((image, index) => (
						<ProductItem key={index}>
							<ProductImages src={image} onClick={this.currentImageClick} />
						</ProductItem>
					))}
				</ProductGallery>
				{gallery && <ProductImage src={currentImage || gallery[0]} />}
			</Container>
		);
	}
}

export default withRouter(ProductPage);

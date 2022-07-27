import { PureComponent } from "react";

import { ProductItem, ProductLink, ProductImage, ProductName } from "./ProductListItem.styled";

export class ProductListItem extends PureComponent {
	render() {
		const { id, gallery, name, prices } = this.props;
		// console.log(this.props);
		return (
			<ProductItem>
				<ProductLink to={`/product/${id}`}>
					<ProductImage src={gallery} />
					<ProductName>{name}</ProductName>
				</ProductLink>
			</ProductItem>
		);
	}
}

export default ProductListItem;

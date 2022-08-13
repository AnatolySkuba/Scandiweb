import { PureComponent } from "react";

import { List, Attribute, Name, Items, Item, ItemSwatch } from "./ProductAttributes.styled";

export class ProductAttributes extends PureComponent {
	render() {
		const { attributes, currentAttributes, handleClickAttribute, origin, inStock } = this.props;

		return (
			<List>
				{attributes?.map(({ id, name, items, type }) => (
					<Attribute key={id} origin={origin}>
						<Name>{name}:</Name>
						<Items>
							{items.map(({ id, value, displayValue }) =>
								type === "swatch" ? (
									<ItemSwatch
										key={id}
										name={name}
										value={value}
										displayValue={displayValue}
										currentAttributes={currentAttributes}
										onClick={() => inStock && handleClickAttribute(name, value)}
									/>
								) : (
									<Item
										key={id}
										name={name}
										value={value}
										currentAttributes={currentAttributes}
										onClick={() => inStock && handleClickAttribute(name, value)}
									>
										{value}
									</Item>
								),
							)}
						</Items>
					</Attribute>
				))}
			</List>
		);
	}
}

export default ProductAttributes;

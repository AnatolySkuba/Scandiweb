import { PureComponent } from "react";

import { Attribute, Name, Items, Item, ItemSwatch } from "./ProductAttributes.styled";

export class ProductAttributes extends PureComponent {
	render() {
		const { attributes, currentAttributes, handleClickAttribute, origin } = this.props;

		return (
			<ul>
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
										onClick={() => handleClickAttribute(name, value)}
									/>
								) : (
									<Item
										key={id}
										name={name}
										value={value}
										currentAttributes={currentAttributes}
										onClick={() => handleClickAttribute(name, value)}
									>
										{value}
									</Item>
								),
							)}
						</Items>
					</Attribute>
				))}
			</ul>
		);
	}
}

export default ProductAttributes;

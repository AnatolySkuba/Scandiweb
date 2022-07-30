import { PureComponent } from "react";

import { Attributes, Attribute, Name, Items, Item, ItemSwatch } from "./ProductAttributes.styled";

export class ProductAttributes extends PureComponent {
	render() {
		const { attributes, currentAttributes, handleClickAttribute } = this.props;

		return (
			<Attributes>
				{attributes?.map(({ id, name, items, type }) => (
					<Attribute key={id}>
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
			</Attributes>
		);
	}
}

export default ProductAttributes;

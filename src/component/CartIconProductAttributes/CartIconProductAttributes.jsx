import { PureComponent } from "react";

import { Attributes, Attribute, Name, Items, Item, ItemSwatch } from "./CartIconProductAttributes.styled";

export class CartIconProductAttributes extends PureComponent {
	render() {
		const { attributes, currentAttributes } = this.props;

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
									/>
								) : (
									<Item key={id} name={name} value={value} currentAttributes={currentAttributes}>
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

export default CartIconProductAttributes;

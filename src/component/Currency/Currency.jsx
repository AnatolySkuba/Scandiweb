import { PureComponent } from "react";

import client from "query/apolloClient";
import GET_CURRENCIES from "query/Currencies.query";
// import { ReactComponent as ArrowSvg } from "style/icons/arrow.svg";
import { Container, Icon, ArrowSvg, DropdownList, DropdownItem, BackDrop } from "./Currency.styled";

export class Currency extends PureComponent {
	state = { currencies: [], label: "", dropdown: false };

	componentDidMount() {
		this.fetchQuery();
	}

	toggleModal() {
		this.setState(state => ({ dropdown: !state.dropdown }));
	}

	dropdownItemClick = event => {
		this.setState({ label: event.target.firstChild.data });
	};

	async fetchQuery() {
		const result = await client.query({
			query: GET_CURRENCIES,
		});

		this.setState({
			currencies: [...result.data.currencies],
		});
	}

	render() {
		// console.log(this.state);
		const { currencies, label, dropdown } = this.state;

		return (
			<Container onClick={() => this.toggleModal()}>
				<Icon>{label}</Icon>
				<ArrowSvg dropdown={`${dropdown}`} />
				{dropdown && (
					<>
						<BackDrop dropdown={dropdown} />
						<DropdownList>
							{currencies.map(({ label, symbol }, index) => (
								<DropdownItem key={index} onClick={this.dropdownItemClick}>
									{symbol} {label}
								</DropdownItem>
							))}
						</DropdownList>
					</>
				)}
			</Container>
		);
	}
}

export default Currency;

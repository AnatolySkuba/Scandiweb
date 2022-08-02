import { PureComponent } from "react";
import { connect } from "react-redux";

import client from "query/apolloClient";
import GET_CURRENCIES from "query/Currencies.query";
import { setCurrency } from "store/cartSlice";
import { Container, Icon, ArrowSvg, DropdownList, DropdownItem, BackDrop } from "./HeaderCurrencyIcon.styled";

const mapStateToProps = state => ({
	currentCurrency: state.cart.currentCurrency,
});

export class HeaderCurrencyIcon extends PureComponent {
	state = { currencies: [], currency: "", dropdown: false };

	componentDidMount() {
		this.fetchQuery();
	}

	toggleDropdown() {
		this.setState(state => ({ dropdown: !state.dropdown }));
	}

	dropdownItemClick = event => {
		this.setState({ currency: event.target.firstChild.data });
		this.props.setCurrency(event.target.firstChild.data);
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
		const { currencies, currency, dropdown } = this.state;

		return (
			<Container onClick={() => this.toggleDropdown()}>
				<Icon>{currency || this.props.currentCurrency}</Icon>
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

export default connect(mapStateToProps, { setCurrency })(HeaderCurrencyIcon);

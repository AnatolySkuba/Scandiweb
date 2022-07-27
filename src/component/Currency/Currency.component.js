import { PureComponent } from "react";

import client from "query/apolloClient";
import GET_CURRENCIES from "query/Currencies.query";
import { ReactComponent as ArrowSvg } from "style/icons/arrow.svg";
import { Container, Icon } from "./Currency.styled";

export class Currency extends PureComponent {
	state = { currencies: [] };

	componentDidMount() {
		this.fetchQuery();
	}

	async fetchQuery() {
		const result = await client.query({
			query: GET_CURRENCIES,
		});

		this.setState({
			currencies: [...result.data.currencies],
		});
	}

	render() {
		// console.log(this.state, this.props);
		const { currencies } = this.state;
		return (
			<Container>
				<Icon>{currencies[0]?.symbol}</Icon>
				<ArrowSvg />
			</Container>
		);
	}
}

export default Currency;

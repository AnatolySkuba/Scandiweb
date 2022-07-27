import { PureComponent } from "react";

import client from "query/apolloClient";
import GET_CATEGORIES from "query/Categories.query";
import { Ul, Link } from "./Navigation.styled";

export class Navigation extends PureComponent {
	state = { categories: [] };

	componentDidMount() {
		this.fetchQuery();
	}

	async fetchQuery() {
		const result = await client.query({
			query: GET_CATEGORIES,
		});

		this.setState({
			categories: [...result.data.categories],
		});
	}

	render() {
		const { categories } = this.state;

		return (
			<nav>
				<Ul>
					{categories?.map(({ name }, index) => (
						<li key={index}>
							<Link to={`/category/${name}`}>{name}</Link>
						</li>
					))}
				</Ul>
			</nav>
		);
	}
}

export default Navigation;

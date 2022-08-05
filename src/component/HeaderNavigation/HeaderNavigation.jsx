import { PureComponent } from "react";

import withRouter from "route/withRouter";
import client from "query/apolloClient";
import GET_CATEGORIES from "query/Categories.query";
import { List, Link } from "./HeaderNavigation.styled";

export class HeaderNavigation extends PureComponent {
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
				<List>
					{categories?.map(({ name }, index) => (
						<li key={index}>
							<Link to={`category/${name}`} location={this.props.router.location.pathname}>
								{name}
							</Link>
						</li>
					))}
				</List>
			</nav>
		);
	}
}

export default withRouter(HeaderNavigation);

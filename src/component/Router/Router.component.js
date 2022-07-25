import { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../components/pages/Home";
import Product from "../../components/pages/Product";
import Cart from "../../components/pages/Cart";
import CategoryList from "../../components/pages/CategoryList";

export class Router extends PureComponent {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/product/:id" component={Product} />
						<Route path="/category/:category" component={CategoryList} />
						<Route path="/cart" component={Cart} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default Router;

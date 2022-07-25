import { PureComponent } from "react";
import { Provider } from "react-redux";

import Router from "../Router";

export class App extends PureComponent {
	renderRedux(children) {
		return (
			<Provider store={this.reduxStore} key="redux">
				{children}
			</Provider>
		);
	}

	renderContextProviders() {
		return <Router key="router" />;
	}

	render() {
		return this.renderContextProviders();
	}
}

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/product/:id" component={Product} />
//           <Route path="/category/:category" component={CategoryList} />
//           <Route path="/cart" component={Cart} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;

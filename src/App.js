import Home from "./components/pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import CategoryList from "./components/pages/CategoryList";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/product/:id" component={Product} />
					<Route path="/category/:category" component={CategoryList} />
					<Route path="/cart" component={Cart} />
				</Switch>
			</BrowserRouter>
		</div>
	);
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

import { Suspense, lazy, PureComponent } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { ApolloProvider } from "@apollo/client/react";

// import client from "../../query/apolloClient";
// import CategoryPageContainer from "route/CategoryPage";
import Header from "component/Header";
// import { Container } from "./App.styled";

const CategoryPage = lazy(() => import("route/CategoryPage" /* webpackChunkName: "CategoryPage" */));
const ProductPage = lazy(() => import("route/ProductPage" /* webpackChunkName: "ProductPage" */));
const CartPage = lazy(() => import("route/CartPage" /* webpackChunkName: "CartPage" */));

class App extends PureComponent {
	contextProviders = [this.renderBrowserRouter];

	renderBrowserRouter(children) {
		return <BrowserRouter key="browserRouter">{children}</BrowserRouter>;
	}

	// renderApolloProvider(children) {
	// 	return (
	// 		<ApolloProvider client={client} key="apolloProvider">
	// 			{children}
	// 		</ApolloProvider>
	// 	);
	// }

	renderContextProviders(children) {
		return this.contextProviders.map(render => render(children));
	}

	// render() {
	// 	return this.renderContextProviders(
	// 		<Container>
	// 			<Header />
	// 			<CategoryPageContainer />
	// 		</Container>,
	// 	);
	// }

	render() {
		return (
			<BrowserRouter>
				<Suspense fallback={<Header />}>
					<Routes>
						<Route path="/" element={<Header />}>
							<Route index element={<CategoryPage />} />
							<Route path="category/:category" element={<CategoryPage />} />
							<Route path="product/:productId" element={<ProductPage />} />
							<Route path="cart" element={<CartPage />} />
						</Route>
						<Route path="*" element={<Navigate to="/" replace={true} />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		);
	}
}

export default App;

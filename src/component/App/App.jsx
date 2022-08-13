import { Suspense, lazy, PureComponent } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "component/Header";

const ProductListPage = lazy(() => import("route/ProductListPage" /* webpackChunkName: "ProductListPage" */));
const ProductPage = lazy(() => import("route/ProductPage" /* webpackChunkName: "ProductPage" */));
const CartPage = lazy(() => import("route/CartPage" /* webpackChunkName: "CartPage" */));

class App extends PureComponent {
	render() {
		return (
			<BrowserRouter>
				<Suspense fallback={<Header />}>
					<Routes>
						<Route path="/Scandiweb/" element={<Header />}>
							<Route index element={<ProductListPage />} />
							<Route path="category/:category" element={<ProductListPage />} />
							<Route path="product/:productId" element={<ProductPage />} />
							<Route path="cart" element={<CartPage />} />
						</Route>
						<Route path="*" element={<Navigate to="/Scandiweb/" replace={true} />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		);
	}
}

export default App;

import { Suspense, lazy, PureComponent } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "component/Header";

const CategoryPage = lazy(() => import("route/CategoryPage" /* webpackChunkName: "CategoryPage" */));
const ProductPage = lazy(() => import("route/ProductPage" /* webpackChunkName: "ProductPage" */));
const CartPage = lazy(() => import("route/CartPage" /* webpackChunkName: "CartPage" */));

class App extends PureComponent {
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

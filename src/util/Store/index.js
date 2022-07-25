import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const getStore = (() => {
	// Initialize the store
	const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

	return function storeGetter() {
		return store;
	};
})();

export default getStore;

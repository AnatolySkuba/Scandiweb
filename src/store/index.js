import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { store, persistor };

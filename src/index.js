import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import client from "./Graphql/apolloClient";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</ApolloProvider>,
	document.getElementById("root"),
);

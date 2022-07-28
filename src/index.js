import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./style/index.css";
import App from "./component/App";
import { store, persistor } from "store/store";

////////////////////
// import { ApolloProvider } from "@apollo/client/react";
// import { BrowserRouter } from "react-router-dom";

// import client from "./query/apolloClient";

//////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{/* <ApolloProvider client={client}> */}
				{/* <BrowserRouter> */}
				<App />
				{/* </BrowserRouter> */}
				{/* </ApolloProvider> */}{" "}
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);

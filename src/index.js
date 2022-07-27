import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./component/App";

////////////////////
// import { ApolloProvider } from "@apollo/client/react";
// import { BrowserRouter } from "react-router-dom";

// import client from "./query/apolloClient";

//////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <ApolloProvider client={client}> */}
		{/* <BrowserRouter> */}
		<App />
		{/* </BrowserRouter> */}
		{/* </ApolloProvider> */}
	</React.StrictMode>,
);

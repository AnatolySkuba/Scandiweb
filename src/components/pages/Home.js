import React, { Component } from "react";
import Navbar from "../header/Navbar";
import ProductList from "../list/ProductList";

export default class Home extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<ProductList />
			</div>
		);
	}
}

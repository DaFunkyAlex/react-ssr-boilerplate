import '@babel/polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '../helpers/ScrollToTop';
import Head from "../components/Layout/Head";
import App from "./App";

export default class extends React.Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<Head/>
					<App/>
				</ScrollToTop>
			</Router>
		);
	}
}



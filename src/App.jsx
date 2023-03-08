import "./App.css";
import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global-styles";

import * as theme from "./styles/theme";

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<h1>ola mundo</h1>
			<GlobalStyles />
		</ThemeProvider>
	);
};

import React from "react";

import { ThemeProvider } from "styled-components";
import { Nav } from "../../components/Nav";
import { GlobalStyles } from "../../styles/global-styles";

import * as theme from "../../styles/theme";

export const App = () => {
	return (
		<ThemeProvider theme={theme["purpleTheme"]}>
			<Nav />
			<GlobalStyles />
		</ThemeProvider>
	);
};

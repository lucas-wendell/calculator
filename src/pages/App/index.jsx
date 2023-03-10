import React from "react";

import { ThemeProvider } from "styled-components";
import { Calculator } from "../../components/Calculator";

import * as Styled from "./styles";
import { GlobalStyles } from "../../styles/global-styles";

import * as theme from "../../styles/theme";

export const App = () => {
	return (
		<ThemeProvider theme={theme["purpleTheme"]}>
			<Styled.Container>
				<Calculator />
			</Styled.Container>
			<GlobalStyles />
		</ThemeProvider>
	);
};

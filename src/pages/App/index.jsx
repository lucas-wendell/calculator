import React, { useContext } from "react";

import { ThemeProvider } from "styled-components";
import { Calculator } from "../../components/Calculator";

import * as Styled from "./styles";
import { GlobalStyles } from "../../styles/global-styles";

import * as theme from "../../styles/theme";
import { CalculatorState } from "../../context";

export const App = () => {
	const { theme: currentTheme } = useContext(CalculatorState);

	return (
		<ThemeProvider theme={theme[currentTheme]}>
			<Styled.Container>
				<Calculator />
			</Styled.Container>
			<GlobalStyles />
		</ThemeProvider>
	);
};

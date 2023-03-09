import React from "react";

import { ThemeProvider } from "styled-components";
import { Nav } from "../../components/Nav";
import { GlobalStyles } from "../../styles/global-styles";

import * as theme from "../../styles/theme";
import { Viewer } from "../../components/Viewer";
import * as Styled from "./styles";
export const App = () => {
	return (
		<ThemeProvider theme={theme["purpleTheme"]}>
			<Styled.Container>
				<Nav />
				<Viewer>399,981</Viewer>
			</Styled.Container>
			<GlobalStyles />
		</ThemeProvider>
	);
};

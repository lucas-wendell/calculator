import P from "prop-types";
import React from "react";

import actions from "./actions";
import { reducer } from "./reducer";

import { createContext, useReducer } from "react";

const initialState = {
	themes: ["mainTheme", "lightTheme", "purpleTheme"],
	theme: 1,
	currentNumber: "0",
	firstNumber: "0",
	operation: "",
};

export const CalculatorState = createContext();

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = {
		theme: state.themes[state.theme - 1],
		teste: () => {
			dispatch({ type: actions.TESTE });
		},
		toggleTheme: (themeValue) => {
			dispatch({ type: actions.CHANGE_THEME, payload: themeValue });
		},
	};

	return (
		<CalculatorState.Provider value={value}>
			{children}
		</CalculatorState.Provider>
	);
};

Provider.propTypes = {
	children: P.node.isRequired,
};

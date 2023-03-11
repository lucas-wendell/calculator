import { createContext, useReducer } from "react";
import actions from "./actions";
import { reducer } from "./reducer";
import P from "prop-types";

import React from "react";

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
		theme: state.theme,
		teste: () => {
			dispatch({ type: actions.TESTE });
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

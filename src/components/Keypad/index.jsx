import React, { useContext, useEffect, useReducer } from "react";
import { CalculatorState } from "../../context";
import * as Styled from "./styles";
import actions from "./actions";
import { reducer } from "./reducer";

const initialState = {
	currentNumber: "0",
	firstNumber: "0",
	operation: "",
	numberOfDot: 0,
	lastKeyPress: "",
};

const operationsActions = {
	"+": actions.ADD_KEY_PRESSED,
	"-": actions.MINUS_KEY_PRESSED,
	"/": actions.DIVISION_KEY_PRESSED,
	x: actions.MULTIPLICATION_KEY_PRESSED,
};

export const Keypad = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentNumber } = state;
	const { setGlobalCurrentNumber } = useContext(CalculatorState);

	useEffect(() => {
		setGlobalCurrentNumber(currentNumber);
	}, [currentNumber]);

	const handleEqual = () => {
		if (state.operation !== "") {
			const TYPE = operationsActions[state.operation];
			dispatch({ type: TYPE });
		}
	};

	const handleClick = (e) => {
		const action = e.target.getAttribute("action");
		if (!action) return;

		if (action === actions.NUMBER_KEY_PRESSED) {
			const value = e.target.getAttribute("value");
			return dispatch({ type: action, payload: value });
		} else if (action === "equal") {
			return handleEqual();
		} else {
			dispatch({ type: action });
		}
	};

	return (
		<Styled.Container onClick={handleClick}>
			<Styled.Key value="7" action={actions.NUMBER_KEY_PRESSED}>
				7
			</Styled.Key>
			<Styled.Key value="8" action={actions.NUMBER_KEY_PRESSED}>
				8
			</Styled.Key>
			<Styled.Key value="9" action={actions.NUMBER_KEY_PRESSED}>
				9
			</Styled.Key>
			<Styled.SpecialKey
				styleName="delAndReset"
				action={actions.DELETE_KEY_PRESSED}
			>
				DEL
			</Styled.SpecialKey>
			<Styled.Key value="4" action={actions.NUMBER_KEY_PRESSED}>
				4
			</Styled.Key>
			<Styled.Key value="5" action={actions.NUMBER_KEY_PRESSED}>
				5
			</Styled.Key>
			<Styled.Key value="6" action={actions.NUMBER_KEY_PRESSED}>
				6
			</Styled.Key>
			<Styled.Key value="+" action={actions.ADD_KEY_PRESSED}>
				+
			</Styled.Key>
			<Styled.Key value="1" action={actions.NUMBER_KEY_PRESSED}>
				1
			</Styled.Key>
			<Styled.Key value="2" action={actions.NUMBER_KEY_PRESSED}>
				2
			</Styled.Key>
			<Styled.Key value="3" action={actions.NUMBER_KEY_PRESSED}>
				3
			</Styled.Key>
			<Styled.Key action={actions.MINUS_KEY_PRESSED}>-</Styled.Key>
			<Styled.Key value="." action={actions.NUMBER_KEY_PRESSED}>
				.
			</Styled.Key>
			<Styled.Key value="0" action={actions.NUMBER_KEY_PRESSED}>
				0
			</Styled.Key>
			<Styled.Key action={actions.DIVISION_KEY_PRESSED}>/</Styled.Key>
			<Styled.Key action={actions.MULTIPLICATION_KEY_PRESSED}>x</Styled.Key>
			<Styled.SpecialKey
				styleName="delAndReset"
				typeKey="reset"
				action={actions.RESET_KEY_PRESSED}
			>
				RESET
			</Styled.SpecialKey>
			<Styled.SpecialKey
				action="equal"
				value="="
				styleName="equal"
				typeKey="equal"
			>
				=
			</Styled.SpecialKey>
		</Styled.Container>
	);
};

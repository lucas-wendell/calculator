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

	return (
		<Styled.Container>
			<Styled.Key
				value="7"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				7
			</Styled.Key>
			<Styled.Key
				value="8"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				8
			</Styled.Key>
			<Styled.Key
				value="9"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				9
			</Styled.Key>
			<Styled.SpecialKey
				styleName="delAndReset"
				onClick={() => {
					dispatch({ type: actions.DELETE_KEY_PRESSED });
				}}
			>
				DEL
			</Styled.SpecialKey>
			<Styled.Key
				value="4"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				4
			</Styled.Key>
			<Styled.Key
				value="5"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				5
			</Styled.Key>
			<Styled.Key
				value="6"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				6
			</Styled.Key>
			<Styled.Key
				value="+"
				onClick={() => {
					dispatch({ type: actions.ADD_KEY_PRESSED });
				}}
			>
				+
			</Styled.Key>
			<Styled.Key
				value="1"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				1
			</Styled.Key>
			<Styled.Key
				value="2"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				2
			</Styled.Key>
			<Styled.Key
				value="3"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				3
			</Styled.Key>
			<Styled.Key
				onClick={() => {
					dispatch({ type: actions.MINUS_KEY_PRESSED });
				}}
			>
				-
			</Styled.Key>
			<Styled.Key
				value="."
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				.
			</Styled.Key>
			<Styled.Key
				value="0"
				onClick={(e) => {
					const value = e.target.getAttribute("value");
					dispatch({ type: actions.NUMBER_KEY_PRESSED, payload: value });
				}}
			>
				0
			</Styled.Key>
			<Styled.Key
				onClick={() => {
					dispatch({ type: actions.DIVISION_KEY_PRESSED });
				}}
			>
				/
			</Styled.Key>
			<Styled.Key
				onClick={() => {
					dispatch({ type: actions.MULTIPLICATION_KEY_PRESSED });
				}}
			>
				x
			</Styled.Key>
			<Styled.SpecialKey
				onClick={() => {
					dispatch({ type: actions.RESET_KEY_PRESSED });
				}}
				styleName="delAndReset"
				typeKey="reset"
			>
				RESET
			</Styled.SpecialKey>
			<Styled.SpecialKey
				onClick={handleEqual}
				value="="
				styleName="equal"
				typeKey="equal"
			>
				=
			</Styled.SpecialKey>
		</Styled.Container>
	);
};

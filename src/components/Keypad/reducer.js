import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.NUMBER_KEY_PRESSED: {
			const isDot = action.payload === ".";
			let { numberOfDot, currentNumber } = state;
			if (isDot) {
				if (numberOfDot !== 0) return { ...state };
				state = { ...state, numberOfDot: ++numberOfDot };
			}

			return {
				...state,
				currentNumber: `${
					currentNumber === "0" ? (isDot ? currentNumber : "") : currentNumber
				}${action.payload}`,
			};
		}
		case actions.ADD_KEY_PRESSED: {
			const { firstNumber, currentNumber } = state;
			if (firstNumber === "0") {
				return {
					...state,
					firstNumber: currentNumber,
					currentNumber: "0",
					operation: "+",
					lastKeyPress: "operation",
				};
			}
			const sum = Number(firstNumber) + Number(currentNumber);
			return {
				...state,
				currentNumber: String(sum),
				firstNumber: "0",
				operation: "",
				lastKeyPress: "",
			};
		}
		case actions.MINUS_KEY_PRESSED: {
			const { firstNumber, currentNumber } = state;

			if (firstNumber === "0") {
				return {
					...state,
					firstNumber: currentNumber,
					currentNumber: "0",
					operation: "-",
				};
			}

			const sub = Number(firstNumber) - Number(currentNumber);
			return {
				...state,
				currentNumber: String(sub),
				firstNumber: "0",
				operation: "",
				lastKeyPress: "",
			};
		}
		case actions.MULTIPLICATION_KEY_PRESSED: {
			const { firstNumber, currentNumber } = state;

			if (firstNumber === "0") {
				return {
					...state,
					firstNumber: currentNumber,
					currentNumber: "0",
					operation: "x",
				};
			}

			const mul = Number(firstNumber) * Number(currentNumber);
			return {
				...state,
				currentNumber: String(mul),
				firstNumber: "0",
				operation: "",
				lastKeyPress: "",
			};
		}
		case actions.DIVISION_KEY_PRESSED: {
			const { firstNumber, currentNumber } = state;

			if (firstNumber === "0") {
				return {
					...state,
					firstNumber: currentNumber,
					currentNumber: "0",
					operation: "/",
				};
			}

			const div = Number(firstNumber) / Number(currentNumber);
			return {
				...state,
				currentNumber: String(div),
				firstNumber: "0",
				operation: "",
				lastKeyPress: "",
			};
		}

		case actions.DELETE_KEY_PRESSED: {
			const { lastKeyPress, firstNumber, currentNumber } = state;

			if (lastKeyPress === "operation") {
				return {
					...state,
					operation: "",
					currentNumber: firstNumber,
					firstNumber: "0",
					lastKeyPress: "",
				};
			}

			return {
				...state,
				currentNumber:
					currentNumber.length === 1
						? "0"
						: currentNumber.slice(0, currentNumber.length - 1),
				numberOfDot: 0,
				lastKeyPress: "",
			};
		}
		case actions.RESET_KEY_PRESSED: {
			return {
				currentNumber: "0",
				firstNumber: "0",
				operation: "",
				numberOfDot: 0,
				lastKeyPress: "",
			};
		}
	}
};

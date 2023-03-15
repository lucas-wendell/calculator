import React, { useEffect, useState } from "react";
import * as Styled from "./styles";

export const Keypad = () => {
	const [currentNumber, setCurrentNumber] = useState("0");
	const [firstNumber, setFirstNumber] = useState("0");
	const [operation, setOperation] = useState("");
	const [numberOfDot, setNumberOfDot] = useState(0);
	const [lastKeyPress, setLastKeyPress] = useState("");

	const handleAddNumber = (e) => {
		const value = e.target.getAttribute("value");
		const isDot = value === ".";

		if (isDot) {
			if (numberOfDot !== 0) return;
			setNumberOfDot((prevValue) => ++prevValue);
		}

		setCurrentNumber(
			(prevNumber) =>
				`${prevNumber === "0" ? (isDot ? prevNumber : "") : prevNumber}${value}`
		);

		setLastKeyPress(value);
	};

	const handleSum = () => {
		if (firstNumber === "0") {
			setFirstNumber(currentNumber);
			setCurrentNumber("0");
			setOperation("+");
		} else {
			const sum = +firstNumber + +currentNumber;
			setCurrentNumber(String(sum));
			setFirstNumber("0");
			setOperation("");
		}
		setLastKeyPress("operation");
	};

	const handleMul = () => {
		if (firstNumber === "0") {
			setFirstNumber(currentNumber);
			setCurrentNumber("0");
			setOperation("x");
		} else {
			const mul = +firstNumber * +currentNumber;
			setCurrentNumber(String(mul));
			setFirstNumber("0");
			setOperation("");
		}
		setLastKeyPress("operation");
	};

	const handleDiv = () => {
		if (firstNumber === "0") {
			setFirstNumber(currentNumber);
			setCurrentNumber("0");
			setOperation("/");
		} else {
			const div = +firstNumber / +currentNumber;
			setCurrentNumber(String(div));
			setFirstNumber("0");
			setOperation("");
		}
		setLastKeyPress("operation");
	};

	const handleReset = () => {
		setNumberOfDot(0);
		setFirstNumber("0");
		setCurrentNumber("0");
		setOperation("");
	};

	const handleSub = () => {
		if (firstNumber === "0") {
			setFirstNumber(currentNumber);
			setCurrentNumber("0");
			setOperation("-");
		} else {
			const sub = +firstNumber - +currentNumber;
			setCurrentNumber(String(sub));
			setFirstNumber("0");
			setOperation("");
		}
		setLastKeyPress("operation");
	};

	useEffect(() => {
		console.log(lastKeyPress);
	}, [lastKeyPress]);

	const handleDel = () => {
		// console.log("del");
		if (lastKeyPress === "operation") {
			setOperation("");
			setCurrentNumber(firstNumber);
			setFirstNumber("0");
		} else {
			setCurrentNumber((prevNumber) =>
				prevNumber.slice(0, prevNumber.length - 1)
			);
			setNumberOfDot(0);
		}

		setLastKeyPress("");
	};

	const operations = {
		"+": handleSum,
		"-": handleSub,
		"/": handleDiv,
		x: handleMul,
	};

	const handleEqual = () => {
		if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
			operations[operation]();
		}
	};

	return (
		<Styled.Container>
			<Styled.Key value="7" onClick={handleAddNumber}>
				7
			</Styled.Key>
			<Styled.Key value="8" onClick={handleAddNumber}>
				8
			</Styled.Key>
			<Styled.Key value="9" onClick={handleAddNumber}>
				9
			</Styled.Key>
			<Styled.SpecialKey styleName="delAndReset" onClick={handleDel}>
				DEL
			</Styled.SpecialKey>
			<Styled.Key value="4" onClick={handleAddNumber}>
				4
			</Styled.Key>
			<Styled.Key value="5" onClick={handleAddNumber}>
				5
			</Styled.Key>
			<Styled.Key value="6" onClick={handleAddNumber}>
				6
			</Styled.Key>
			<Styled.Key value="+" onClick={handleSum}>
				+
			</Styled.Key>
			<Styled.Key value="1" onClick={handleAddNumber}>
				1
			</Styled.Key>
			<Styled.Key value="2" onClick={handleAddNumber}>
				2
			</Styled.Key>
			<Styled.Key value="3" onClick={handleAddNumber}>
				3
			</Styled.Key>
			<Styled.Key onClick={handleSub}>-</Styled.Key>
			<Styled.Key value="." onClick={handleAddNumber}>
				.
			</Styled.Key>
			<Styled.Key value="0" onClick={handleAddNumber}>
				0
			</Styled.Key>
			<Styled.Key onClick={handleDiv}>/</Styled.Key>
			<Styled.Key onClick={handleMul}>x</Styled.Key>
			<Styled.SpecialKey
				onClick={handleReset}
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

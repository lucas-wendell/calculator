import React, { useContext } from "react";
import { CalculatorState } from "../../context";
import * as Styled from "./styles";

export const Viewer = () => {
	const { currentNumber } = useContext(CalculatorState);
	return <Styled.Container>{currentNumber}</Styled.Container>;
};

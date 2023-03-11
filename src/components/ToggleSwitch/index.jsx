import React, { useContext, useEffect, useState } from "react";
import { CalculatorState } from "../../context";

import * as Styled from "./styles";

export const ToggleSwitch = () => {
	const [position, setPosition] = useState(1);
	const { toggleTheme } = useContext(CalculatorState);

	const handleOnClick = () => {
		setPosition((prev) => (prev === 3 ? (prev = 1) : ++prev));
	};

	useEffect(() => {
		toggleTheme(position);
	}, [position]);

	return (
		<Styled.Container>
			<Styled.NumberContainer>
				<p>1</p>
				<p>2</p>
				<p>3</p>
			</Styled.NumberContainer>
			<Styled.ToggleSwitch position={position} onClick={handleOnClick} />
		</Styled.Container>
	);
};

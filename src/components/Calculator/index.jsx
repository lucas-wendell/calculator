import React from "react";

import { Nav } from "../Nav";
import { Keypad } from "../Keypad";

import { Viewer } from "../Viewer";
import * as Styled from "./styles";

export const Calculator = () => {
	return (
		<Styled.Container>
			<Nav />
			<Viewer>399,981</Viewer>
			<Keypad />
		</Styled.Container>
	);
};

import React from "react";
import { ToggleSwitch } from "../ToggleSwitch";

import * as Styled from "./styles";

export const Nav = () => {
	return (
		<Styled.Container>
			<Styled.Logo>calc</Styled.Logo>
			<Styled.ToggleSwitchContainer>
				<p>theme</p>
				<ToggleSwitch />
			</Styled.ToggleSwitchContainer>
		</Styled.Container>
	);
};

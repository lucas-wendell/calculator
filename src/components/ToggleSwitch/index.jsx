import React from "react";

import * as Styled from "./styles";

export const ToggleSwitch = () => {
	return (
		<Styled.Container>
			<Styled.NumberContainer>
				<p>1</p>
				<p>2</p>
				<p>3</p>
			</Styled.NumberContainer>
			<Styled.ToggleSwitch />
		</Styled.Container>
	);
};

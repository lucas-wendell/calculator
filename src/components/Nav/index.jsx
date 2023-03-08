import React from "react";

import * as Styled from "./styles";

function Nav() {
	return (
		<Styled.Container>
			<Styled.Logo>calc</Styled.Logo>
			<Styled.ToggleSwitchContainer>
				<p>theme</p>
			</Styled.ToggleSwitchContainer>
		</Styled.Container>
	);
}

export default Nav;

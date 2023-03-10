import React from "react";

import * as Styled from "./styles";

export const Keypad = () => {
	return (
		<Styled.Container>
			<Styled.Key>7</Styled.Key>
			<Styled.Key>8</Styled.Key>
			<Styled.Key>9</Styled.Key>
			<Styled.Key>DEL</Styled.Key>
			<Styled.Key>4</Styled.Key>
			<Styled.Key>5</Styled.Key>
			<Styled.Key>6</Styled.Key>
			<Styled.Key>+</Styled.Key>
			<Styled.Key>1</Styled.Key>
			<Styled.Key>2</Styled.Key>
			<Styled.Key>3</Styled.Key>
			<Styled.Key>-</Styled.Key>
			<Styled.Key>.</Styled.Key>
			<Styled.Key>0</Styled.Key>
			<Styled.Key>/</Styled.Key>
			<Styled.Key>x</Styled.Key>
			<Styled.Key typeKey="reset" specialKey>
				RESET
			</Styled.Key>
			<Styled.Key typeKey="equal" specialKey>
				=
			</Styled.Key>
		</Styled.Container>
	);
};

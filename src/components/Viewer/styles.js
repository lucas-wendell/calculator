import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		padding: 2rem;
		font-size: 3rem;
		max-width: 50rem;
		text-align: right;
		border-radius: 0.5rem;
		color: ${theme.textColors.primary};
		background-color: ${theme.backgrounds.keypadBg};
	`}
`;

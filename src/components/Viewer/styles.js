import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		padding: 2rem;
		font-size: 3rem;
		max-width: 50rem;
		text-align: right;
		border-radius: 0.5rem;
		color: ${theme.navColor};
		background-color: ${theme.backgrounds.screenBg};
	`}
`;

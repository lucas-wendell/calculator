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

	@media (max-width: 530px) {
		max-width: 45rem;
		font-size: 2rem;
	}

	@media (max-width: 400px) {
		max-width: 30rem;
		font-size: 1.5rem;
		padding: 2rem 1rem;
	}

	@media (max-width: 320px) {
		max-width: 25rem;
	}
`;

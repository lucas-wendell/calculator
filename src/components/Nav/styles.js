import styled, { css } from "styled-components";

export const Container = styled.nav`
	display: flex;
	max-width: 50rem;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 530px) {
		max-width: 45rem;
	}

	@media (max-width: 320px) {
		max-width: 25rem;
	}
`;

export const Logo = styled.h4`
	${({ theme }) => css`
		font-size: 3.2rem;
		color: ${theme.navColor};
	`};

	@media (max-width: 400px) {
		font-size: 2.5rem;
	}
`;

export const ToggleSwitchContainer = styled.div`
	${({ theme }) => css`
		gap: 2rem;
		display: flex;
		font-size: 1.2rem;
		align-items: flex-end;
		text-transform: uppercase;
		color: ${theme.navColor};
	`};

	@media (max-width: 400px) {
		font-size: 1rem;
	}
`;

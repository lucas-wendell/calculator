import styled, { css } from "styled-components";

export const Container = styled.nav`
	display: flex;
	max-width: 50rem;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.h4`
	${({ theme }) => css`
		font-size: 3.2rem;
		color: ${theme.textColors.primary};
	`};
`;

export const ToggleSwitchContainer = styled.div`
	${({ theme }) => css`
		gap: 2rem;
		display: flex;
		font-size: 1.2rem;
		align-items: flex-end;
		text-transform: uppercase;
		color: ${theme.textColors.primary};
	`};
`;

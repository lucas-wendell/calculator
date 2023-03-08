import styled, { css } from "styled-components";

/* ${({ theme }) => css``} */
export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.h4`
	${({ theme }) => css`
		color: ${theme.textColors.primary};
		font-size: 3.2rem;
	`};
`;

export const ToggleSwitchContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 2rem;
		color: ${theme.textColors.primary};
		font-size: 1.2rem;
		text-transform: uppercase;
	`};
`;

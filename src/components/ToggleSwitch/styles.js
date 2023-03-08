import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 0.5rem;
	width: 7rem;
`;

export const NumberContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;

export const ToggleSwitch = styled.div`
	${({ theme }) => css`
		position: relative;
		width: 100%;
		border-radius: 2rem;
		background-color: ${theme.backgrounds.keypadBg};
		height: 2.2rem;

		&::before {
			content: "";
			position: absolute;
			width: 1.5rem;
			height: 1.5rem;
			background-color: ${theme.toggleColor};
			border-radius: 50%;
			left: 0.5rem;
			top: 50%;
			transform: translateY(-50%);
			z-index: 100;
		}
	`}
`;

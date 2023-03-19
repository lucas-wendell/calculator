import styled, { css } from "styled-components";

export const Container = styled.div`
	gap: 0.5rem;
	width: 7rem;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (max-width: 530px) {
		width: 6rem;
	}

	@media (max-width: 400px) {
		width: 5rem;
	}
`;

export const NumberContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: ${theme.navColor};
		font-size: 1.5rem;
	`}

	@media (max-width: 400px) {
		font-size: 1rem;
	}
`;

export const ToggleSwitch = styled.div`
	${({ theme, position }) => css`
		width: 100%;
		height: 2.2rem;
		cursor: pointer;
		position: relative;
		border-radius: 2rem;
		background-color: ${theme.backgrounds.keypadBg};

		&::before {
			top: 50%;
			content: "";
			z-index: 100;
			margin-left: ${position == 1
				? "0.5rem"
				: position == 2
				? "calc(50% - 1rem)"
				: "calc(100% - 2rem)"};
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
			position: absolute;
			transform: translateY(-50%);
			background-color: ${theme.toggleColor};
			transition: 300ms ease-in-out;
		}

		@media (max-width: 400px) {
			&::before {
				width: 1.2rem;
				height: 1.2rem;

				margin-left: ${position == 1
					? "0.5rem"
					: position == 2
					? "calc(50% - .8rem)"
					: "calc(100% - 2rem)"};
			}
		}
	`}
`;

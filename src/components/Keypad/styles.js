import styled, { css } from "styled-components";

const CommonStyles = css`
	display: flex;
	cursor: pointer;
	font-size: 3rem;
	transition: 0.2s;
	min-width: 10rem;
	min-height: 7rem;
	align-items: center;
	border-radius: 0.4rem;
	justify-content: center;

	@media (max-width: 530px) {
		min-width: 7rem;
		min-height: 4rem;
		font-size: 2rem;
	}

	@media (max-width: 400px) {
		min-width: 5rem;
		min-height: 4rem;
		font-size: 1.5rem;
	}
`;

export const SpecialKey = styled.div`
	${({ theme, typeKey, styleName }) => css`
		${CommonStyles}
		color: ${theme.keys.specialKey[styleName].color};
		border-bottom: ${theme.keys.specialKey[styleName].border};
		background-color: ${theme.keys.specialKey[styleName].colorBg};

		grid-column: ${typeKey === "reset"
			? "1 / 3"
			: typeKey === "equal"
			? "3 / 5"
			: "auto"};
		&:hover {
			background-color: ${theme.keys.specialKey[styleName].hoverColor};
		}
	`}
`;

export const Container = styled.div`
	${({ theme }) => css`
		gap: 2rem;
		display: grid;
		padding: 2rem;
		width: min-content;
		border-radius: 0.5rem;
		grid-template-columns: repeat(4, 1fr);
		background-color: ${theme.backgrounds.keypadBg};
	`}

	@media (max-width: 400px) {
		gap: 1.5rem;
		padding: 1.5rem;
	}

	@media (max-width: 320px) {
		gap: 1rem;
		padding: 1rem;
	}
`;

export const Key = styled.div`
	${({ theme }) => css`
		${CommonStyles}
		color: ${theme.keys.color};
		border-bottom: ${theme.keys.border};
		background-color: ${theme.keys.keyBg};

		&:hover {
			background-color: ${theme.keys.hoverColor};
		}
	`}
`;

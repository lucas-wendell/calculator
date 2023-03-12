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
`;

export const Key = styled.div`
	${({ theme }) => css`
		${CommonStyles}
		color: ${theme.textColors.primary};
		border-bottom: ${theme.keys.border};
		background-color: ${theme.keys.keyBg};

		&:hover {
			background-color: ${theme.keys.hoverColor};
		}
	`}
`;

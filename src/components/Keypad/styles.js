import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		background-color: ${theme.backgrounds.keypadBg};
		border-radius: 0.5rem;
		width: min-content;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		padding: 2rem;
	`}
`;

export const Key = styled.div`
	${({ theme }) => css`
		background-color: ${({ typeKey }) =>
			typeKey === "reset"
				? theme.keys.specialKey.reset.colorBg
				: typeKey === "equal"
				? theme.keys.specialKey.equal.colorBg
				: theme.keys.keyBg};
		min-width: 10rem;
		min-height: 7rem;
		border-radius: 0.4rem;
		font-size: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: ${({ typeKey }) =>
			typeKey === "reset"
				? theme.keys.specialKey.reset.border
				: typeKey === "equal"
				? theme.keys.specialKey.equal.border
				: theme.keys.border};

		color: ${({ typeKey }) =>
			typeKey === "reset"
				? theme.textColors.tertiary
				: typeKey === "equal"
				? theme.textColors.secondary
				: theme.textColors.primary};
		grid-column: ${({ typeKey }) =>
			typeKey === "reset" ? "1 / 3" : typeKey === "equal" ? "3 / 5" : "auto"};

		transition: 0.2s;

		&:hover {
			cursor: pointer;
			background-color: ${({ typeKey }) =>
				typeKey === "reset"
					? theme.keys.specialKey.reset.hoverColor
					: typeKey === "equal"
					? theme.keys.specialKey.equal.hoverColor
					: theme.keys.hoverColor};
		}
	`}
`;

import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.CHANGE_THEME: {
			return { ...state, theme: action.payload };
		}
		case actions.SET_CURRENT_NUMBER: {
			return { ...state, currentNumber: action.payload };
		}
	}
};

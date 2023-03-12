import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TESTE: {
			console.log("ola mundo");
			console.log(state);
			return state;
		}
		case actions.CHANGE_THEME: {
			return { ...state, theme: action.payload };
		}
	}
};

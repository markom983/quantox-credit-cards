import { CARDS } from "./constants"

const initialState = {
	cardsData: []
}

function cardsReducer (state = initialState, action) {
	switch (action.type) {
		case CARDS:
			return {
				...state,
				cardsData: [...state.cardsData, action.data]
			}

		default:
			return state
	}
}

export default cardsReducer

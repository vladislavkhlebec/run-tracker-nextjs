import { CREATE_JOG, SET_ALL_JOGS } from './actionTypes'

const initialState = {
	items: [],
}

export const jogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_JOG: {
			return {
				...state,
				items: [...state.items, action.payload],
			}
		}
		case SET_ALL_JOGS: {
			return {
				...state,
				items: action.jogs,
			}
		}
		default: {
			return state
		}
	}
}

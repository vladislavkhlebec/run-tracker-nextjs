import { CREATE_JOG, SET_ALL_JOGS, SET_JOG_LOADING } from './actionTypes'

const initialState = {
	items: [],
	isLoading: false,
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
		case SET_JOG_LOADING: {
			return {
				...state,
				isLoading: action.payload,
			}
		}
		default: {
			return state
		}
	}
}

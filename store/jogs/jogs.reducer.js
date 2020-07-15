import { CREATE_JOG } from './actionTypes'

const initialState = {
	jogs: [],
}

export const jogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_JOG: {
			return {
				...state,
				posts: [...state.jogs, action.payload],
			}
		}
		default: {
			return state
		}
	}
}

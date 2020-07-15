import { FAILURE, LOGIN, LOGOUT } from './actionsTypes'

const initialState = {
	user: {},
}

export const jogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN: {
			return {
				...state,
				user: action.user,
			}
		}
		case LOGOUT: {
			return {
				...state,
				user: {},
			}
		}
		case FAILURE: {
			return {
				...state,
				failure: true,
			}
		}
		default: {
			return state
		}
	}
}

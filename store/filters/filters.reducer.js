import { SET_START_DATE, SET_END_DATE, SET_IS_ACTIVE_FILTERS } from './actionTypes'

const initialState = {
	startDate: null,
	endDate: null,
	isActive: true,
}

export const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_START_DATE: {
			return {
				...state,
				startDate: action.date,
			}
		}
		case SET_END_DATE: {
			return {
				...state,
				endDate: action.date,
			}
		}
		case SET_IS_ACTIVE_FILTERS: {
			console.log(action)
			return {
				...state,
				isActive: action.payload,
			}
		}
		default: {
			return state
		}
	}
}

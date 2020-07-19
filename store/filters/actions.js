import { SET_START_DATE, SET_END_DATE, SET_IS_ACTIVE_FILTERS } from './actionTypes'

export const setStartDate = date => {
	return {
		type: SET_START_DATE,
		date,
	}
}

export const setEndDate = date => {
	return {
		type: SET_END_DATE,
		date,
	}
}

export const setIsActiveFilter = boolean => {
	return {
		type: SET_IS_ACTIVE_FILTERS,
		payload: boolean,
	}
}

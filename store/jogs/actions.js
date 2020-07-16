import { CREATE_JOG, FAILURE, SET_ALL_JOGS } from './actionTypes'
import { getAllJogs } from '../../libs/crud/jogs.crud'
import redirect from '../../utils/redirect'

export const createJog = jog => {
	return {
		type: CREATE_JOG,
		payload: jog,
	}
}

export const fetchJogs = () => {
	return dispatch => {
		getAllJogs().then(
			response => {
				dispatch(success(response.data.response.jogs))
			},
			error => {
				dispatch(failure(error.toString()))
				redirect('/')
			}
		)
	}
	function success(jogs) {
		return { type: SET_ALL_JOGS, jogs }
	}
	function failure(error) {
		return { type: FAILURE, error }
	}
}

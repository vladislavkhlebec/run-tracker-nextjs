import { CREATE_JOG, FAILURE, SET_ALL_JOGS } from './actionTypes'
import { getAllJogs, postCreateJog } from '../../libs/crud/jogs.crud'
import redirect from '../../utils/redirect'
import { LOGIN } from '../users/actionsTypes'

export const createJog = jog => {
	return dispatch => {
		postCreateJog().then(
			response => {
				console.log('response', response)
				// dispatch(success(response.data.response.jogs))
			},
			error => {
				dispatch(failure(error.toString()))
				redirect('/')
			}
		)
	}

	function success(jog) {
		return { type: CREATE_JOG, jog }
	}
	function failure(error) {
		return { type: FAILURE, error }
	}
}

export const fetchJogs = () => {
	return dispatch => {
		getAllJogs().then(
			response => {
				dispatch(success(response.data.response.jogs))
				dispatch(setUser(response.data.response.users[0]))
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
	function setUser(user) {
		return { type: LOGIN, user }
	}
	function failure(error) {
		return { type: FAILURE, error }
	}
}

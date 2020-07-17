import { CREATE_JOG, FAILURE, SET_ALL_JOGS, SET_JOG_LOADING } from './actionTypes'
import { getAllJogs, postCreateJog, putUpdateJog } from '../../libs/crud/jogs.crud'
import redirect from '../../utils/redirect'
import { LOGIN } from '../users/actionsTypes'

export const createJog = jog => {
	return dispatch => {
		dispatch(isLoading(true))

		postCreateJog(jog).then(
			response => {
				dispatch(isLoading(false))
				redirect('/jogs')
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
	function isLoading(boolean) {
		return { type: SET_JOG_LOADING, payload: boolean }
	}
}

export const fetchJogs = () => {
	return dispatch => {
		dispatch(isLoading(true))

		getAllJogs().then(
			response => {
				dispatch(success(response.data.response.jogs))
				dispatch(setUser(response.data.response.users[0]))
				dispatch(isLoading(false))
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
	function isLoading(boolean) {
		return { type: SET_JOG_LOADING, payload: boolean }
	}
}

export const updateJog = jog => {
	return dispatch => {
		dispatch(isLoading(true))

		putUpdateJog(jog).then(
			response => {
				console.log(response)
				dispatch(isLoading(false))
				redirect('/jogs')
			},
			error => {
				console.log(error.response)
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
	function isLoading(boolean) {
		return { type: SET_JOG_LOADING, payload: boolean }
	}
}

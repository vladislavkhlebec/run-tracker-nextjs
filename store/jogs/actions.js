import { CREATE_JOG, FAILURE, SET_ALL_JOGS, SET_JOG_LOADING } from './actionTypes'
import { getAllJogs, postCreateJog } from '../../libs/crud/jogs.crud'
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

	const success = jog => {
		return { type: CREATE_JOG, jog }
	}
	const failure = error => {
		return { type: FAILURE, error }
	}
	const isLoading = boolean => {
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
	const success = jogs => {
		return { type: SET_ALL_JOGS, jogs }
	}
	const setUser = user => {
		return { type: LOGIN, user }
	}
	const failure = error => {
		return { type: FAILURE, error }
	}
	const isLoading = boolean => {
		return { type: SET_JOG_LOADING, payload: boolean }
	}
}

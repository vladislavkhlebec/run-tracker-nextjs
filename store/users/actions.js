import { FAILURE, LOGIN } from './actionsTypes'
import redirect from '../../utils/redirect'
import AuthService from '../../utils/authService'

const auth = new AuthService('http://localhost')

export const login = () => {
	return dispatch => {
		auth.login().then(
			user => {
				dispatch(success(user))
				redirect('/jogs')
			},
			error => {
				dispatch(failure(error.toString()))
				// dispatch(alertActions.error(error.toString()));
			}
		)
	}

	function success(user) {
		return { type: LOGIN, user }
	}
	function failure(error) {
		return { type: FAILURE, error }
	}
}

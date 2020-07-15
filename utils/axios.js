import AuthService from './authService'

const authService = new AuthService()

export function setupAxios(axios, store) {
	axios.interceptors.request.use(
		config => {
			const token = authService.getToken()

			if (token) {
				config.headers['Authorization'] = 'Bearer ' + token
			}
			// config.headers['Content-Type'] = 'application/json';
			return config
		},
		error => {
			Promise.reject(error)
		}
	)
}

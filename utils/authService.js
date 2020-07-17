import axios from 'axios'

export default class AuthService {
	constructor(domain) {
		this.domain = domain || 'http://localhost'
		this.login = this.login.bind(this)
		this.getProfile = this.getProfile.bind(this)
	}

	async login() {
		// Get a token
		console.log(axios.defaults.baseURL)
		try {
			const responseToken = await axios.post('/v1/auth/uuidLogin', { uuid: 'hello' })
			this.setToken(responseToken.data.response)
			const userResponse = await axios.get('/v1/auth/user')
			this.setProfile(userResponse.data.response)
			return userResponse.data.response
		} catch (e) {
			console.log(e)
		}

		return
	}

	loggedIn() {
		// Checks if there is a saved token and it's still valid
		const token = this.getToken()
		const profile = this.getProfile()
		// return !!token && !isTokenExpired(token) // handwaiving here
		return !!token // handwaiving here
	}

	setProfile(profile) {
		// Saves profile data to localStorage
		localStorage.setItem('profile', JSON.stringify(profile))
	}

	getProfile() {
		// Retrieves the profile data from localStorage
		const profile = localStorage.getItem('profile')
		return profile ? JSON.parse(localStorage.profile) : {}
	}

	setToken(tokenResponse) {
		// Saves user token to localStorage
		localStorage.setItem('access_token', tokenResponse.access_token)
	}

	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem('access_token')
	}

	logout() {
		// Clear user token and profile data from localStorage
		localStorage.removeItem('access_token')
	}

	_checkStatus(response) {
		// raises an error in case response status is not a success
		if (response.status >= 200 && response.status < 300) {
			return response
		} else {
			var error = new Error(response.statusText)
			error.response = response
			throw error
		}
	}
}

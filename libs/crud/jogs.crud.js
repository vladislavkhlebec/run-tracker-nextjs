import axios from 'axios'

export const getAllJogs = () => {
	return axios.get('/v1/data/sync')
}

export const postCreateJog = jog => {
	return axios.post('/v1/data/jog', jog)
}

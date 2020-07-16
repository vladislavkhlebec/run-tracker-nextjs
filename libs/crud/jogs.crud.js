import axios from 'axios'

export const getAllJogs = () => {
	return axios.get('/v1/data/sync')
}

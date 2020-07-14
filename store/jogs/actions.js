import { CREATE_JOG } from './actionTypes'

export const createJog = jog => {
	return {
		type: CREATE_JOG,
		payload: jog,
	}
}

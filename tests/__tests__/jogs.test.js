import axios from 'axios'
import { postCreateJog, putUpdateJog } from '../../libs/crud/jogs.crud'

jest.mock('axios')

it('Returns the equal jog', async () => {
	async function uuidLogin(uuid) {
		const response = await axios.post('/v1/auth/uuidLogin', {
			uuid,
		})
		return response.data
	}

	axios.post.mockResolvedValue({
		data: {
			response: {
				access_token: '243a8f63cecc76925c375aeaaa571ef7827b0714afe74e662988dfd1c6829827',
				token_type: 'bearer',
				expires_in: 631152000,
				scope: 'public',
				created_at: 1595238758,
			},
			timestamp: 1595238758,
		},
	})

	const data = await uuidLogin()
	const accessToken = data.response.access_token

	expect(accessToken).toEqual('243a8f63cecc76925c375aeaaa571ef7827b0714afe74e662988dfd1c6829827')
})

it('Create jog should return jog with id and user id', async () => {
	async function createJog(jog) {
		const response = await postCreateJog(jog)
		return response.data
	}

	axios.post.mockResolvedValue({
		data: {
			response: {
				id: 2047,
				user_id: 3,
				distance: 10,
				time: 10,
				date: '2020-07-20T10:00:18.000Z',
				created_at: '2020-07-20T10:00:29.662Z',
				updated_at: '2020-07-20T10:00:29.662Z',
			},
			timestamp: 1595239229,
		},
	})

	const data = await createJog({
		date: 'Mon Jul 20 2020 13:00:18 GMT+0300 (Moscow Standard Time)',
		time: '10',
		distance: '10',
	})
	const { id, user_id } = data.response

	expect(id).toEqual(2047)
	expect(user_id).toEqual(3)
})

it('Update jog must return updated jog', async () => {
	async function updateJog(jog) {
		const response = await putUpdateJog(jog)
		return response.data
	}

	axios.put.mockResolvedValue({
		data: {
			response: {
				id: 2047,
				user_id: 3,
				distance: 15,
				time: 15,
				date: '2020-07-20T10:04:35.000Z',
				created_at: '2020-07-20T10:00:29.000Z',
				updated_at: '2020-07-20T10:05:06.278Z',
			},
			timestamp: 1595239506,
		},
	})

	const updatedJogs = {
		jog_id: 2047,
		user_id: 3,
		date: 'Mon Jul 20 2020 13:04:35 GMT+0300 (Moscow Standard Time)',
		time: 15,
		distance: 15,
	}

	const data = await updateJog(updateJog())
	const { time, date, distance, updated_at } = data.response

	expect(time).toEqual(updatedJogs.time)
	expect(date).toEqual('2020-07-20T10:04:35.000Z')
	expect(distance).toEqual(updatedJogs.distance)
	expect(updated_at).toEqual('2020-07-20T10:05:06.278Z')
})

import { getAllJogs } from '../../libs/crud/jogs.crud'
import axios from 'axios'

jest.mock('axios')

it('Should return access token by uuid', async () => {
	async function getFirstJog() {
		const response = await getAllJogs()
		return response.data[0]
	}

	axios.get.mockResolvedValue({
		data: [
			{
				id: 935,
				user_id: '3',
				distance: 4,
				time: 90,
				date: 1593475200,
			},
			{
				id: 938,
				user_id: '3',
				distance: 228,
				time: 228,
				date: 0,
			},
		],
	})

	const jog = await getFirstJog()
	expect(jog).toEqual({
		id: 935,
		user_id: '3',
		distance: 4,
		time: 90,
		date: 1593475200,
	})
})

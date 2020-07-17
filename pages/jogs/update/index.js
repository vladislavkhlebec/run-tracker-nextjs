import React, { useState, useEffect } from 'react'
import { Layout } from '../../../components/layout'
import DatePicker from 'react-datepicker'
import withAuth from '../../../utils/withAuth'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import '../../../styles/main.less'
import 'react-datepicker/dist/react-datepicker.css'
import redirect from '../../../utils/redirect'
import Form from '../../../components/form/form'

const Update = ({ jogs }) => {
	const router = useRouter()
	const { id } = router.query

	const jog = jogs.find(item => item.id === +id)

	useEffect(() => {
		if (!jog) {
			redirect('/jogs')
		}
	}, [])

	console.log(id)
	console.log(jog)

	const [formState, setFormState] = useState({
		id: jog?.id,
		user_id: jog?.user_id,
		distance: jog?.distance,
		time: jog?.time,
		date: jog?.date,
	})

	return (
		<Layout>
			<div className='action_container action_container__green'>
				<button
					className='closeButton'
					onClick={() => {
						redirect('/jogs')
					}}
				/>
				{jog && (
					<Form
						initialState={{
							id: jog.id,
							user_id: jog.user_id,
							distance: jog.distance,
							time: jog.time,
							date: jog.date,
						}}
						onSubmit={() => {
							console.log('update')
						}}
						onClose={() => {
							redirect('/jogs')
						}}
					/>
				)}
			</div>
		</Layout>
	)
}

const mapStateToProps = state => {
	const { user, jogs } = state

	return {
		user: user.user,
		jogs: jogs.items,
	}
}

export default withAuth(connect(mapStateToProps, null)(Update))

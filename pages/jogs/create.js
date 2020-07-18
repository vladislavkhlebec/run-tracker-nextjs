import React, { useState, useEffect } from 'react'
import Layout, { Layout_section } from '../../components/layout/layout'
import DatePicker from 'react-datepicker'

import '../../styles/main.less'
import 'react-datepicker/dist/react-datepicker.css'
import { connect } from 'react-redux'
import withAuth from '../../utils/withAuth'
import { createJog, fetchJogs } from '../../store/jogs/actions'
import Form from '../../components/form/form'
import redirect from '../../utils/redirect'

const Create = ({ _createJog, _fetchJogs }) => {
	return (
		<Layout>
			<div className='action_container action_container__green'>
				<button
					className='closeButton'
					onClick={() => {
						redirect('/jogs')
					}}
				/>
				<Form
					initialState={{
						distance: '',
						time: '',
						date: new Date(),
					}}
					onSubmit={formState => {
						_createJog(formState)
					}}
				/>
			</div>
		</Layout>
	)
}

const mapDispatchToProps = {
	_createJog: createJog,
}

export default withAuth(connect(null, mapDispatchToProps)(Create))

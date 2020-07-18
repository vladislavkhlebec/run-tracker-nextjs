import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Link from 'next/link'

import 'react-datepicker/dist/react-datepicker.css'

const Form = ({ initialState, onSubmit }) => {
	const { distance, time, date, id, user_id } = initialState

	const [formState, setFormState] = useState({
		distance,
		time,
		date: new Date(date),
	})

	const getUpdateObject = () => {
		if (id && user_id) {
			return {
				...formState,
				jog_id: id,
				user_id: +user_id,
			}
		}
		return formState
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				onSubmit(getUpdateObject())
			}}
		>
			<label>
				Distance
				<div className='input_container'>
					<input
						type='text'
						value={formState.distance}
						onChange={e => {
							setFormState({
								...formState,
								distance: e.target.value,
							})
						}}
					/>
				</div>
			</label>
			<label>
				Time
				<div className='input_container'>
					<input
						type='text'
						value={formState.time}
						onChange={e => {
							setFormState({
								...formState,
								time: e.target.value,
							})
						}}
					/>
				</div>
			</label>
			<label>
				Date
				<div className='input_container'>
					<DatePicker
						selected={formState.date}
						onChange={date => {
							setFormState({
								...formState,
								date,
							})
						}}
					/>
				</div>
			</label>
			<button className='button button__submit' type='submit'>
				Save
			</button>
		</form>
	)
}

export default Form

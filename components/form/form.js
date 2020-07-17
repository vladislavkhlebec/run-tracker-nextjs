import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Link from 'next/link'

const Form = ({ initialState, onSubmit }) => {
	const { distance, time, date } = initialState

	const [formState, setFormState] = useState({
		distance,
		time,
		date,
	})

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				onSubmit(formState)
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

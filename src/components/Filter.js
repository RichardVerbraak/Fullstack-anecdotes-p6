import React from 'react'
import { useDispatch } from 'react-redux'

import { setFilter } from '../actions/filters'

const Filter = () => {
	const dispatch = useDispatch()

	return (
		<div>
			filter{' '}
			<input
				onChange={(e) => {
					dispatch(setFilter(e.target.value))
				}}
				type='text'
			/>
		</div>
	)
}

export default Filter

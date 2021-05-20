import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createAnecdote } from '../actions/anecdotes'

const Form = () => {
	const dispatch = useDispatch()

	const add = (e) => {
		e.preventDefault()

		const anecdote = e.target.anecdote.value

		dispatch(createAnecdote(anecdote))
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={add}>
				<div>
					<input name='anecdote' />
				</div>
				<button type='submit'>create</button>
			</form>
		</div>
	)
}

export default Form

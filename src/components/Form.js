import React from 'react'
import { useDispatch } from 'react-redux'

import { createAnecdote } from '../actions/anecdotes'
import { setNotification } from '../actions/notifications'

const Form = () => {
	const dispatch = useDispatch()

	const add = (e) => {
		e.preventDefault()

		const anecdote = e.target.anecdote.value
		const message = `You created ${anecdote}`

		dispatch(createAnecdote(anecdote))
		dispatch(setNotification(message, 3))
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

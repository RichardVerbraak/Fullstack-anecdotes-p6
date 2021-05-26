import React from 'react'
import { useDispatch, connect } from 'react-redux'

import { createAnecdote } from '../actions/anecdotes'
import { setNotification } from '../actions/notifications'

const Form = ({ createAnecdote, setNotification }) => {
	const add = (e) => {
		e.preventDefault()

		const anecdote = e.target.anecdote.value
		const message = `You created ${anecdote}`

		createAnecdote(anecdote)
		setNotification(message, 3)
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

const mapDispatchToProps = (dispatch) => {
	return {
		createAnecdote: (anecdote) => {
			dispatch(createAnecdote(anecdote))
		},
		setNotification: (message, time) => {
			dispatch(setNotification(message, time))
		},
	}
}

const ConnectedForm = connect(null, mapDispatchToProps)(Form)

export default ConnectedForm

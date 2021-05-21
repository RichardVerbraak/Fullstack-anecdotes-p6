import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createAnecdote } from '../actions/anecdotes'
import { removeNotification, setNotification } from '../actions/notifications'

const Form = ({ setShow }) => {
	const dispatch = useDispatch()

	const add = (e) => {
		e.preventDefault()

		const anecdote = e.target.anecdote.value
		const message = `You created ${anecdote}`

		dispatch(createAnecdote(anecdote))
		dispatch(setNotification(message))
		setShow(true)

		setTimeout(() => {
			dispatch(removeNotification())
			setShow(false)
		}, 5000)
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

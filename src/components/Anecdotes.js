import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { voteAnecdote } from '../actions/anecdotes'
import { removeNotification, setNotification } from '../actions/notifications'

const Anecdotes = ({ setShow }) => {
	const dispatch = useDispatch()

	const anecdotes = useSelector((state) => {
		return state.anecdotes
	})

	const filterState = useSelector((state) => {
		return state.filter
	})
	const { filter } = filterState

	const filteredAnecdotes = anecdotes.filter((anecdote) => {
		return anecdote.content.toLowerCase().includes(filter.toLowerCase())
	})

	const vote = ({ id, content }) => {
		dispatch(voteAnecdote(id))
		dispatch(setNotification(`You voted on "${content}"`))
		setShow(true)

		setTimeout(() => {
			setShow(false)
			dispatch(removeNotification())
		}, 5000)
	}

	return (
		<div>
			{filteredAnecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Anecdotes

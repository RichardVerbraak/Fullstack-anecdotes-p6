import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { voteAnecdote } from '../actions/anecdotes'
import { removeNotification, setNotification } from '../actions/notifications'

const Anecdotes = ({ setShow, anecdotes }) => {
	const dispatch = useDispatch()

	const filterState = useSelector((state) => {
		return state.filter
	})
	const { filter } = filterState

	const filteredAnecdotes = anecdotes.filter((anecdote) => {
		return anecdote.content.toLowerCase().includes(filter.toLowerCase())
	})

	const vote = (anecdote) => {
		dispatch(voteAnecdote(anecdote))
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

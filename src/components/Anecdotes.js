import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { voteAnecdote } from '../actions/anecdotes'

const Anecdotes = () => {
	const dispatch = useDispatch()

	const anecdotes = useSelector((state) => {
		return state.anecdotes
	})

	const vote = (id) => {
		dispatch(voteAnecdote(id))
	}

	return (
		<div>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Anecdotes

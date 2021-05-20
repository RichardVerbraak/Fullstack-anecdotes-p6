const voteAnecdote = (id) => {
	return {
		type: 'VOTE',
		payload: id,
	}
}

const createAnecdote = (anecdote) => {
	return {
		type: 'ADD_ANECDOTE',
		payload: anecdote,
	}
}

export { voteAnecdote, createAnecdote }

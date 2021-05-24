const getAnecdotes = (anecdotes) => {
	return {
		type: 'GET_ANECDOTES',
		payload: anecdotes,
	}
}

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

export { voteAnecdote, createAnecdote, getAnecdotes }

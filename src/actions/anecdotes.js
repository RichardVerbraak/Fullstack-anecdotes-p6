import axios from 'axios'

const getAnecdotes = () => {
	return async (dispatch) => {
		const { data } = await axios.get('http://localhost:3001/anecdotes')

		dispatch({
			type: 'GET_ANECDOTES',
			payload: data,
		})
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

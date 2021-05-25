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
	return async (dispatch) => {
		const { data } = await axios.post('http://localhost:3001/anecdotes', {
			content: anecdote,
			votes: 0,
		})

		dispatch({
			type: 'ADD_ANECDOTE',
			payload: data,
		})

		// Fetch again
		dispatch(getAnecdotes())
	}
}

export { voteAnecdote, createAnecdote, getAnecdotes }

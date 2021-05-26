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

const voteAnecdote = (anecdote) => {
	return async (dispatch) => {
		const updatedAnecdote = {
			content: anecdote.content,
			id: anecdote.id,
			votes: anecdote.votes + 1,
		}

		await axios.put(
			`http://localhost:3001/anecdotes/${anecdote.id}`,
			updatedAnecdote
		)

		dispatch({
			type: 'SET_NOTIFICATION',
			payload: `You voted on ${anecdote.content}`,
		})

		setTimeout(() => {
			dispatch({
				type: 'REMOVE_NOTIFICATION',
			})
		}, 5000)

		dispatch(getAnecdotes())
	}
}

export { voteAnecdote, createAnecdote, getAnecdotes }

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Anecdotes from './components/Anecdotes'
import Form from './components/Form'

const App = () => {
	const anecdotes = useSelector((state) => state)
	const dispatch = useDispatch()

	const vote = (id) => {
		dispatch({
			type: 'VOTE',
			payload: id,
		})
	}

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes && <Anecdotes anecdotes={anecdotes} vote={vote} />}

			<h2>create new</h2>
			<Form />
		</div>
	)
}

export default App

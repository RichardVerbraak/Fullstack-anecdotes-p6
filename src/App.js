import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'
import Form from './components/Form'
import Notification from './components/Notification'

import { getAnecdotes } from './actions/anecdotes'

const App = () => {
	const [show, setShow] = useState(false)
	const dispatch = useDispatch()

	const anecdotesState = useSelector((state) => {
		return state.anecdotes
	})
	const { anecdotes } = anecdotesState

	useEffect(() => {
		const fetchAnecdotes = async () => {
			const { data } = await axios.get('http://localhost:3001/anecdotes')
			console.log(data)
			dispatch(getAnecdotes(data))
		}

		fetchAnecdotes()
	}, [dispatch])

	return (
		<div>
			{show && <Notification />}
			<Filter />
			<h2>Anecdotes</h2>

			{anecdotes && anecdotes.length && (
				<Anecdotes anecdotes={anecdotes} setShow={setShow} />
			)}

			<Form setShow={setShow} />
		</div>
	)
}

export default App

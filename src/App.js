import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'
import Form from './components/Form'
import Notification from './components/Notification'

import { getAnecdotes } from './actions/anecdotes'

const App = () => {
	const dispatch = useDispatch()

	const anecdotesState = useSelector((state) => {
		return state.anecdotes
	})
	const { anecdotes } = anecdotesState

	const notificationState = useSelector((state) => {
		return state.notification
	})
	const { visible } = notificationState

	useEffect(() => {
		dispatch(getAnecdotes())
	}, [dispatch])

	return (
		<div>
			{visible && <Notification />}
			<Filter />
			<h2>Anecdotes</h2>

			{anecdotes && anecdotes.length && <Anecdotes anecdotes={anecdotes} />}

			<Form />
		</div>
	)
}

export default App

import React, { useState } from 'react'

import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'
import Form from './components/Form'
import Notification from './components/Notification'

const App = () => {
	const [show, setShow] = useState(false)

	return (
		<div>
			{show && <Notification />}
			<Filter />
			<h2>Anecdotes</h2>
			<Anecdotes setShow={setShow} />
			<Form setShow={setShow} />
		</div>
	)
}

export default App

import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdotesReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducers = combineReducers({
	anecdotes: anecdotesReducer,
	notification: notificationReducer,
})

const store = createStore(reducers, composeWithDevTools())

export default store

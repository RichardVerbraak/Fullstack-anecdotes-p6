import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdotesReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const reducers = combineReducers({
	anecdotes: anecdotesReducer,
	notification: notificationReducer,
	filter: filterReducer,
})

const store = createStore(reducers, composeWithDevTools())

export default store

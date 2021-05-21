import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdotesReducer from './reducers/anecdoteReducer'

const reducers = combineReducers({
	anecdotes: anecdotesReducer,
})

const store = createStore(reducers, composeWithDevTools())

export default store

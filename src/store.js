import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdotesReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const reducers = combineReducers({
	anecdotes: anecdotesReducer,
	notification: notificationReducer,
	filter: filterReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store

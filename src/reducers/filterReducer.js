const filterReducer = (state = { filter: '' }, action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return {
				filter: action.payload,
			}

		default:
			return state
	}
}

export default filterReducer

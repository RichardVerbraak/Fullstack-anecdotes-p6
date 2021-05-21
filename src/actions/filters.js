const setFilter = (filter) => {
	return {
		type: 'SET_FILTER',
		payload: filter,
	}
}

export { setFilter }

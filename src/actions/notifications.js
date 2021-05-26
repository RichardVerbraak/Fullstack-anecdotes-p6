const setNotification = (message, time) => {
	return async (dispatch) => {
		dispatch({
			type: 'SET_NOTIFICATION',
			payload: message,
		})

		setTimeout(() => {
			dispatch({
				type: 'REMOVE_NOTIFICATION',
			})
		}, time * 1000)
	}
}

export { setNotification }

// 1. Vote => message sent => set timer to remove after 5
// 2. Vote another time => remove previous timeout => set timer again

const setNotification = (message, time) => {
	return async (dispatch) => {
		const id = setTimeout(() => {
			dispatch({
				type: 'REMOVE_NOTIFICATION',
			})
		}, time * 1000)

		dispatch({
			type: 'SET_NOTIFICATION',
			payload: { message, id },
		})
	}
}

export { setNotification }

const setNotification = (message) => {
	return {
		type: 'SET_NOTIFICATION',
		payload: message,
	}
}

const removeNotification = (message) => {
	return {
		type: 'REMOVE_NOTIFICATION',
	}
}

export { setNotification, removeNotification }

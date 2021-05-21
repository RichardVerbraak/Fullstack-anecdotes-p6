const notificationReducer = (
	state = { message: '', visible: false },
	action
) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return {
				message: action.payload,
				visible: true,
			}

		case 'REMOVE_NOTIFICATION':
			return {
				message: '',
				visible: false,
			}

		default:
			return state
	}
}

export default notificationReducer

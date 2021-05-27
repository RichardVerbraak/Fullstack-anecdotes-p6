// 1. State holds the timeoutID of the 'first' notification
// 2. When the second notification is set => clear the timer of the first notification BEFORE storing the ID of the second timeOut

const notificationReducer = (
	state = { message: null, visible: false, timeoutID: null },
	action
) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			if (typeof state.timeoutID === 'number') {
				clearTimeout(state.timeoutID)
			}
			return {
				message: action.payload.message,
				visible: true,
				timeoutID: action.payload.id,
			}

		case 'REMOVE_NOTIFICATION':
			return {
				message: null,
				visible: false,
			}

		default:
			return state
	}
}

export default notificationReducer

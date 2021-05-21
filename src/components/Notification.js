import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Notification = () => {
	const notificationState = useSelector((state) => {
		return state.notification
	})
	const { message } = notificationState

	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1,
	}
	return <div style={style}>{message}</div>
}

export default Notification

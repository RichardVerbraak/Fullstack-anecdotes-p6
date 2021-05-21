import React, { useSelector } from 'react'

const Notification = () => {
	const notificationState = useSelector((state) => state.notification)
	const { notification } = notificationState

	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1,
	}
	return <div style={style}>{notification}</div>
}

export default Notification

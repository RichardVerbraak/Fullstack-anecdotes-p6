import React from 'react'

import { useSelector, useDispatch, connect } from 'react-redux'

const Notification = ({ notification }) => {
	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1,
	}
	return <div style={style}>{notification.message}</div>
}

const mapStateToProps = (state) => {
	return {
		notification: state.notification,
	}
}

const ConnectedNotification = connect(mapStateToProps, null)(Notification)

export default ConnectedNotification

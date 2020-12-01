
const notificationReducer = (state = '', action) => {

    switch (action.type) {
        case 'SET_NOTIFICATION':

            return action.data
    }
    return state

}

export const setNotification = (message, duration) => {
    return async dispatch => {
        await dispatch({
            type: 'SET_NOTIFICATION',
            data: message
        })
        setTimeout(() => {
            dispatch({
                type: 'SET_NOTIFICATION',
                data: ''
            })
        }, duration * 1000)
    }
}

export default notificationReducer
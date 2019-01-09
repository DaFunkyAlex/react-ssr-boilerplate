export const navigationAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_NAVIGATION',
            payload: {
                authenticated: true,
            }
        })
    }
};
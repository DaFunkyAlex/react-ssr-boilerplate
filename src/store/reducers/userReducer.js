const initialState = {
    authenticated: true,
    user: {
        id: 1,
        first_name: 'Alexander',
        last_name: 'Jungwirth',
    }
};


export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'AUTHENTICATE':
            return {
                ...state,
                authenticated: action.payload.authenticated,
                user: {
                    id: 1,
                    first_name: 'Alexander',
                    last_name: 'Jungwirth',
                }
            };
        default:
            return state;

    }
};


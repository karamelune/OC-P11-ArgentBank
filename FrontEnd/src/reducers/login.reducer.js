const initialState = {
    email: '',
    password: '',
    rememberMe: false,
    token: '',
    error: null,
};

export const actionTypes = {
    SET_EMAIL: 'SET_EMAIL',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_REMEMBER_ME: 'SET_REMEMBER_ME',
    SET_TOKEN: 'SET_TOKEN',
    REMOVE_TOKEN: 'REMOVE_TOKEN',
    SET_LOGIN_ERROR: 'SET_LOGIN_ERROR',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_EMAIL:
            return { ...state, email: action.payload };
        case actionTypes.SET_PASSWORD:
            return { ...state, password: action.payload };
        case actionTypes.SET_REMEMBER_ME:
            return { ...state, rememberMe: action.payload };
        case actionTypes.SET_TOKEN:
            return { ...state, token: action.payload };
        case actionTypes.REMOVE_TOKEN:
            return { ...state, token: null };
        case actionTypes.SET_LOGIN_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default loginReducer;

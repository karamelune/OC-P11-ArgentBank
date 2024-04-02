// Initial state
const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    userName: '',
    newUsername: '',
    id: '',
};

// Action types
export const actionTypes = {
    UPDATE_USER_PROFILE: 'UPDATE_USER_PROFILE',
    SET_EMAIL: 'SET_EMAIL',
    SET_FIRST_NAME: 'SET_FIRST_NAME',
    SET_LAST_NAME: 'SET_LAST_NAME',
    SET_USERNAME: 'SET_USERNAME',
    SET_NEW_USER_NAME: 'SET_NEW_USER_NAME',
    SET_USER_ID: 'SET_USER_ID',
};

// Reducer function
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_PROFILE:
            return {
                ...state,
                ...action.payload,
            };
        case actionTypes.SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case actionTypes.SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload,
            };
        case actionTypes.SET_LAST_NAME:
            return {
                ...state,
                lastName: action.payload,
            };
        case actionTypes.SET_USERNAME:
            return {
                ...state,
                userName: action.payload,
            };
        case actionTypes.SET_NEW_USER_NAME:
            return {
                ...state,
                newUsername: action.payload,
            };
        case actionTypes.SET_USER_ID:
            return {
                ...state,
                id: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;

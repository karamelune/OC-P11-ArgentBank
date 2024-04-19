import { actionTypes } from '../reducers/login.reducer';

export const setEmail = (email) => ({
    type: actionTypes.SET_EMAIL,
    payload: email,
});
export const setPassword = (password) => ({
    type: actionTypes.SET_PASSWORD,
    payload: password,
});
export const setRememberMe = (rememberMe) => ({
    type: actionTypes.SET_REMEMBER_ME,
    payload: rememberMe,
});
export const setToken = (token) => ({
    type: actionTypes.SET_TOKEN,
    payload: token,
});

export const removeToken = () => ({
    type: actionTypes.REMOVE_TOKEN,
});

export const setLoginError = (error) => ({
    type: actionTypes.SET_LOGIN_ERROR,
    payload: error,
});

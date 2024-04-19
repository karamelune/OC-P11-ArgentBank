import { actionTypes } from '../reducers/user.reducer';

export const updateUserProfile = (userProfile) => ({
    type: actionTypes.UPDATE_USER_PROFILE,
    payload: userProfile,
});
export const setEmail = (email) => ({
    type: actionTypes.SET_EMAIL,
    payload: email,
});
export const setFirstName = (firstName) => ({
    type: actionTypes.SET_FIRST_NAME,
    payload: firstName,
});
export const setLastName = (lastName) => ({
    type: actionTypes.SET_LAST_NAME,
    payload: lastName,
});
export const setUsername = (username) => ({
    type: actionTypes.SET_USERNAME,
    payload: username,
});
export const setNewUsername = (newUsername) => ({
    type: 'SET_NEW_USER_NAME',
    payload: newUsername,
});
export const setUserId = (userId) => ({
    type: actionTypes.SET_USER_ID,
    payload: userId,
});

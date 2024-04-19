import axios from 'axios';
import { setUsername } from '../actions/user.actions';
import Cookies from 'js-cookie';

export const updateUsername = (newUsername, token) => async (dispatch) => {
    const profileOptions = {
        method: 'PUT',
        url: 'http://localhost:3001/api/v1/user/profile',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        data: {
            userName: newUsername,
        },
    };

    try {
        const response = await axios(profileOptions);

        if (response.status === 200) {
            dispatch(setUsername(newUsername));
            Cookies.set('userProfile', JSON.stringify(response.data.body), {
                expires: 1,
            });
        } else {
            console.error('Failed to update username');
        }
    } catch (error) {
        console.error('Failed to update username', error);
    }
};

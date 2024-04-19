import axios from 'axios';
import { setLoginError, setToken } from '../actions/login.actions';
import { updateUserProfile } from '../actions/user.actions';
import Cookies from 'js-cookie';

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/api/v1/user/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: { email, password },
    };

    try {
        const response = await axios.request(options);
        dispatch(setToken(response.data.body.token));
        if (rememberMe) {
            Cookies.set('token', response.data.body.token, {
                expires: Infinity,
            });
        } else {
            Cookies.set('token', response.data.body.token, { expires: 1 });
        }

        const profileOptions = {
            method: 'POST',
            url: 'http://localhost:3001/api/v1/user/profile',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${response.data.body.token}`,
            },
        };

        const profileResponse = await axios.request(profileOptions);
        dispatch(updateUserProfile(profileResponse.data.body));
        Cookies.set('userProfile', JSON.stringify(profileResponse.data.body), {
            expires: 1,
        }); // expire après 1 jour
        return profileResponse.data.body.id;
    } catch (error) {
        dispatch(setLoginError(error.message));
    }
};

import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLoginError, setToken } from '../actions/login.action';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../actions/user.action';

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password, rememberMe } = useSelector(
        (state) => state.loginReducer
    );

    const login = () => {
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/api/v1/user/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { email: email, password: password },
        };

        axios
            .request(options)
            .then(function (response) {
                dispatch(setToken(response.data.body.token));
                if (rememberMe) {
                    localStorage.setItem('token', response.data.body.token);
                }

                const profileOptions = {
                    method: 'POST',
                    url: 'http://localhost:3001/api/v1/user/profile',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${response.data.body.token}`,
                    },
                };

                axios
                    .request(profileOptions)
                    .then(function (profileResponse) {
                        dispatch(updateUserProfile(profileResponse.data.body));
                        localStorage.setItem(
                            'userProfile',
                            JSON.stringify(profileResponse.data.body)
                        );
                        navigate(`/user/${profileResponse.data.body.id}`);
                    })
                    .catch(function (error) {
                        dispatch(setLoginError(error.message));
                    });
            })
            .catch(function (error) {
                dispatch(setLoginError(error.message));
            });
    };

    return login;
};

export default useLogin;

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from './Router';
import { setToken } from './actions/login.actions';
import { updateUserProfile } from './actions/user.actions';
import Cookies from 'js-cookie';

const App = () => {
    const dispatch = store.dispatch;

    useEffect(() => {
        const storedToken = Cookies.get('token');
        const userProfile = Cookies.get('userProfile');

        if (storedToken) {
            dispatch(setToken(storedToken));
            if (userProfile) {
                dispatch(updateUserProfile(JSON.parse(userProfile)));
            }
        } else {
            Cookies.remove('token');
            Cookies.remove('userProfile');
        }
    }, [dispatch]);

    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router />
            </Provider>
        </React.StrictMode>
    );
};

export default App;

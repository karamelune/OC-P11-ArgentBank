import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from './Router';
import { setToken } from './slices/login.slice';
import { updateUserProfile } from './slices/user.slice';
import Cookies from 'js-cookie';

const App = () => {
    const dispatch = store.dispatch;

    useEffect(() => {
        const storedToken = Cookies.get('token');
        const userProfile = localStorage.getItem('userProfile');

        if (storedToken) {
            dispatch(setToken(storedToken));
            if (userProfile) {
                dispatch(updateUserProfile(JSON.parse(userProfile)));
            }
        } else {
            Cookies.remove('token');
            localStorage.removeItem('userProfile');
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

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from './Router';
import { setToken } from './actions/login.action';
import { updateUserProfile } from './actions/user.action';

const App = () => {
    const dispatch = store.dispatch;

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const userProfile = localStorage.getItem('userProfile');

        if (storedToken) {
            dispatch(setToken(storedToken));
        }

        if (userProfile) {
            dispatch(updateUserProfile(JSON.parse(userProfile)));
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

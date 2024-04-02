import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './reducers/login.reducer';
import userReducer from './reducers/user.reducer';

const store = configureStore({
    reducer: {
        loginReducer,
        userReducer,
    },
});

export default store;

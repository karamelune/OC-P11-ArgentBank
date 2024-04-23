import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './slices/login.slice';
import userReducer from './slices/user.slice';

const store = configureStore({
    reducer: {
        loginReducer,
        userReducer,
    },
});

export default store;

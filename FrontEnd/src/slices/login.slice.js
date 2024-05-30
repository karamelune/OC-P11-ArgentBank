import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Async thunk pour gérer la logique asynchrone de login
export const loginUser = createAsyncThunk(
    'login/loginUser',
    async ({ userName, password }) => {
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/api/v1/user/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { email: userName, password: password },
        };

        const response = await axios.request(options);
        return response.data.body.token;
    }
);

// Création du slice
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        rememberMe: false,
        loginError: null,
    },
    reducers: {
        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
        },
        setLoginError: (state, action) => {
            state.loginError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (state.rememberMe) {
                Cookies.set('token', action.payload, {
                    expires: Infinity,
                });
            } else {
                Cookies.set('token', action.payload, { expires: 1 });
            }
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loginError = action.error.message;
        });
    },
});

// Exporter les actions générées
export const { setRememberMe, setLoginError } = loginSlice.actions;

// Exporter le reducer
export default loginSlice.reducer;

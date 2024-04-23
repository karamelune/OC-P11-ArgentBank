import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Async thunk pour gérer la logique asynchrone de login
export const loginUser = createAsyncThunk(
    'login/loginUser',
    async ({ email, password }) => {
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/api/v1/user/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { email: email, password: password },
        };

        const response = await axios.request(options);
        return response.data.body.token;
    }
);

// Création du slice
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        rememberMe: false,
        token: '',
        error: null,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = null;
        },
        setLoginError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;
            if (state.rememberMe) {
                Cookies.set('token', action.payload, {
                    expires: Infinity,
                });
            } else {
                Cookies.set('token', action.payload, { expires: 1 });
            }
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.error = action.error.message;
        });
    },
});

// Exporter les actions générées
export const {
    setEmail,
    setPassword,
    setRememberMe,
    setToken,
    removeToken,
    setLoginError,
} = loginSlice.actions;

// Exporter le reducer
export default loginSlice.reducer;

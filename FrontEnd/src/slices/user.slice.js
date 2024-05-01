import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Async thunk pour récupérer les données de l'utilisateur
export const getUser = createAsyncThunk('login/getUser', async (token) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/api/v1/user/profile',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.request(options);
    return response.data.body;
});

export const updateUsername = createAsyncThunk(
    'login/updateUsername',
    async (newUsername) => {
        const token = Cookies.get('token');

        const options = {
            method: 'PUT',
            url: 'http://localhost:3001/api/v1/user/profile',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            data: { userName: newUsername },
        };

        const response = await axios.request(options);
        return response.data.body;
    }
);

// Création du slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        userName: '',
        id: '',
    },

    reducers: {
        updateUserProfile: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
            state.newUsername = action.payload.newUsername;
            state.id = action.payload.id;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
            state.id = action.payload.id;
            localStorage.setItem('userProfile', JSON.stringify(action.payload));
        });
        builder.addCase(updateUsername.fulfilled, (state, action) => {
            state.userName = action.payload.userName;
            // Mise à jour du nom d'utilisateur dans le localStorage
            const userProfile = JSON.parse(localStorage.getItem('userProfile'));
            userProfile.userName = action.payload.userName;
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
        });
    },
});

// Exporter les actions générées
export const { updateUserProfile } = userSlice.actions;

// Exporter le reducer
export default userSlice.reducer;

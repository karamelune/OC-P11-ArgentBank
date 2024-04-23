import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
    async (newUsername, { getState }) => {
        const token = getState().loginReducer.token;

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
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
        newUsername: '',
        id: '',
    },

    reducers: {
        updateUserProfile: (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
            state.newUsername = action.payload.newUsername;
            state.id = action.payload.id;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setUsername: (state, action) => {
            state.userName = action.payload;
        },
        setNewUsername: (state, action) => {
            state.newUsername = action.payload;
        },
        setUserId: (state, action) => {
            state.id = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
            state.id = action.payload.id;
            localStorage.setItem('userProfile', JSON.stringify(action.payload));
        });
        builder.addCase(updateUsername.fulfilled, (state, action) => {
            state.userName = action.payload.userName;
        });
    },
});

// Exporter les actions générées
export const {
    updateUserProfile,
    setEmail,
    setFirstName,
    setLastName,
    setUsername,
    setNewUsername,
    setUserId,
} = userSlice.actions;

// Exporter le reducer
export default userSlice.reducer;

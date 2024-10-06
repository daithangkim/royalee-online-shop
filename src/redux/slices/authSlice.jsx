// redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload; // Store user info
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null; // Clear user info
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

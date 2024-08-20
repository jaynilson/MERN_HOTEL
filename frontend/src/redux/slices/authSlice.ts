import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
    user: any;
    token: string | null;
    loading: boolean | null;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: null,
    error: null,
};

export const loginUser = createAsyncThunk('auth/loin', async (credentials: { email: string, password: string }) => {
    const response = await axios.post('./api/auth/login', credentials);
    return response.data;
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
    },
});

export default authSlice.reducer;
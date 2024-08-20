import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface CommentState {
    comments: any[];
    loading: boolean;
    error: string | null;
}

const initialState: CommentState = {
    comments: [],
    loading: false,
    error: null,
};

export const fetchComments = createAsyncThunk('comments/fetch', async () => {
    const response = await axios.get('/api/comments');
    return response.data;
});

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        });
    }
});

export default commentSlice.reducer;
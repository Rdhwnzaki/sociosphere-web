import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPosts as apiGetAllPosts, createPosts as apiCreatePosts } from './postsApi';

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

export const getAllPosts = createAsyncThunk('posts/getAllPosts', async (_, { rejectWithValue }) => {
    try {
        const response = await apiGetAllPosts();
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const createPosts = createAsyncThunk('posts/createPosts', async ({ description, token }, { rejectWithValue }) => {
    try {
        const response = await apiCreatePosts(description, token);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload.posts;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPosts.fulfilled, (state, action) => {
                state.posts = [action.payload.post, ...state.posts];
                state.loading = false;
                state.error = null;
            })
            .addCase(createPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default postsSlice.reducer;

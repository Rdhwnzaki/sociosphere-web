import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPosts as apiGetAllPosts, createPosts as apiCreatePosts, createComments as apiCreateComments, deletePosts as apiDeletePosts } from './postsApi';

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

export const createPosts = createAsyncThunk(
    'posts/createPosts',
    async ({ description, token, image }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('description', description);
            if (image) {
                formData.append('image', image);
            }
            console.log(formData, token, "ini");

            const response = await apiCreatePosts(formData, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Something went wrong');
        }
    }
);

export const deletePosts = createAsyncThunk(
    'posts/deletePosts',
    async ({ id, token }, { rejectWithValue }) => {
        try {
            const response = await apiDeletePosts(id, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Something went wrong');
        }
    }
);

export const createComment = createAsyncThunk('posts/comments', async ({ description, post_id, token }, { rejectWithValue }) => {
    try {
        const response = await apiCreateComments(description, post_id, token);
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

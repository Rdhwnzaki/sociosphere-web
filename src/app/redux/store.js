import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import postsReducer from "../redux/posts/postsSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer
    },
});

export default store;
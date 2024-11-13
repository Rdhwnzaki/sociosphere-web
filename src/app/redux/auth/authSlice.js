import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser as apiLoginUser, registerUser as apiRegisterUser, logoutUser as apiLogoutUser } from './authApi';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await apiLoginUser(email, password);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const registerUser = createAsyncThunk('auth/registerUser', async ({ username, email, password, confirmedPass }, { rejectWithValue }) => {
    try {
        const response = await apiRegisterUser({ username, email, password, confirmedPass });
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async ({ token }, { rejectWithValue }) => {
    try {
        await apiLogoutUser(token);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

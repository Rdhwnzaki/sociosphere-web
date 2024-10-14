import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;

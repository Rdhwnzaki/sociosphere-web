import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        success: false,
        error: null,
    },
    reducers: {
        registerSuccess: (state) => {
            state.success = true;
            state.error = null;
        },
        registerFailure: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { registerSuccess, registerFailure } = registerSlice.actions;
export default registerSlice.reducer;

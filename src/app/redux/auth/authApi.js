import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.withCredentials = true;

export const getCsrfToken = async () => {
    try {
        await axios.get(`${baseURL}/sanctum/csrf-cookie`, {
            withCredentials: true,
        });
    } catch (error) {
        console.error('Failed to get CSRF token:', error);
    }
};

export const loginUser = async (email, password) => {
    try {
        await getCsrfToken();
        const response = await axios.post(`${baseURL}/api/login`, {
            email,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const user = response.data.user;
        const token = response.data.access_token
        sessionStorage.setItem('user', JSON.stringify(user))
        sessionStorage.setItem('token', token)
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};


export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseURL}/api/register`, userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Registration failed');
        }
    }
);

export const logoutUser = async () => {
    try {
        await getCsrfToken();
        await axios.post(`${baseURL}/api/logout`, {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
    } catch (error) {
        console.error('Failed to logout:', error);
        throw new Error(error.response?.data?.message || error.message);
    }
};

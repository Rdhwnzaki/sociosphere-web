import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

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
        toast.success('Login successfully!');
        return response.data;
    } catch (error) {
        if (error.response.status === 422) {
            toast.error("The form cannot be empty")
        } else if (error.response.status === 401) {
            toast.error("Email and password do not match")
        }
    }
};


export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseURL}/api/register`, userData);
            toast.success('Registration successfully!');
            return response.data;
        } catch (error) {
            toast.error(error.response ? error.response.message : 'Registration failed');
            return rejectWithValue(error.response ? error.response.message : 'Registration failed');
        }
    }
);

export const logoutUser = async (token) => {
    try {
        await getCsrfToken();
        await axios.post(`${baseURL}/api/logout`, {}, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        });
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        toast.success("Logout successfully!")
    } catch (error) {
        toast.error(error.response ? error.response.message : 'Logout failed')
        return rejectWithValue(error.response ? error.response.message : 'Logout failed');
    }
};

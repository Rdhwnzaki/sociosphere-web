import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${baseURL}/user/login`, {
            email,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const user = response.data.data;
        const token = response.data.data.token;
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('token', token);
        toast.success('Login successfully!');
        return response.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 422) {
                toast.error("The form cannot be empty");
            } else if (error.response.status === 401) {
                toast.error("Email and password do not match");
            } else {
                toast.error(error.response.data.message || 'Login failed');
            }
        } else {
            toast.error('An error occurred. Please try again.');
        }
        throw error;
    }
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ username, email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseURL}/user/register`, {
                username,
                email,
                password
            });
            toast.success('Registration successfully!');
            return response.data;
        } catch (error) {
            toast.error(error.response ? error.response.data.message : 'Registration failed');
            return rejectWithValue(error.response ? error.response.data.message : 'Registration failed');
        }
    }
);

export const logoutUser = async (token) => {
    try {
        await axios.post(`${baseURL}/user/logout`, {}, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        toast.success("Logout successfully!");
    } catch (error) {
        toast.error(error.response ? error.response.data.message : 'Logout failed');
    }
};

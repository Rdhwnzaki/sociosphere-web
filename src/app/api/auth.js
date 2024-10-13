import axios from 'axios';

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

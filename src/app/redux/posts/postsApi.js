import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
import { toast } from 'react-hot-toast';

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/posts`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const createPosts = async (formData, token) => {
    try {
        const response = await axios.post(`${baseURL}/api/posts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        toast.success(response.data.message);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || 'Something went wrong');
        throw error;  // Optional: rethrow to handle in calling function if needed
    }
};
